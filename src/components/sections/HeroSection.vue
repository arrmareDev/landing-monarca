<template>
  <section class="hero">
    <section class="hero hero-dark">
      <NeuralNetwork />
      <ParticlesBg :count="16" />

      <div class="container hero__inner">

        <!-- Izquierda -->
        <div class="hero__left">
          <h1 class="hero__title">
            <span class="hero__title-static">Software que</span>
            <span class="hero__title-tw">
              <TypewriterText :phrases="phrases" />
            </span>
          </h1>

          <p class="hero__sub">
            Construimos soluciones digitales escalables y de alto rendimiento.
            De la idea al producto final, con precisión y excelencia técnica.
          </p>

          <div class="hero__btns">
            <a href="#servicios" class="btn btn-primary" @click.prevent="go('#servicios')">
              <span>Ver servicios</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </a>
            <a href="#contacto" class="btn btn-ghost" @click.prevent="go('#contacto')">
              Hablar con el equipo
            </a>
          </div>

          <div class="hero__stats">
            <div class="hero__stat" v-for="s in stats" :key="s.label">
              <span class="hero__stat-num">{{ s.num }}</span>
              <span class="hero__stat-label">{{ s.label }}</span>
            </div>
          </div>
        </div>

        <!-- Derecha — Elemento visual creativo -->
        <div class="hero__right">

          <!-- Órbita central -->
          <div class="orbit">

            <!-- Núcleo -->
            <div class="orbit__core">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>

            <!-- Anillo 1 -->
            <div class="orbit__ring orbit__ring--1">
              <div class="orbit__planet" v-for="p in ring1" :key="p.label" :style="p.style">
                <div class="orbit__planet-inner">
                  <div class="orbit__planet-icon" v-html="p.icon" />
                  <span>{{ p.label }}</span>
                </div>
              </div>
            </div>

            <!-- Anillo 2 -->
            <div class="orbit__ring orbit__ring--2">
              <div class="orbit__dot" v-for="i in 6" :key="i" :style="{ '--i': i }">
              </div>
            </div>

            <!-- Líneas de conexión SVG -->
            <svg class="orbit__lines" viewBox="0 0 400 400" fill="none">
              <line x1="200" y1="200" x2="200" y2="80" stroke="rgba(26,63,191,0.15)" stroke-width="1"
                stroke-dasharray="4 4" />
              <line x1="200" y1="200" x2="320" y2="260" stroke="rgba(26,63,191,0.15)" stroke-width="1"
                stroke-dasharray="4 4" />
              <line x1="200" y1="200" x2="80" y2="260" stroke="rgba(26,63,191,0.15)" stroke-width="1"
                stroke-dasharray="4 4" />
            </svg>

            <!-- Métricas flotantes -->
            <div class="orbit__metric orbit__metric--1">
              <span class="orbit__metric-num">99.9%</span>
              <span class="orbit__metric-label">Uptime</span>
            </div>
            <div class="orbit__metric orbit__metric--2">
              <span class="orbit__metric-num">&lt;24h</span>
              <span class="orbit__metric-label">Entrega inicial</span>
            </div>
            <div class="orbit__metric orbit__metric--3">
              <span class="orbit__metric-num">100%</span>
              <span class="orbit__metric-label">Código seguro</span>
            </div>

          </div>
        </div>
      </div>

      <!-- Ticker -->
      <div class="hero__ticker">
        <MarqueeTicker :items="tickerItems" />
      </div>
    </section>
  </section>
</template>

<script setup>
import NeuralNetwork from '@/components/effects/NeuralNetwork.vue'
import ParticlesBg from '@/components/effects/ParticlesBg.vue'
import TypewriterText from '@/components/effects/TypewriterText.vue'
import MarqueeTicker from '@/components/ui/MarqueeTicker.vue'

const phrases = ['escala contigo', 'crea valor', 'genera resultados', 'hace la diferencia']

const stats = [
  { num: '100%', label: 'Código a medida' },
  { num: 'Full', label: 'Stack cubierto' },
  { num: '3+', label: 'Frameworks backend' },
  { num: '∞', label: 'Escalabilidad' },
]

