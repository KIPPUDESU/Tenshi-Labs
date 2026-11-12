<template>
  <main class="home-page">
    <section ref="heroPanel" class="hero-panel">
      <div class="hero-panel__chrome">
        <span>ACT / 01</span>
        <span>THE FIGURE SYSTEM</span>
        <span>ARCHIVE STATUS: OPEN</span>
      </div>

      <div class="hero-panel__coordinates" aria-hidden="true">
        <span class="coordinate coordinate--north">N</span>
        <span class="coordinate coordinate--east">E</span>
        <span class="coordinate coordinate--south">S</span>
        <span class="coordinate coordinate--west">W</span>
      </div>

      <div class="hero-panel__rays" aria-hidden="true">
        <span
          v-for="ray in 18"
          :key="ray"
          :class="{ 'hero-panel__ray--signal': ray % 5 === 0 }"
          :style="{ '--ray': `${ray * 10}deg` }"
        />
      </div>

      <canvas
        ref="orbitCanvas"
        class="hero-panel__orbit"
        aria-hidden="true"
      />

      <div class="hero-panel__cross" aria-hidden="true">
        <span class="hero-panel__cross-vertical" />
        <span class="hero-panel__cross-horizontal" />
        <span class="hero-panel__cross-ring" />
        <span ref="emitter" class="hero-panel__cross-emitter" />
        <span class="hero-panel__cross-label">✝ / A</span>
      </div>

        <div class="hero-panel__laser-field" aria-hidden="true">
          <span
            v-for="(ray, index) in rayTargets"
            :key="index"
            class="hero-panel__laser"
            :style="{
              '--ray-angle': `${ray.angle}deg`,
              '--ray-delay': `${ray.delay}s`,
              '--ray-hold': `${ray.hold}s`,
              '--ray-fade-duration': `${ray.fadeDuration}s`,
              '--ray-length': `${ray.length}px`,
              '--ray-x': `${ray.x}px`,
              '--ray-y': `${ray.y}px`,
              '--ray-color': ray.color,
              '--ray-opacity': `${0.18 + (index / Math.max(rayTargets.length - 1, 1)) * 0.72}`,
            }"
          />
        </div>

      <div class="hero-panel__copy">
        <p class="eyebrow">
          <span>THE ANNUNCIATION</span>
          <b>—</b>
          <span>ACT / 01</span>
        </p>
        <div class="hero-panel__title-rule" aria-hidden="true" />
        <h1 class="hero-title">
          <span class="hero-title__line hero-title__line--plain" data-text="BE NOT">
            BE NOT
            <i class="glyph-point" style="--x: 3.5%; --y: 8%; --index: 0;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 3.5%; --y: 48%; --index: 1;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 4%; --y: 85%; --index: 2;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 14%; --y: 45%; --index: 3;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 23%; --y: 15%; --index: 4;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 33.5%; --y: 49%; --index: 5;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 35%; --y: 88%; --index: 6;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 45.5%; --y: 12%; --index: 7;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 46.5%; --y: 88%; --index: 8;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 55%; --y: 60%; --index: 9;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 61.5%; --y: 15%; --index: 10;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 66%; --y: 72%; --index: 11;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 75%; --y: 7%; --index: 12;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 84%; --y: 62%; --index: 13;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 86%; --y: 9%; --index: 14;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 93%; --y: 89%; --index: 15;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 93%; --y: 58%; --index: 16;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 93.8%; --y: 9%; --index: 17;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 101%; --y: 9%; --index: 18;" aria-hidden="true" />
          </span>
          <span class="hero-title__line hero-title__line--signal" data-text="AFRAID">
            AFRAID
            <i class="glyph-point" style="--x: 2%; --y: 90%; --index: 19;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 8%; --y: 35%; --index: 20;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 12%; --y: 9%; --index: 21;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 14%; --y: 65%; --index: 22;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 21%; --y: 84%; --index: 23;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 25.5%; --y: 90%; --index: 24;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 26%; --y: 50%; --index: 25;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 26%; --y: 9%; --index: 26;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 35%; --y: 50%; --index: 27;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 36%; --y: 9%; --index: 28;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 40%; --y: 87%; --index: 29;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 41%; --y: 47%; --index: 30;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 41%; --y: 10%; --index: 31;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 48%; --y: 52%; --index: 32;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 55%; --y: 14%; --index: 33;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 57%; --y: 88%; --index: 34;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 60%; --y: 66%; --index: 35;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 66%; --y: 12%; --index: 36;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 70%; --y: 34%; --index: 37;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 72%; --y: 70%; --index: 38;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 79%; --y: 90%; --index: 39;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 81%; --y: 18%; --index: 40;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 85%; --y: 55%; --index: 41;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 86%; --y: 14%; --index: 42;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 90%; --y: 90%; --index: 43;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 94%; --y: 9%; --index: 44;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 99%; --y: 66%; --index: 45;" aria-hidden="true" />
            <i class="glyph-point" style="--x: 100%; --y: 28%; --index: 46;" aria-hidden="true" />
          </span>
        </h1>
        <p class="hero-panel__intro">
          Be not afraid, Mary: for thou hast found favour with God.<br />
          — LUKE 1:30
        </p>
      </div>

      <div class="artwork-field" aria-label="Reserved field for the angel line drawing">
        <!-- 放置图画 -->
        <div class="artwork-field__frame">
          <span class="artwork-field__corner artwork-field__corner--tr" />
          <span class="artwork-field__corner artwork-field__corner--bl" />
          <span class="artwork-field__corner artwork-field__corner--br" />
          <span class="artwork-field__title">ARTWORK / RESERVED</span>
          <span class="artwork-field__number">A1</span>
          <span class="artwork-field__axis artwork-field__axis--vertical" />
          <span class="artwork-field__axis artwork-field__axis--horizontal" />
          <span class="artwork-field__point artwork-field__point--one" />
          <span class="artwork-field__point artwork-field__point--two" />
          <span class="artwork-field__note">LINEWORK TO BE PLACED<br />WITHIN THIS FRAME</span>
        </div>
      </div>

      <div class="hero-panel__legend hero-panel__legend--left">
        <span class="legend-marker" />
        <span>FIELD / 00.01</span>
      </div>
      <div class="hero-panel__legend hero-panel__legend--right">
        <span>AXIS / 04</span>
        <span class="legend-marker" />
      </div>
      <div class="hero-panel__verse">
        <span>THEY REST NOT DAY AND NIGHT</span>
        <b>REV 4:8</b>
      </div>
      <div class="hero-panel__scroll">
        <span>CONTINUE</span>
        <i class="hero-panel__scroll-cross" aria-hidden="true" />
      </div>
    </section>

    <section class="statement-panel">
      <div class="section-marker">02 <span>/</span> METHOD</div>
      <div class="statement-panel__block statement-panel__block--blue" aria-hidden="true" />
      <div class="statement-panel__block statement-panel__block--dark" aria-hidden="true" />
      <div class="statement-panel__copy">
        <p class="eyebrow">
          <span>THE SPACE AROUND THE IMAGE</span>
          <b>—</b>
        </p>
        <h2>
          Leave room<br />
          for the<br />
          <em>presence.</em>
        </h2>
        <p class="statement-panel__body">
          The figure does not arrive as spectacle. It arrives as a message:
          do not be afraid; make room for the wounded; keep watch in the night.
        </p>
        <NuxtLink to="/liturgy" class="underlined-link">
          READ THE NOTE
          <span>↗</span>
        </NuxtLink>
      </div>
      <div class="statement-panel__register" aria-hidden="true">
        <span>REGISTER / B</span>
        <i />
        <span>000 — ∞</span>
      </div>
      <div class="statement-panel__cross" aria-hidden="true">
        <span />
        <span />
      </div>
    </section>

    <section class="archive-panel">
      <div class="section-marker">03 <span>/</span> INDEX</div>
      <div class="archive-panel__heading">
        <p class="eyebrow">
          <span>WORKS IN PREPARATION</span>
          <b>—</b>
        </p>
        <h2>
          A small<br />
          <em>constellation.</em>
        </h2>
      </div>
      <div class="archive-panel__list">
        <NuxtLink to="/archive" class="index-row">
          <span class="index-row__number">001</span>
          <span class="index-row__name">THE ORBIT</span>
          <span class="index-row__note">A STUDY OF DISTANCE</span>
          <b>↗</b>
        </NuxtLink>
        <NuxtLink to="/archive" class="index-row">
          <span class="index-row__number">002</span>
          <span class="index-row__name">WINGS / FOLDED</span>
          <span class="index-row__note">A STUDY OF STILLNESS</span>
          <b>↗</b>
        </NuxtLink>
        <NuxtLink to="/archive" class="index-row">
          <span class="index-row__number">003</span>
          <span class="index-row__name">THE THRESHOLD</span>
          <span class="index-row__note">A STUDY OF ARRIVAL</span>
          <b>↗</b>
        </NuxtLink>
      </div>
    </section>

    <footer class="home-footer">
      <span>TENSHI / VISUAL ARCHIVE</span>
      <span>THE WORK IS IN PREPARATION</span>
      <span>MMXXVI — ∞</span>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

