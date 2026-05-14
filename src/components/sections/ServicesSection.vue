<template>
  <section class="section services hero-dark">
    <div class="container">

      <div class="services__header">
        <div class="reveal">
          <SectionLabel>Servicios</SectionLabel>
          <h2 class="section-title services__title">Lo que construimos</h2>
        </div>
        <p class="services__note reveal reveal-right">
          Soluciones de alta calidad para empresas que quieren
          crecer con software propio.
        </p>
      </div>

      <div class="services__grid">
        <div
          v-for="(s, i) in services"
          :key="s.title"
          class="scard reveal card-lift"
          :class="`reveal-d${Math.min(i + 1, 5)}`"
        >
          <!-- Top: número + ícono -->
          <div class="scard__top">
            <span class="scard__num font-mono">{{ String(i+1).padStart(2,'0') }}</span>
            <div class="scard__icon" v-html="s.icon" />
          </div>

          <!-- Título -->
          <h3 class="scard__title">{{ s.title }}</h3>

          <!-- Descripción -->
          <p class="scard__desc">{{ s.desc }}</p>

          <!-- Tags -->
          <div class="scard__tags">
            <span v-for="t in s.tags" :key="t" class="scard__tag font-mono">{{ t }}</span>
          </div>

          <!-- Línea animada inferior -->
          <div class="scard__line" />

          <!-- Flecha hover -->
          <div class="scard__arrow">
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import SectionLabel from '@/components/ui/SectionLabel.vue'

const services = [
  {
    title: 'Desarrollo Web a Medida',
    desc:  'Aplicaciones web robustas con arquitectura limpia, código escalable y entregas puntuales.',
    tags:  ['Laravel', 'Django', 'Spring Boot'],
    icon:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  },
  {
    title: 'Aplicaciones Móviles',
    desc:  'Apps nativas e híbridas para iOS y Android con experiencias fluidas y rendimiento real.',
    tags:  ['React Native', 'Flutter', 'iOS', 'Android'],
    icon:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  },
  {
    title: 'Plataforma SaaS',
    desc:  'De tu idea a un producto SaaS real: multi-tenancy, facturación, roles y despliegue en cloud.',
    tags:  ['Multi-tenant', 'Billing', 'Cloud'],
    icon:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
  },
  {
    title: 'Sistema ERP / CRM',
    desc:  'Gestión empresarial a tu medida: ventas, inventario, RRHH, facturación y reportería.',
    tags:  ['ERP', 'CRM', 'PostgreSQL', 'MySQL'],
    icon:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  },
  {
    title: 'APIs & Integraciones',
    desc:  'Conectamos tus sistemas con APIs REST bien diseñadas, documentadas, seguras y escalables.',
    tags:  ['REST API', 'GraphQL', 'Webhooks'],
    icon:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>',
  },
  {
    title: 'Infraestructura Cloud & DevOps',
    desc:  'Despliegue, escalabilidad y alta disponibilidad con pipelines CI/CD y monitoreo continuo.',
    tags:  ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
    icon:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  },
  {
    title: 'Soluciones con Inteligencia Artificial',
    desc:  'Automatización inteligente, chatbots, procesamiento de documentos y modelos de lenguaje integrados.',
    tags:  ['LLMs', 'RAG', 'OpenAI', 'Automatización'],
    icon:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="9" r="1" fill="currentColor"/></svg>',
  },
  {
    title: 'Analítica & Business Intelligence',
    desc:  'Dashboards, reportes y pipelines de datos para tomar decisiones con información en tiempo real.',
    tags:  ['Dashboards', 'ETL', 'PostgreSQL', 'BI'],
    icon:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  },
  {
    title: 'Mantenimiento & Soporte',
    desc:  'Monitoreamos, actualizamos y corregimos tus sistemas para que operen sin interrupciones.',
    tags:  ['SLA', 'Monitoreo', 'Bugfix', 'Updates'],
    icon:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  },
]
</script>

<style scoped>
.services { background: var(--bg); }

/* ── Header ── */
.services__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  margin-bottom: 52px;
}
.services__title { margin-top: 12px; }
.services__note  {
  font-size: 14px; color: var(--text-3);
  max-width: 280px; text-align: right;
  line-height: 1.7; flex-shrink: 0;
}

