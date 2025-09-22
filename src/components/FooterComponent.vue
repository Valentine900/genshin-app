<template>
  <div
    class="footer flex flex-col md:flex-row bg-[#080C20B2] border border-[#FFFFFF1A] backdrop-blur-[10px] py-6 md:py-[36px] rounded-[10px] gap-6 md:gap-[36px] mt-[104px] md:mt-[114px] px-4 md:px-0"
  >

    <div
      class="flex flex-col items-start md:flex-1 md:ml-[32px] text-white text-center text-[14px] text-[#FFFFFFB2] gap-4 md:gap-[36px] font-light"
    >
      <img src="@/assets/logo.svg" alt="Логотип" class="mb-2" />
      <span class="md:block font-light">© 2025 Все права защищены</span>
    </div>

   <div class="flex gap-[30px]">
    <div class="md:block w-px bg-[#FFFFFF33] h-[293px] md:h-[160px]"></div>

    
    <div class="flex flex-col text-[#FFFFFF] text-[16px] font-light items-start md:items-left md:flex-1 gap-3 md:gap-[12px]">
      <a href="#" class="text-white hover:underline">Политика конфиденциальности</a>
      <a href="#" class="text-white hover:underline">Пользовательское соглашение</a>
      <a href="#" class="text-white hover:underline">Контакты</a>
      <a href="#" class="text-white hover:underline">Форма жалобы</a>
      <a href="#" class="text-white hover:underline">Политика возврата</a>
    </div>
    </div>

   
    <div class="hidden md:block w-px bg-[#FFFFFF33] h-[160px]"></div>

   
    <div class="flex flex-col items-center md:items-start md:flex-1 text-white ">
      <picture>
        <source srcset="@/assets/pay.svg" media="(min-width: 48rem)" />
      <img src="@/assets/pay-2.svg" alt="Способы оплаты" class="mb-2 md:relative md:top-0 md:right-[13%] absolute top-[68%] right-[15%]" />
      </picture>
    </div>
  </div>
</template>

<script setup>

</script>