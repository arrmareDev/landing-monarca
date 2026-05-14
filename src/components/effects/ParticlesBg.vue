<template>
  <div class="particles" aria-hidden="true">
    <span v-for="i in count" :key="i" class="particle" :style="getStyle(i)" />
  </div>
</template>
<script setup>
defineProps({ count: { type: Number, default: 16 } })
const getStyle = (i) => {
  const seed = i * 137.508
  return {
    left:              `${(seed % 100).toFixed(1)}%`,
    top:               `${((seed * 1.3) % 100).toFixed(1)}%`,
    animationDelay:    `${((seed * 0.07) % 7).toFixed(2)}s`,
    animationDuration: `${(5 + (seed % 5)).toFixed(1)}s`,
    width:             `${1 + (i % 2)}px`,
    height:            `${1 + (i % 2)}px`,
    opacity:           (0.1 + (i % 4) * 0.04).toFixed(2),
    background:        'var(--blue)',
  }
}
</script>
<style scoped>
.particles {
  position: absolute;  /* ← debe ser absolute */
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.particle  { position: absolute; border-radius: 50%; animation: pFloat linear infinite; }
@keyframes pFloat {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-16px); }
}
</style>