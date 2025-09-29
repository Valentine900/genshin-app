<template>
<div class="md:w-[1200px] rounded-[20px] flex flex-col md:flex-row gap-[40px]">
        <div class="flex-1 min-w-0">
        <input
        type="text"
              :placeholder="placeholderText"
              class="bg-[#ffffff] px-[17px] rounded-[10px] py-[14px] text-white placeholder:text-[#22253199] text-[18px] font-medium  w-full">
              
        </input>
        <img src="@/assets/question.svg" class="absolute left-[85%] top-[8%] md:left-[45.7%] md:top-[12.7%] w-[18px]"/>
        </div>

        <div class="flex-1 min-w-0">
        <div class="flex flex-wrap md:flex-nowrap gap-[10px] text-[14px] text-white font-medium text-nowrap">
            <button class="bg-[#080C2080] border border-[#00EEFF4D] rounded-[10px] px-[15px] py-[12px]">
                База
            </button>
            <button class="bg-[#080C2080] border border-[#00EEFF4D] rounded-[10px] px-[15px] py-[12px]">
                Для начинающих
            </button>
            <button class="bg-[#080C2080] border border-[#00EEFF4D] rounded-[10px] px-[15px] py-[12px]">
                Версия 5.8
            </button>
            <button class="bg-[#080C2080] border border-[#00EEFF4D] rounded-[10px] px-[15px] py-[12px]">
                Свидания
            </button>
            <button class="bg-[#080C2080] border border-[#00EEFF4D] rounded-[10px] px-[15px] py-[12px]">
                Натлан
            </button>
            <img src="@/assets/arrow-down.svg" class="md:h-[48px] "/>
        </div>
        <div class="w-full h-px bg-[#00EEFF99] md:my-[10px] mt-[35px] "></div>
        </div>
      </div>
</template>

<script setup>
const props = defineProps({
  placeholderText: {
    type: String,
    default: 'Поиск по гайдам',
  },
})
</script>

