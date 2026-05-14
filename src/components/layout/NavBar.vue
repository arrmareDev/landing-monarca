<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar__inner container">

      <!-- Logo -->
      <a href="#inicio" class="navbar__logo" @click.prevent="scrollTo('#inicio')">
        <img src="/logmonarca.png" alt="Monarcacore" class="navbar__logo-img" />
      </a>

      <!-- Links desktop -->
      <nav class="navbar__links" aria-label="Navegación principal">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="navbar__link"
          :class="{ active: activeSection === link.href.replace('#','') }"
          @click.prevent="scrollTo(link.href)"
        >{{ link.label }}</a>
      </nav>

      <!-- Acciones -->
      <div class="navbar__actions">
        <a href="#contacto" class="navbar__cta" @click.prevent="scrollTo('#contacto')">
          <span>Iniciar proyecto</span>
        </a>
        <button
          class="navbar__burger"
          :class="{ open: menuOpen }"
          :aria-expanded="menuOpen"
          aria-label="Menú"
          @click="menuOpen = !menuOpen"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>

    <!-- Barra de progreso -->
    <div class="navbar__progress" :style="{ width: scrollProgress + '%' }" />

    <!-- Overlay -->
    <Transition name="overlay">
      <div v-if="menuOpen" class="navbar__overlay" @click="menuOpen = false" />
    </Transition>

    <!-- Drawer lateral -->
    <Transition name="drawer">
      <div v-if="menuOpen" class="navbar__drawer">

        <!-- Header del drawer -->
        <div class="navbar__drawer-head">
          <img src="/logmonarca.png" alt="Monarcacore" class="navbar__drawer-logo" />
          <button class="navbar__drawer-close" @click="menuOpen = false" aria-label="Cerrar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <!-- Links -->
        <nav class="navbar__drawer-links">
          <a
            v-for="(link, i) in links"
            :key="link.href"
            :href="link.href"
            class="navbar__drawer-link"
            :class="{ active: activeSection === link.href.replace('#','') }"
            @click.prevent="mobileNav(link.href)"
          >
            <div class="navbar__drawer-link-icon">
              <span v-html="link.icon" />
            </div>
            <span class="navbar__drawer-link-label">{{ link.label }}</span>
            <svg class="navbar__drawer-link-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </nav>

        <!-- Footer del drawer -->
        <div class="navbar__drawer-footer">
          <a href="#contacto" class="navbar__drawer-cta" @click.prevent="mobileNav('#contacto')">
            Iniciar proyecto
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <p class="navbar__drawer-copy font-mono">Monarcacore · Chiclayo, Perú</p>
        </div>

      </div>
    </Transition>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
  {
    label: 'Inicio',
    href: '#inicio',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
  },
  {
    label: 'Servicios',
    href: '#servicios',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
  },
  {
    label: 'Proceso',
    href: '#proceso',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
  },
  {
    label: 'Tecnología',
    href: '#tecnologia',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
  },
  {
    label: 'Nosotros',
    href: '#nosotros',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  },
  {
    label: 'Contacto',
    href: '#contacto',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
  },
]

const isScrolled     = ref(false)
const menuOpen       = ref(false)
const activeSection  = ref('')
const scrollProgress = ref(0)

const scrollTo = (hash) => {
  menuOpen.value = false
  const el = document.querySelector(hash)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const mobileNav = (hash) => {
  menuOpen.value = false
  setTimeout(() => scrollTo(hash), 300)
}

const onScroll = () => {
  isScrolled.value = window.scrollY > 20
  const total = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = total > 0 ? Math.round((window.scrollY / total) * 100) : 0
  const sectionIds = links.map(l => l.href.replace('#', ''))
  let current = ''
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= 100) current = id
  }
  activeSection.value = current
}

const onKey = (e) => { if (e.key === 'Escape') menuOpen.value = false }

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
})
</script>

<style scoped>
/* ── Base ─────────────────────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  height: var(--nav-h);
  background: rgba(10, 15, 30, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: background var(--t-med), border-color var(--t-med), box-shadow var(--t-med);
}
.navbar.scrolled {
  background: rgba(10, 15, 30, 0.97);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 24px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* ── Progreso ─────────────────────────────────────────────── */
.navbar__progress {
  position: absolute;
  bottom: -1px; left: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--blue) 0%, var(--blue-3) 100%);
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 8px rgba(26, 63, 191, 0.3);
  transition: width 0.08s linear;
  pointer-events: none;
}

/* ── Inner ───────────────────────────────────────────────── */
.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
  z-index: 2;
}

/* ── Logo ────────────────────────────────────────────────── */
.navbar__logo       { display: flex; align-items: center; flex-shrink: 0; transition: opacity var(--t-fast); }
.navbar__logo:hover { opacity: 0.75; }
.navbar__logo-img   { height: 48px; width: auto; object-fit: contain; }

/* ── Links desktop ───────────────────────────────────────── */
.navbar__links { display: flex; gap: 2px; }