/* ── Grid ── */
.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* ── Card ── */
.scard {
  position: relative;
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 28px 28px;
  overflow: hidden;
  cursor: default;
  display: flex;
  flex-direction: column;
  transition:
    border-color var(--t-med) var(--ease),
    box-shadow   var(--t-med) var(--ease),
    transform    var(--t-med) var(--ease-out),
    background   var(--t-med) var(--ease);
}
.scard:hover {
  background: var(--bg);
  border-color: var(--border-blue);
  box-shadow: 0 12px 40px rgba(26,63,191,0.09);
  transform: translateY(-4px);
}

/* Línea azul top */
.scard::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--blue) 0%, var(--blue-3) 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--t-slow) var(--ease-out);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}
.scard:hover::before { transform: scaleX(1); }

/* Top */
.scard__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.scard__num {
  font-size: 11px; letter-spacing: 0.18em;
  color: var(--blue);
}
.scard__icon {
  width: 44px; height: 44px;
  border-radius: 11px;
  background: var(--blue-light);
  border: 1px solid var(--border-blue);
  display: flex; align-items: center; justify-content: center;
  color: var(--blue);
  transition: background var(--t-med), color var(--t-med), transform var(--t-med) var(--ease-out);
}
.scard:hover .scard__icon {
  background: var(--blue);
  color: #fff;
  transform: rotate(-6deg) scale(1.05);
}

/* Texto */
.scard__title {
  font-family: var(--font-display);
  font-size: 19px; font-weight: 700;
  color: var(--text); margin-bottom: 10px;
  letter-spacing: -0.01em; line-height: 1.2;
  transition: color var(--t-fast);
}
.scard:hover .scard__title { color: var(--blue); }

.scard__desc {
  font-size: 14px; color: var(--text-3);
  line-height: 1.7; margin-bottom: 20px;
  flex: 1;
}

/* Tags */
.scard__tags {
  display: flex; flex-wrap: wrap; gap: 7px;
  margin-bottom: 0;
}
.scard__tag {
  font-size: 10px; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--text-4);
  background: var(--bg-3);
  border: 1px solid var(--border);
  padding: 4px 10px; border-radius: 4px;
  transition: background var(--t-fast), border-color var(--t-fast), color var(--t-fast);
}
.scard:hover .scard__tag {
  background: var(--blue-light);
  border-color: var(--border-blue);
  color: var(--blue);
}

/* Línea inferior animada */
.scard__line {
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 2px;
  background: linear-gradient(90deg, var(--blue), var(--blue-3));
  transition: width var(--t-slow) var(--ease-out);
}
.scard:hover .scard__line { width: 100%; }


.scard__arrow {
  position: absolute;
  bottom: 20px; right: 20px;
  width: 32px; height: 32px;
  border-radius: 8px;
  background: var(--blue-light);
  border: 1px solid var(--border-blue);
  display: flex; align-items: center; justify-content: center;
  color: var(--blue);
  opacity: 0;
  transform: translate(4px, 4px);
  transition: opacity var(--t-med), transform var(--t-med) var(--ease-out);
}
.scard:hover .scard__arrow {
  opacity: 1;
  transform: translate(0, 0);
}

/* ── Dark override ── */
.hero-dark {
  background: #0a0f1e;
}

.hero-dark .services__title,
.hero-dark h2 {
  color: #f1f5f9;
}

.hero-dark .services__note {
  color: #64748b;
}

.hero-dark :deep(.label) {
  color: #6385f0;
}

.hero-dark .scard {
  background: #111827;
  border-color: rgba(255, 255, 255, 0.08);
}

.hero-dark .scard:hover {
  background: #1e2a45;
  border-color: rgba(65, 105, 232, 0.35);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.hero-dark .scard__title {
  color: #f1f5f9;
}

.hero-dark .scard__desc {
  color: #94a3b8;
}

.hero-dark .scard__tag {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.08);
  color: #64748b;
}

.hero-dark .scard:hover .scard__tag {
  background: rgba(65, 105, 232, 0.15);
  border-color: rgba(65, 105, 232, 0.35);
  color: #6385f0;
}

.hero-dark .scard__icon {
  background: rgba(65, 105, 232, 0.15);
  border-color: rgba(65, 105, 232, 0.35);
}

.hero-dark .scard__num {
  color: #6385f0;
}

.hero-dark .scard__arrow {
  background: rgba(65, 105, 232, 0.15);
  border-color: rgba(65, 105, 232, 0.35);
}

/* ── Responsive ── */
@media (max-width: 1024px) { .services__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) {
  .services__header { flex-direction: column; align-items: flex-start; }
  .services__note   { text-align: left; max-width: 100%; }
  .services__grid   { grid-template-columns: 1fr; gap: 14px; }
  .scard { padding: 24px 20px 22px; }
}
</style>