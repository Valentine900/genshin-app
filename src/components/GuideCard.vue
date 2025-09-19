<template>
  <div class=" grid grid-cols-2 text-white mx-auto flex-shrink-0 max-w-[350px] md:max-w-none bg-[#0B122E] rounded-[16px] border border-[#00EEFF80] overflow-hidden">
    <div class="rounded-l-[16px] overflow-hidden">
      <img :src="guideImage" class="object-cover w-full h-full" />
    </div>

    <div class="bg-[#0B122E] flex flex-col justify-center px-[18px] py- md:px-[36px] md:py-[24px]">
      <span class="text-xs md:text-[12px] font-medium text-[#FFFFFF99] pb-2">12.08.2025</span>
      <h3 class="text-sm md:text-[18px] font-medium leading-tight">
        {{ guideText }}
      </h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  guideImage: {
    type: String,
    default: () => require('@/assets/guide.png'),
  },
  guideText: {
    type: String,
    default: 'Событие «По исчезающим следам»: советы по прохождению',
  },
})
</script>