.navbar__link {
  position: relative;
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #64748b;
  padding: 8px 14px;
  border-radius: 6px;
  transition: color var(--t-fast), background var(--t-fast);
}
.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 4px; left: 14px; right: 14px;
  height: 2px;
  background: #6385f0;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--t-med) var(--ease-out);
}
.navbar__link:hover          { color: #6385f0; background: rgba(65, 105, 232, 0.12); }
.navbar__link.active         { color: #6385f0; background: rgba(65, 105, 232, 0.12); font-weight: 700; }
.navbar__link.active::after  { transform: scaleX(1); }

/* ── CTA desktop ─────────────────────────────────────────── */
.navbar__actions { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }

.navbar__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: var(--radius);
  background: var(--blue);
  color: #fff;
  border: 2px solid var(--blue);
  box-shadow: 0 2px 12px rgba(26, 63, 191, 0.28);
  transition: background var(--t-fast), box-shadow var(--t-fast), transform var(--t-fast);
}
.navbar__cta:hover {
  background: var(--blue-2);
  box-shadow: 0 4px 20px rgba(26, 63, 191, 0.42);
  transform: translateY(-1px);
}

/* ── Hamburguesa ─────────────────────────────────────────── */
.navbar__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px; height: 40px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
  padding: 0;
  transition: background var(--t-fast), border-color var(--t-fast);
}
.navbar__burger:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(65, 105, 232, 0.35);
}
.navbar__burger span {
  display: block;
  height: 1.5px;
  background: #f1f5f9;
  border-radius: 2px;
  transition: transform var(--t-med) var(--ease-out), opacity var(--t-fast), width var(--t-med);
  transform-origin: center;
}
.navbar__burger span:nth-child(1) { width: 18px; }
.navbar__burger span:nth-child(2) { width: 13px; }
.navbar__burger span:nth-child(3) { width: 18px; }
.navbar__burger.open span:nth-child(1) { width: 18px; transform: translateY(6.5px) rotate(45deg); }
.navbar__burger.open span:nth-child(2) { opacity: 0; width: 0; }
.navbar__burger.open span:nth-child(3) { width: 18px; transform: translateY(-6.5px) rotate(-45deg); }

/* ── Overlay ─────────────────────────────────────────────── */
.navbar__overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 998;
  cursor: pointer;
}
.overlay-enter-active,
.overlay-leave-active { transition: opacity var(--t-med) var(--ease); }
.overlay-enter-from,
.overlay-leave-to     { opacity: 0; }

/* ── DRAWER LATERAL ──────────────────────────────────────── */
.navbar__drawer {
  position: fixed;
  top: 0; right: 0;
  width: 300px;
  height: 100dvh;
  background: #0d1117;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 999;
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.5);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform var(--t-med) var(--ease-out);
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

/* Header del drawer */
.navbar__drawer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.navbar__drawer-logo {
  height: 36px;
  width: auto;
  object-fit: contain;
}

.navbar__drawer-close {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  cursor: pointer;
  transition: background var(--t-fast), color var(--t-fast);
}
.navbar__drawer-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #f1f5f9;
}

/* Links del drawer */
.navbar__drawer-links {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 12px 12px;
  gap: 2px;
  overflow-y: auto;
}

.navbar__drawer-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 13px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background var(--t-fast);
  text-decoration: none;
}
.navbar__drawer-link:hover,
.navbar__drawer-link.active {
  background: rgba(65, 105, 232, 0.12);
}

.navbar__drawer-link-icon {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  flex-shrink: 0;
  transition: background var(--t-fast), border-color var(--t-fast), color var(--t-fast);
}
.navbar__drawer-link:hover .navbar__drawer-link-icon,
.navbar__drawer-link.active .navbar__drawer-link-icon {
  background: rgba(65, 105, 232, 0.15);
  border-color: rgba(65, 105, 232, 0.35);
  color: #6385f0;
}

.navbar__drawer-link-label {
  flex: 1;
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #cbd5e1;
  transition: color var(--t-fast);
}
.navbar__drawer-link:hover .navbar__drawer-link-label,
.navbar__drawer-link.active .navbar__drawer-link-label {
  color: #f1f5f9;
}

.navbar__drawer-link-arrow {
  color: #334155;
  flex-shrink: 0;
  transition: transform var(--t-fast), color var(--t-fast);
}
.navbar__drawer-link:hover .navbar__drawer-link-arrow {
  transform: translateX(3px);
  color: #6385f0;
}

/* Footer del drawer */
.navbar__drawer-footer {
  padding: 16px 20px 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.navbar__drawer-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 14px 24px;
  border-radius: var(--radius);
  background: var(--blue);
  color: #fff;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  box-shadow: 0 4px 16px rgba(26, 63, 191, 0.3);
  transition: background var(--t-fast), box-shadow var(--t-fast), transform var(--t-fast);
}
.navbar__drawer-cta:hover {
  background: var(--blue-2);
  box-shadow: 0 6px 24px rgba(26, 63, 191, 0.45);
  transform: translateY(-1px);
}

.navbar__drawer-copy {
  font-size: 11px;
  color: #334155;
  letter-spacing: 0.06em;
  text-align: center;
}

/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 900px) {
  .navbar__links { display: none; }
  .navbar__cta   { display: none; }
  .navbar__burger { display: flex; }
}

@media (min-width: 901px) {
  .navbar__drawer  { display: none; }
  .navbar__overlay { display: none; }
}
</style>