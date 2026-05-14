<template>
  <div class="home">
    <NavBar />

    <main>
      <HeroSection id="inicio" />
      <ServicesSection id="servicios" />
      <ProcessSection id="proceso" />
      <TechStack id="tecnologia" />
      <AboutSection id="nosotros" />
      <ContactSection id="contacto" />
    </main>

    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import TechStack from '@/components/sections/TechStack.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

import { useScrollReveal } from '@/composables/useScrollReveal.js'
useScrollReveal()
</script>

<style scoped>
.home {
  min-height: 100vh;
}

main {
  padding-top: 0;
}
</style>