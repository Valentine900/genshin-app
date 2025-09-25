<template>
  <div
    class="main-container bg-[linear-gradient(to_bottom,#141C4A00_10vh,#141C4A_40vh,#141C4A_calc(100%-20vh),#141C4A00_100%)] flex justify-center"
  >
    <div class="max-w-[350px] md:max-w-[1200px] md:mx-[120px] mx-[18px]">
      <HeaderComponent />
      <div
        class="md:w-[1200px] p-[20px] md:p-[0px] rounded-[20px] mt-[30px] md:mt-[60px] bg-[#161E64CC] md:bg-transparent"
      >
        <div class="relative md:flex">
          <div class="md:flex-shrink-0 md:z-10">
            <div class="text-[22px] md:text-[40px] text-white font-medium">🎭 Wiki по персонажам</div>
            <img
              src="@/assets/sucrose.png"
              alt="Sucrose"
              class="absolute md:relative md:mt-[50px] md:left-auto w-[512px] scale-[0.95] md:scale-[1]"
            />
          </div>

          <div class="md:flex md:flex-1 md:min-w-0 md:gap-[40px] md:items-start md:mt-[100px]">
            <div
              class="bg-[url(@/assets/text-bg2.png)] bg-top-left bg-cover bg-no-repeat rounded-b-[10px] border-b-[#00EEFF80] text-white px-[28px] py-[26px] relative z-20 md:mt-[70px] mt-[240px] md:flex-1 md:min-w-0 md:ml-[-40px]"
            >
              <img
                src="@/assets/snow.svg"
                class="absolute md:left-[-4%] md:top-[-8%] left-[-7%] top-[-9%]"
              />
              <h2 class="font-bold">Сахароза</h2>
              <h4 class="font-light text-[14px] mt-[15px]">4 уровень</h4>
              <div class="w-[74px] h-px bg-[#00EEFF99] md:my-[12px] mt-[35px]"></div>
              <p class="text-[#FFFFFFCC] text-[16px] mt-[40px] w-full font-medium">
                <span class="hidden md:inline"
                  >Сахароза — одаренный алхимик но в то же время мечтательная и милая симпатичная
                  девушка. Ее милый, а местами и опасные эксперименты позволят вам расправляться с
                  группами мелких врагов. и не забудьте что она в первую очередь алхимик и ее
                  пассивный навык может сэкономить вам немало ресурсов. Создаёт маленького
                  Воздушного духа ...</span
                >
                <span class="inline md:hidden"
                  >Юный экзорцист из Ли Юэ, родился в семье, известной своими навыками
                  экзорцизма....</span
                >
              </p>
              <RouterLink to="/WikiItemPage">
              <button class="bg-[#DD044F] py-[14px] px-[12px] rounded-[5px] mt-[32px]">
                <img src="@/assets/arrow.svg" alt="arrow" />
              </button>
              </RouterLink>
            </div>

            <div
              class="w-full hidden md:grid ml-auto mt-[70px] md:max-w-[207px] md:flex-shrink-0"
            >
              <div class="grid grid-cols-1 gap-[40px]">
                <div class="relative">
                  <div
                    class="absolute top-[8px] right-[8px] bg-[#DD044F] text-white text-[13px] font-semibold py-[5px] px-[7px] rounded-[5px] z-20"
                  >
                    NEW
                  </div>
                  <HeroCard :heroImage="kedin" :elementImage="dark" heroName="Кедин" />
                </div>
                <div class="grid grid-cols-1 gap-[40px]">
                  <div class="relative">
                    <div
                      class="absolute top-[8px] right-[8px] bg-[#DD044F] text-white text-[13px] font-semibold py-[5px] px-[7px] rounded-[5px] z-20"
                    >
                      NEW
                    </div>
                    <HeroCard :heroImage="ineffa" :elementImage="snow" heroName="Инеффа" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeroContainer />
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeroCard from '@/components/HeroCard.vue'
import HeroContainer from '@/components/HeroContainer.vue'

import ineffa from '@/assets/ineffa.png'
import kedin from '@/assets/kedin.png'
import snow from '@/assets/snow.svg'
import dark from '@/assets/dark.svg'
</script>
