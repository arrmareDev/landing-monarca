<template>
  <div class="stat-card">
    <span class="stat-card__num">{{ num }}</span>
    <span class="stat-card__label">{{ label }}</span>
  </div>
</template>
<script setup>
defineProps({ num: { type: String, required: true }, label: { type: String, required: true } })
</script>
<style scoped>
.stat-card { border-left: 3px solid var(--blue); padding-left: 20px; display: flex; flex-direction: column; gap: 5px; }
.stat-card__num {
  font-family: var(--font-display); font-size: 42px; font-weight: 800;
  color: var(--ink); letter-spacing: -0.03em; line-height: 1;
}
.stat-card__label {
  font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--text-4); font-family: var(--font-mono);
}
</style>