interface RayTarget {
  angle: number;
  delay: number;
  fadeDuration: number;
  hold: number;
  length: number;
  x: number;
  y: number;
  color: string;
}

// 页面骨架继续由 Vue 保持
// Canvas 接管环绘制
// 页面结构仍由 Vue 保持；Canvas 只负责把两个环画得更像空间中的投影。
// 页面骨架继续由 Vue 保持；Canvas 只接管中间两个环的绘制。
const heroPanel = ref<HTMLElement | null>(null);
const emitter = ref<HTMLElement | null>(null);
const orbitCanvas = ref<HTMLCanvasElement | null>(null);
const rayTargets = ref<RayTarget[]>([]);
let resizeObserver: ResizeObserver | undefined;
let measureFrame = 0;
let orbitFrame = 0;
let lastOrbitTime = 0;
let orbitContext: CanvasRenderingContext2D | null = null;
let orbitSize = 0;

// 一个点在空间中的位置；z 值只用来判断它更靠近我们还是更远。
interface Vector3 {
  x: number;
  y: number;
  z: number;
}

// 每一条环都拥有自己的半径、倾角和速度，因此它们会自然地产生差速。
interface RingState {
  baseNormal: Vector3;
  radius: number;
  phase: number;
  angularVelocity: number;
  angularVelocityTarget: number;
  baseAngularVelocity: number;
  nextVelocityChange: number;
  rimPhase: number;
  rimAngularVelocity: number;
  color: [number, number, number];
  dashed: boolean;
  baseOpacity: number;
}

// 把环切成很多小段，才能分别照顾它们的前后关系和明暗。
interface RingSegment {
  a: Vector3;
  b: Vector3;
  baseOpacity: number;
  color: [number, number, number];
  contrast: number;
  dashed: boolean;
  depth: number;
  depthFactor: number;
  angle: number;
  dashPhase: number;
}

// 23.5° 的主轴让这两个环带拥有一个稳定的天球倾向。
const radians = Math.PI / 180;
const armillaryAxis = normalize({
  x: Math.sin(23.5 * radians),
  y: Math.cos(23.5 * radians),
  z: 0.08,
});
const armillaryPerpendicular = normalize(
  cross(armillaryAxis, { x: 1, y: 0, z: 0 }),
);
const ringStates: RingState[] = [
  createRingState(
    0.46,  // 半径
    58,    // 倾角
    -26,   // 初始角度
    0.54,  // 空间运动速度
    0.05,  // 旋转速度
    [43, 61, 80],  // 颜色
    false,  // 实线
    0.68,  // 基础透明度
  ),
  createRingState(
    0.44, // 半径：控制虚线环的大小
    68, // 倾角：控制虚线环平面的倾斜程度
    34, // 初始角度：控制虚线环的起始姿态
    -0.28, // 空间运动速度：负数代表反方向运动
    -0.58, // 轮缘旋转速度：控制虚线沿圆周移动的速度
    [43, 61, 80], // 基础颜色：RGB 数值
    true, // 是否使用虚线
    0.54, // 基础透明度：范围 0 到 1
  ),
];

