<template>
  <canvas ref="canvasRef" class="neural-canvas" aria-hidden="true" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animId = null
let nodes  = []

const COUNT = 70       // más nodos
const DIST  = 160      // mayor distancia de conexión
const SPEED = 0.4      // un poco más de movimiento

const resize = () => {
  const c = canvasRef.value
  if (!c) return
  c.width  = c.offsetWidth
  c.height = c.offsetHeight
}

const init = () => {
  const c = canvasRef.value
  nodes = Array.from({ length: COUNT }, () => ({
    x:     Math.random() * c.width,
    y:     Math.random() * c.height,
    vx:    (Math.random() - 0.5) * SPEED,
    vy:    (Math.random() - 0.5) * SPEED,
    r:     Math.random() * 2 + 1,          // nodos más grandes
    pulse: Math.random() * Math.PI * 2,
  }))
}

const draw = () => {
  const c = canvasRef.value
  if (!c) return
  const ctx = c.getContext('2d')
  ctx.clearRect(0, 0, c.width, c.height)

  nodes.forEach(n => {
    n.x += n.vx
    n.y += n.vy
    n.pulse += 0.02

    if (n.x < 0 || n.x > c.width)  n.vx *= -1
    if (n.y < 0 || n.y > c.height) n.vy *= -1

    const bright = 0.5 + Math.sin(n.pulse) * 0.2

    // Conexiones entre nodos
    nodes.forEach(m => {
      if (m === n) return
      const dx   = n.x - m.x
      const dy   = n.y - m.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < DIST) {
        // Opacidad mayor cuanto más cerca estén
        const alpha = (1 - dist / DIST) * 0.55
        ctx.beginPath()
        ctx.moveTo(n.x, n.y)
        ctx.lineTo(m.x, m.y)
        ctx.strokeStyle = `rgba(26, 63, 191, ${alpha})`
        ctx.lineWidth   = 0.9
        ctx.stroke()
      }
    })

    // Nodo principal — más visible
    ctx.beginPath()
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(26, 63, 191, ${bright})`
    ctx.fill()

    // Halo exterior del nodo
    ctx.beginPath()
    ctx.arc(n.x, n.y, n.r * 3.5, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(26, 63, 191, ${bright * 0.08})`
    ctx.fill()
  })

  animId = requestAnimationFrame(draw)
}

const handleResize = () => { resize(); init() }

onMounted(() => {
  resize()
  init()
  draw()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.neural-canvas {
  position: absolute;  /* ← debe ser absolute */
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>