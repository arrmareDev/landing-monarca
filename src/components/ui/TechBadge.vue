<template>
  <span class="tb"><span class="tb__dot" /><slot /></span>
</template>
<style scoped>
.tb { display: inline-flex; align-items: center; gap: 9px; font-size: 14px; font-weight: 400; color: var(--text-2); transition: color var(--t-fast); }
.tb:hover { color: var(--blue); }
.tb__dot { width: 5px; height: 5px; border-radius: 50%; background: var(--blue); flex-shrink: 0; opacity: 0.5; transition: opacity var(--t-fast); }
.tb:hover .tb__dot { opacity: 1; }
</style>