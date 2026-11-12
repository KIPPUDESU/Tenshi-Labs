<template>
  <main class="archive-page relative min-h-svh overflow-hidden bg-[#e6e9ed] px-[13vw] pb-20 pt-45 max-[760px]:px-6 max-[760px]:pb-15 max-[760px]:pt-[130px]">
    <div class="archive-page__rays absolute right-[8vw] top-[235px] aspect-square w-[min(44vw,600px)] opacity-[0.42] max-[760px]:right-[-20vw] max-[760px]:top-[280px] max-[760px]:w-[95vw]" aria-hidden="true">
      <span v-for="ray in 14" :key="ray" class="absolute left-1/2 top-1/2 h-px w-1/2 origin-left bg-white/85 [transform:rotate(var(--ray))]" :style="{ '--ray': `${ray * 13}deg` }" />
    </div>

    <header class="archive-head relative z-1 ml-[4%] max-[760px]:ml-0">
      <p class="eyebrow mb-7 flex items-center gap-3.5 font-mono text-[9px] tracking-[0.2em] text-[#717e8d]">03 / THE CHOIR <b class="font-normal text-[#263849]">—</b></p>
      <span class="archive-head__cross absolute -top-[18px] left-[49%] font-[Georgia,serif] text-[23px] text-[#2453cc] opacity-[0.76]" aria-hidden="true">✝</span>
      <h1 class="m-0 text-[clamp(76px,12vw,175px)] font-extralight leading-[0.79] tracking-[-0.1em] max-[760px]:text-7xl">Works in<br /><em class="font-bold not-italic tracking-[-0.11em]">preparation.</em></h1>
      <p class="archive-head__intro mt-[42px] ml-[6px] font-mono text-[11px] leading-[1.8] text-[#6f7b8a]">A register of fields, directions,<br />and images still to arrive.</p>
    </header>

    <div class="archive-head__meta absolute right-[13vw] top-[184px] z-1 text-right font-mono text-[8px] leading-[1.8] tracking-[0.17em] text-[#7d8997] max-[760px]:static max-[760px]:mt-11 max-[760px]:text-left">MATERIAL REGISTER<br /><span class="text-[#a1abb6]">001—004 / OPEN</span></div>

    <section class="archive-list relative z-1 mt-[130px] border-t border-[rgba(49,61,75,0.3)] max-[760px]:mt-[90px]">
      <NuxtLink v-for="study in studies" :key="study.no" to="/liturgy" class="study-row grid min-h-[190px] grid-cols-[8%_28%_1fr_30px] items-center gap-5 border-b border-[rgba(49,61,75,0.3)] text-[#1a2430] no-underline hover:bg-white/20 max-[760px]:min-h-[160px] max-[760px]:grid-cols-[35px_1fr_20px] max-[760px]:gap-2.5">
        <span class="study-row__number self-start pt-[23px] font-mono text-[9px] tracking-[0.16em] text-[#75818e] max-[760px]:col-start-1 max-[760px]:row-start-1">{{ study.no }}</span>
        <div class="study-row__field relative h-[130px] overflow-hidden bg-[#293848] max-[760px]:col-start-2 max-[760px]:row-start-1 max-[760px]:h-[125px]" :class="`study-row__field--${study.variant}`" aria-hidden="true">
          <i class="absolute left-1/2 top-1/2 z-1 h-px w-[43%] bg-[rgba(235,241,245,0.7)] [transform:translate(-50%,-50%)_rotate(-28deg)]" />
          <b class="absolute left-1/2 top-1/2 z-1 h-[7px] w-[7px] rounded-full border border-[#e8eef3] [transform:translate(-50%,-50%)]" />
          <small class="absolute bottom-[10px] left-[12px] z-1 font-mono text-[7px] tracking-[0.15em] text-[rgba(229,237,243,0.72)]">{{ study.state }}</small>
        </div>
        <div class="study-row__detail max-[760px]:col-start-2 max-[760px]:row-start-2 max-[760px]:py-3 max-[760px]:pb-[18px]">
          <span class="font-mono text-[8px] tracking-[0.17em] text-[#7a8591]">{{ study.type }}</span>
          <h2 class="m-[14px_0_7px] text-[28px] font-light tracking-[-0.04em] max-[760px]:text-2xl">{{ study.title }}</h2>
          <p class="m-0 font-mono text-[10px] text-[#77828f]">{{ study.note }}</p>
        </div>
        <strong class="text-xl font-light max-[760px]:col-start-3 max-[760px]:row-start-1">↗</strong>
      </NuxtLink>
    </section>

    <footer class="archive-foot relative z-1 mt-[120px] flex items-center justify-between border-t border-[rgba(49,61,75,0.3)] pt-[19px] font-mono text-[8px] tracking-[0.16em] text-[#78838f] max-[760px]:mt-20 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-4">
      <span>EVERY WORK BEGINS AS AN EMPTY FIELD</span>
      <NuxtLink class="text-[#1e2a37] no-underline" to="/">← THE FIGURE</NuxtLink>
    </footer>
  </main>
