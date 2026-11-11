<template>
  <div class="site-shell">
    <div class="site-shell__grain" aria-hidden="true" />
    <header class="nav-bar">
      <NuxtLink to="/" class="brand">
        <span class="brand__sigil" aria-hidden="true">✝</span>
        <span>TENSHI / VISUAL ARCHIVE</span>
      </NuxtLink>
      <nav class="nav-links" aria-label="Primary navigation">
        <NuxtLink v-for="item in navItems" :key="item.href" :to="item.href" :class="{ 'is-active': route.path === item.href }">{{ item.label }}</NuxtLink>
      </nav>
      <span class="nav-edition">IN NOMINE / 001—004</span>
      <button class="nav-toggle" type="button" :aria-expanded="menuOpen" aria-label="Toggle navigation" @click="menuOpen = !menuOpen"><span>INDEX</span><i :class="{ 'is-open': menuOpen }" /></button>
    </header>
    <div class="mobile-nav" :class="{ 'mobile-nav--open': menuOpen }">
      <NuxtLink v-for="item in navItems" :key="item.href" :to="item.href" @click="menuOpen = false">{{ item.label }}</NuxtLink>
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
.site-shell { position: relative; min-height: 100svh; background: #e9edf1; overflow: hidden; }.site-shell__grain { position: fixed; z-index: 30; inset: 0; pointer-events: none; opacity: .08; mix-blend-mode: multiply; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.24'/%3E%3C/svg%3E"); }.nav-bar { position: fixed; z-index: 25; top: 0; left: 0; right: 0; height: 86px; padding: 0 4.5vw; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(39,50,63,.16); background: rgba(233,237,241,.84); backdrop-filter: blur(14px); }.brand { display: flex; align-items: center; gap: 11px; color: #202b37; font-size: 9px; font-weight: 600; letter-spacing: .18em; text-decoration: none; }.brand__sigil {
  font-size: 14px;
  font-weight: 400;
  transform: scaleX(0.78);
}.nav-links { position: absolute; left: 50%; display: flex; gap: clamp(18px, 3.5vw, 56px); transform: translateX(-50%); }.nav-links a, .nav-edition, .nav-toggle, .mobile-nav a { color: #707b88; font: 9px "Courier New", monospace; letter-spacing: .16em; text-decoration: none; white-space: nowrap; }.nav-links a { position: relative; padding: 34px 0 31px; }.nav-links a::after { content: ""; position: absolute; right: 100%; bottom: -1px; left: 0; height: 1px; background: #1d2834; transition: right .35s ease; }.nav-links a:hover, .nav-links a.is-active { color: #17212c; }.nav-links a:hover::after, .nav-links a.is-active::after { right: 0; }.nav-edition { color: #8c96a1; }.nav-toggle, .mobile-nav { display: none; }
@media (max-width: 760px) { .nav-bar { height: 72px; padding: 0 20px; }.nav-edition, .nav-links { display: none; }.nav-toggle { display: block; border: 0; background: none; cursor: pointer; }.nav-toggle i { display: block; width: 23px; height: 1px; margin-top: 7px; background: #202b37; transition: transform .3s; }.nav-toggle i::after { content: ""; display: block; width: 15px; height: 1px; margin: 5px 0 0 8px; background: #202b37; }.nav-toggle i.is-open { transform: rotate(45deg) translate(3px, 3px); }.nav-toggle i.is-open::after { transform: rotate(-90deg) translate(-5px, 5px); }.mobile-nav { position: fixed; z-index: 24; top: 72px; right: 0; left: 0; display: flex; flex-direction: column; gap: 0; padding: 10px 20px 16px; background: rgba(233,237,241,.98); border-bottom: 1px solid rgba(39,50,63,.16); transform: translateY(-150%); transition: transform .45s cubic-bezier(.16,1,.3,1); }.mobile-nav--open { transform: translateY(0); }.mobile-nav a { padding: 15px 0; border-bottom: 1px solid rgba(39,50,63,.13); }.mobile-nav a:last-child { border-bottom: 0; } }
</style>
