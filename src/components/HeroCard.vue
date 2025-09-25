<template>
  <div
    class="relative bg-[#080C2099] rounded-[16px] border border-[#00EEFF80] text-white flex flex-col items-center h-[192px]"
  >
    <img :src="heroImage" class="absolute bottom-0 h-auto" />

    <div
      class="absolute bottom-0 w-[95%] py-[11px] my-[4px] bg-[#1D267DCC]  border-t border-[#00EEFF4D] rounded-[12px] flex justify-center items-center gap-[10px]"
    >
      <img :src="elementImage" class="w-[22px] h-auto" />
      <h3 class="font-bold text-[15px]">{{ heroName }}</h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  heroImage: {
    type: String,
    default: () => require("@/assets/lauma.png"),
  },
  elementImage: {
    type: String,
    default: () => require("@/assets/fire.png"),
  },
  heroName: {
    type: String,
    default: "Лаума",
  },
})
</script>