// 轻微的速度变化让运动有呼吸感
function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

// 把不同方向的空间变化合成为一个新的位置
function add(a: Vector3, b: Vector3): Vector3 {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
    z: a.z + b.z,
  };
}

// 寻找垂直于两个方向的新方向
// 用来建立环的平面
function cross(a: Vector3, b: Vector3): Vector3 {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };
}

// 两个方向之间的夹角关系
function dot(a: Vector3, b: Vector3) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

// 向量长度与单位化，让几何计算保持稳定、容易阅读。
function lengthOf(vector: Vector3) {
  return Math.hypot(vector.x, vector.y, vector.z);
}

function normalize(vector: Vector3): Vector3 {
  const length = lengthOf(vector) || 1;
  return scale(vector, 1 / length);
}

// 把一个方向放大或缩小
// 半径和轴长都从这里开始
function scale(vector: Vector3, amount: number): Vector3 {
  return {
    x: vector.x * amount,
    y: vector.y * amount,
    z: vector.z * amount,
  };
}

// 环的法线围绕主轴缓慢转动
function rotateAroundAxis(vector: Vector3, axis: Vector3, angle: number): Vector3 {
  const cosine = Math.cos(angle);
  const sine = Math.sin(angle);

  return add(
    add(scale(vector, cosine), scale(cross(axis, vector), sine)),
    scale(axis, dot(axis, vector) * (1 - cosine)),
  );
}

// 外环实线，内环虚线
function createRingState(
  radius: number,
  inclination: number,
  phase: number,
  angularVelocity: number,
  rimAngularVelocity: number,
  color: [number, number, number],
  dashed: boolean,
  baseOpacity: number,
): RingState {
  const inclinationRadians = inclination * radians;
  const baseNormal = normalize(
    add(
      scale(armillaryAxis, Math.cos(inclinationRadians)),
      scale(armillaryPerpendicular, Math.sin(inclinationRadians)),
    ),
  );

  return {
    baseNormal,
    radius,
    phase: phase * radians,
    angularVelocity,
    angularVelocityTarget: angularVelocity,
    baseAngularVelocity: angularVelocity,
    nextVelocityChange: randomBetween(7, 12),
    rimPhase: 0,
    rimAngularVelocity,
    color,
    dashed,
    baseOpacity,
  };
}

// 速度采用缓慢靠近目标值的方式变化
// 有惯性的机械装置
function updateRingState(ring: RingState, elapsed: number, delta: number) {
  if (elapsed >= ring.nextVelocityChange) {
    ring.angularVelocityTarget =
      ring.baseAngularVelocity * randomBetween(0.92, 1.08);
    ring.nextVelocityChange = elapsed + randomBetween(10, 18);
  }

  const velocityEase = 1 - Math.exp(-delta * 0.6);
  ring.angularVelocity +=
    (ring.angularVelocityTarget - ring.angularVelocity) * velocityEase;
  ring.phase += ring.angularVelocity * delta;
  // 虚线环圆周转动
  // 实线环保留独立差速
  ring.rimPhase += ring.rimAngularVelocity * delta;
}

// 由环的法线建立两个平面方向
// 之后每个圆环点都能被定位
function getRingFrame(ring: RingState) {
  const normal = rotateAroundAxis(ring.baseNormal, armillaryAxis, ring.phase);
  const reference = Math.abs(normal.z) > 0.92
    ? { x: 1, y: 0, z: 0 }
    : { x: 0, y: 0, z: 1 };
  const basisU = normalize(cross(reference, normal));
  const basisV = normalize(cross(normal, basisU));

  return { basisU, basisV, normal };
}

// 在环的平面里取一个点，再把它放回三维空间
function getRingPoint(
  frame: ReturnType<typeof getRingFrame>,
  radius: number,
  angle: number,
): Vector3 {
  return add(
    scale(frame.basisU, Math.cos(angle) * radius),
    scale(frame.basisV, Math.sin(angle) * radius),
  );
}

// 暂时不改变直径
function project(point: Vector3): Vector3 {
  return {
    x: orbitSize * 0.5 + point.x * orbitSize,
    y: orbitSize * 0.5 - point.y * orbitSize,
    z: point.z,
  };
}

function mixColor(
  from: [number, number, number],
  to: [number, number, number],
  amount: number,
): [number, number, number] {
  const weight = Math.max(0, Math.min(1, amount));
  return [
    Math.round(from[0] + (to[0] - from[0]) * weight),
    Math.round(from[1] + (to[1] - from[1]) * weight),
    Math.round(from[2] + (to[2] - from[2]) * weight),
  ];
}

// 短轴越长，前后颜色越接近
// 短轴越短，明暗差越明显
function getSegmentColor(segment: RingSegment): [number, number, number] {
  // 靠近一端
  const ringNearColorMix = 0.92;
  // 远离一端
  const ringFarColorMix = 0.18;
  // 对比度
  const ringContrastBoost = 4.8; 
  const background: [number, number, number] = [230, 233, 237];
  const deep: [number, number, number] = [14, 23, 34];
  // 长轴上的深度接近零
  // 短轴端点上的深度最大，颜色自然形成渐变
  const axialContrast = Math.min(
    1,
    segment.contrast * segment.depthFactor * ringContrastBoost,
  );
  const neutral = mixColor(segment.color, background, 0.06);

  if (segment.depth >= 0) {
    return mixColor(neutral, deep, axialContrast * ringNearColorMix);
  }

  return mixColor(neutral, background, axialContrast * ringFarColorMix);
}

