<template>
  <div class="flex mt-[40px] gap-[12px] md:gap-[23px] text-white">
    <RouterLink :to="backPath">
      <img src="@/assets/arrow-back.svg" class="mt-[10px]" />
    </RouterLink>
    <RouterLink :to="backPath">
      <h3 class="text-[14px] md:text-[14px] mt-[3px] text-nowrap">{{ backText }}</h3>
    </RouterLink>
    <span class="text-[14px] md:text-[18px] mt-[3px] md:mt-0"> / </span>
    <span class="text-[14px] md:text-[18px] max-w-[300px] md:max-w-[100%] truncate mt-[3px] md:mt-0">{{ currentPage }}</span>
  </div>
</template>

<script setup>
defineProps({
  backPath: {
    type: String,
    required: true
  },
  backText: {
    type: String,
    required: true
  },
  currentPage: {
    type: String,
    required: true
  }
})
</script>