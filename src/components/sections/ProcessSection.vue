<template>
  <section class="section process hero-dark">
    <div class="container">

      <div class="process__header reveal">
        <SectionLabel>Proceso</SectionLabel>
        <h2 class="section-title process__title">Cómo trabajamos</h2>
        <p class="process__sub">
          Un proceso claro y transparente donde siempre sabes qué sigue,
          quién lo hace y cuándo estará listo.
        </p>
      </div>

      <div class="process__grid">
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          class="process__card reveal card-lift"
          :class="`reveal-d${i + 1}`"
          :style="`--stripe: ${step.color}`"
        >
          <!-- Franja superior de color -->
          <div class="process__card-stripe" />

          <!-- Ícono + duración -->
          <div class="process__card-top">
            <div class="process__card-icon" v-html="step.icon" />
            <span class="process__card-duration font-mono">{{ step.duration }}</span>
          </div>

          <!-- Título -->
          <h3 class="process__card-title">{{ step.title }}</h3>

          <!-- Descripción -->
          <p class="process__card-desc">{{ step.desc }}</p>

          <!-- Entregables -->
          <div class="process__card-deliverables">
            <div
              v-for="d in step.deliverables"
              :key="d"
              class="process__card-deliverable"
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.8"
                  stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ d }}
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import SectionLabel from '@/components/ui/SectionLabel.vue'

const svg = (d) => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`

const steps = [
  {
    title:        'Descubrimiento',
    desc:         'Entendemos tu negocio, usuarios y objetivos antes de proponer cualquier solución técnica. Nada se asume, todo se confirma.',
    duration:     '1–2 días',
    color:        '#1a3fbf',
    icon:         svg('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
    deliverables: ['Brief del proyecto', 'Alcance definido', 'Cronograma estimado'],
  },
  {
    title:        'Arquitectura',
    desc:         'Diseñamos la estructura técnica completa antes de escribir una sola línea de código. Base de datos, APIs, capas y flujo de datos.',
    duration:     '2–3 días',
    color:        '#2952d9',
    icon:         svg('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>'),
    deliverables: ['Diagrama de BD', 'Arquitectura de APIs', 'Stack definido'],
  },
  {
    title:        'Construcción',
    desc:         'Sprints semanales con demos en vivo. Puedes ver el avance real del proyecto en todo momento y dar feedback antes de que sea tarde.',
    duration:     'Variable',
    color:        '#4169e8',
    icon:         svg('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'),
    deliverables: ['Código en repositorio', 'Demo semanal', 'Tests incluidos'],
  },
  {
    title:        'Despliegue & Soporte',
    desc:         'El lanzamiento no es el final — es el comienzo. Todo documentado, con monitoreo activo y soporte directo.',
    duration:     'Continuo',
    color:        '#6385f0',
    icon:         svg('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'),
    deliverables: ['Deploy producción', 'Documentación técnica', 'Soporte post-entrega'],
  },
]
</script>

<style scoped>
.process {
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

/* ── Header ── */
.process__header {
  max-width: 560px;
  margin-bottom: 56px;
}
.process__title { margin-top: 12px; margin-bottom: 14px; }
.process__sub   { font-size: 16px; color: var(--text-3); line-height: 1.7; }

/* ── Grid ── */
.process__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* ── Card ── */
.process__card {
  position: relative;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    border-color var(--t-med) var(--ease),
    box-shadow   var(--t-med) var(--ease),
    transform    var(--t-med) var(--ease-out);
}
.process__card:hover {
  border-color: var(--stripe);
  box-shadow: 0 12px 40px rgba(26, 63, 191, 0.1);
  transform: translateY(-6px);
}

/* Franja superior */
.process__card-stripe {
  height: 4px;
  background: var(--stripe);
  width: 100%;
  flex-shrink: 0;
  transition: height var(--t-med) var(--ease-out);
}
.process__card:hover .process__card-stripe {
  height: 6px;
}

/* Contenido con padding */
.process__card-top,
.process__card-title,
.process__card-desc,
.process__card-deliverables {
  padding-left: 24px;
  padding-right: 24px;
}

/* Top: ícono + duración */
.process__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 0;
  margin-bottom: 20px;
}

.process__card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--stripe);
  background: color-mix(in srgb, var(--stripe) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--stripe) 25%, transparent);
  transition:
    background var(--t-med),
    color var(--t-med),
    transform var(--t-med) var(--ease-out);
}
.process__card:hover .process__card-icon {
  background: var(--stripe);
  color: #fff;
  transform: rotate(-6deg) scale(1.05);
}

.process__card-duration {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--stripe);
  background: color-mix(in srgb, var(--stripe) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--stripe) 25%, transparent);
  padding: 4px 10px;
  border-radius: 100px;
}

/* Título */
.process__card-title {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.01em;
  line-height: 1.2;
  margin-bottom: 10px;
  transition: color var(--t-fast);
}
.process__card:hover .process__card-title {
  color: var(--stripe);
}

/* Descripción */
.process__card-desc {
  font-size: 13px;
  color: var(--text-3);
  line-height: 1.7;
  margin-bottom: 20px;
  flex: 1;
}

/* Entregables */
.process__card-deliverables {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 24px;
  border-top: 1px solid var(--border);
  padding-top: 16px;
  margin-top: auto;
}
.process__card-deliverable {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-2);
  transition: color var(--t-fast);
}
.process__card:hover .process__card-deliverable {
  color: var(--text);
}
.process__card-deliverable svg {
  color: var(--green);
  flex-shrink: 0;
}

/* ── Dark override ── */
.hero-dark {
  background: #0d1117;
  border-top-color: rgba(255, 255, 255, 0.06);
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

.hero-dark .process__title,
.hero-dark h2 {
  color: #f1f5f9;
}

.hero-dark .process__sub {
  color: #64748b;
}

.hero-dark :deep(.label) {
  color: #6385f0;
}

.hero-dark .process__card {
  background: #111827;
  border-color: rgba(255, 255, 255, 0.08);
}

.hero-dark .process__card:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.hero-dark .process__card-title {
  color: #f1f5f9;
}

.hero-dark .process__card-desc {
  color: #94a3b8;
}

.hero-dark .process__card-deliverables {
  border-top-color: rgba(255, 255, 255, 0.08);
}

.hero-dark .process__card-deliverable {
  color: #94a3b8;
}

.hero-dark .process__card:hover .process__card-deliverable {
  color: #cbd5e1;
}

.hero-dark .process__card-deliverable svg {
  color: #4ade80;
}


/* ── Responsive ── */
@media (max-width: 1024px) {
  .process__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .process__grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .process__card-top,
  .process__card-title,
  .process__card-desc,
  .process__card-deliverables {
    padding-left: 18px;
    padding-right: 18px;
  }
  .process__header { margin-bottom: 36px; }
}
</style>