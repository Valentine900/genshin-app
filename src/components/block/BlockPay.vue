<template>
  <div
    class="md:absolute right-[-27%] top-[7%] bg-[#161E64CC] md:w-[372px] rounded-[20px] border border-[#00EEFF66] p-[20px] md:p-[30px] mt-[35px]"
  >
    <h1 class="text-white text-[22px]">{{ payHeading }}</h1>
    <div class="flex items-center gap-[20px] mt-[37px]">
      <h1 class="text-[#FF746A] text-[18px] line-through">{{ oldPrice }}</h1>
      <h1
        class="px-[14px] py-[12px] text-[#080C20] bg-[#00EEFF] rounded-[10px] font-bold text-[24px]"
      >
        {{ newPrice }}
      </h1>
    </div>
    <div class="mt-[28px] flex flex-col" :class="secondPlaceholder ? 'gap-[26px]' : 'gap-[16px]'">
      <div class="relative">
        <input
          type="text"
          :placeholder="placeholder"
          class="w-full px-[17px] py-[14px] rounded-[10px] placeholder:text-[#22253199] text-[18px] font-medium"
        />
        <img
          src="@/assets/question.svg"
          class="absolute right-[17px] top-1/2 transform -translate-y-1/2 w-[18px]"
        />
      </div>

      <div class="relative">
        <input
          v-if="secondPlaceholder"
          type="text"
          :placeholder="secondPlaceholder"
          class="w-full px-[17px] py-[14px] rounded-[10px] placeholder:text-[#22253199] text-[18px] font-medium"
        />
        <img
          v-if="secondPlaceholder"
          src="@/assets/question.svg"
          class="absolute right-[17px] top-1/2 transform -translate-y-1/2 w-[18px]"
        />
      </div>

      <button class="w-full px-[17px] text-[18px] py-[14px] rounded-[10px] text-white bg-[#DD044F] font-bold">
        Оплатить
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  payHeading: {
    type: String,
    default: '1 набор в 60 кристаллов сотворения для Геншин Импакт',
  },
  oldPrice: {
    type: String,
    default: '9500 ₽',
  },
  newPrice: {
    type: String,
    default: '6 799 ₽',
  },
  placeholder: {
    type: String,
    default: 'Ваш UID',
  },
  secondPlaceholder: {
    type: String,
    default: undefined,
  },
})
</script>
