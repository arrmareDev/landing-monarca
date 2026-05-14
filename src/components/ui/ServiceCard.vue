<template>
  <div class="service-card card-lift">
    <div class="service-card__top">
      <span class="service-card__num font-mono">{{ num }}</span>
      <div class="service-card__icon" v-html="icon" />
    </div>
    <h3 class="service-card__title">{{ title }}</h3>
    <p class="service-card__desc">{{ desc }}</p>
    <div class="service-card__tags">
      <span
        v-for="tag in tags"
        :key="tag"
        class="service-card__tag"
      >
        {{ tag }}
      </span>
    </div>
    <!-- línea animada inferior -->
    <div class="service-card__line" />
    <!-- borde superior animado -->
    <div class="service-card__top-line" />
  </div>
</template>

<script setup>
defineProps({
  num:   { type: String,  required: true },
  title: { type: String,  required: true },
  desc:  { type: String,  required: true },
  icon:  { type: String,  default: '' },
  tags:  { type: Array,   default: () => [] },
})
</script>

<style scoped>
.service-card {
  background: var(--black);
  padding: 40px 32px;
  position: relative;
  overflow: hidden;
  cursor: default;
  border: 1px solid var(--border);
}

/* Borde azul superior al hover */
.service-card__top-line {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--blue);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--t-slow) var(--ease-out);
}
.service-card:hover .service-card__top-line { transform: scaleX(1); }

.service-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.service-card__num {
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--blue-bright);
}

.service-card__icon {
  color: var(--white-dimmer);
  transition: color var(--t-med) var(--ease);
  display: flex;
  align-items: center;
}
.service-card:hover .service-card__icon { color: var(--blue-bright); }

.service-card__title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 12px;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.service-card__desc {
  font-size: 14px;
  color: var(--white-dim);
  line-height: 1.7;
  margin-bottom: 24px;
}

.service-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.service-card__tag {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--white-dimmer);
  border: 1px solid var(--border);
  padding: 4px 10px;
  border-radius: 2px;
  transition: border-color var(--t-fast) var(--ease),
              color var(--t-fast) var(--ease);
}
.service-card:hover .service-card__tag {
  border-color: var(--border-blue);
  color: var(--blue-bright);
}

/* Línea inferior animada */
.service-card__line {
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 1px;
  background: var(--blue);
  transition: width var(--t-slow) var(--ease-out);
}
.service-card:hover .service-card__line { width: 100%; }
</style>