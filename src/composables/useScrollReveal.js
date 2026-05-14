import { onMounted, onUnmounted } from 'vue'

/**
 * useScrollReveal
 * Observa todos los elementos con clase .reveal dentro del scope
 * y les añade la clase .visible cuando entran al viewport.
 *
 * Uso en componente:
 *   import { useScrollReveal } from '@/composables/useScrollReveal.js'
 *   useScrollReveal()
 */
export function useScrollReveal(selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale') {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) // solo una vez
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll(selector).forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}