// 先画背面，再画正面
// 前后关系只影响叠放，不再决定运动
function drawRingSegments(
  context: CanvasRenderingContext2D,
  segments: RingSegment[],
  front: boolean,
) {
  const ordered = segments
    .filter((segment) => (segment.depth >= 0) === front)
    .sort((a, b) => a.depth - b.depth);

  for (const segment of ordered) {
    // 用角度推进虚线
    // 而不是按绘制顺序切段，轮缘转动才会连续
    const dashIndex = Math.floor(
      positiveModulo(segment.angle + segment.dashPhase, Math.PI * 2)
      / (Math.PI * 2 / 180),
    );
    if (segment.dashed && dashIndex % 6 > 2) {
      continue;
    }

    const color = getSegmentColor(segment);
    const depthDifference = segment.contrast * segment.depthFactor;
    const opacity = segment.baseOpacity * (0.66 + depthDifference * 0.28);
    const lineWidth = 0.66 + depthDifference * (front ? 0.34 : 0.18);

    context.beginPath();
    context.moveTo(segment.a.x, segment.a.y);
    context.lineTo(segment.b.x, segment.b.y);
    context.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
    context.lineWidth = lineWidth;
    context.stroke();
  }
}

function positiveModulo(value: number, modulus: number) {
  return (value % modulus + modulus) % modulus;
}

// 一个圆环由许多小线段组成，这样它可以自然地翻到屏幕后方
function createRingSegments(ring: RingState): RingSegment[] {
  const frame = getRingFrame(ring);
  const segments: RingSegment[] = [];
  const sampleCount = 180;
  const ellipseRatio = Math.abs(frame.normal.z);
  const contrast = Math.pow(1 - ellipseRatio, 0.82);
  // z 深度的最大值
  // 投影短轴两端的深度
  const maximumDepth = ring.radius * Math.sqrt(Math.max(0, 1 - ellipseRatio ** 2));

  for (let index = 0; index < sampleCount; index += 1) {
    const angle = index / sampleCount * Math.PI * 2;
    const nextAngle = (index + 1) / sampleCount * Math.PI * 2;
    const a = project(getRingPoint(frame, ring.radius, angle));
    const b = project(getRingPoint(frame, ring.radius, nextAngle));
    const depth = (a.z + b.z) * 0.5;
    const depthFactor = maximumDepth
      ? Math.min(1, Math.abs(depth) / maximumDepth)
      : 0;

    segments.push({
      a,
      b,
      baseOpacity: ring.baseOpacity,
      color: ring.color,
      contrast,
      dashed: ring.dashed,
      depth,
      depthFactor,
      angle,
      dashPhase: ring.rimPhase,
    });
  }

  return segments;
}

// 圆环当前的法线
function drawRingNormal(
  context: CanvasRenderingContext2D,
  ring: RingState,
) {
  // 中心向两端延伸的长度
  const normalHalfLength = 0.32;
  // 过渡集中在端点
  const normalGradientPower = 0.25;
  // 靠近一端向深色靠近的程度
  const nearColorMix = 0.92;
  // 远离一端向背景靠近的程度
  const farColorMix = 0.78;
  // 法线粗细
  const normalLineWidth = 1;
  const normal = getRingFrame(ring).normal;
  const startPoint = scale(normal, -normalHalfLength);
  const endPoint = scale(normal, normalHalfLength);
  const start = project(startPoint);
  const end = project(endPoint);
  const background: [number, number, number] = [230, 233, 237];
  const deep: [number, number, number] = [14, 23, 34];
  const neutral = mixColor(ring.color, background, 0.06);
  const contrast = Math.pow(Math.abs(normal.z), normalGradientPower);
  const nearColor = mixColor(neutral, deep, contrast * nearColorMix);
  const farColor = mixColor(neutral, background, contrast * farColorMix);
  const startIsNear = startPoint.z >= endPoint.z;
  const gradient = context.createLinearGradient(start.x, start.y, end.x, end.y);

  gradient.addColorStop(
    0,
    startIsNear
      ? `rgb(${nearColor.join(", ")})`
      : `rgb(${farColor.join(", ")})`,
  );
  gradient.addColorStop(
    1,
    startIsNear
      ? `rgb(${farColor.join(", ")})`
      : `rgb(${nearColor.join(", ")})`,
  );

  context.save();
  context.beginPath();
  context.moveTo(start.x, start.y);
  context.lineTo(end.x, end.y);
  context.setLineDash(ring.dashed ? [4, 4] : []);
  context.strokeStyle = gradient;
  context.lineWidth = normalLineWidth;
  context.stroke();
  context.restore();
}

