<template>
  <section class="section about hero-dark">
    <div class="container about__inner">

      <!-- Izquierda: texto -->
      <div class="about__left">
        <div class="reveal">
          <SectionLabel>Quiénes somos</SectionLabel>
          <h2 class="section-title about__title">
            Un equipo que construye<br />
            <span class="text-blue">con propósito y precisión</span>
          </h2>
        </div>

        <p class="about__body reveal reveal-d2">
          En Monarcacore no vendemos horas, entregamos resultados.
          Somos desarrolladores que comprenden el negocio detrás del código, y esa visión marca la diferencia entre un sistema que simplemente funciona y uno que realmente transforma.
          Trabajamos con empresas que necesitan software confiable, bien diseñado y entregado a tiempo. Nuestro compromiso es construir soluciones que no solo respondan a tus necesidades, sino que impulsen tu crecimiento y generen impacto real.
        </p>
        <div class="about__points reveal reveal-d4">
          <div class="about__point" v-for="p in points" :key="p">
            <div class="about__point-dot" />
            <span>{{ p }}</span>
          </div>
        </div>

        <div class="about__stats reveal reveal-d5">
          <div class="about__stat" v-for="s in stats" :key="s.label">
            <span class="about__stat-num">{{ s.num }}</span>
            <span class="about__stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <!-- Derecha: terminal animada -->
      <div class="about__right reveal reveal-right">
        <div class="terminal">

          <!-- Barra superior tipo IDE -->
          <div class="terminal__bar">
            <div class="terminal__dots">
              <span class="terminal__dot terminal__dot--red" />
              <span class="terminal__dot terminal__dot--yellow" />
              <span class="terminal__dot terminal__dot--green" />
            </div>
            <span class="terminal__filename font-mono">monarcacore.ts</span>
            <div class="terminal__actions">
              <span class="terminal__lang font-mono">TypeScript</span>
            </div>
          </div>

          <!-- Código animado -->
          <div class="terminal__body">
            <div
              v-for="(line, i) in codeLines"
              :key="i"
              class="terminal__line"
              :style="{ animationDelay: `${i * 0.12}s` }"
            >
              <span class="terminal__ln font-mono">{{ String(i + 1).padStart(2, ' ') }}</span>
              <span class="terminal__code" v-html="line" />
            </div>
          </div>

          <!-- Footer con métricas en tiempo real -->
          <div class="terminal__footer">
            <div class="terminal__metric" v-for="m in metrics" :key="m.label">
              <span class="terminal__metric-dot" :class="`terminal__metric-dot--${m.color}`" />
              <span class="terminal__metric-val font-mono">{{ m.val }}</span>
              <span class="terminal__metric-label">{{ m.label }}</span>
            </div>
          </div>

        </div>

        <!-- Badges flotantes -->
        <div class="about__badge about__badge--tl">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
          <div>
            <p class="about__badge-num">100%</p>
            <p class="about__badge-label">Código tuyo</p>
          </div>
        </div>

        <div class="about__badge about__badge--br">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <div>
            <p class="about__badge-num">&lt;24h</p>
            <p class="about__badge-label">Respuesta</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import SectionLabel from '@/components/ui/SectionLabel.vue'

const points = [
  'Comunicación directa — siempre sabes en qué estamos',
  'Tecnología moderna adaptada a tu presupuesto y necesidad',
  'Soporte post-entrega incluido en todos los proyectos',
]

const stats = [
  { num: '100%', label: 'A medida'     },
  { num: '<24h', label: 'Respuesta'    },
  { num: 'Full', label: 'Stack'        },
  { num: '∞',    label: 'Escalable'    },
]

// Sintaxis con spans coloreados
const c = (cls, txt) => `<span class="${cls}">${txt}</span>`
const kw  = (t) => c('kw', t)
const fn  = (t) => c('fn', t)
const str = (t) => c('str',"'" + t + "'")
const num = (t) => c('num', t)
const cm  = (t) => c('cm', '// ' + t)
const ty  = (t) => c('ty', t)

const codeLines = [
  cm('Monarcacore — Software con propósito'),
  '',
  `${kw('interface')} ${ty('Proyecto')} {`,
  `  cliente:      ${ty('string')}`,
  `  tecnologia:   ${ty('Stack')}`,
  `  entrega:      ${ty('Date')}`,
  `  calidad:      ${num('100')}`,
  `}`,
  '',
  `${kw('const')} ${fn('construir')} = (`,
  `  idea: ${ty('string')}`,
  `): ${ty('Promesa')} => {`,
  `  ${kw('return')} {`,
  `    codigo:       ${str('limpio')}`,
  `    arquitectura: ${str('escalable')}`,
  `    entrega:      ${str('puntual')}`,
  `    soporte:      ${str('continuo')}`,
  `  }`,
  `}`,
  '',
  cm('Listo para transformar tu negocio ✓'),
]

const metrics = [
  { val: '●', label: 'Activo',    color: 'green'  },
  { val: '0', label: 'Errores',   color: 'green'  },
  { val: 'TS', label: 'TypeScript', color: 'blue' },
]
</script>

<style scoped>
.about {
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

/* ── Layout ── */
.about__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

/* ── Izquierda ── */
.about__title  { margin-top: 12px; margin-bottom: 24px; line-height: 1.1; }
.about__body   { font-size: 15px; color: var(--text-3); line-height: 1.85; margin-bottom: 16px; }

.about__points { display: flex; flex-direction: column; gap: 12px; margin-bottom: 36px; }
.about__point  { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: var(--text-2); line-height: 1.5; }
.about__point-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--blue); flex-shrink: 0; margin-top: 6px;
  box-shadow: 0 0 0 3px rgba(26,63,191,0.12);
}

