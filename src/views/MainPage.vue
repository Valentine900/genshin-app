<template>
  <div
    class="main-container bg-[linear-gradient(to_bottom,#141C4A00_60vh,#141C4A_100vh,#141C4A_calc(100%-100vh),#141C4A00_100%)] flex justify-center"
  >
    <div class="max-w-[1200px] md:mx-[120px] mx-[20px]">
      <HeaderComponent />
      <div class="relative main-content mx-auto flex md:mt-[50px] mt-[36px] justify-between">
        <div class="text-content min-w-[60%]">
          <div class="relative">
            <img
              src="@/assets/top.png"
              class="w-[64px] md:w-[94px] absolute md:top-[-19px] top-[-15px] md:left-[-24px] left-[-24px]"
            />
            <h1
              class="md:text-[50px] text-[30px] font-medium text-white text-nowrap leading-[112%] md:ml-[76px] ml-[40px] md:mt-[32px] md:mb-[90px]"
            >
              Примогемы для <br />Genshin Impact<br />
              по лучшим ценам
            </h1>
          </div>
        </div>
        <img
          src="@/assets/purple-girl.png"
          class="purple-girl absolute z-0 h-auto w-[48%] max-w-full self-start top-0 right-0"
        />
      </div>
      <div class="mt-10 flex gap-[32px]">
        <div
          class="top-up-ribbon bg-[#080C2099] backdrop-blur-[10px] rounded-[15px] text-white w-[45%]"
        >
          <h2 class="text-[30px] font-medium p-[28px]">👑 Лента пополнений</h2>
          <div class="flex flex-col gap-[27px] mx-[-20px] mb-[-20px] items-center">
            <div class="flex gap-[50px] translate-x-[15%]">
              <RibbonCard
                :ribbonImage="diamondsImg5"
                ribbonName="Владик Корнилин"
                ribbonSum="3280 + 600 кристаллов"
              />
              <RibbonCard
                :ribbonImage="diamondsImg1"
                ribbonName="Lil_Evil"
                ribbonSum="60 кристаллов"
              />
            </div>

            <div class="flex gap-[50px] translate-x-[-5%]">
              <RibbonCard
                :ribbonImage="blessing"
                ribbonName="Юля Вагитова"
                ribbonSum="Благословение полой луны"
              />
              <RibbonCard
                :ribbonImage="diamondsImg2"
                ribbonName="Красотуля"
                ribbonSum="300 + 30 кристаллов"
              />
            </div>

            <div class="flex gap-[50px] translate-x-[3%] opacity-60">
              <RibbonCard
                :ribbonImage="diamondsImg5"
                ribbonName="Lil_Evil"
                ribbonSum="60 кристаллов"
              />
              <RibbonCard
                :ribbonImage="diamondsImg5"
                ribbonName="Владик Корнилин"
                ribbonSum="3280 + 600 кристаллов"
              />
            </div>

            <div class="flex gap-[50px] opacity-30">
              <RibbonCard
                :ribbonImage="diamondsImg5"
                ribbonName="Красотуля"
                ribbonSum="300 + 30 кристаллов"
              />
              <RibbonCard
                :ribbonImage="diamondsImg5"
                ribbonName="Lil_Evil"
                ribbonSum="60 кристаллов"
              />
            </div>
          </div>
        </div>

        <div
          class="top-up-popular bg-[#080C2099] backdrop-blur-[10px] md:mt-0 rounded-[15px] p-[30px] mx-auto text-white md:w-[55%] "
        >
          <h4 class="text-[22px] md:text-[30px] font-medium mb-[15px]">💖 Самое популярное</h4>

          <div class="popular-block relative md:aspect-[2/1] h-[418px] md:h-auto">
            <div
              class="diamond-card diamond-card-left absolute m-auto inset-0 md:w-[212px] h-fit md:translate-x-[-85%] md:translate-y-[30%] md:rotate-[-16.05deg] scale-[0.80] rotate-[-3.13deg] translate-x-[0%] translate-y-[55%] "
            >
              <DiamondCard
                :diamondsImage="blessing"
                crystalsAmount="Благословение полой луны (30 дней)"
                oldPrice="490 ₽"
                newPrice="329 ₽"
              />
            </div>

            <div
              class="diamond-card diamond-card-center scale-[0.80] md:scale-[1] absolute m-auto inset-0 md:w-[212px] h-fit md:rotate-[3.84deg] z-10 rotate-[-9.11deg] translate-x-[-35%] translate-y-[-30%] md:translate-x-0 md:translate-y-0"
            >
              <DiamondCard
                :diamondsImage="diamondsImg1"
                crystalsAmount="60 кристаллов"
                oldPrice="90 ₽"
                newPrice="67 ₽"
              />
            </div>

            <div
              class="diamond-card diamond-card-right absolute m-auto inset-0 md:w-[212px] h-fit md:translate-x-[85%] md:translate-y-[-30%] md:rotate-[15.81deg] scale-[0.80] rotate-[15.81deg] translate-x-[45%] translate-y-[-10%] md:z-0 z-10"
            >
              <DiamondCard
                :diamondsImage="diamondsImg2"
                crystalsAmount="300 + 30 кристаллов"
                oldPrice="490 ₽"
                newPrice="329 ₽"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Блок преимуществ -->
      <AdvantageComponent class="mt-[92px]"/>
      <!-- -->

      <!-- Блок с карточками -->
      <div class="diamond-cards grid grid-cols-1 md:grid-cols-4 gap-[40px] w-full mt-[68px]">
        <DiamondCard
          :diamondsImage="diamondsImg1"
          crystalsAmount="60 кристаллов"
          oldPrice="90 ₽"
          newPrice="67 ₽"
        />
        <DiamondCard
          :diamondsImage="diamondsImg2"
          crystalsAmount="300 + 30 кристаллов"
          oldPrice="490 ₽"
          newPrice="329 ₽"
        />
        <DiamondCard
          :diamondsImage="diamondsImg3"
          crystalsAmount="980 + 110 кристаллов"
          oldPrice="1670 ₽"
          newPrice="1090 ₽"
          class="hidden md:flex"
        />
        <DiamondCard
          :diamondsImage="diamondsImg4"
          crystalsAmount="1980 + 260 кристаллов"
          oldPrice="2900 ₽"
          newPrice="2190 ₽"
          class="hidden md:flex"
        />
        <DiamondCard
          :diamondsImage="diamondsImg5"
          crystalsAmount="3280 + 600 кристаллов"
          oldPrice="4100 ₽"
          newPrice="3389 ₽"
          class="hidden md:flex"
        />
        <DiamondCard
          :diamondsImage="diamondsImg6"
          crystalsAmount="6480 + 1600 кристаллов"
          oldPrice="7800 ₽"
          newPrice="6799 ₽"
          class="hidden md:flex"
        />
        <DiamondCard
          :diamondsImage="blessing"
          crystalsAmount="Благословение полой луны (30 дней) "
          oldPrice="490 ₽"
          newPrice="329 ₽"
        />
        <DiamondCard
          :diamondsImage="blessing2"
          crystalsAmount="Благословение полой луны (60 дней) "
          oldPrice="820 ₽"
          newPrice="649 ₽"
          class="hidden md:block"
        />
      </div>
      <!-- Wiki -->
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
      <!-- End Wiki -->
      <div
        class="guides-news md:mt-[83px] mt-[46px]  rounded-[10px] flex"
      >
        <button
          class="text-white border-y border-l border-[#00EEFF80] bg-[#232D89B2] font-medium px-[19px] py-[13px] md:py-[15px] rounded-l-[10px] leading-[28px] md:text-[24px] text-[18px]"
        >
          📖 Гайды
        </button>
        <button
          class="bg-[#080C20B2] border-y border-r border-[#00EEFF80] text-[#FFFFFF80] font-medium px-[19px] py-[13px] md:py-[15px] rounded-r-[10px] flex items-center gap-x-[13px] leading-[28px] md:text-[24px] text-[18px]"
        >
          🔔 Новости
        </button>
      </div>
      <!--Блок с гайдами-->
      <div class="guide-cards grid md:px-0 grid-cols-1 md:grid-cols-2 gap-[40px] md:mt-[50px] mt-[30px]">
        <GuideCard
          :guideImage="guide1"
          guide-text="Событие «По исчезающим следам»: советы по прохождению" class="hidden md:grid"
        />
        <GuideCard
          :guideImage="guide2"
          guide-text="Как пройти испытание «Цветной возврат отправителю»" class="hidden md:grid"
        />
        <GuideCard
          :guideImage="guide3"
          guide-text="Мировые активности в Натлане Genshin Impact 5.8" class="hidden md:grid"
        />
        <GuideCard
          :guideImage="guide4"
          guide-text="Гайд на Керидру: для каких отрядов она подойдёт и что для неё нужно?" class="hidden md:grid"
        />
        <GuideCard
          :guideImage="guide1"
          guide-text="Событие «По исчезающим следам»: советы по прохождению" class="md:hidden grid"
        />
        <GuideCard
          :guideImage="guide1"
          guide-text="Событие «По исчезающим следам»: советы по прохождению" class="md:hidden grid"
        />
        <GuideCard
          :guideImage="guide1"
          guide-text="Событие «По исчезающим следам»: советы по прохождению" class="md:hidden grid"
        />
        <GuideCard
          :guideImage="guide1"
          guide-text="Событие «По исчезающим следам»: советы по прохождению" class="md:hidden grid"
        />
      </div>
      <!---->
      
      <!--Футер-->
      <FooterComponent />
      <!---->
    
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 390px) {
  .top-up-ribbon {
    display: none !important;
  }
  .purple-girl {
    display: none !important;
  }
}
</style>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import AdvantageComponent from '@/components/AdvantageComponent.vue'
import DiamondCard from '@/components/DiamondCard.vue'
import GuideCard from '@/components/GuideCard.vue'
import HeroCard from '@/components/HeroCard.vue'
import RibbonCard from '@/components/RibbonCard.vue'

