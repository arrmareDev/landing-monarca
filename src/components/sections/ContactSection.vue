<template>
  <section class="section contact">
    <div class="container">

      <div class="contact__header reveal">
        <SectionLabel>Contacto</SectionLabel>
        <h2 class="section-title contact__title">Hablemos de tu proyecto</h2>
      </div>

      <div class="contact__grid">

        <!-- Formulario -->
        <div class="contact__form-wrap reveal">
          <form class="contact__form" @submit.prevent="submitForm" novalidate>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="name">Nombre</label>
                <input id="name" v-model="form.name" type="text" class="form-input" placeholder="Tu nombre" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="email">Correo</label>
                <input id="email" v-model="form.email" type="email" class="form-input" placeholder="correo@empresa.com"
                  required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="service">Servicio de interés</label>
              <select id="service" v-model="form.service" class="form-input form-select">
                <option value="">Selecciona un servicio</option>
                <option v-for="s in serviceOptions" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="message">Cuéntanos tu proyecto</label>
              <textarea id="message" v-model="form.message" class="form-input form-textarea"
                placeholder="Describe brevemente tu proyecto o necesidad..." rows="5" required />
            </div>

            <ButtonPrimary type="submit" :loading="sending" :arrow="!sending">
              Enviar mensaje
            </ButtonPrimary>

            <p v-if="sent" class="contact__success">
              ✓ Mensaje enviado. Te contactamos pronto.
            </p>

          </form>
        </div>

        <!-- Columna derecha -->
        <div class="contact__info reveal reveal-right">

          <p class="contact__tagline">
            Respondemos en menos de 24 h. Cuéntanos tu idea y construimos
            juntos la solución técnica que necesitas.
          </p>

          <div class="contact__info-list">
            <div class="contact__info-item">
              <div class="contact__icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <span class="contact__info-label">Correo</span>
                <span class="contact__info-val">monarcatechnology01@gmail.com</span>
              </div>
            </div>

            <div class="contact__info-item">
              <div class="contact__icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
              </div>
              <div>
                <span class="contact__info-label">WhatsApp</span>
                <span class="contact__info-val">+51 969 943 657</span>
              </div>
            </div>

            <div class="contact__info-item">
              <div class="contact__icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <span class="contact__info-label">Tiempo de respuesta</span>
                <span class="contact__info-val">Menos de 24 horas hábiles</span>
              </div>
            </div>

            <div class="contact__info-item">
              <div class="contact__icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div>
                <span class="contact__info-label">Ubicación</span>
                <span class="contact__info-val">Chiclayo, Perú</span>
              </div>
            </div>
          </div>

          <div class="contact__stats">
            <div class="contact__stat">
              <span class="contact__stat-num">8+</span>
              <span class="contact__stat-lbl">Tecnologías dominadas</span>
            </div>
            <div class="contact__stat">
              <span class="contact__stat-num">24h</span>
              <span class="contact__stat-lbl">Tiempo de respuesta</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionLabel from '@/components/ui/SectionLabel.vue'
import ButtonPrimary from '@/components/ui/ButtonPrimary.vue'

const form = ref({ name: '', email: '', service: '', message: '' })
const sending = ref(false)
const sent = ref(false)

const serviceOptions = [
  'Desarrollo Web a Medida',
  'Aplicaciones Móviles',
  'Plataforma SaaS',
  'Sistema ERP / CRM',
  'APIs & Integraciones',
  'Infraestructura Cloud & DevOps',
  'Soluciones con Inteligencia Artificial',
  'Analítica & Business Intelligence',
  'Mantenimiento & Soporte',
  'Otro',
]

