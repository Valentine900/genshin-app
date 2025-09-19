<template>
  <div
    class="top-up-popular bg-[#080C2099] backdrop-blur-[10px] md:mt-0 rounded-[15px] p-[30px] mx-auto text-white md:w-[55%]"
  >
    <h4 class="text-[22px] md:text-[30px] font-medium mb-[15px]">💖 Самое популярное</h4>

    <div class="popular-block relative md:aspect-[2/1] h-[418px] md:h-auto">
      <div
        class="diamond-card diamond-card-left absolute m-auto inset-0 md:w-[212px] h-fit md:translate-x-[-85%] md:translate-y-[30%] md:rotate-[-16.05deg] scale-[0.80] rotate-[-3.13deg] translate-x-[0%] translate-y-[55%]"
      >
        <DiamondCard
          :diamondsImage="blessing"
          crystalsAmount="Благословение полой луны (30 дней)"
          oldPrice="490 ₽"
          newPrice="329 ₽"
        />
      </div>

      <div
        class="diamond-card diamond-card-center scale-[0.80] md:scale-[1] absolute m-auto inset-0 md:w-[212px] h-fit md:rotate-[3.84deg] z-10 rotate-[-9.11deg] translate-x-[-35%] translate-y-[-30%] md:translate-x-0 md:translate-y-0"
      >
        <DiamondCard
          :diamondsImage="diamondsImg1"
          crystalsAmount="60 кристаллов"
          oldPrice="90 ₽"
          newPrice="67 ₽"
        />
      </div>

      <div
        class="diamond-card diamond-card-right absolute m-auto inset-0 md:w-[212px] h-fit md:translate-x-[85%] md:translate-y-[-30%] md:rotate-[15.81deg] scale-[0.80] rotate-[15.81deg] translate-x-[45%] translate-y-[-10%] md:z-0 z-10"
      >
        <DiamondCard
          :diamondsImage="diamondsImg2"
          crystalsAmount="300 + 30 кристаллов"
          oldPrice="490 ₽"
          newPrice="329 ₽"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import DiamondCard from './DiamondCard.vue';

import diamondsImg1 from '@/assets/diamonds.png'
import diamondsImg2 from '@/assets/diamonds-2.png'
import blessing from '@/assets/blessing.png'
</script>
