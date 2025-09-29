<template>
  <DiamondOverflow class="md:hidden" />
  <div class="md:w-[1200px] mt-[23px] md:mt-[55px]">
    <div class="md:w-[950px] bg-[#080C20B2] rounded-[20px] border border-[#00EEFF4D] relative">
      <div class="absolute left-[-5%] top-[-5%] hidden md:flex">
        <img :src="cardImage" class="w-[270px]" />
      </div>

      <div class="px-[20px] pt-[20px] md:ml-[205px] md:max-w-[62%]">
        <h1 class="text-[24px] md:text-[40px] text-white">{{ cardHeading }}</h1>
        <p class="text-[16px] md:text-[20px] text-white leading-[30px] mt-[28px]">
          {{ cardDescription }}
        </p>
      </div>

      <PayBlock
        :payHeading="payHeading"
        oldPrice="9500"
        :placeholder="placeholder"
        :secondPlaceholder="secondPlaceholder"
      />

      <AdvantageComponent4 />

      <div class="hidden md:grid grid-cols-[auto_1fr] gap-[24px] mb-[50px]">
        <div class="flex ml-[63px]">
          <h1 class="text-[24px]">📖</h1>
        </div>

        <div class="flex flex-col gap-[25px] w-[684px] mt-[5px]">
          <p class="text-[14px] text-white relative pl-[20px] leading-[24px]">
            <span class="absolute left-0 top-[10px] w-[3px] h-[3px] bg-white rounded-full"></span>
            Введите свой UID от аккаунта в игре, оплатите покупку и заказ дойдет в игру за несколько
            минут, если UID указан верно. Редко при высоких нагрузках во время игровых событий время
            доставки может увеличиться до нескольких часов. Если возникли проблемы с покупкой
            обратитесь в поддержку.
          </p>
          <p class="text-[14px] text-white relative pl-[20px] leading-[24px]">
            <span class="absolute left-0 top-[10px] w-[3px] h-[3px] bg-white rounded-full"></span>
            Внимание! Если вам долго не приходит заказ, и вы ввели не верный UID обращайтесь в
            поддержку! Возможно, есть шанс что такого UID нет вообще и можно будет переотправить
            товар.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdvantageComponent4 from '@/components/base/BaseAdvantage4.vue'
import DiamondOverflow from '@/components/block/BlockDiamondOverflow.vue'
import PayBlock from '@/components/block/BlockPay.vue'

const props = defineProps({
  cardImage: {
    type: String,
    default: () => require('@/assets/diamonds.png'),
  },
  cardHeading: {
    type: String,
    default: 'Купить 60 кристаллов',
  },
  cardDescription: {
    type: String,
    default:
      'Пак 60 примогемов - это как дейлики, только за рубли и без лишней траты времени, который позволит моментально получить свои кристаллы на аккаунт.',
  },
  payHeading: {
    type: String,
    default: '1 набор в 60 кристаллов сотворения для Геншин Импакт',
  },
  placeholder: {
    type: String,
    default: 'Ваш UID'
  },
  secondPlaceholder: {
    type: String,
    default: undefined
  }
})
</script>
