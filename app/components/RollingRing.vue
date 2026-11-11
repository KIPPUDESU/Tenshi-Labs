<template>
  <section
    ref="stageEl"
    class="stage"
    :class="{ spawning: spawned, fading: fading }"
    :style="rootStyle"
    @click="$emit('replay')"
  >
    <div class="run">
      <div
        v-for="copy in copies"
        :key="copy.id"
        class="copy"
        :data-copy="copy.id"
        :style="copy.id === 'echo' ? echoStyle : undefined"
        :aria-hidden="copy.id === 'echo' ? 'true' : undefined"
      >
        <div class="fade">
          <div class="jank" :class="{ 'no-jank': !s.jank }">
            <div
              class="enter"
              :class="{
                'echo-enter': copy.id === 'echo',
                'echo-reveal': copy.id === 'echo' && spawned,
              }"
            >
              <div class="spin">
                <svg
                  class="band"
                  :style="bandStyle"
                  :viewBox="`0 0 ${size} ${size}`"
                  role="img"
                  aria-label="黑色开口圆环"
                >
                  <defs>
                    <linearGradient
                      :id="`ringBand-${copy.id}`"
                      gradientUnits="userSpaceOnUse"
                      :x1="gradCoords.x1"
                      :y1="gradCoords.y1"
                      :x2="gradCoords.x2"
                      :y2="gradCoords.y2"
                    >
                      <stop offset="0%" :stop-color="s.colorFrom" />
                      <stop :offset="`${s.grayBias}%`" :stop-color="s.colorTo" />
                      <stop offset="100%" :stop-color="s.colorTo" />
                    </linearGradient>
                  </defs>
                  <circle
                    class="arc"
                    :cx="center"
                    :cy="center"
                    :r="s.radius"
                    fill="none"
                    :stroke="`url(#ringBand-${copy.id})`"
                    :stroke-width="s.bandWidth"
                    stroke-linecap="butt"
                    :stroke-dasharray="dashTo"
                    :stroke-dashoffset="dashOffset"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import type { RingSettings } from "~/utils/ringSettings";

const props = defineProps<{ settings: RingSettings }>();
defineEmits<{ (e: "replay"): void }>();

const s = computed(() => props.settings);

// —— 几何派生量 ——
const C = computed(() => 2 * Math.PI * s.value.radius);
const gapLen = computed(() => (C.value * s.value.gapDeg) / 360);
const arcLen = computed(() => C.value - gapLen.value);
const outer = computed(() => s.value.radius + s.value.bandWidth / 2);
const PAD = 8;
const size = computed(() => 2 * (outer.value + PAD));
const center = computed(() => outer.value + PAD);

const dashTo = computed(
  () => `${arcLen.value.toFixed(2)} ${gapLen.value.toFixed(2)}`,
);
const dashOffset = computed(() => (arcLen.value / 2 - C.value / 4).toFixed(2));

const arcStart = computed(() => (arcLen.value * s.value.growStart) / 100);
const dashFrom = computed(
  () => `${arcStart.value.toFixed(2)} ${(C.value - arcStart.value).toFixed(2)}`,
);

const gradCoords = computed(() => ({
  x1: center.value - s.value.radius * 0.8,
  y1: center.value + s.value.radius * 0.8,
  x2: center.value + s.value.radius * 0.8,
  y2: center.value - s.value.radius * 0.8,
}));

const half = computed(() => size.value / 2);

// —— 透传给 CSS 的变量 ——
const rootStyle = computed(() => ({
  // 起点：屏幕左外；终点：越过中线后再向右一段（所以不会停在页面中心）
  "--enter-from": `calc(-50vw - ${(half.value + 24).toFixed(0)}px)`,
  "--enter-to": "26vw",
  "--enter-dur": `${s.value.enterDur}s`,
  "--grow-dur": `${s.value.growDur}s`,
  "--fade-dur": `${s.value.fadeDur}s`,
  "--spin-from": `${-s.value.spinDeg}deg`,
  "--dash-from": dashFrom.value,
  "--dash-to": dashTo.value,
  // 收弧时同步平移 dashoffset，使“生长端”保持不动、从反方向另一端吞掉条带
  "--offset-from": (arcLen.value / 2 - C.value / 4).toFixed(2),
  "--offset-end": (arcLen.value / 2 - C.value / 4 - arcLen.value).toFixed(2),
  "--circ": C.value.toFixed(2),
  "--jank-amp": `${s.value.jankAmp}px`,
  "--jank-minop": String(s.value.jankMinOpacity),
}));

const bandStyle = computed(() => {
  const v = `min(${size.value.toFixed(0)}px, 92vw)`;
  return { width: v, height: v };
});

// —— 位置驱动的触发：越过 echoTrigger% 生成重影，越过 50% 开始淡出 ——
const stageEl = ref<HTMLElement | null>(null);
const spawned = ref(false);
const fading = ref(false);
let rafId = 0;

const copies = computed(() => {
  const list: { id: "main" | "echo" }[] = [{ id: "main" }];
  if (s.value.echo) list.push({ id: "echo" });
  return list;
});

const echoStyle = computed(() => ({
  transform: `translateX(${s.value.echoOffset}px)`,
}));

function tick() {
  const el = stageEl.value?.querySelector(
    '[data-copy="main"] .band',
  ) as SVGSVGElement | null;
  if (el) {
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const W = window.innerWidth;
    if (s.value.echo && !spawned.value && cx >= (W * s.value.echoTrigger) / 100) {
      spawned.value = true;
    }
    if (!fading.value && cx >= W * 0.5) {
      fading.value = true;
    }
    const finished = fading.value && (!s.value.echo || spawned.value);
    if (finished) return;
  }
  rafId = requestAnimationFrame(tick);
}