// Canvas 随页面尺寸调整
function resizeOrbitCanvas() {
  const canvas = orbitCanvas.value;
  if (!canvas) {
    return;
  }

  const rect = canvas.getBoundingClientRect();
  const pixelRatio = window.devicePixelRatio || 1;
  orbitSize = Math.min(rect.width, rect.height);
  canvas.width = Math.round(orbitSize * pixelRatio);
  canvas.height = Math.round(orbitSize * pixelRatio);
  orbitContext = canvas.getContext("2d");
  orbitContext?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

// 每一帧更新位置、深度、透明度
function animateOrbits(now: number) {
  if (!orbitContext || !orbitSize) {
    orbitFrame = requestAnimationFrame(animateOrbits);
    return;
  }

  if (!lastOrbitTime) {
    lastOrbitTime = now;
  }

  const delta = Math.min((now - lastOrbitTime) / 1000, 0.05);
  const elapsed = now / 1000;
  lastOrbitTime = now;
  orbitContext.clearRect(0, 0, orbitSize, orbitSize);

  const segments: RingSegment[] = [];
  for (const ring of ringStates) {
    updateRingState(ring, elapsed, delta);
    drawRingNormal(orbitContext, ring);
    segments.push(...createRingSegments(ring));
  }

  drawRingSegments(orbitContext, segments, false);
  drawRingSegments(orbitContext, segments, true);
  orbitFrame = requestAnimationFrame(animateOrbits);
}

function measureRayTargets() {
  if (!heroPanel.value || !emitter.value) {
    return;
  }

  const stageRect = heroPanel.value.getBoundingClientRect();
  const emitterRect = emitter.value.getBoundingClientRect();
  const origin = {
    x: emitterRect.left + emitterRect.width / 2 - stageRect.left,
    y: emitterRect.top + emitterRect.height / 2 - stageRect.top,
  };

  const points = [...heroPanel.value.querySelectorAll<HTMLElement>(".glyph-point")]
    .sort((a, b) => {
      const indexA = Number.parseInt(getComputedStyle(a).getPropertyValue("--index"), 10);
      const indexB = Number.parseInt(getComputedStyle(b).getPropertyValue("--index"), 10);
      return indexA - indexB;
    });

  rayTargets.value = points.map((point, index) => {
    const pointRect = point.getBoundingClientRect();
    const target = {
      x: pointRect.left + pointRect.width / 2 - stageRect.left,
      y: pointRect.top + pointRect.height / 2 - stageRect.top,
    };
    const deltaX = target.x - origin.x;
    const deltaY = target.y - origin.y;

    return {
      angle: (Math.atan2(deltaY, deltaX) * 180) / Math.PI,
      delay: 0.12 + index * 0.025,
      fadeDuration: 0.18 + (index < 19 ? index : index - 19) * 0.022,
      hold: 0.15 + (index < 19 ? index : index - 19) * 0.03,
      length: Math.hypot(deltaX, deltaY),
      x: origin.x,
      y: origin.y,
      color: index < 19
        ? "linear-gradient(90deg, rgba(238, 241, 244, 0.16), rgba(125, 135, 148, 0.72) 36%, #252c35 100%)"
        : "linear-gradient(90deg, #3048ff 0%, #2440e8 28%, #18208b 62%, #060914 100%)",
    };
  });
}

function scheduleMeasure() {
  resizeOrbitCanvas();
  cancelAnimationFrame(measureFrame);
  measureFrame = requestAnimationFrame(measureRayTargets);
}

onMounted(async () => {
  await nextTick();
  await document.fonts.ready;
  resizeObserver = new ResizeObserver(scheduleMeasure);
  resizeObserver.observe(heroPanel.value!);
  document.querySelectorAll(".glyph-point").forEach((point) => resizeObserver?.observe(point));
  resizeOrbitCanvas();
  measureRayTargets();
  orbitFrame = requestAnimationFrame(animateOrbits);
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  cancelAnimationFrame(measureFrame);
  cancelAnimationFrame(orbitFrame);
});
</script>

<style scoped>
/* Global reset */
:global(*) {
  box-sizing: border-box;
}

:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  background: #e6e9ed;
  color: #17202b;
  font-family: Arial, Helvetica, sans-serif;
}

/* Page canvas */
.home-page {
  overflow: hidden;
  background: #e6e9ed;
}

/* Hero composition */
.hero-panel {
  position: relative;
  min-height: max(820px, 100svh);
  overflow: hidden;
  border-bottom: 1px solid rgba(35, 47, 61, 0.28);
  background:
    linear-gradient(rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.18)),
    #e6e9ed;
}