.about__stats  { display: flex; gap: 32px; flex-wrap: wrap; padding-top: 24px; border-top: 1px solid var(--border); }
.about__stat   { display: flex; flex-direction: column; gap: 2px; }
.about__stat-num   { font-family: var(--font-display); font-size: 26px; font-weight: 800; color: var(--blue); letter-spacing: -0.02em; line-height: 1; }
.about__stat-label { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-4); }

/* ── Derecha ── */
.about__right { position: relative; }

/* ── Terminal ── */
.terminal {
  background: #0F1117;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow:
    0 24px 64px rgba(0,0,0,0.18),
    0 4px 16px rgba(0,0,0,0.12);
}

/* Barra superior */
.terminal__bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #1A1D27;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.terminal__dots { display: flex; gap: 6px; }
.terminal__dot  {
  width: 12px; height: 12px; border-radius: 50%;
  flex-shrink: 0;
}
.terminal__dot--red    { background: #FF5F57; }
.terminal__dot--yellow { background: #FEBC2E; }
.terminal__dot--green  { background: #28C840; }

.terminal__filename {
  flex: 1; text-align: center;
  font-size: 12px; color: rgba(255,255,255,0.4);
  letter-spacing: 0.04em;
}
.terminal__lang {
  font-size: 11px; color: #4A7EFF;
  letter-spacing: 0.08em;
}

/* Cuerpo con código */
.terminal__body {
  padding: 20px 0;
  max-height: 380px;
  overflow: hidden;
}

.terminal__line {
  display: flex;
  align-items: baseline;
  gap: 0;
  padding: 1.5px 0;
  opacity: 0;
  animation: lineIn 0.3s ease forwards;
  min-height: 20px;
}

@keyframes lineIn {
  from { opacity: 0; transform: translateX(-4px); }
  to   { opacity: 1; transform: translateX(0); }
}

.terminal__ln {
  font-size: 12px;
  color: rgba(255,255,255,0.18);
  width: 36px;
  text-align: right;
  padding-right: 16px;
  user-select: none;
  flex-shrink: 0;
}

.terminal__code {
  font-family: var(--font-mono);
  font-size: 12.5px;
  line-height: 1.6;
  letter-spacing: 0.01em;
  color: #E2E8F0;
}

/* Sintaxis colores */
.terminal__code :deep(.kw)  { color: #C792EA; }   /* keywords — morado */
.terminal__code :deep(.fn)  { color: #82AAFF; }   /* funciones — azul */
.terminal__code :deep(.str) { color: #C3E88D; }   /* strings — verde */
.terminal__code :deep(.num) { color: #F78C6C; }   /* números — naranja */
.terminal__code :deep(.cm)  { color: #546E7A; font-style: italic; }  /* comentarios */
.terminal__code :deep(.ty)  { color: #FFCB6B; }   /* tipos — amarillo */

/* Footer métricas */
.terminal__footer {
  display: flex;
  gap: 20px;
  padding: 10px 16px;
  background: #1A1D27;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.terminal__metric {
  display: flex; align-items: center; gap: 6px;
}
.terminal__metric-dot {
  width: 7px; height: 7px; border-radius: 50%;
}
.terminal__metric-dot--green { background: #28C840; animation: pulse 2s ease-in-out infinite; }
.terminal__metric-dot--blue  { background: #4A7EFF; }
@keyframes pulse {
  0%,100% { opacity: 1; }
  50%      { opacity: 0.4; }
}
.terminal__metric-val   { font-family: var(--font-mono); font-size: 11px; color: #82AAFF; }
.terminal__metric-label { font-size: 11px; color: rgba(255,255,255,0.3); }

/* ── Badges flotantes ── */
.about__badge {
  position: absolute;
  display: flex; align-items: center; gap: 10px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 10px 14px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.10);
  color: var(--blue);
  animation: float 5s ease-in-out infinite;
  z-index: 3;
}
.about__badge--tl { top: -16px; left: -20px; animation-delay: 0s; }
.about__badge--br { bottom: 16px; right: -20px; animation-delay: 1.8s; }

/* ── Dark override ── */
.hero-dark {
  background: #0d1117;
  border-top-color: rgba(255, 255, 255, 0.06);
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

.hero-dark .about__title,
.hero-dark h2 {
  color: #f1f5f9;
}

.hero-dark .text-blue {
  color: #6385f0;
}

.hero-dark .about__body {
  color: #64748b;
}

.hero-dark :deep(.label) {
  color: #6385f0;
}

.hero-dark .about__point {
  color: #94a3b8;
}

.hero-dark .about__stats {
  border-top-color: rgba(255, 255, 255, 0.08);
}

.hero-dark .about__stat-label {
  color: #475569;
}

/* Badges flotantes */
.hero-dark .about__badge {
  background: #111827;
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.4);
}

.hero-dark .about__badge-label {
  color: #475569;
}

/* Terminal — ya es oscura por defecto, solo ajustar sombra */
.hero-dark .terminal {
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.5),
    0 4px 16px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.12);
}

@keyframes float {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-7px); }
}

.about__badge-num   { font-family: var(--font-display); font-size: 14px; font-weight: 800; color: var(--blue); line-height: 1; }
.about__badge-label { font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-4); margin-top: 2px; }

/* ── Responsive ── */
@media (max-width: 900px) {
  .about__inner { grid-template-columns: 1fr; gap: 48px; }
  .about__badge { display: none; }
}
@media (max-width: 560px) {
  .about__stats { gap: 20px; }
}
</style>