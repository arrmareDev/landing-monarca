<template>
  <div class="ticker">
    <div class="ticker__track">
      <!-- Duplicamos 4 veces para que el loop sea perfecto sin saltos -->
      <div class="ticker__group" v-for="n in 4" :key="n" aria-hidden="n > 1">
        <span
          v-for="item in items"
          :key="item.text"
          class="ticker__item"
        >
          <span class="ticker__icon" v-html="item.icon" />
          {{ item.text }}
          <span class="ticker__sep" aria-hidden="true">·</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.ticker {
  width: 100%;
  overflow: hidden;
  /* Bordes con fade para que parezca que viene del infinito */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
}

.ticker__track {
  display: flex;
  width: max-content;
  animation: ticker-scroll 28s linear infinite;
}

/* Pausa al hover */
.ticker:hover .ticker__track {
  animation-play-state: paused;
}

.ticker__group {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.ticker__item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 28px;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--text-3);
  white-space: nowrap;
  transition: color var(--t-fast);
}

.ticker__item:hover { color: var(--blue); }

.ticker__icon {
  display: flex;
  align-items: center;
  color: var(--green);
  flex-shrink: 0;
}

.ticker__sep {
  color: var(--text-4);
  margin-left: 20px;
}

/* Animación del scroll infinito */
/* translateX al -25% porque tenemos 4 copias del grupo
   cuando llega al 25% ya se ve igual que el inicio → loop perfecto */
@keyframes ticker-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-25%); }
}

/* Responsive — más lento en móvil */
@media (max-width: 640px) {
  .ticker__track { animation-duration: 18s; }
  .ticker__item  { font-size: 12px; padding: 0 20px; }
}
</style>