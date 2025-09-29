<template>
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
</template>

<script setup>
import blessing from '@/assets/blessing.png'
import SwitcherComponent from '@/components/base/BaseSwitcher.vue'
import CardPageBlock from '@/components/block/BlockCardPage.vue'
import GuideBlock from '@/components/block/BlockGuide.vue'
import DiamondBlock from '@/components/block/BlockDiamond.vue'
</script>
