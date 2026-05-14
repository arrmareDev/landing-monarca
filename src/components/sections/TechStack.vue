<template>
  <section class="section tech hero-dark">
    <div class="container">

      <div class="tech__hd reveal">
        <SectionLabel>Stack tecnológico</SectionLabel>
        <h2 class="section-title tech__title">Las herramientas que dominamos</h2>
        <p class="tech__sub">
          Tecnología probada y madura, elegida por su confiabilidad en producción.
        </p>
      </div>

      <div class="tech__grid">
        <div
          v-for="(g, i) in groups"
          :key="g.label"
          class="tech__group card-lift reveal"
          :class="`reveal-d${i + 1}`"
        >
          <!-- Ícono + label de categoría -->
          <div class="tech__group-header">
            <div class="tech__group-icon" v-html="g.icon" />
            <p class="tech__glabel">{{ g.label }}</p>
          </div>

          <!-- Lista de items -->
          <ul class="tech__list">
            <li v-for="item in g.items" :key="item" class="tech__item">
              <span class="tech__item-dot" />
              <span class="tech__item-text">{{ item }}</span>
            </li>
          </ul>

          <!-- Número decorativo de fondo -->
          <span class="tech__bg-num font-mono">{{ String(i + 1).padStart(2, '0') }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import SectionLabel from '@/components/ui/SectionLabel.vue'

const svg = (d) => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`

const groups = [
  {
    label: 'Backend',
    icon:  svg('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'),
    items: ['PHP · Laravel', 'Python · Django', 'Java · Spring Boot', 'Node.js (complementario)'],
  },
  {
    label: 'Frontend',
    icon:  svg('<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'),
    items: ['React', 'Vue.js', 'Angular', 'HTML5 · CSS3 · JS ES2024'],
  },
  {
    label: 'Bases de datos',
    icon:  svg('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>'),
    items: ['PostgreSQL', 'MySQL', 'Redis · Cache', 'Diseño relacional'],
  },
  {
    label: 'Infraestructura',
    icon:  svg('<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>'),
    items: ['Docker · Linux', 'Git · CI/CD', 'AWS · VPS', 'Nginx · Apache'],
  },
]
</script>

<style scoped>
.tech {
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

/* ── Header ── */
.tech__hd    { margin-bottom: 52px; }
.tech__title { margin-top: 12px; margin-bottom: 12px; }
.tech__sub   { font-size: 15px; color: var(--text-3); line-height: 1.7; }

/* ── Grid ── */
.tech__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* ── Card ── */
.tech__group {
  position: relative;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 24px 32px;
  overflow: hidden;
  transition:
    border-color var(--t-med) var(--ease),
    box-shadow   var(--t-med) var(--ease),
    transform    var(--t-med) var(--ease-out);
}

/* Línea azul top animada */
.tech__group::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--blue) 0%, var(--blue-3) 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--t-slow) var(--ease-out);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}
.tech__group:hover::before { transform: scaleX(1); }

/* Número decorativo de fondo */
.tech__bg-num {
  position: absolute;
  bottom: -8px; right: 12px;
  font-size: 72px; font-weight: 800;
  color: var(--bg-3);
  letter-spacing: -0.05em;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  transition: color var(--t-med);
}
.tech__group:hover .tech__bg-num { color: rgba(26,63,191,0.05); }

/* ── Header de la card ── */
.tech__group-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

.tech__group-icon {
  width: 40px; height: 40px;
  border-radius: 10px;
  background: var(--blue-light);
  border: 1px solid var(--border-blue);
  display: flex; align-items: center; justify-content: center;
  color: var(--blue); flex-shrink: 0;
  transition: background var(--t-med), color var(--t-med), transform var(--t-med) var(--ease-out);
}
.tech__group:hover .tech__group-icon {
  background: var(--blue);
  color: #fff;
  transform: rotate(-6deg) scale(1.08);
}

.tech__glabel {
  font-family: var(--font-mono);
  font-size: 11px; letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--blue); font-weight: 500;
}

/* ── Lista ── */
.tech__list { display: flex; flex-direction: column; gap: 10px; }

.tech__item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid transparent;
  transition: background var(--t-fast), border-color var(--t-fast);
  cursor: default;
}
.tech__item:hover {
  background: var(--blue-light);
  border-color: var(--border-blue);
}

.tech__item-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--blue);
  flex-shrink: 0;
  opacity: 0.5;
  transition: opacity var(--t-fast), transform var(--t-fast);
}
.tech__item:hover .tech__item-dot {
  opacity: 1;
  transform: scale(1.3);
}

.tech__item-text {
  font-size: 14px; font-weight: 400;
  color: var(--text-2);
  transition: color var(--t-fast);
  line-height: 1.4;
}
.tech__item:hover .tech__item-text { color: var(--blue); }

/* ── Dark override ── */
.hero-dark {
  background: #0d1117;
  border-top-color: rgba(255, 255, 255, 0.06);
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

.hero-dark .tech__title,
.hero-dark h2 {
  color: #f1f5f9;
}

.hero-dark .tech__sub {
  color: #64748b;
}

.hero-dark :deep(.label) {
  color: #6385f0;
}

.hero-dark .tech__group {
  background: #111827;
  border-color: rgba(255, 255, 255, 0.08);
}

.hero-dark .tech__group:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.hero-dark .tech__group-header {
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

.hero-dark .tech__bg-num {
  color: rgba(255, 255, 255, 0.03);
}

.hero-dark .tech__group:hover .tech__bg-num {
  color: rgba(65, 105, 232, 0.08);
}

.hero-dark .tech__item:hover {
  background: rgba(65, 105, 232, 0.15);
  border-color: rgba(65, 105, 232, 0.35);
}

.hero-dark .tech__item-text {
  color: #94a3b8;
}

.hero-dark .tech__item:hover .tech__item-text {
  color: #6385f0;
}

.hero-dark .tech__group-icon {
  background: rgba(65, 105, 232, 0.15);
  border-color: rgba(65, 105, 232, 0.35);
}

/* ── Responsive ── */
@media (max-width: 1024px) { .tech__grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px)  { .tech__grid { grid-template-columns: 1fr; gap: 14px; } }
</style>