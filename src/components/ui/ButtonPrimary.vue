<template>
  <button
    class="btn btn-primary"
    :type="type"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <span v-if="loading" class="btn__spinner" />
    <span v-else>
      <slot>Aceptar</slot>
    </span>
    <svg v-if="arrow && !loading" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<script setup>
defineProps({
  type:     { type: String,  default: 'button' },
  loading:  { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  arrow:    { type: Boolean, default: false },
})
</script>

<style scoped>
.btn__spinner {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255,255,255,0.25);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.65s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>