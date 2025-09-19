<template>
  <div class="top-up-ribbon bg-[#080C2099] backdrop-blur-[10px] rounded-[15px] text-white w-[45%]">
    <h2 class="text-[30px] font-medium p-[28px]">👑 Лента пополнений</h2>
    <div class="flex flex-col gap-[27px] mx-[-20px] mb-[-20px] items-center">
      <div class="flex gap-[50px] translate-x-[15%]">
        <RibbonCard
          :ribbonImage="diamondsImg5"
          ribbonName="Владик Корнилин"
          ribbonSum="3280 + 600 кристаллов"
        />
        <RibbonCard :ribbonImage="diamondsImg1" ribbonName="Lil_Evil" ribbonSum="60 кристаллов" />
      </div>

      <div class="flex gap-[50px] translate-x-[-5%]">
        <RibbonCard
          :ribbonImage="blessing"
          ribbonName="Юля Вагитова"
          ribbonSum="Благословение полой луны"
        />
        <RibbonCard
          :ribbonImage="diamondsImg2"
          ribbonName="Красотуля"
          ribbonSum="300 + 30 кристаллов"
        />
      </div>

      <div class="flex gap-[50px] translate-x-[3%] opacity-60">
        <RibbonCard :ribbonImage="diamondsImg5" ribbonName="Lil_Evil" ribbonSum="60 кристаллов" />
        <RibbonCard
          :ribbonImage="diamondsImg5"
          ribbonName="Владик Корнилин"
          ribbonSum="3280 + 600 кристаллов"
        />
      </div>

      <div class="flex gap-[50px] opacity-30">
        <RibbonCard
          :ribbonImage="diamondsImg5"
          ribbonName="Красотуля"
          ribbonSum="300 + 30 кристаллов"
        />
        <RibbonCard :ribbonImage="diamondsImg5" ribbonName="Lil_Evil" ribbonSum="60 кристаллов" />
      </div>
    </div>
  </div>
</template>

<script setup>
import RibbonCard from './RibbonCard.vue';

import diamondsImg1 from '@/assets/diamonds.png'
import diamondsImg2 from '@/assets/diamonds-2.png'
import diamondsImg5 from '@/assets/diamonds-5.png'
import blessing from '@/assets/blessing.png'
</script>