</template>

<script setup lang="ts">
const studies = [
  {
    no: "001",
    title: "The Orbit",
    type: "GEOMETRY / 01",
    note: "A body held by invisible proportion.",
    state: "FIELD / 01",
    variant: "orbit",
  },
  {
    no: "002",
    title: "Wings / Folded",
    type: "ANATOMY / 02",
    note: "A study of stillness before movement.",
    state: "FIELD / 02",
    variant: "wings",
  },
  {
    no: "003",
    title: "The Threshold",
    type: "PASSAGE / 03",
    note: "A place for the image to arrive.",
    state: "FIELD / 03",
    variant: "threshold",
  },
  {
    no: "004",
    title: "After the Light",
    type: "REMAINDER / 04",
    note: "What stays when the figure leaves.",
    state: "FIELD / 04",
    variant: "light",
  },
];
</script>

<style scoped>
:global(body) {
  margin: 0;
  background: #e6e9ed;
  color: #19212b;
  font-family: Arial, Helvetica, sans-serif;
}

.archive-page::before {
  position: absolute;
  top: 300px;
  right: -12vw;
  width: 58vw;
  height: 58vw;
  border: 1px solid rgba(48, 67, 88, 0.16);
  border-radius: 50%;
  content: "";
}

.study-row__field::before {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 49.7%, rgba(226, 233, 239, 0.65) 50%, transparent 50.3%), linear-gradient(0deg, transparent 49.7%, rgba(226, 233, 239, 0.45) 50%, transparent 50.3%);
  content: "";
  opacity: 0.35;
}

.study-row__field::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 66%;
  height: 48%;
  border: 1px solid rgba(229, 236, 242, 0.58);
  border-radius: 50%;
  content: "";
  transform: translate(-50%, -50%) rotate(-28deg);
}

.study-row__field--wings {
  background: #aeb8c4;
}

.study-row__field--wings::after {
  width: 76%;
  height: 40%;
  transform: translate(-50%, -50%) rotate(7deg);
  border-style: dashed;
}

.study-row__field--wings i {
  width: 56%;
  background: #394757;
  transform: translate(-50%, -50%) rotate(7deg);
}

.study-row__field--wings b {
  border-color: #394757;
}

.study-row__field--wings small {
  color: #394757;
}

.study-row__field--threshold {
  background: #151e29;
}

.study-row__field--threshold::after {
  width: 36%;
  height: 75%;
  transform: translate(-50%, -50%);
}

.study-row__field--threshold i {
  width: 1px;
  height: 76%;
  transform: translate(-50%, -50%);
}

.study-row__field--light {
  background: #cbd2d9;
}

.study-row__field--light::after {
  width: 35%;
  height: 35%;
  border-color: #4a5867;
  box-shadow: 0 0 0 25px rgba(57, 72, 88, 0.08), 0 0 0 50px rgba(57, 72, 88, 0.05);
}

.study-row__field--light i {
  display: none;
}

.study-row__field--light b {
  border-color: #4a5867;
}

.study-row__field--light small {
  color: #4a5867;
}

</style>
