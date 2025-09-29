<template>
  <div
    class="md:grid grid-cols-2 rounded-[20px] md:border border-[#00EEFF4D] md:max-w-[81%] md:ml-[30px] mt-[9px] md:mt-[42px] mb-[15px] md:mb-[40px] relative"
  >
    <img
      src="@/assets/rectangle.svg"
      class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[9px] hidden md:flex"
    />

    <div
      class="absolute left-1/2 top-[10%] bottom-[55%] w-px bg-[#00EEFF4D] transform -translate-x-1/2 hidden md:flex"
    ></div>

    <div
      class="absolute left-1/2 top-[55%] bottom-[10%] w-px bg-[#00EEFF4D] transform -translate-x-1/2 hidden md:flex"
    ></div>

    <div
      class="absolute top-1/2 left-[3%] right-[52%] h-px bg-[#00EEFF4D] transform -translate-y-1/2 hidden md:flex"
    ></div>

    <div
      class="absolute top-1/2 left-[52%] right-[3%] h-px bg-[#00EEFF4D] transform -translate-y-1/2 hidden md:flex"
    ></div>

    <div class="flex items-center gap-[10px] py-[25px] px-[25px]">
      <img src="@/assets/advantage-1.svg" />
      <h2 class="text-[16px] font-medium text-white">
        Моментальное зачисление на аккаунт. Убедитесь, что ввели UID корректно!
      </h2>
    </div>

    <div class="h-px mx-[25px] bg-[#00EEFF4D] flex md:hidden"></div>

    <div class="flex items-center gap-[10px] py-[25px] px-[25px]">
      <img src="@/assets/advantage-2.svg" />
      <h2 class="text-[16px] font-medium text-white">
        Официальное пополнение, полностью безопасно для вашего акаунта.
      </h2>
    </div>

    <div class="h-px mx-[25px] bg-[#00EEFF4D] flex md:hidden"></div>

    <div class="flex items-center gap-[10px] py-[25px] px-[25px]">
      <img src="@/assets/advantage-3.svg" />
      <h2 class="text-[16px] font-medium text-white">
        Низкие цены без скрытых комиссий. Вы платите ровно ту цену, что сейчас в заказе.
      </h2>
    </div>

    <div class="h-px mx-[25px] bg-[#00EEFF4D] flex md:hidden"></div>

    <div class="flex items-center gap-[10px] py-[25px] px-[25px]">
      <img src="@/assets/advantage-4.svg" />
      <h2 class="text-[16px] font-medium text-white">
        При покупке паков срабатывает х2 бонус, согласно магазину игры.
      </h2>
    </div>
  </div>
</template>
