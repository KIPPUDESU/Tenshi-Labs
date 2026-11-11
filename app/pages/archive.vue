<template>
  <main class="archive-page">
    <div class="archive-page__rays" aria-hidden="true">
      <span v-for="ray in 14" :key="ray" :style="{ '--ray': `${ray * 13}deg` }" />
    </div>

    <header class="archive-head">
      <p class="eyebrow">03 / THE CHOIR <b>—</b></p>
      <span class="archive-head__cross" aria-hidden="true">✝</span>
      <h1>Works in<br /><em>preparation.</em></h1>
      <p class="archive-head__intro">A register of fields, directions,<br />and images still to arrive.</p>
    </header>

    <div class="archive-head__meta">MATERIAL REGISTER<br /><span>001—004 / OPEN</span></div>

    <section class="archive-list">
      <NuxtLink v-for="study in studies" :key="study.no" to="/liturgy" class="study-row">
        <span class="study-row__number">{{ study.no }}</span>
        <div class="study-row__field" :class="`study-row__field--${study.variant}`" aria-hidden="true">
          <i />
          <b />
          <small>{{ study.state }}</small>
        </div>
        <div class="study-row__detail">
          <span>{{ study.type }}</span>
          <h2>{{ study.title }}</h2>
          <p>{{ study.note }}</p>
        </div>
        <strong>↗</strong>
      </NuxtLink>
    </section>

    <footer class="archive-foot">
      <span>EVERY WORK BEGINS AS AN EMPTY FIELD</span>
      <NuxtLink to="/">← THE FIGURE</NuxtLink>
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

.archive-page {
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  padding: 180px 13vw 80px;
  background: #e6e9ed;
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

.archive-page__rays {
  position: absolute;
  top: 235px;
  right: 8vw;
  width: min(44vw, 600px);
  aspect-ratio: 1;
  opacity: 0.42;
}

.archive-page__rays span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 1px;
  background: rgba(255, 255, 255, 0.84);
  transform: rotate(var(--ray));
  transform-origin: left center;
}

.archive-head,
.archive-list,
.archive-foot {
  position: relative;
  z-index: 1;
}

.archive-head {
  position: relative;
  margin-left: 4%;
}

.archive-head__cross {
  position: absolute;
  top: -18px;
  left: 49%;
  color: #2453cc;
  font: 23px Georgia, serif;
  opacity: 0.76;
}


.eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 0 28px;
  color: #717e8d;
  font: 9px "Courier New", monospace;
  letter-spacing: 0.2em;
}

.eyebrow b {
  color: #263849;
  font-weight: 400;
}

.archive-head h1 {
  margin: 0;
  font-size: clamp(76px, 12vw, 175px);
  font-weight: 200;
  letter-spacing: -0.1em;
  line-height: 0.79;
}

.archive-head h1 em {
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.11em;
}

.archive-head__intro {
  margin: 42px 0 0 6px;
  color: #6f7b8a;
  font: 11px/1.8 "Courier New", monospace;
}

.archive-head__meta {
  position: absolute;
  top: 184px;
  right: 13vw;
  color: #7d8997;
  font: 8px/1.8 "Courier New", monospace;
  letter-spacing: 0.17em;
  text-align: right;
}

.archive-head__meta span {
  color: #a1abb6;
}

.archive-list {
  margin-top: 130px;
  border-top: 1px solid rgba(49, 61, 75, 0.3);
}

.study-row {
  display: grid;
  grid-template-columns: 8% 28% 1fr 30px;
  gap: 20px;
  align-items: center;
  min-height: 190px;
  border-bottom: 1px solid rgba(49, 61, 75, 0.3);
  color: #1a2430;
  text-decoration: none;
}

.study-row:hover {
  background: rgba(255, 255, 255, 0.22);
}

.study-row__number {
  align-self: start;
  padding-top: 23px;
  color: #75818e;
  font: 9px "Courier New", monospace;
  letter-spacing: 0.16em;
}

.study-row__field {
  position: relative;
  height: 130px;
  overflow: hidden;
  background: #293848;
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

.study-row__field i {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 43%;
  height: 1px;
  background: rgba(235, 241, 245, 0.7);
  content: "";
  transform: translate(-50%, -50%) rotate(-28deg);
}

.study-row__field b {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 7px;
  height: 7px;
  border: 1px solid #e8eef3;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.study-row__field small {
  position: absolute;
  z-index: 1;
  bottom: 10px;
  left: 12px;
  color: rgba(229, 237, 243, 0.72);
  font: 7px "Courier New", monospace;
  letter-spacing: 0.15em;
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

.study-row__detail > span {
  color: #7a8591;
  font: 8px "Courier New", monospace;
  letter-spacing: 0.17em;
}

.study-row__detail h2 {
  margin: 14px 0 7px;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -0.04em;
}

.study-row__detail p {
  margin: 0;
  color: #77828f;
  font: 10px "Courier New", monospace;
}

.study-row > strong {
  font-size: 20px;
  font-weight: 300;
}

.archive-foot {
  display: flex;
  justify-content: space-between;
  margin-top: 120px;
  padding-top: 19px;
  border-top: 1px solid rgba(49, 61, 75, 0.28);
  color: #78838f;
  font: 8px "Courier New", monospace;
  letter-spacing: 0.16em;
}

.archive-foot a {
  color: #1e2a37;
  text-decoration: none;
}

@media (max-width: 760px) {
  .archive-page {
    padding: 130px 24px 60px;
  }

  .archive-page__rays {
    top: 280px;
    right: -20vw;
    width: 95vw;
  }

  .archive-head {
    margin-left: 0;
  }

  .archive-head h1 {
    font-size: 70px;
  }

  .archive-head__meta {
    position: static;
    margin-top: 44px;
    text-align: left;
  }

  .archive-list {
    margin-top: 75px;
  }

  .study-row {
    grid-template-columns: 35px 1fr 20px;
    gap: 10px;
    min-height: 160px;
  }

  .study-row__field {
    grid-column: 2;
    grid-row: 1;
    height: 125px;
  }

  .study-row__number {
    grid-column: 1;
    grid-row: 1;
  }

  .study-row__detail {
    grid-column: 2;
    grid-row: 2;
    padding: 12px 0 18px;
  }

  .study-row > strong {
    grid-column: 3;
    grid-row: 1;
  }

  .study-row__detail h2 {
    font-size: 24px;
  }

  .archive-foot {
    flex-direction: column;
    gap: 16px;
    margin-top: 80px;
  }
}
</style>
