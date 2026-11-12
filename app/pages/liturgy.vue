<template>
  <main class="liturgy-page min-h-svh bg-[#e9edf1]">
    <div class="liturgy-page__meta absolute right-[8vw] top-[118px] z-2 text-right font-mono text-[8px] leading-[1.8] tracking-[0.16em] text-[#7b8692] max-[760px]:right-6 max-[760px]:top-[100px]">
      TEXT / 001<br />
      <span class="text-[#a1aab4]">THE ROOM AROUND AN IMAGE</span>
    </div>

    <section class="liturgy-hero relative min-h-[670px] overflow-hidden border-b border-[rgba(39,50,63,0.23)] px-[13vw] pb-[100px] pt-[190px] max-[760px]:min-h-[700px] max-[760px]:px-6 max-[760px]:pb-15 max-[760px]:pt-[130px]">
      <p class="eyebrow mb-[30px] flex items-center gap-3.5 font-mono text-[9px] tracking-[0.2em] text-[#707b88]">
        04 / THE NOTE <b class="font-normal text-[#202b37]">—</b>
      </p>
      <span class="liturgy-hero__cross absolute left-[46%] top-[165px] z-2 font-[Georgia,serif] text-2xl text-[#2453cc] opacity-[0.72]" aria-hidden="true">✝</span>
      <h1 class="m-0 text-[clamp(80px,13vw,185px)] font-extralight leading-[0.79] tracking-[-0.1em] max-[760px]:text-7xl">
        Room<br /><em class="font-bold not-italic tracking-[-0.11em]">for light.</em>
      </h1>
      <div class="liturgy-hero__reserve absolute right-[9%] top-[145px] h-[420px] w-[min(35vw,470px)] border border-[rgba(75,89,105,0.3)] font-mono text-[8px] tracking-[0.15em] text-[#7a8591] max-[760px]:right-6 max-[760px]:top-[345px] max-[760px]:h-[285px] max-[760px]:w-[calc(100%-48px)]" aria-label="Reserved artwork field">
        <span class="absolute left-[17px] top-[15px]">RESERVED FIELD / 04</span>
        <i class="absolute bottom-[9%] left-1/2 top-[9%] w-px bg-[rgba(76,91,107,0.22)]" />
        <b class="absolute bottom-[15px] right-[17px] font-normal leading-[1.6] text-right">
          THE LINEWORK WILL<br />
          APPEAR HERE
        </b>
      </div>
    </section>

    <section class="liturgy-body mx-auto grid max-w-[1020px] grid-cols-[25%_minmax(300px,570px)] gap-[9%] px-10 pb-[150px] pt-[130px] max-[760px]:block max-[760px]:px-6 max-[760px]:pb-[110px] max-[760px]:pt-[95px]">
      <aside class="font-mono text-[9px] leading-[1.8] tracking-[0.17em] text-[#66727f] max-[760px]:mb-12">
        I.<br />
        <span class="text-[#9ca6b0]">THE SPACE<br />BEFORE FORM</span>
      </aside>
      <article class="font-mono text-[12px] leading-[2.15] tracking-[0.03em] text-[#687481] max-[760px]:mt-12">
        <p class="lead mb-8 font-sans text-[23px] font-light leading-[1.45] tracking-[-0.035em] text-[#202b37] max-[760px]:text-xl">
          Before an image arrives, there is the room that receives it.
        </p>
        <p class="mb-8">
          The angel is not an ornament borrowed from heaven. In the old account,
          the messenger first speaks peace: be not afraid. The line begins there
          — not in spectacle, but in the mercy of making room for another.
        </p>
        <p class="mb-8">
          Watch in the night. Attend to the wounded. Let the figure remain both
          distant and near: a sign of the holy, and a posture turned toward the
          human.
        </p>
        <div class="liturgy-body__rule mt-14 mb-[35px] h-px bg-[#86919d]" />
        <p class="closing font-sans text-base font-light leading-[1.6] text-[#27323e]">
          Leave the center open.<br />
          Let the image decide what it becomes.
        </p>
      </article>
    </section>

    <footer class="liturgy-foot mx-auto flex max-w-[1020px] justify-between border-t border-[rgba(39,50,63,0.22)] px-10 pb-[50px] pt-5 max-[760px]:mx-6 max-[760px]:px-0 max-[760px]:pb-10">
      <NuxtLink class="font-mono text-[9px] tracking-[0.16em] text-[#65717e] no-underline" to="/archive">← THE INDEX</NuxtLink>
      <NuxtLink class="font-mono text-[9px] tracking-[0.16em] text-[#65717e] no-underline" to="/">THE FIGURE →</NuxtLink>
    </footer>
  </main>
</template>

<style scoped>
:global(body) {
  margin: 0;
  background: #e9edf1;
  color: #19212b;
  font-family: Arial, Helvetica, sans-serif;
}

.liturgy-hero__reserve {
  background: radial-gradient(
    circle at center,
    rgba(188, 201, 214, 0.2),
    transparent 55%
  );
}

.liturgy-hero__reserve::before,
.liturgy-hero__reserve::after {
  position: absolute;
  inset: 11%;
  border: 1px solid rgba(82, 97, 113, 0.2);
  border-radius: 50%;
  content: "";
}

.liturgy-hero__reserve::after {
  inset: 8% 28%;
  transform: rotate(34deg);
  border-style: dashed;
}

</style>
