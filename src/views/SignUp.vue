<template>
  <div class="min-h-screen flex justify-end">
    <div
      class="h-screen w-[40%] max-w-[550px] mr-[50%] bg-[#080C20B2] backdrop-blur-[10px] flex items-center"
    >
      <div class="w-[80%] ml-[10%]">
        <img src="@/assets/logo.svg" alt="Logo" class="w-[218px] h-auto mx-auto" />

        <form class="w-full flex flex-col gap-[28px] mt-[52px]">
          <div class="flex flex-col">
            <input
              type="text"
              placeholder="Имя"
              class="bg-[#ffffff] px-[17px] rounded-[10px] py-[15px] text-white placeholder:text-[#22253199] text-[18px] font-medium"
            />
          </div>

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

          <RouterLink
            to="/"
            type="submit"
            class="bg-[#DD044F] text-white py-[15px] font-bold text-center rounded-[10px]"
          >
            Войти
          </RouterLink>

          <div class="text-center text-white text-[16px] font-normal">
            У вас есть аккаунт?
            <RouterLink to="/signIn" class="text-[#DD044F] font-normal hover:underline text-[16px]"
              >Войти</RouterLink
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