.hero-panel::before {
  position: absolute;
  inset: 86px 4.5% 0;
  background-image: linear-gradient(rgba(61, 78, 96, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(61, 78, 96, 0.08) 1px, transparent 1px);
  background-size: 72px 72px;
  content: "";
  mask-image: linear-gradient(to bottom, transparent, black 16%, black 86%, transparent);
}

/* System labels */
.hero-panel__chrome {
  position: absolute;
  z-index: 5;
  top: 117px;
  left: 4.5vw;
  right: 4.5vw;
  display: flex;
  justify-content: space-between;
  color: #667484;
  font: 8px "Courier New", monospace;
  letter-spacing: 0.18em;
}

.hero-panel__chrome span:first-child {
  color: #1f2c3a;
}

/* Coordinate field */
.hero-panel__coordinates {
  position: absolute;
  z-index: 1;
  top: 47%;
  left: 50%;
  width: min(58vw, 760px);
  aspect-ratio: 1;
  border: 1px solid rgba(55, 73, 91, 0.17);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.coordinate {
  position: absolute;
  color: #58697b;
  font: 9px "Courier New", monospace;
  letter-spacing: 0.16em;
}

.coordinate--north {
  top: -19px;
  left: 50%;
  transform: translateX(-50%);
}

.coordinate--east {
  top: 50%;
  right: -23px;
  transform: translateY(-50%);
}

.coordinate--south {
  bottom: -19px;
  left: 50%;
  transform: translateX(-50%);
}

.coordinate--west {
  top: 50%;
  left: -23px;
  transform: translateY(-50%);
}

/* Background rays */
.hero-panel__rays {
  position: absolute;
  z-index: 1;
  top: 47%;
  left: 50%;
  width: min(65vw, 840px);
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
}

.hero-panel__rays span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 1px;
  background: rgba(255, 255, 255, 0.72);
  transform: rotate(var(--ray)) translateX(0);
  transform-origin: left center;
}

.hero-panel__signal-links {
  display: block;
}

.hero-panel__ray-origin,
.artwork-field__beam {
  display: none;
}


/* Orbital geometry */
/* 保留原来两个环的空间 TypeScript 逐段绘制。 */
.hero-panel__orbit {
  position: absolute;
  z-index: 1;
  top: 47%;
  left: 50%;
  width: min(72vw, 930px);
  height: min(72vw, 930px);
  pointer-events: none;
  transform: translate(-50%, -50%);
  will-change: transform;
}

/* Cross emitter */
.hero-panel__cross {
  position: absolute;
  z-index: 2;
  top: 47%;
  left: 50%;
  width: min(13vw, 170px);
  aspect-ratio: 1;
  color: rgba(31, 46, 63, 0.58);
  transform: translate(-50%, -50%);
}

.hero-panel__cross-vertical,
.hero-panel__cross-horizontal {
  position: absolute;
  background: currentColor;
}

.hero-panel__cross-vertical {
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
}

.hero-panel__cross-horizontal {
  top: 50%;
  right: 0;
  left: 0;
  height: 1px;
}

.hero-panel__cross-ring {
  position: absolute;
  inset: 22%;
  border: 1px solid currentColor;
  border-radius: 50%;
}

.hero-panel__cross-emitter {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 7px;
  height: 7px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  background: #2453cc;
  box-shadow: 0 0 0 3px rgba(36, 83, 204, 0.16), 0 0 14px rgba(36, 83, 204, 0.48);
  transform: translate(-50%, -50%);
}
.hero-panel__cross-label {
  position: absolute;
  top: 50%;
  left: calc(100% + 12px);
  color: #2453cc;
  font: 8px "Courier New", monospace;
  letter-spacing: 0.12em;
  white-space: nowrap;
  transform: translateY(-50%);
}
/* Target rays */
.hero-panel__laser-field {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.hero-panel__laser {
  position: absolute;
  top: var(--ray-y);
  left: var(--ray-x);
  width: var(--ray-length);
  height: 2px;
  background: var(--ray-color);
  opacity: var(--ray-opacity, 0.9);
  transform-origin: left center;
  transform: rotate(var(--ray-angle)) scaleX(0);
  animation: point-laser 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--ray-delay);
  animation-fill-mode: both;
}

/* Hero typography */
.hero-title {
  position: relative;
  margin: 0;
  color: transparent;
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(86px, 13vw, 195px);
  font-weight: 200;
  letter-spacing: -0.1em;
  line-height: 0.78;
}

.hero-title__line {
  position: relative;
  display: block;
  width: max-content;
  min-width: max-content;
  max-width: none;
  color: transparent;
  /* 白字底部 */
  background-color: rgba(230, 233, 237, 1);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: inherit;
  white-space: nowrap;
  overflow: visible;
  padding-right: 0.22em;
}

.hero-title__base,
.hero-title__fill {
  display: block;
  width: max-content;
  min-width: max-content;
  max-width: none;
  font: inherit;
  white-space: nowrap;
}

.hero-title__line--signal {
  margin-left: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: inherit;
  font-weight: 700;
  letter-spacing: -0.12em;
}

/* Editable target points */
.glyph-point {
  position: absolute;
  z-index: 20;
  left: calc(var(--x) * 0.934);
  top: var(--y);
  width: 10px;
  height: 10px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  background: #ff3e3e;
  opacity: 0;
  box-shadow: none;
  transform: translate(-50%, -50%);
  pointer-events: none;
}


.hero-title__line::after {
  position: absolute;
  z-index: 1;
  top: 0;
  right: -0.22em;
  bottom: 0;
  left: 0;
  content: attr(data-text);
  color: transparent;
  background: linear-gradient(110deg, #1f32ff 0%, #1839e7 16%, #1724bd 42%, #11154f 72%, #05070e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  clip-path: inset(0 100% 0 0);
  animation: title-fill 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hero-title__line--plain::after {
  color: #121923;
  background: #121923;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation-delay: 0.72s;
}

.hero-title__line--signal::after {
  animation-delay: 1.42s;
}





.hero-panel__copy {
  position: absolute;
  z-index: 4;
  top: 31%;
  left: 6%;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 13px;
  margin: 0 0 28px;
  color: #6e7b8b;
  font: 9px "Courier New", monospace;
  letter-spacing: 0.18em;
}

.eyebrow b {
  color: #253749;
  font-weight: 400;
}

.hero-panel h1,
.statement-panel h2,
.archive-panel h2 {
  margin: 0;
  color: #17212d;
  font-weight: 200;
  letter-spacing: -0.1em;
  line-height: 0.78;
}

.hero-panel h1.hero-title {
  color: #ffffff;
}


.hero-panel h1 strong,
.statement-panel h2 em,
.archive-panel h2 em {
  display: inline-block;
  white-space: nowrap;
  padding-right: 0.08em;
  font-weight: 700;
  letter-spacing: -0.12em;
  background: linear-gradient(
    110deg,
    #1f32ff 0%,
    #1839e7 16%,
    #1724bd 42%,
    #11154f 72%,
    #05070e 100%
  );
  background-size: 150% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: title-signal 16s ease-in-out infinite;
}

.hero-panel h1 strong {
  margin-left: 0.045em;
}

.hero-panel__intro {
  margin: 40px 0 0 7px;
  color: #6c7988;
  font: 11px/1.85 "Courier New", monospace;
  letter-spacing: 0.04em;
}

/* Reserved artwork field */
.artwork-field {
  position: absolute;
  z-index: 3;
  top: 16%;
  right: 7.5%;
  width: min(38vw, 500px);
  height: 68%;
}

.artwork-field__frame {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(43, 62, 81, 0.42);
  background: rgba(234, 238, 242, 0.24);
  box-shadow: 14px 16px 0 rgba(48, 69, 89, 0.06);
}

.artwork-field__beam {
  position: absolute;
  z-index: 2;
  top: 48%;
  left: 50%;
  width: 52%;
  height: 1px;
  background: linear-gradient(90deg, rgba(36, 83, 204, 0), rgba(36, 83, 204, 0.8) 35%, rgba(255, 255, 255, 0.86));
  opacity: calc(var(--beam-progress) * 0.72);
  transform: translate(-100%, -50%) rotate(var(--beam-angle)) scaleX(var(--beam-progress));
  transform-origin: right center;
}
.artwork-field__frame::before,
.artwork-field__frame::after {
  position: absolute;
  inset: 9%;
  border: 1px solid rgba(45, 65, 85, 0.2);
  border-radius: 50%;
  content: "";
}

.artwork-field__frame::after {
  inset: 13% 23%;
  transform: rotate(32deg);
  border-style: dashed;
}

.artwork-field__corner {
  position: absolute;
  z-index: 2;
  width: 14px;
  height: 14px;
  border-color: #2453cc;
  border-style: solid;
}

.artwork-field__corner--tl {
  top: -6px;
  left: -6px;
  border-width: 1px 0 0 1px;
}

.artwork-field__corner--tr {
  top: -6px;
  right: -6px;
  border-width: 1px 1px 0 0;
}

.artwork-field__corner--bl {
  bottom: -6px;
  left: -6px;
  border-width: 0 0 1px 1px;
}

.artwork-field__corner--br {
  right: -6px;
  bottom: -6px;
  border-width: 0 1px 1px 0;
}

.artwork-field__title,
.artwork-field__number,
.artwork-field__note {
  position: absolute;
  z-index: 2;
  color: #647386;
  font: 8px "Courier New", monospace;
  letter-spacing: 0.15em;
}

.artwork-field__title {
  top: 16px;
  left: 17px;
}

.artwork-field__number {
  top: 16px;
  right: 17px;
  color: #2453cc;
}

.artwork-field__note {
  bottom: 16px;
  left: 17px;
  line-height: 1.6;
}

.artwork-field__axis {
  position: absolute;
  z-index: 1;
  background: rgba(51, 70, 89, 0.25);
}

.artwork-field__axis--vertical {
  top: 7%;
  bottom: 7%;
  left: 50%;
  width: 1px;
}

.artwork-field__axis--horizontal {
  top: 48%;
  right: 7%;
  left: 7%;
  height: 1px;
}

.artwork-field__point {
  position: absolute;
  z-index: 2;
  width: 7px;
  height: 7px;
  border: 1px solid #2453cc;
  border-radius: 50%;
  background: #e6e9ed;
}

.artwork-field__point--one {
  top: 31%;
  left: 17%;
}

.artwork-field__point--two {
  right: 15%;
  bottom: 28%;
}

.hero-panel__legend {
  position: absolute;
  z-index: 4;
  bottom: 20%;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #718092;
  font: 8px "Courier New", monospace;
  letter-spacing: 0.16em;
}

.hero-panel__legend--left {
  left: 10.5vw;
}

.hero-panel__legend--right {
  right: 7.5vw;
}

.legend-marker {
  width: 8px;
  height: 8px;
  border: 1px solid #2453cc;
  border-radius: 50%;
}

.hero-panel__verse {
  position: absolute;
  z-index: 4;
  right: 7.5vw;
  bottom: 29%;
  display: flex;
  flex-direction: column;
  gap: 7px;
  color: #536477;
  font: 8px/1.5 "Courier New", monospace;
  letter-spacing: 0.16em;
  text-align: right;
}

.hero-panel__verse b {
  color: #2453cc;
  font-weight: 400;
}
.hero-panel__scroll {
  position: absolute;
  z-index: 4;
  bottom: 30px;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transform: translateX(-50%);
  color: #718092;
  font: 8px "Courier New", monospace;
  letter-spacing: 0.19em;
}

.hero-panel__scroll-cross {
  position: relative;
  width: 18px;
  height: 24px;
  background: none;
  animation: descend 3.6s ease-in-out infinite;
  transform-origin: top;
}

.hero-panel__scroll-cross::before,
.hero-panel__scroll-cross::after {
  position: absolute;
  background: #536375;
  content: "";
}

.hero-panel__scroll-cross::before {
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  transform: translateX(-50%);
}

.hero-panel__scroll-cross::after {
  top: 42%;
  right: 0;
  left: 0;
  height: 1px;
}


/* Method section */
.statement-panel,
/* Archive section */
.archive-panel {
  position: relative;
  border-bottom: 1px solid rgba(35, 47, 61, 0.24);
}

.statement-panel {
  min-height: 760px;
  padding: 160px 13vw 130px;
  background: #eef0f2;
}

.section-marker {
  position: absolute;
  top: 54px;
  left: 4.5vw;
  color: #687687;
  font: 9px "Courier New", monospace;
  letter-spacing: 0.17em;
}

.section-marker span {
  margin: 0 9px;
  color: #a5afb9;
}

.statement-panel__block {
  position: absolute;
  opacity: 0.8;
}

.statement-panel__block--blue {
  top: 25%;
  right: 10%;
  width: 170px;
  height: 220px;
  background: #2352c8;
  clip-path: polygon(0 14%, 74% 0, 100% 82%, 23% 100%);
}

.statement-panel__block--dark {
  right: 18%;
  bottom: 18%;
  width: 180px;
  height: 70px;
  background: #1c2733;
  opacity: 0.92;
}

.statement-panel__copy {
  position: relative;
  z-index: 2;
  width: min(460px, 52%);
}

.statement-panel h2 {
  font-size: clamp(65px, 8vw, 116px);
}

.statement-panel__body {
  max-width: 345px;
  margin: 42px 0 34px 7px;
  color: #6b7887;
  font: 11px/2 "Courier New", monospace;
}

.underlined-link {
  color: #202d3b;
  border-bottom: 1px solid #607084;
  padding-bottom: 10px;
  font: 9px "Courier New", monospace;
  letter-spacing: 0.17em;
  text-decoration: none;
}

.underlined-link span {
  margin-left: 15px;
  font-size: 14px;
}

.statement-panel__cross {
  position: absolute;
  right: 14vw;
  top: 43%;
  width: 90px;
  height: 90px;
  color: rgba(33, 48, 65, 0.3);
}

.statement-panel__cross span {
  position: absolute;
  top: 50%;
  left: 50%;
  background: currentColor;
  transform: translate(-50%, -50%);
}

.statement-panel__cross span:first-child {
  width: 1px;
  height: 100%;
}

.statement-panel__cross span:last-child {
  width: 100%;
  height: 1px;
}
.statement-panel__register {
  position: absolute;
  right: 13vw;
  bottom: 17%;
  display: flex;
  align-items: center;
  gap: 14px;
  color: #697787;
  font: 8px "Courier New", monospace;
  letter-spacing: 0.16em;
}

.statement-panel__register i {
  display: block;
  width: 150px;
  height: 1px;
  background: #798696;
}

.archive-panel {
  min-height: 750px;
  padding: 160px 13vw 120px;
  background: #e6e9ed;
}

.archive-panel__heading {
  margin-left: 8%;
}

.archive-panel h2 {
  font-size: clamp(65px, 8vw, 120px);
}

.archive-panel__list {
  width: 82%;
  margin: 100px 0 0 8%;
}

.index-row {
  display: grid;
  grid-template-columns: 9% 35% 1fr 25px;
  align-items: center;
  gap: 12px;
  min-height: 72px;
  border-top: 1px solid rgba(52, 64, 77, 0.3);
  color: #1b2531;
  text-decoration: none;
}

.index-row:last-child {
  border-bottom: 1px solid rgba(52, 64, 77, 0.3);
}

.index-row:hover {
  background: rgba(255, 255, 255, 0.26);
}

.index-row__number,
.index-row__note {
  color: #7c8793;
  font: 9px "Courier New", monospace;
  letter-spacing: 0.14em;
}

.index-row__name {
  font-size: 16px;
  letter-spacing: 0.05em;
}

.index-row b {
  font-size: 18px;
  font-weight: 300;
}

/* Footer */
.home-footer {
  display: flex;
  min-height: 92px;
  align-items: center;
  justify-content: space-between;
  padding: 0 4.5vw;
  border-top: 1px solid rgba(35, 47, 61, 0.22);
  color: #7b8692;
  font: 8px "Courier New", monospace;
  letter-spacing: 0.16em;
}

/* Motion */
@keyframes point-laser {
  0% {
    opacity: 0;
    transform: rotate(var(--ray-angle)) scaleX(0);
  }

  54% {
    opacity: var(--ray-opacity, 0.9);
    transform: rotate(var(--ray-angle)) scaleX(1);
  }

  100% {
    opacity: 0;
    transform: rotate(var(--ray-angle)) scaleX(1);
  }
}

@keyframes line-fill {
  from {
    background-size: 0% 100%;
  }

  to {
    background-size: 100% 100%;
  }
}
@keyframes title-base-fade {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes title-fill {
  0% {
    clip-path: inset(0 100% 0 0);
  }

  100% {
    clip-path: inset(0 0 0 0);
  }
}


@keyframes title-signal {
  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}


@keyframes descend {
  0%,
  100% {
    transform: scaleY(0.25);
    transform-origin: top;
    opacity: 0.25;
  }

  50% {
    transform: scaleY(1);
    transform-origin: top;
    opacity: 1;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hero-title__line::after {
    animation: none;
    clip-path: inset(0 0 0 0);
  }

  .hero-panel__signal-links span {
    animation: none;
    opacity: 0;
    transform: rotate(var(--link-angle)) scaleX(1);
  }
}

/* Responsive layout */
@media (max-width: 760px) {
  .hero-panel {
    min-height: 900px;
  }

  .hero-panel::after {
    top: 35%;
    right: 24px;
    height: 48%;
  }
  .hero-panel__chrome {
    top: 102px;
    right: 20px;
    left: 20px;
  }

  .hero-panel__chrome span:nth-child(2) {
    display: none;
  }

  .hero-panel__coordinates {
    top: 55%;
    width: 90vw;
  }

  .hero-panel__cross {
    top: 55%;
    width: 115px;
  }

  .hero-panel__cross-label {
    left: calc(100% + 8px);
  }

  .hero-panel__rays {
    top: 55%;
    width: 105vw;
  }

  .hero-panel__orbit {
    top: 55%;
    width: 130vw;
    height: 130vw;
  }

  .hero-panel__laser-field {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: none;
  }


  .hero-panel h1 {
    font-size: clamp(72px, 20vw, 116px);
  }

  .hero-panel h1 strong {
    margin-left: 0.025em;
  }



  .artwork-field {
    top: 37%;
    right: 24px;
    width: calc(100% - 48px);
    height: 48%;
  }

  .hero-panel__legend--left {
    bottom: 12%;
    left: 24px;
  }

  .hero-panel__legend--right {
    right: 24px;
    bottom: 16%;
  }

  .hero-panel__scroll-cross {
    width: 18px;
    height: 24px;
  }


  .statement-panel__block--blue {
    top: 12%;
    right: -22px;
    width: 120px;
    height: 150px;
  }

  .statement-panel__block--dark {
    right: 24px;
    bottom: 14%;
    width: 120px;
  }

  .statement-panel__copy {
    width: 100%;
  }

  .statement-panel h2 {
    font-size: 66px;
  }

  .statement-panel__register {
    right: 24px;
    bottom: 8%;
  }

  .statement-panel__cross {
    top: 46%;
    right: 24px;
    width: 62px;
    height: 62px;
  }

  .statement-panel__register i {
    width: 70px;
  }

  .archive-panel {
    min-height: auto;
    padding: 145px 24px 100px;
  }

  .archive-panel__heading {
    margin-left: 0;
  }

  .archive-panel h2 {
    font-size: 68px;
  }

  .archive-panel__list {
    width: 100%;
    margin: 75px 0 0;
  }

  .index-row {
    grid-template-columns: 12% 1fr 24px;
    min-height: 88px;
  }

  .index-row__note {
    display: none;
  }

  .index-row__name {
    font-size: 14px;
  }

  .home-footer {
    min-height: 120px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 20px 24px;
  }

  .home-footer span:nth-child(2) {
    display: none;
  }
}
</style>
