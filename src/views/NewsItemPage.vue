<template>
  <BreadcrumbsComponent
    back-path="/NewsPage"
    back-text="🔔 Новости"
    current-page="Итоги стрима разработчиков версии 5.8 «Лето! Жара? Курорт!»"
    class="ml-[10px]"
  />
  <div class="md:w-[1200px] rounded-[20px] mt-[14px] bg-[#080C20B2] border border-[#00EEFF4D]">
    <div class="md:w-[887px]">
      <h1
        class="text-[28px] md:text-[40px] ml-[21px] md:ml-[42px] mt-[21px] md:mt-[42px] text-white leading-[50px]"
      >
        Итоги стрима разработчиков версии 5.8 «Лето! Жара? Курорт!»
      </h1>
      <h2
        class="text-[24px] md:text-[34px] ml-[21px] md:ml-[42px] mt-[35px] md:mt-[70px] text-white leading-[28px]"
      >
        Промокоды
      </h2>
      <p
        class="text-[16px] mx-[21px] md:ml-[42px] md:mx-0 mt-[38px] font-normal text-[#FFFFFFE5] leading-[32px]"
      >
        Приветствуем, Путешественники! Подошёл к концу специальный стрим версии 5.8 Genshin Impact,
        на котором анонсировали продолжение сюжета игры. Давайте разберём, что нам показали.
      </p>
    </div>
    <div class="flex flex-col md:flex-row mx-[21px] md:mx-[42px] mt-[25px] md:mt-[51px] gap-[30px]">
      <img src="@/assets/stream.png" />
      <img src="@/assets/stream2.png" />
    </div>
    <div>
      <p
        class="text-[16px] ml-[21px] md:ml-[42px] mt-[25px] md:mt-[50px] font-normal text-[#FFFFFFE5] leading-[32px]"
      >
        В первую очередь, не забудьте ввести промокоды со стрима. Они просрочатся 19 июля в 7 утра
      </p>
      <div
        class="flex flex-col md:flex-row mx-[21px] md:ml-[57px] mt-[20px] md:mt-[35px] gap-[8px] md:gap-[3px]"
      >
        <span class="text-[#DD044F] font-bold">✧ Ineffa0730Birgitta</span>
        <p class="font-normal text-[#FFFFFFE5]">
          — х100 камней истока, х10 волшебной руды усиления;
        </p>
      </div>
      <div
        class="flex flex-col md:flex-row mx-[21px] md:ml-[57px] mt-[15px] gap-[8px] md:gap-[3px]"
      >
        <span class="text-[#DD044F] font-bold">✧ Summer0730Asha</span>
        <p class="font-normal text-[#FFFFFFE5]">— х100 камни истока, х5 опыт героя;</p>
      </div>
      <div
        class="flex flex-col md:flex-row mx-[21px] md:ml-[57px] mt-[15px] gap-[8px] md:gap-[3px]"
      >
        <span class="text-[#DD044F] font-bold">✧ TranquilBanquet</span>
        <p class="font-normal text-[#FFFFFFE5]">— х100 камни истока, х50,000 мора.</p>
      </div>
      <h2
        class="text-[24px] ml-[21px] md:ml-[42px] mt-[20px] md:mt-[35px] text-white leading-[28px]"
      >
        Как активировать промокоды
      </h2>
      <div class="flex flex-col gap-[10px] md:w-[684px] mt-[15px] ml-[25px] md:ml-[50px]">
        <p class="font-normal text-[#FFFFFFE5] relative pl-[20px]">
          <span class="absolute left-0 top-[10px] w-[3px] h-[3px] bg-white rounded-full"></span>В
          игре — Настройки > Учётная запись > Промокод
        </p>
        <p class="font-normal text-[#FFFFFFE5] relative pl-[20px]">
          <span class="absolute left-0 top-[10px] w-[3px] h-[3px] bg-white rounded-full"></span>На
          сайте.
        </p>
      </div>
      <h2
        class="text-[28px] md:text-[34px] ml-[21px] md:ml-[42px] mt-[24px] md:mt-[48px] text-white leading-[28px]"
      >
        Лунная жрица — Дендро
      </h2>
      <p
        class="md:w-[847px] text-[16px] mx-[21px] md:ml-[42px] mt-[20px] md:mt-[38px] font-normal text-[#FFFFFFE5] leading-[32px]"
      >
        Приветствуем, Путешественники! Подошёл к концу специальный стрим версии 5.8 Genshin Impact,
        на котором анонсировали продолжение сюжета игры. Давайте разберём, что нам показали.
      </p>
      <img
        src="@/assets/dendro.png"
        class="w-[87%] md:w-[1115px] ml-[21px] md:ml-[42px] mt-[24px] md:mt-[48px]"
      />
    </div>

    <div class="ml-[25px] md:ml-[50px] mr-[25px] md:mr-0">
      <LinksComponent />
    </div>
  </div>
  <div>
    <h3 class="text-[30px] mt-[82px] text-white hidden md:flex">🔔 Смотрите также::</h3>
  </div>
  <GuideBlock class="hidden md:grid" />
</template>

<script setup>
import LinksComponent from '@/components/base/BaseLinks.vue'
import BreadcrumbsComponent from '@/components/ui/UiBreadcrumbs.vue'
import GuideBlock from '@/components/block/BlockGuide.vue'
</script>