const icon = (d) => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${d}</svg>`

const ring1 = [
  {
    label: 'Backend',
    icon: icon('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'),
    style: { '--angle': '270deg' }
  },
  {
    label: 'Frontend',
    icon: icon('<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'),
    style: { '--angle': '30deg' }
  },
  {
    label: 'Base de datos',
    icon: icon('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>'),
    style: { '--angle': '150deg' }
  },
]

const tickerIcon = (d) => `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`


const tickerItems = [
  { text: 'Código limpio', icon: tickerIcon('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>') },
  { text: 'Entregas puntuales', icon: tickerIcon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>') },
  { text: 'Soporte continuo', icon: tickerIcon('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>') },
  { text: 'Sin letra chica', icon: tickerIcon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/>') },
  { text: 'Arquitectura sólida', icon: tickerIcon('<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>') },
  { text: 'Documentación clara', icon: tickerIcon('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>') },
  { text: 'Equipo dedicado', icon: tickerIcon('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>') },
  { text: 'Tecnología moderna', icon: tickerIcon('<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>') },
]


const go = (h) => document.querySelector(h)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
</script>

<style scoped>
/* ── Hero ocupa TODA la pantalla ── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--bg);
}

.hero :deep(canvas),
.hero :deep(.particles) {
  position: absolute !important;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
  pointer-events: none;
  z-index: 0;
}

.hero__inner {
  position: relative;
  z-index: 2;
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 60%) minmax(0, 40%);
  gap: 48px;
  align-items: center;
  padding-top: calc(var(--nav-h) + 40px);
  padding-bottom: 40px;
}

.hero__left {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.hero__title {
  display: flex;
  flex-direction: column;
  font-size: clamp(36px, 4.8vw, 76px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
  max-width: 100%;
}

.hero__title-static {
  display: block;
  color: var(--text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hero__title-tw {
  display: block;
  min-height: 1.3em;
  line-height: 1.2;
  overflow: visible;
  max-width: 100%;
  padding-right: 12px;
  padding-bottom: 0.08em;
}

.hero__sub {
  font-size: clamp(14px, 1.4vw, 16px);
  color: var(--text-3);
  line-height: 1.75;
  max-width: 460px;
  margin-bottom: 32px;
}

.hero__btns {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.hero__stats {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}

.hero__stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.hero__stat-num {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 800;
  color: var(--blue);
  line-height: 1;
}

.hero__stat-label {
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-4);
}

/* ── ÓRBITA ── */
.hero__right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbit {
  position: relative;
  width: 380px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbit__core {
  position: relative;
  z-index: 4;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 0 0 12px rgba(26, 63, 191, 0.1), 0 0 0 24px rgba(26, 63, 191, 0.05);
  animation: corePulse 3s ease-in-out infinite;
}

@keyframes corePulse {

  0%,
  100% {
    box-shadow: 0 0 0 12px rgba(26, 63, 191, 0.1), 0 0 0 24px rgba(26, 63, 191, 0.05);
  }

  50% {
    box-shadow: 0 0 0 16px rgba(26, 63, 191, 0.15), 0 0 0 32px rgba(26, 63, 191, 0.07);
  }
}

.orbit__ring--1 {
  position: absolute;
  inset: 0;
  animation: spin1 18s linear infinite;
}

.orbit__planet {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  --r: 145px;
  transform: rotate(var(--angle)) translateY(calc(-1 * var(--r)));
}

.orbit__planet-inner {
  transform: rotate(calc(-1 * var(--angle)));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  animation: counterSpin1 18s linear infinite;
}

@keyframes spin1 {
  to {
    transform: rotate(360deg);
  }
}

@keyframes counterSpin1 {
  to {
    transform: rotate(-360deg);
  }
}

.orbit__planet-inner>div {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid var(--border);
  box-shadow: 0 4px 16px rgba(26, 63, 191, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue);
}

.orbit__planet-inner>span {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--text-3);
  white-space: nowrap;
}

.orbit__ring--2 {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 1px dashed rgba(26, 63, 191, 0.15);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: spin2 28s linear infinite reverse;
}

.orbit__dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--blue);
  opacity: 0.4;
  --r: 160px;
  transform: rotate(calc(var(--i) * 60deg)) translateY(calc(-1 * var(--r))) translate(-50%, -50%);
}

@keyframes spin2 {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.orbit__lines {
  position: absolute;
  inset: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  pointer-events: none;
  z-index: 1;
}

.orbit__metric {
  position: absolute;
  z-index: 5;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 14px;
  box-shadow: 0 4px 20px rgba(26, 63, 191, 0.08);
  display: flex;
  flex-direction: column;
  gap: 2px;
  animation: float 4s ease-in-out infinite;
}

.orbit__metric--1 {
  top: 10px;
  right: -20px;
  animation-delay: 0s;
}

.orbit__metric--2 {
  bottom: 40px;
  left: -30px;
  animation-delay: 1.3s;
}

.orbit__metric--3 {
  bottom: -10px;
  right: 10px;
  animation-delay: 0.7s;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

.orbit__metric-num {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 800;
  color: var(--blue);
  line-height: 1;
}

.orbit__metric-label {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-4);
}

/* ── Ticker ── */
.hero__ticker {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 16px 0;
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  flex-shrink: 0;
}

/* ════════════════════════════════════════
   RESPONSIVE
════════════════════════════════════════ */

/* Nest Hub Max (1280px) / Asus Zenbook Fold */
@media (min-width: 1200px) and (max-width: 1280px) {
  .hero__title {
    font-size: clamp(40px, 4vw, 64px);
  }

  .orbit {
    width: 340px;
    height: 340px;
  }
}

/* Surface Duo abierto / Zenbook Fold (~1114px) */
@media (min-width: 1000px) and (max-width: 1180px) {
  .hero__inner {
    gap: 32px;
  }

  .orbit {
    width: 320px;
    height: 320px;
  }

  .orbit__planet {
    --r: 120px;
  }
}

/* iPad Pro / Surface Pro 7 (1024px) */
@media (max-width: 1024px) {
  .orbit {
    width: 300px;
    height: 300px;
  }

  .orbit__planet {
    --r: 110px;
  }

  .orbit__ring--2 {
    width: 260px;
    height: 260px;
  }

  .orbit__metric--1 {
    right: -10px;
  }

  .orbit__metric--2 {
    left: -10px;
  }
}

/* iPad Air / iPad Mini / Surface Duo / Nest Hub (900px) */
@media (max-width: 900px) {
  .hero {
    min-height: unset;
  }

  .hero__inner {
    grid-template-columns: 1fr;
    padding-top: calc(var(--nav-h) + 24px);
    padding-bottom: 24px;
    gap: 32px;
    align-items: flex-start;
    min-height: unset;
  }

  .hero__right {
    display: none;
  }

  .hero__title {
    font-size: clamp(34px, 8vw, 48px);
  }

  .hero__sub {
    font-size: 15px;
    margin-bottom: 24px;
  }

  .hero__btns {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 28px;
  }

  .hero__stats {
    gap: 16px;
  }

  .hero :deep(canvas) {
    opacity: 0.2 !important;
  }
}

/* Samsung Galaxy S20 Ultra / S8+ / Pixel 7 / iPhone 14 Pro Max / XR (430px) */
@media (max-width: 430px) {
  .hero__inner {
    padding-top: calc(var(--nav-h) + 20px);
    padding-bottom: 20px;
  }

  .hero__title {
    font-size: clamp(32px, 8.5vw, 40px);
  }

  .hero__sub {
    font-size: 14px;
    line-height: 1.65;
    margin-bottom: 20px;
  }

  .hero__btns {
    gap: 10px;
    margin-bottom: 24px;
  }

  .hero__stats {
    gap: 14px;
  }

  .hero__stat-num {
    font-size: 20px;
  }

  .hero__stat-label {
    font-size: 9px;
  }
}

/* iPhone 12 Pro / Samsung Galaxy A51/71 (390px) */
@media (max-width: 390px) {
  .hero__title {
    font-size: clamp(30px, 8vw, 36px);
  }

  .hero__stats {
    gap: 12px;
    flex-wrap: wrap;
  }

  .hero__stat-num {
    font-size: 18px;
  }
}

/* iPhone SE (375px) */
@media (max-width: 375px) {
  .hero__inner {
    padding-top: calc(var(--nav-h) + 12px);
    padding-bottom: 16px;
    gap: 24px;
  }

  .hero__title {
    font-size: clamp(28px, 7.5vw, 34px);
    margin-bottom: 16px;
  }

  .hero__sub {
    font-size: 13px;
    margin-bottom: 18px;
  }

  .hero__btns {
    gap: 8px;
    margin-bottom: 20px;
  }

  .hero__stats {
    gap: 10px;
    padding-top: 14px;
  }

  .hero__stat-num {
    font-size: 17px;
  }

  .hero__stat-label {
    font-size: 9px;
  }
}

/* Galaxy Z Fold 5 pantalla externa (344px) */
@media (max-width: 344px) {
  .hero__title {
    font-size: clamp(26px, 7vw, 30px);
  }

  .hero__sub {
    font-size: 12px;
  }

  .hero__stats {
    gap: 8px;
  }

  .hero__stat-num {
    font-size: 16px;
  }
}
</style>