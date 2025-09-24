<template>
  <div class="diamond-cards-container w-full mt-[18px]">
    <div class="flex gap-[40px] overflow-x-auto pb-[20px] scrollbar-hide">
      <DiamondCard
        :diamondsImage="diamondsImg1"
        crystalsAmount="60 кристаллов"
        oldPrice="90 ₽"
        newPrice="67 ₽"
        class="flex-shrink-0 w-[280px]"
      />
      <DiamondCard
        :diamondsImage="diamondsImg2"
        crystalsAmount="300 + 30 кристаллов"
        oldPrice="490 ₽"
        newPrice="329 ₽"
        class="flex-shrink-0 w-[280px]"
      />
      <DiamondCard
        :diamondsImage="diamondsImg3"
        crystalsAmount="980 + 110 кристаллов"
        oldPrice="1670 ₽"
        newPrice="1090 ₽"
        class="flex-shrink-0 w-[280px]"
      />
      <DiamondCard
        :diamondsImage="diamondsImg4"
        crystalsAmount="1980 + 260 кристаллов"
        oldPrice="2900 ₽"
        newPrice="2190 ₽"
        class="flex-shrink-0 w-[280px]"
      />
      <DiamondCard
        :diamondsImage="diamondsImg5"
        crystalsAmount="3280 + 600 кристаллов"
        oldPrice="4100 ₽"
        newPrice="3389 ₽"
        class="flex-shrink-0 w-[280px]"
      />
      <DiamondCard
        :diamondsImage="diamondsImg6"
        crystalsAmount="6480 + 1600 кристаллов"
        oldPrice="7800 ₽"
        newPrice="6799 ₽"
        class="flex-shrink-0 w-[280px]"
      />
      <DiamondCard
        :diamondsImage="blessing"
        crystalsAmount="Благословение полой луны (30 дней)"
        oldPrice="490 ₽"
        newPrice="329 ₽"
        class="flex-shrink-0 w-[280px]"
      />
      <DiamondCard
        :diamondsImage="blessing2"
        crystalsAmount="Благословение полой луны (60 дней)"
        oldPrice="820 ₽"
        newPrice="649 ₽"
        class="flex-shrink-0 w-[280px]"
      />
    </div>
  </div>
</template>

<script setup>
import DiamondCard from '@/components/DiamondCard.vue'

import diamondsImg1 from '@/assets/diamonds.png'
import diamondsImg2 from '@/assets/diamonds-2.png'
import diamondsImg3 from '@/assets/diamonds-3.png'
import diamondsImg4 from '@/assets/diamonds-4.png'
import diamondsImg5 from '@/assets/diamonds-5.png'
import diamondsImg6 from '@/assets/diamonds-6.png'
import blessing from '@/assets/blessing.png'
import blessing2 from '@/assets/blessing-2.png'
</script>
