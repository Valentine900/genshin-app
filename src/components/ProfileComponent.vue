<template>
  <div class="grid grid-cols-[130px_1fr] md:flex md:flex-col md:items-center">
    <div class="flex flex-col items-start ml-[20px] md:ml-0">
      <img
        src="@/assets/avatar.svg"
        alt="icon"
        class="signinlogo w-[96px] h-[96px] md:w-[114px] md:h-auto rounded-[10px] mt-[28px] md:mt-[45px]"
      />
      <RouterLink
        to="/ProfilePage"
        class="text-white bg-[#DD044F] rounded-[10px] px-[12px] md:px-[19px] py-[11px] md:py-[13px] text-[14px] font-bold"
      >
        Загрузить
      </RouterLink>
    </div>
    <div class="font-normal">
      <h1 class="text-white mt-[24px] text-[16px]">Jotsy_miu@gmail.com</h1>
      <div class="md:text-center">
        <h2 class="text-white">14 покупок</h2>
        <span class="text-[#FFFFFF99]"> 12.02.2025 </span>
      </div>
    </div>
  </div>
</template>
