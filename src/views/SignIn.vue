<template>
  <div class="min-h-screen flex justify-end">
    <div
      class="h-screen w-[40%] max-w-[550px] mr-[50%] bg-[#080C20B2] backdrop-blur-[10px] flex items-center"
    >
      <div class="w-[80%] ml-[10%]">
        <img src="@/assets/logo.svg" alt="Logo" class="w-[218px] h-auto mx-auto" />

        <div class="flex flex-col gap-[28px] text-white mt-[52px]">
          <button
            class="w-full bg-[#229ED9] rounded-[50px] py-[12px] font-medium flex items-center justify-center gap-[15px]"
          >
            <img src="@/assets/tg.svg" />
            Войти через Telegram
          </button>

          <button
            class="w-full bg-[#0077FF] rounded-[50px] py-[12px] font-medium flex items-center justify-center gap-[15px] mb-[28px]"
          >
            <img src="@/assets/vk.svg" />
            Войти через ВКонтакте
          </button>
        </div>

        <form class="w-full flex flex-col gap-[28px]">
          <div class="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              class="bg-[#ffffff] px-[17px] rounded-[10px] py-[15px] text-white placeholder:text-[#22253199] text-[18px] font-medium"
            />
          </div>

          <div class="flex flex-col">
            <input
              type="password"
              placeholder="Пароль"
              class="bg-[#ffffff] px-[17px] rounded-[10px] py-[15px] text-white placeholder:text-[#22253199] text-[18px] font-medium"
            />
          </div>

          <div class="flex justify-between items-center">
            <div class="flex items-center gap-[10px]">
              <input
                type="checkbox"
                id="remember"
                class="w-[16px] h-auto rounded-[3px] border-[#ACACAC]"
              />
              <label for="remember" class="text-white text-[16px] font-normal"
                >Запомнить меня</label
              >
            </div>
            <a href="#" class="text-[#DD044F] text-[16px] font-normal hover:underline"
              >Забыли пароль?</a
            >
          </div>

          <RouterLink
            to="/"
            type="submit"
            class="bg-[#DD044F] text-white py-[15px] font-bold text-center rounded-[10px]"
          >
            Войти
          </RouterLink>

          <div class="text-center text-white text-[16px] font-normal">
            У вас нет аккаунта? 
            <RouterLink to="/signUp" class="text-[#DD044F] font-normal hover:underline text-[16px]"
              >Регистрация</RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
