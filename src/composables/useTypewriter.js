import { ref, onMounted, onUnmounted } from 'vue'

/**
 * useTypewriter
 * @param {string[]} phrases   - Lista de frases a animar
 * @param {number}   typeSpeed - ms por carácter al escribir
 * @param {number}   deleteSpeed - ms por carácter al borrar
 * @param {number}   pause     - ms de pausa al terminar frase
 */
export function useTypewriter(phrases = [], typeSpeed = 75, deleteSpeed = 40, pause = 2200) {
  const displayed    = ref('')
  const phraseIndex  = ref(0)
  const charIndex    = ref(0)
  const isDeleting   = ref(false)
  let timer          = null

  const tick = () => {
    const current = phrases[phraseIndex.value] ?? ''

    if (!isDeleting.value) {
      // Escribiendo
      displayed.value = current.slice(0, charIndex.value + 1)
      charIndex.value++

      if (charIndex.value > current.length) {
        // Terminó de escribir → pausa antes de borrar
        isDeleting.value = true
        timer = setTimeout(tick, pause)
        return
      }
      timer = setTimeout(tick, typeSpeed)
    } else {
      // Borrando
      displayed.value = current.slice(0, charIndex.value - 1)
      charIndex.value--

      if (charIndex.value <= 0) {
        // Terminó de borrar → siguiente frase
        isDeleting.value = false
        phraseIndex.value = (phraseIndex.value + 1) % phrases.length
        timer = setTimeout(tick, 400)
        return
      }
      timer = setTimeout(tick, deleteSpeed)
    }
  }

  onMounted(() => {
    if (phrases.length) timer = setTimeout(tick, 600)
  })

  onUnmounted(() => {
    clearTimeout(timer)
  })

  return { displayed }
}