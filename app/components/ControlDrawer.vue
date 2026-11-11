<template>
  <button
    v-show="!open"
    type="button"
    class="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition hover:bg-neutral-700 active:scale-95"
    @click="open = true"
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
    参数
  </button>

  <!-- Drawer -->
  <aside
    class="fixed right-0 top-0 z-40 flex h-screen w-[340px] max-w-[92vw] flex-col border-l border-neutral-200 bg-white shadow-2xl transition-transform duration-300 ease-out"
    :class="open ? 'translate-x-0' : 'translate-x-full'"
    aria-label="动画参数面板"
  >
    <header class="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
      <h2 class="text-sm font-semibold text-neutral-900">动画参数</h2>
      <button
        type="button"
        class="grid h-8 w-8 place-items-center rounded-md text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
        aria-label="关闭"
        @click="open = false"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </header>

    <div class="flex-1 space-y-7 overflow-y-auto px-5 py-5">
      <section v-for="section in sections" :key="section.title" class="space-y-3.5">
        <h3 class="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
          {{ section.title }}
        </h3>

        <template v-for="control in section.controls" :key="control.key">
          <!-- Range control -->
          <div v-if="control.kind === 'range'">
            <div class="flex items-baseline justify-between">
              <label class="text-xs text-neutral-600">{{ control.label }}</label>
              <span class="font-mono text-xs text-neutral-900">
                {{ value(control.key) }}{{ control.unit || "" }}
              </span>
            </div>
            <input
              type="range"
              class="mt-1.5 w-full cursor-pointer accent-neutral-900"
              :min="control.min"
              :max="control.max"
              :step="control.step"
              :value="value(control.key)"
              @input="onRange(control.key, $event)"
            />
          </div>

          <!-- Color control -->
          <div v-else-if="control.kind === 'color'" class="flex items-center justify-between">
            <label class="text-xs text-neutral-600">{{ control.label }}</label>
            <input
              type="color"
              class="h-7 w-14 cursor-pointer rounded border border-neutral-200 bg-white"
              :value="value(control.key)"
              @input="onColor(control.key, $event)"
            />
          </div>

          <!-- Toggle control -->
          <label
            v-else
            class="flex cursor-pointer items-center justify-between text-xs text-neutral-600"
          >
            <span>{{ control.label }}</span>
            <input
              type="checkbox"
              class="h-4 w-4 cursor-pointer accent-neutral-900"
              :checked="Boolean(value(control.key))"
              @change="onToggle(control.key, $event)"
            />
          </label>
        </template>
      </section>
    </div>

    <footer class="space-y-2 border-t border-neutral-100 px-5 py-4">
      <button
        type="button"
        class="w-full rounded-lg bg-neutral-900 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 active:scale-[0.99]"
        @click="emit('replay')"
      >
        重播动画
      </button>
      <div class="grid grid-cols-2 gap-2">
        <button
          type="button"
          class="rounded-lg border border-neutral-200 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 active:scale-[0.99]"
          @click="copySettings"
        >
          {{ copied ? "已复制 ✓" : "复制参数" }}
        </button>
        <button
          type="button"
          class="rounded-lg border border-neutral-200 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 active:scale-[0.99]"
          @click="emit('reset')"
        >
          重置默认
        </button>
      </div>
    </footer>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { RingSettings } from "~/utils/ringSettings";

const props = defineProps<{ settings: RingSettings }>();
const emit = defineEmits<{ (event: "replay"): void; (event: "reset"): void }>();

const open = ref(false);
const copied = ref(false);

type Key = keyof RingSettings;

interface RangeControl {
  kind: "range";
  key: Key;
  label: string;
  min: number;
  max: number;
  step: number;
  unit?: string;
}

interface ColorControl {
  kind: "color";
  key: Key;
  label: string;
}

interface ToggleControl {
  kind: "toggle";
  key: Key;
  label: string;
}

type Control = RangeControl | ColorControl | ToggleControl;

interface Section {
  title: string;
  controls: Control[];
}

const sections: Section[] = [
  {
    title: "尺寸",
    controls: [
      { kind: "range", key: "radius", label: "半径", min: 60, max: 280, step: 2, unit: "px" },
      { kind: "range", key: "bandWidth", label: "带宽", min: 10, max: 180, step: 2, unit: "px" },
      { kind: "range", key: "gapDeg", label: "缺口角度", min: 0, max: 160, step: 1, unit: "°" },
    ],
  },
  {
    title: "重影",
    controls: [
      { kind: "toggle", key: "echo", label: "启用重影" },
      { kind: "range", key: "echoOffset", label: "向右偏移", min: 0, max: 200, step: 1, unit: "px" },
      { kind: "range", key: "echoTrigger", label: "出现位置", min: 0, max: 90, step: 1, unit: "%" },
    ],
  },
  {
    title: "运动",
    controls: [
      { kind: "range", key: "spinDeg", label: "旋转角度", min: 0, max: 1080, step: 6, unit: "°" },
      { kind: "range", key: "enterDur", label: "入场时长", min: 0.3, max: 3, step: 0.1, unit: "s" },
      { kind: "range", key: "growDur", label: "生长时长", min: 0.2, max: 3, step: 0.1, unit: "s" },
      { kind: "range", key: "growStart", label: "起始弧长", min: 5, max: 100, step: 1, unit: "%" },
      { kind: "range", key: "fadeDur", label: "收弧消失时长", min: 0.2, max: 2, step: 0.05, unit: "s" },
    ],
  },
  {
    title: "渐变",
    controls: [
      { kind: "color", key: "colorFrom", label: "起始色（黑）" },
      { kind: "color", key: "colorTo", label: "结束色（深灰）" },
      { kind: "range", key: "grayBias", label: "灰侧起点", min: 0, max: 100, step: 1, unit: "%" },
    ],
  },
  {
    title: "卡帧闪烁",
    controls: [
      { kind: "toggle", key: "jank", label: "启用卡帧" },
      { kind: "range", key: "jankAmp", label: "抖动幅度", min: 0, max: 30, step: 1, unit: "px" },
      { kind: "range", key: "jankMinOpacity", label: "最低透明度", min: 0, max: 1, step: 0.05 },
    ],
  },
];

function value(key: Key): RingSettings[Key] {
  return props.settings[key];
}

function setValue<K extends Key>(key: K, valueToSet: RingSettings[K]) {
  props.settings[key] = valueToSet;
}

function onRange(key: Key, event: Event) {
  setValue(key, Number((event.target as HTMLInputElement).value) as RingSettings[Key]);
}

function onColor(key: Key, event: Event) {
  setValue(key, (event.target as HTMLInputElement).value as RingSettings[Key]);
}

function onToggle(key: Key, event: Event) {
  setValue(key, (event.target as HTMLInputElement).checked as RingSettings[Key]);
}

async function copySettings() {
  const text = JSON.stringify(props.settings, null, 2);

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 1500);
}
</script>
