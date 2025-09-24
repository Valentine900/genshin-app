<template>
  <div
    class="main-container bg-[linear-gradient(to_bottom,#141C4A00_60vh,#141C4A_100vh,#141C4A_calc(100%-100vh),#141C4A00_100%)] flex justify-center"
  >
    <div class="max-w-[1200px] md:mx-[120px] mx-[20px]">
      <HeaderComponent />
      <div class="relative main-content mx-auto flex md:mt-[50px] mt-[36px] justify-between">
        <div class="text-content min-w-[60%]">
          <div class="relative">
            <img
              src="@/assets/top.png"
              class="w-[64px] md:w-[94px] absolute md:top-[-19px] top-[-15px] md:left-[-24px] left-[-24px]"
            />
            <h1
              class="md:text-[50px] text-[30px] font-medium text-white text-nowrap leading-[112%] md:ml-[76px] ml-[40px] md:mt-[32px] md:mb-[90px]"
            >
              Примогемы для <br />Genshin Impact<br />
              по лучшим ценам
            </h1>
          </div>
        </div>
        <img
          src="@/assets/purple-girl.png"
          class="purple-girl absolute z-0 h-auto w-[48%] max-w-full self-start top-0 right-0"
        />
      </div>
      
      <div class="mt-10 flex gap-[32px]">
        <RibbonBlock/>

        <MostPopularBlock/>
      </div>

      <!-- Блок преимуществ -->
      <AdvantageComponent class="mt-[92px]"/>
      <!-- -->

      <!-- Блок с карточками -->
      <DiamondBlock/>
      <!-- -->
      
      <!-- Wiki -->
      <WikiBlock/>
      <!-- End Wiki -->
      
      <SwitcherComponent/>
      
      <!--Блок с гайдами-->
      <GuideBlock/>
      <!---->
      
      <!--Футер-->
      <FooterComponent />
      <!---->
    
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 390px) {
  .top-up-ribbon {
    display: none !important;
  }
  .purple-girl {
    display: none !important;
  }
}
</style>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import SwitcherComponent from '@/components/SwitcherComponent.vue'
import AdvantageComponent from '@/components/AdvantageComponent.vue'
import GuideBlock from '@/components/GuideBlock.vue'
import WikiBlock from '@/components/WikiBlock.vue'
import DiamondBlock from '@/components/DiamondBlock.vue'
import MostPopularBlock from '@/components/MostPopularBlock.vue'
import RibbonBlock from '@/components/RibbonBlock.vue'


</script>
