<template>
  <div
    class="bg-[#232D89] w-fit rounded-[10px] border border-[#00EEFF4D] gap-[8px] flex items-center"
  >
    <img :src="ribbonImage" class="w-[66px] ml-[-33px] mb-[-4px]" />
    <div class="py-[8px] pr-[16px] leading-[100%] flex flex-col gap-[4px] text-nowrap">
      <h3 class="text-white text-[14px] font-medium">{{ ribbonName }}</h3>
      <p class="text-[#FFFFFF80] text-[14px] font-medium">{{ ribbonSum }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  ribbonImage: {
    type: String,
    default: () => require('@/assets/diamonds.png'),
  },
  ribbonName: {
    type: String,
    default: 'Владик Корнилин',
  },
  ribbonSum: {
    type: String,
    default: '3280 + 600 кристаллов',
  },
})
</script>
