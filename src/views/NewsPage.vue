<template>
  <div
    class="main-container bg-[linear-gradient(to_bottom,#141C4A00_10vh,#141C4A_60vh,#141C4A_calc(100%-10vh),#141C4A00_100%)] flex justify-center"
  >
    <div class="max-w-[350px] md:max-w-[1200px] md:mx-[120px] mx-[20px]">
      <HeaderComponent />
      <div class="relative main-content mx-auto flex md:mt-[40px] mt-[30px] justify-between">
        <div class="text-content">
          <div class="relative">
            <h1
              class="md:text-[40px] text-[30px] font-medium text-white leading-[112%] md:mt-[32px] md:mb-[60px] mb-[38px]"
            >
              🔔 Новости Genshin Impact
            </h1>
          </div>
        </div>
      </div>
      <NewsAndGuidesComponent
      placeholderText='Поиск по новостям'/>
      <GuideBlock/>
      <GuideBlock/>
      <FooterComponent/>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import NewsAndGuidesComponent from '@/components/NewsAndGuidesComponent.vue';
import GuideBlock from '@/components/GuideBlock.vue';

</script>