onMounted(() => {
  spawned.value = false;
  fading.value = false;
  rafId = requestAnimationFrame(tick);
});
onBeforeUnmount(() => cancelAnimationFrame(rafId));
</script>

<style scoped>
.stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 100vh;
  overflow: hidden;
  background: #ffffff;
  cursor: pointer;
}

.run {
  display: grid;
  place-items: center;
}

/* 两个副本叠在同一格里 */
.copy {
  grid-area: 1 / 1;
  will-change: transform;
}

.fade {
  opacity: 1;
  will-change: opacity;
}

/* 卡帧/闪烁层：默认不动，仅在重影生成的瞬间（.spawning）爆发一次 */
.jank {
  will-change: opacity, transform;
}

.spawning .jank:not(.no-jank) {
  animation: jank 0.5s steps(1, end) both;
}

/* 位移层：恒定速度从左侧屏幕外滑过中线，不停在中心 */
.enter {
  will-change: transform;
  animation: ring-enter var(--enter-dur, 1.6s) linear both;
}

/* 重影：初始被一条水平直边完全遮住，生成瞬间从边沿钻出 */
.enter.echo-enter {
  clip-path: inset(0 0 100% 0);
}

.enter.echo-enter.echo-reveal {
  animation:
    ring-enter var(--enter-dur, 1.6s) linear both,
    echo-reveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* 旋转层：全程匀速顺时针，消失阶段也在转 */
.spin {
  will-change: transform;
  animation: ring-spin var(--enter-dur, 1.6s) linear both;
}

.band {
  display: block;
  transform-origin: 50% 50%;
}

/* 弧长生长 */
.arc {
  animation: arc-grow var(--grow-dur, 1s) cubic-bezier(0.65, 0, 0.35, 1) both;
}

/* 过半后：继续顺时针转，同时把长出来的弧带收短到 0 */
.fading .arc {
  animation: arc-retract var(--fade-dur, 0.75s) linear both;
}

@keyframes ring-enter {
  from {
    transform: translateX(var(--enter-from));
  }
  to {
    transform: translateX(var(--enter-to));
  }
}

@keyframes echo-reveal {
  from {
    clip-path: inset(0 0 100% 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* 旋转收弧：弧长缩到 0；同步平移 dashoffset，让生长端固定、从反方向另一端开始缩 */
@keyframes arc-retract {
  from {
    stroke-dasharray: var(--dash-to);
    stroke-dashoffset: var(--offset-from);
  }
  to {
    stroke-dasharray: 0 var(--circ);
    stroke-dashoffset: var(--offset-end);
  }
}

@keyframes arc-grow {
  from {
    stroke-dasharray: var(--dash-from);
  }
  to {
    stroke-dasharray: var(--dash-to);
  }
}

@keyframes ring-spin {
  from {
    transform: rotate(var(--spin-from));
  }
  to {
    transform: rotate(0deg);
  }
}

/* 掉帧：短促闪断 + 横向跳帧（只在重影生成瞬间播放一次） */
@keyframes jank {
  0%,
  2% {
    opacity: 1;
    transform: translate(0, 0);
  }
  2.5% {
    opacity: var(--jank-minop, 0.05);
    transform: translate(calc(-1.3 * var(--jank-amp, 14px)), 0);
  }
  4% {
    opacity: 1;
    transform: translate(calc(0.9 * var(--jank-amp, 14px)), calc(-0.3 * var(--jank-amp, 14px)));
  }
  5.5% {
    opacity: 0.2;
    transform: translate(calc(-0.9 * var(--jank-amp, 14px)), 0);
  }
  7% {
    opacity: 1;
    transform: translate(calc(0.6 * var(--jank-amp, 14px)), calc(0.2 * var(--jank-amp, 14px)));
  }
  8.5% {
    opacity: var(--jank-minop, 0.05);
    transform: translate(calc(-0.6 * var(--jank-amp, 14px)), 0);
  }
  10% {
    opacity: 1;
    transform: translate(calc(0.5 * var(--jank-amp, 14px)), 0);
  }
  14% {
    opacity: 0.3;
    transform: translate(calc(-1.5 * var(--jank-amp, 14px)), 0);
  }
  16% {
    opacity: 1;
    transform: translate(calc(0.7 * var(--jank-amp, 14px)), 0);
  }
  22% {
    opacity: 0.85;
    transform: translate(var(--jank-amp, 14px), 0);
  }
  24% {
    opacity: 1;
    transform: translate(calc(-0.5 * var(--jank-amp, 14px)), 0);
  }
  30% {
    opacity: var(--jank-minop, 0.05);
    transform: translate(calc(-0.8 * var(--jank-amp, 14px)), calc(0.3 * var(--jank-amp, 14px)));
  }
  31.5% {
    opacity: 1;
    transform: translate(calc(0.5 * var(--jank-amp, 14px)), 0);
  }
  40% {
    opacity: 0.4;
    transform: translate(calc(-1.2 * var(--jank-amp, 14px)), 0);
  }
  42%,
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .enter,
  .enter.echo-enter.echo-reveal,
  .spin,
  .arc,
  .fading .arc,
  .spawning .jank {
    animation: none;
  }
  .enter.echo-enter {
    clip-path: none;
  }
}
</style>
