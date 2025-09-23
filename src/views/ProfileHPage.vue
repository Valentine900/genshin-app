<template>
  <div
    class="main-container bg-[linear-gradient(to_bottom,#141C4A00_10vh,#141C4A_40vh,#141C4A_calc(100%-80vh),#141C4A00_100%)] flex justify-center "
  >
    <div class="max-w-[350px] md:max-w-[1200px] md:mx-[120px] mx-[20px]">
      <HeaderComponent />
      <div
        class="md:w-[1200px] rounded-[20px] mt-[18px] grid grid-cols-1 md:grid-cols-[250px_1fr] gap-[32px] md:gap-[55px] bg-[#080C20B2] border border-[#00EEFF4D]"
      >
        <ProfileComponent/>
        <ProfileTableComponent/>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProfileTableComponent from '@/components/ProfileTableComponent.vue';
import ProfileComponent from '@/components/ProfileComponent.vue';
</script>