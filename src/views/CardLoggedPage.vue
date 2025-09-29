<template>
  <CardPageBlock
    :cardImage="diamonds"
    cardHeading="Купить 60 кристаллов"
    cardDescription="Пак 60 примогемов - это как дейлики, только за рубли и без лишней траты времени, который позволит моментально получить свои кристаллы на аккаунт."
  />

  <DiamondBlock class="hidden md:grid" />
  <SwitcherComponent />
  <GuideBlock />
</template>

<script setup>
import diamonds from '@/assets/diamonds.png'
import SwitcherComponent from '@/components/base/BaseSwitcher.vue'
import CardPageBlock from '@/components/block/BlockCardPage.vue'
import GuideBlock from '@/components/block/BlockGuide.vue'
import DiamondBlock from '@/components/block/BlockDiamond.vue'
</script>
