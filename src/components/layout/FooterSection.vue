<template>
  <footer class="footer">
    <div class="container footer__inner">

      <!-- Brand -->
      <div class="footer__brand">
        <img src="/logmonarca.png" alt="Monarcacore" class="footer__logo" />
        <p class="footer__tagline">Desarrollo de software · Chiclayo, Perú</p>
        <p class="footer__desc">
          Construimos soluciones digitales escalables para empresas que quieren crecer con software propio.
        </p>

        <!-- Redes sociales -->
        <div class="footer__socials">
          <a href="https://www.facebook.com/Monarca.Core" target="_blank" rel="noopener" class="footer__social" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@monarcatechnology" target="_blank" rel="noopener" class="footer__social" aria-label="TikTok">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/monarcacore" target="_blank" rel="noopener" class="footer__social" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://wa.me/51969943657" target="_blank" rel="noopener" class="footer__social footer__social--wa" aria-label="WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Nav -->
      <nav class="footer__nav" aria-label="Footer navigation">
        <div class="footer__nav-col" v-for="col in nav" :key="col.heading">
          <p class="footer__nav-heading">{{ col.heading }}</p>
          <ul>
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href" class="footer__nav-link" @click.prevent="scrollTo(link.href)">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </nav>

    </div>

    <div class="container footer__bottom">
      <p class="footer__copy">© {{ year }} Monarcacore. Todos los derechos reservados.</p>
      <p class="footer__made">Hecho con precisión · Chiclayo, Perú</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const nav = [
  {
    heading: 'Servicios',
    links: [
      { label: 'Desarrollo Web',       href: '#servicios' },
      { label: 'Aplicaciones Móviles', href: '#servicios' },
      { label: 'APIs & Integraciones', href: '#servicios' },
      { label: 'Plataforma SaaS',      href: '#servicios' },
      { label: 'Sistema ERP / CRM',    href: '#servicios' },
      { label: 'Soluciones con IA',    href: '#servicios' },
    ],
  },
  {
    heading: 'Empresa',
    links: [
      { label: 'Quiénes somos', href: '#nosotros'  },
      { label: 'Proceso',       href: '#proceso'   },
      { label: 'Tecnología',    href: '#tecnologia'},
    ],
  },
  {
    heading: 'Contacto',
    links: [
      { label: 'Iniciar proyecto',  href: '#contacto' },
      { label: 'monarcatechnology01@gmail.com', href: '#contacto' },
      { label: '+51 969 943 657',   href: '#contacto' },
    ],
  },
]

const scrollTo = (hash) => {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>

.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: #060810;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 48px;
  padding-top: 60px;
  padding-bottom: 48px;
  align-items: flex-start;
}

/* ── Brand ── */
.footer__brand {
  max-width: 100%;
}

.footer__logo {
  height: 40px;
  width: auto;
  margin-bottom: 14px;
}

.footer__tagline {
  font-size: 12px;
  color: var(--white-dimmer);
  font-family: var(--font-mono);
  letter-spacing: 0.06em;
  margin-bottom: 12px;
}

.footer__desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 20px;
}

/* ── Redes sociales ── */
.footer__socials {
  display: flex;
  gap: 10px;
}

.footer__social {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: background var(--t-fast), border-color var(--t-fast), color var(--t-fast), transform var(--t-fast);
}
.footer__social:hover {
  background: rgba(65, 105, 232, 0.15);
  border-color: rgba(65, 105, 232, 0.35);
  color: #6385f0;
  transform: translateY(-2px);
}
.footer__social--wa:hover {
  background: rgba(37, 211, 102, 0.12);
  border-color: rgba(37, 211, 102, 0.3);
  color: #25d366;
}

/* ── Nav ── */
.footer__nav {
  display: contents;
}

.footer__nav-col {
  min-width: 0;
}

.footer__nav-heading {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6385f0;
  margin-bottom: 16px;
}

.footer__nav-col ul { display: flex; flex-direction: column; gap: 10px; }

.footer__nav-link {
  font-size: 13px;
  font-weight: 300;
  color: #475569;
  transition: color var(--t-fast);
  cursor: pointer;
}
.footer__nav-link:hover { color: #f1f5f9; }

/* ── Bottom ── */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer__copy,
.footer__made {
  font-size: 12px;
  color: #334155;
  font-family: var(--font-mono);
  letter-spacing: 0.06em;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}
@media (max-width: 560px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .footer__bottom {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}

</style>