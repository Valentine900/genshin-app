<template>
  <header
    :class="[
      'header bg-[#161E64B2] border border-white/10 relative max-w-[350px] mx-auto md:max-w-[1200px]',
      isMenuOpen ? 'rounded-t-[20px] rounded-b-0 border-b-0' : 'rounded-[20px]',
    ]"
  >
    <div class="px-4 md:px-[16px]">
      <div class="header-container h-14 md:h-[60px] flex items-center justify-between">
        <div class="flex items-center">
          <RouterLink to="/">
          <img :src="logo" alt="Primogem Logo" class="logo h-[28px] md:h-[36px]" />
          </RouterLink>
        </div>

        <nav
          class="navigation hidden md:flex items-center gap-x-7 leading-[26px]"
        >
          <RouterLink to="/CardLoggedPage" class="text-white font-medium text-sm md:text-[16px]"
            >Купить примогемы</RouterLink
          >
          <RouterLink to="/WikiPage" class="text-white font-medium text-sm md:text-[16px]"
            >Wiki по персонажам</RouterLink
          >
          <RouterLink to="/GuidesPage" class="text-white font-medium text-sm md:text-[16px]"
            >Гайды</RouterLink
          >
          <RouterLink to="/NewsPage" class="text-white font-medium text-sm md:text-[16px]"
            >Новости</RouterLink
          >
        </nav>

        <div
          class="signblock  md:flex items-center border border-[#DD044FCC] bg-[#141C4A] rounded-[10px]"
        >
          <RouterLink
            to="/signUp"
            class="register hidden md:flex text-white font-medium px-[18px] rounded-l-[10px] text-[14px]"
          >
            Регистрация
          </RouterLink>
          <RouterLink
            to="/signIn"
            class="signtext bg-[#DD044F] text-white font-medium pl-[3px] pr-4 py-[3px] rounded-[10px] flex items-center gap-[12px] text-[14px]"
          >
          <RouterLink to="/ProfileHPage">
            <img
              src="@/assets/avatar.svg"
              alt="icon"
              class="signinlogo w-5 h-5 md:w-[33px] md:h-auto bg-[#890231] rounded-[10px] pl-[2px] py-[2px] pr-[3px]"
            />
            </RouterLink>
            Войти
          </RouterLink>
        </div>

        <img
          :src="isMenuOpen ? burger2 : burger"
          alt="burger menu"
          @click="toggleMenu"
          class="burger cursor-pointer ml-1 h-auto w-6 md:hidden"
          :class="isMenuOpen ? 'w-[11px] h-[14px]' : 'w-[24px]'"
        />

        
        <div
          v-if="isMenuOpen"
          class="dropdown-menu absolute left-[-1px] right-[-1px] top-full bg-[#161E64E5] border-x border-b border-white/10 rounded-b-[20px] pt-[44px] px-[42px] flex flex-col gap-[27px] z-10 md:hidden"
        >
          <RouterLink
            to="/CardLoggedPage"
            class="navtext text-white font-medium text-[20px]"
            >Купить примогемы</RouterLink
          >
          <RouterLink
            to="/WikiPage"
            class="navtext text-white font-medium text-[20px]"
            >Wiki по персонажам</RouterLink
          >
          <RouterLink to="/GuidesPage" class="navtext text-white font-medium text-[20px]"
            >Гайды</RouterLink
          >
          <RouterLink
            to="/NewsPage"
            class="navtext text-white font-medium text-[20px]"
            >Новости</RouterLink
          >
          <div class="w-[308px] h-px bg-[#00EEFF99] "></div>
          <RouterLink to="/" class="navtext text-white font-medium text-[20px] pb-[37px]"
            >Регистрация</RouterLink
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/logo.svg'
import burger from '@/assets/burger.svg'
import burger2 from '@/assets/burger2.svg'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
