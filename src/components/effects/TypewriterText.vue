<template>
  <span class="tw">
    <span class="tw__text">{{ displayed }}</span><span
      class="tw__cursor"
      aria-hidden="true"
    />
  </span>
</template>

<script setup>
import { useTypewriter } from '@/composables/useTypewriter.js'
const props = defineProps({
  phrases:     { type: Array,  default: () => [''] },
  typeSpeed:   { type: Number, default: 70  },
  deleteSpeed: { type: Number, default: 35  },
  pause:       { type: Number, default: 2200 },
})
const { displayed } = useTypewriter(props.phrases, props.typeSpeed, props.deleteSpeed, props.pause)
</script>

<style scoped>
.tw {
  display: block;
  /* SIN white-space: nowrap — el texto puede ajustarse al ancho del contenedor */
  line-height: inherit;
  overflow: hidden;
  white-space: nowrap;
}
.tw__text {
  color: var(--blue);
  font-weight: 800;
}
.tw__cursor {
  display: inline-block;
  width: 3px;
  height: 0.8em;
  background: var(--blue);
  margin-left: 3px;
  vertical-align: middle;
  border-radius: 2px;
  animation: blink 0.7s step-end infinite;
}
</style>