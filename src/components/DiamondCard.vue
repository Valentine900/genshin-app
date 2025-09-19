<template>
  <div
    class="relative flex flex-col rounded-[10px] border border-[#00EEFF4D] bg-[url(@/assets/blue-bg.jpg)] bg-cover mx-auto w-full max-w-[350px]"
  >
    <img
      :src="diamondsImage"
      alt="кристаллы"
      class="m-auto h-[168px]"
    />
    <div
      class="border border-[#00EEFF4D] flex flex-col grow gap-[8px] bg-[#080C20B2] backdrop-blur-[10px] rounded-[7px] min-w-[95%] p-[8px] pb-[16px] m-[4px]"
    >
      <h4 class="grow text-white text-[18px] font-medium text-center">
        {{ crystalsAmount }}
      </h4>

      <div class="flex justify-center items-center gap-[14px] whitespace-nowrap">
        <h4 v-if="oldPrice" class="text-[#FF71A2] line-through text-[16px] font-medium">
          {{ oldPrice }}
        </h4>

        <div
          class="flex items-center bg-[#DD044F] text-white text-[16px] px-3 py-[4px] rounded-[5px] cursor-pointer"
        >
          <span class="font-semibold text-[16px]">{{ newPrice }}</span>
          <div class="w-px h-[25px] bg-[#0000004D] mx-2"></div>
          <img
            src="@/assets/shopping-cart.svg"
            alt="корзина"
            class="w-[20px] h-auto rotate-[16.05deg]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  diamondsImage: {
    type: String,
    default: () => require('@/assets/diamonds.png'),
  },
  crystalsAmount: {
    type: String,
    default: '60 Кристаллов',
  },
  oldPrice: {
    type: String,
    default: '90 ₽',
  },
  newPrice: {
    type: String,
    required: true,
  },
})
</script>