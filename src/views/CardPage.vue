<template>
  <div
    class="main-container bg-[linear-gradient(to_bottom,#141C4A00_10vh,#141C4A_40vh,#141C4A_calc(100%-80vh),#141C4A00_100%)] flex justify-center"
  >
    <div class="max-w-[350px] md:max-w-[1200px] md:mx-[120px] mx-[20px]">
      <HeaderComponent />
      <CardPageBlock
        :cardImage="blessing"
        cardHeading="Купить Благословение полой луны (30 дней)"
        cardDescription="Благословение полой луны в Genshin Impact — это внутриигровая 30-дневная подписка. При активации даёт 300 кристаллов сотворения и ежедневно начисляет по 90 примогемов."
        payHeading="Благословение полой луны даёт 300 кристаллов сразу и по 90 камней истока в течение 30 дней."
        placeholder="Ваш UID"
        secondPlaceholder="Email"
      />
      <DiamondBlock class="hidden md:grid" />
      <SwitcherComponent />
      <GuideBlock />
      <FooterComponent />
    </div>
  </div>
</template>

<script setup>
import blessing from '@/assets/blessing.png'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import SwitcherComponent from '@/components/SwitcherComponent.vue'
import CardPageBlock from '@/components/CardPageBlock.vue'
import GuideBlock from '@/components/GuideBlock.vue'
import DiamondBlock from '@/components/DiamondBlock.vue'
</script>
