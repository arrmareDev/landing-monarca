<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s var(--ease);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>