const submitForm = async () => {
  // 1. Activar estado de carga en el botón
  sending.value = true

  // 2. Preparar los datos para WhatsApp
  const telefono = '51969943657' 
  const textoMensaje = `Hola Monarca Core, me gustaría hablar sobre un proyecto:
  
*Nombre:* ${form.value.name}
*Correo:* ${form.value.email}
*Servicio de interés:* ${form.value.service}

*Detalles del proyecto:* ${form.value.message}`

  const mensajeCodificado = encodeURIComponent(textoMensaje)
  const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`

  // 3. Pequeña pausa simulada para feedback visual (opcional, buena práctica de UX)
  await new Promise(r => setTimeout(r, 600))
  
  // 4. Abrir WhatsApp en una nueva pestaña
  window.open(urlWhatsApp, '_blank')

  // 5. Restablecer estados y limpiar el formulario
  sending.value = false
  sent.value = true
  form.value = { name: '', email: '', service: '', message: '' }
  
  // 6. Ocultar el mensaje de éxito después de 5 segundos
  setTimeout(() => (sent.value = false), 5000)
}
</script>

<style scoped>
.contact {
  background: var(--black-3);
  border-top: 1px solid var(--border);
}

.contact__header {
  margin-bottom: 56px;
}

.contact__title {
  margin-top: 12px;
}

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

/* ── Formulario ───────────────────────────────────────────── */
.contact__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* En Contact.vue — style scoped */
.contact__form :deep(.btn) {
  width: 100%;
  justify-content: center;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--white-dimmer);
}

.form-input {
  background: var(--black-2);
  border: 1px solid var(--border);
  color: var(--white);
  font-family: var(--font-body);
  font-size: 14px;
  padding: 12px 16px;
  border-radius: var(--radius);
  outline: none;
  transition: border-color var(--t-fast) var(--ease),
    box-shadow var(--t-fast) var(--ease);
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
}

.form-input::placeholder {
  color: var(--white-dimmer);
}

.form-input:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 3px var(--blue-glow-sm);
}

.form-select {
  cursor: pointer;
}

.form-select option {
  background: var(--black-2);
  color: var(--white);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.contact__success {
  font-size: 13px;
  color: #4ADE80;
  font-family: var(--font-mono);
  letter-spacing: 0.06em;
}

/* ── Columna derecha ──────────────────────────────────────── */
.contact__info {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.contact__tagline {
  font-size: 15px;
  color: var(--white-dimmer);
  line-height: 1.7;
  border-left: 2px solid var(--blue);
  padding-left: 16px;
  border-radius: 0;
}

.contact__info-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact__info-item {
  display: flex;
  align-items: center;
  gap: 14px;
}

.contact__icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: var(--radius);
  background: var(--blue-light);
  border: 1px solid var(--border-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue);
  flex-shrink: 0;
}

.contact__info-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--white-dimmer);
  margin-bottom: 3px;
}

.contact__info-val {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--white);
}

/* Stats */
.contact__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.contact__stat {
  background: var(--black-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact__stat-num {
  font-size: 26px;
  font-weight: 700;
  color: var(--blue);
  letter-spacing: -0.03em;
  line-height: 1;
}

.contact__stat-lbl {
  font-size: 12px;
  color: var(--white-dimmer);
}

/* ── Consistencia con secciones dark ── */
.contact {
  background: #0d1117;
  border-top-color: rgba(255, 255, 255, 0.06);
}

.contact__title,
.contact__header :deep(h2) {
  color: #f1f5f9;
}

.contact__header :deep(.label) {
  color: #6385f0;
}

/* ── Contraste de inputs en dark ── */
.form-input {
  background: #1a2235;
  border-color: rgba(255, 255, 255, 0.12);
  color: #f1f5f9;
}

.form-input:hover {
  border-color: rgba(255, 255, 255, 0.2);
}

.form-input:focus {
  background: #1e2845;
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(26, 63, 191, 0.2);
}

.form-input::placeholder {
  color: #475569;
}

.form-select option {
  background: #1a2235;
}

/* ── Responsive ───────────────────────────────────────────── */
@media (max-width: 900px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>