<template>
  <div
    class="guide-cards grid md:px-0 grid-cols-1 md:grid-cols-2 gap-[40px] md:mt-[50px] mt-[30px]"
  >
    <GuideCard
      :guideImage="guide1"
      guide-text="Событие «По исчезающим следам»: советы по прохождению"
      class="hidden md:grid"
    />
    <GuideCard
      :guideImage="guide2"
      guide-text="Как пройти испытание «Цветной возврат отправителю»"
      class="hidden md:grid"
    />
    <GuideCard
      :guideImage="guide3"
      guide-text="Мировые активности в Натлане Genshin Impact 5.8"
      class="hidden md:grid"
    />
    <GuideCard
      :guideImage="guide4"
      guide-text="Гайд на Керидру: для каких отрядов она подойдёт и что для неё нужно?"
      class="hidden md:grid"
    />
    <GuideCard
      :guideImage="guide1"
      guide-text="Событие «По исчезающим следам»: советы по прохождению"
      class="md:hidden grid"
    />
    <GuideCard
      :guideImage="guide1"
      guide-text="Событие «По исчезающим следам»: советы по прохождению"
      class="md:hidden grid"
    />
    <GuideCard
      :guideImage="guide1"
      guide-text="Событие «По исчезающим следам»: советы по прохождению"
      class="md:hidden grid"
    />
    <GuideCard
      :guideImage="guide1"
      guide-text="Событие «По исчезающим следам»: советы по прохождению"
      class="md:hidden grid"
    />
  </div>
</template>

<script setup>
import GuideCard from '@/components/GuideCard.vue'

import guide1 from '@/assets/guide-1.png'
import guide2 from '@/assets/guide-2.png'
import guide3 from '@/assets/guide-3.png'
import guide4 from '@/assets/guide-4.png'
</script>
