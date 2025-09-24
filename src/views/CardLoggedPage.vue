<template>
  <div
    class="main-container bg-[linear-gradient(to_bottom,#141C4A00_10vh,#141C4A_40vh,#141C4A_calc(100%-80vh),#141C4A00_100%)] flex justify-center"
  >
    <div class="max-w-[350px] md:max-w-[1200px] md:mx-[120px] mx-[20px]">
      <HeaderComponent />
      <CardPageBlock
      :cardImage="diamonds"
      cardHeading="Купить 60 кристаллов"
      cardDescription="Пак 60 примогемов - это как дейлики, только за рубли и без лишней траты времени, который позволит моментально получить свои кристаллы на аккаунт."
      />

      <DiamondBlock class="hidden md:grid" />
      <SwitcherComponent />
      <GuideBlock />
      <FooterComponent />
    </div>
  </div>
</template>

<script setup>
import diamonds from '@/assets/diamonds.png'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import SwitcherComponent from '@/components/SwitcherComponent.vue'
import CardPageBlock from '@/components/CardPageBlock.vue'
import GuideBlock from '@/components/GuideBlock.vue'
import DiamondBlock from '@/components/DiamondBlock.vue'
</script>
