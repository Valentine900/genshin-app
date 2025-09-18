<template>
  <div
    class="advantages-container flex flex-col items-stretch w-[350px] max-w-[390px] mx-auto mb-[46px] md:flex-row md:items-center md:justify-between md:w-auto md:max-w-none md:mb-0 bg-[#080C20] border border-[#00EEFF4D] backdrop-blur-[10px] rounded-[20px] p-[16px] text-white md:mt-[68px]"
  >
    <div class="advantage-item text-[18px] flex items-center gap-[10px] pb-[22px] md:py-[22px] px-[5px] md:mb-0 md:px-0">
      <img src="@/assets/advantage-1.svg" alt="advantage 1" />
      <h2 class="text-[18px] font-medium whitespace-nowrap">Моментально по UID</h2>
      <img src="@/assets/question.svg" class="ml-[9px]" alt="вопрос" />
    </div>

    <div
      class="divider block h-[1px] w-[calc(100%-17px)]  bg-[#00EEFF66]  mx-0 md:h-[42px] md:w-px md:my-0 md:mx-[20px]"
    ></div>

    <div class="advantage-item flex items-center gap-[10px] py-[22px]  px-[5px] md:px-0">
      <img src="@/assets/advantage-2.svg" alt="advantage 2" />
      <h2 class="text-[18px] font-medium break-words">
        Полностью безопасно для акканта
        <span class="inline-flex items-center gap-[4px] ml-[9px]">
          <img src="@/assets/question.svg" alt="вопрос" />
        </span>
      </h2>
    </div>

    <div
      class="divider block h-[1px] w-[calc(100%-17px)] bg-[#00EEFF66]  mx-0 md:h-[42px] md:w-px md:my-0 md:mx-[20px]"
    ></div>

    <div class="advantage-item flex items-center gap-[10px] pt-[22px] md:py-[22px] px-[5px] md:px-0">
      <img src="@/assets/advantage-3.svg" alt="advantage 3" />
      <h2 class="text-[18px] font-medium whitespace-nowrap">Лучшие цены в Рунете!</h2>
      <img src="@/assets/question.svg" alt="вопрос" class="ml-[9px]" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvantageComponent',
}
</script>
