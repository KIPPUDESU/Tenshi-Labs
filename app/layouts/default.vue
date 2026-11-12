<template>
  <div class="site-shell relative min-h-svh overflow-hidden bg-[#e9edf1]">
    <div class="site-shell__grain" aria-hidden="true" />
    <header class="nav-bar fixed inset-x-0 top-0 z-25 flex h-[86px] items-center justify-between border-b border-[rgba(39,50,63,0.16)] bg-[rgba(233,237,241,0.84)] px-[4.5vw] backdrop-blur-[14px] max-[760px]:h-18 max-[760px]:px-5">
      <NuxtLink to="/" class="brand flex items-center gap-[11px] text-[9px] font-semibold tracking-[0.18em] text-[#202b37] no-underline">
        <span class="brand__sigil text-sm font-normal [transform:scaleX(0.78)]" aria-hidden="true">✝</span>
        <span>TENSHI / VISUAL ARCHIVE</span>
      </NuxtLink>
      <nav class="nav-links absolute left-1/2 flex -translate-x-1/2 gap-[clamp(18px,3.5vw,56px)] max-[760px]:hidden" aria-label="Primary navigation">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="relative whitespace-nowrap py-[34px] pb-[31px] font-mono text-[9px] tracking-[0.16em] text-[#707b88] no-underline hover:text-[#17212c]"
          :class="{ 'is-active': route.path === item.href }"
        >{{ item.label }}</NuxtLink>
      </nav>
      <span class="nav-edition font-mono text-[9px] tracking-[0.16em] text-[#8c96a1] max-[760px]:hidden">IN NOMINE / 001—004</span>
      <button class="nav-toggle hidden cursor-pointer border-0 bg-transparent font-mono text-[9px] tracking-[0.16em] text-[#707b88] max-[760px]:block" type="button" :aria-expanded="menuOpen" aria-label="Toggle navigation" @click="menuOpen = !menuOpen"><span>INDEX</span><i class="mt-[7px] block h-px w-[23px] bg-[#202b37] transition-transform duration-300" :class="{ 'is-open': menuOpen }" /></button>
    </header>
    <div class="mobile-nav fixed left-0 right-0 top-18 z-24 hidden -translate-y-[150%] flex-col gap-0 border-b border-[rgba(39,50,63,0.16)] bg-[rgba(233,237,241,0.98)] px-5 pb-4 pt-2 transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-[760px]:flex" :class="{ 'translate-y-0': menuOpen }">
      <NuxtLink v-for="item in navItems" :key="item.href" :to="item.href" class="border-b border-[rgba(39,50,63,0.13)] py-[15px] font-mono text-[9px] tracking-[0.16em] text-[#707b88] no-underline last:border-0" @click="menuOpen = false">{{ item.label }}</NuxtLink>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const menuOpen = ref(false);
const navItems = [
  { label: "THE FIGURE", href: "/" },
  { label: "THE INDEX", href: "/archive" },
  { label: "THE NOTE", href: "/liturgy" },
];
</script>

<style scoped>
.site-shell__grain { position: fixed; z-index: 30; inset: 0; pointer-events: none; opacity: .08; mix-blend-mode: multiply; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.24'/%3E%3C/svg%3E"); }.nav-links a::after { content: ""; position: absolute; right: 100%; bottom: -1px; left: 0; height: 1px; background: #1d2834; transition: right .35s ease; }.nav-links a:hover::after, .nav-links a.is-active::after { right: 0; }.nav-toggle i::after { content: ""; display: block; width: 15px; height: 1px; margin: 5px 0 0 8px; background: #202b37; }.nav-toggle i.is-open { transform: rotate(45deg) translate(3px, 3px); }.nav-toggle i.is-open::after { transform: rotate(-90deg) translate(-5px, 5px); }
</style>
