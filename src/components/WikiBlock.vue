<template>
    <div
        class="wiki w-[350px] mx-auto md:w-[1200px] relative bg-[#161E64CC] md:bg-cover md:bg-[url(@/assets/bg-wiki.png)] rounded-[20px] mt-[40px] md:mt-[80px] md:grid md:grid-cols-2 p-[22px] md:p-[32px] md:gap-[40px]"
      >
        <div class="relative md:static md:flex md:flex-col">
          <div class="text-[24px] md:text-[30px] text-white md:text-wrap text-nowrap">🎭 Wiki по персонажам</div>
          <picture>
            <source srcset="@/assets/blue-boy.png" media="(min-width: 48rem)" />
            <img
              src="@/assets/blue-boy-2.png"
              alt="Blue boy"
              class="absolute left-[6%] md:left-[3%] md:bottom-0 w-[414px] scale-[0.95] md:scale-[1]"
            />
          </picture>

          <div
            class="bg-[url(@/assets/text-bg.png)] bg-top-left bg-cover bg-no-repeat rounded-b-[10px] border-b-[#00EEFF80] text-white px-[28px] py-[26px] md:w-[50%] md:ml-auto relative z-10 mt-[100%] md:mt-auto"
          >
            <img src="@/assets/snow.svg" class="absolute md:left-[-9%] md:top-[-6%] left-[-7%] top-[-9%]" />
            <h2 class="font-bold">Чун Юнь</h2>
            <h4 class="font-light text-[14px] mt-[15px]">4 уровень</h4>
            <div class="w-[74px] h-px bg-[#00EEFF99] md:my-[12px] mt-[35px] "></div>
            <p class="text-[#FFFFFFCC] text-[16px] mt-[40px] w-[90%] font-medium">
              <span class="hidden md:inline"
                >Юный экзорцист из Ли Юэ, родился в семье, известной своими навыками экзорцизма. В
                отличие от других персонажей, обучавшихся техникам экзорцизма, Чун Юнь обладает
                редким свойством — «врождённой позитивности»...</span
              >
              <span class="inline md:hidden"
                >Юный экзорцист из Ли Юэ, родился в семье, известной своими навыками экзорцизма....</span
              >
            </p>
            <button class="bg-[#DD044F] py-[14px] px-[12px] rounded-[5px] mt-[32px]">
              <img src="@/assets/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>

        <div class="grid md:grid-cols-3 grid-cols-2 gap-[20px] mt-[65px] md:mt-[25px]">
          <HeroCard :heroImage="lauma" :elementImage="fire" heroName="Лаума" />
          <HeroCard :heroImage="ineffa" :elementImage="snow" heroName="Инеффа" />
          <HeroCard :heroImage="kedin" :elementImage="dark" heroName="Кедин" class="hidden md:flex"/>
          <HeroCard :heroImage="kedin2" :elementImage="earth" heroName="Кедин" class="hidden md:block"/>
          <HeroCard :heroImage="amber" :elementImage="fire" heroName="Эмбер" class="hidden md:block"/>
          <HeroCard :heroImage="dalia" :elementImage="water" heroName="Далия" class="hidden md:block"/>
          <HeroCard :heroImage="ineffa" :elementImage="snow" heroName="Инеффа" class="hidden md:block"/>
          <HeroCard :heroImage="kedin" :elementImage="dark" heroName="Кедин" class="hidden md:block"/>
          <HeroCard :heroImage="lauma" :elementImage="fire" heroName="Лаума" class="hidden md:block"/>
          <HeroCard :heroImage="lauma" :elementImage="fire" heroName="Лаума" class="md:hidden block"/>
          <HeroCard :heroImage="ineffa" :elementImage="snow" heroName="Инеффа" class="md:hidden block"/>
          <HeroCard :heroImage="lauma" :elementImage="fire" heroName="Лаума" class="md:hidden block"/>
          <HeroCard :heroImage="ineffa" :elementImage="snow" heroName="Инеффа" class="md:hidden block"/>
          
        </div>
      </div>
</template>

<script setup>
import HeroCard from '@/components/HeroCard.vue'

import lauma from '@/assets/lauma.png'
import ineffa from '@/assets/ineffa.png'
import kedin from '@/assets/kedin.png'
import kedin2 from '@/assets/kedin-2.png'
import amber from '@/assets/amber.png'
import dalia from '@/assets/dalia.png'
import fire from '@/assets/fire.svg'
import snow from '@/assets/snow.svg'
import dark from '@/assets/dark.svg'
import earth from '@/assets/earth.svg'
import water from '@/assets/water.svg'
</script>