import diamondsImgTop from '@/assets/top.png'
import diamondsImg1 from '@/assets/diamonds.png'
import diamondsImg2 from '@/assets/diamonds-2.png'
import diamondsImg3 from '@/assets/diamonds-3.png'
import diamondsImg4 from '@/assets/diamonds-4.png'
import diamondsImg5 from '@/assets/diamonds-5.png'
import diamondsImg6 from '@/assets/diamonds-6.png'
import blessing from '@/assets/blessing.png'
import blessing2 from '@/assets/blessing-2.png'
import guide1 from '@/assets/guide-1.png'
import guide2 from '@/assets/guide-2.png'
import guide3 from '@/assets/guide-3.png'
import guide4 from '@/assets/guide-4.png'
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

export default {
  name: 'MainPage',
  components: {
    HeaderComponent,
    AdvantageComponent,
    FooterComponent,
    DiamondCard,
    GuideCard,
    HeroCard,
    RibbonCard,
  },
  data() {
    return {
      diamondsImgTop,
      diamondsImg1,
      diamondsImg2,
      diamondsImg3,
      diamondsImg4,
      diamondsImg5,
      diamondsImg6,
      blessing,
      blessing2,
      guide1,
      guide2,
      guide3,
      guide4,
      lauma,
      ineffa,
      kedin,
      kedin2,
      amber,
      dalia,
      fire,
      snow,
      dark,
      earth,
      water,
    }
  },
}
</script>
