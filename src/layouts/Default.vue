<template>
  <div
    class="main-container bg-[linear-gradient(to_bottom,#141C4A00_10vh,#141C4A_40vh,#141C4A_calc(100%-80vh),#141C4A00_100%)] flex justify-center"
  >
    <div class="max-w-[350px] md:max-w-[1200px] md:mx-[120px] mx-[20px]">
      <HeaderComponent />

      <router-view/>

      <FooterComponent />
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/app/AppHeader.vue';
import FooterComponent from '@/components/app/AppFooter.vue';
</script>