<template>
    <div class="grid md:grid-cols-6 grid-cols-2 gap-[20px] mt-[67px] md:mt-[15px] z-40">
          <HeroCard :heroImage="lauma" :elementImage="fire" heroName="Лаума" class="md:block" />
          <HeroCard :heroImage="ineffa" :elementImage="snow" heroName="Инеффа" class="block" />
          <HeroCard
            :heroImage="kedin"
            :elementImage="dark"
            heroName="Кедин"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="kedin2"
            :elementImage="earth"
            heroName="Кедин"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="amber"
            :elementImage="fire"
            heroName="Эмбер"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="dalia"
            :elementImage="water"
            heroName="Далия"
            class="hidden md:block"
          />
          <HeroCard :heroImage="lauma" :elementImage="fire" heroName="Лаума" class="block" />
          <HeroCard :heroImage="ineffa" :elementImage="snow" heroName="Инеффа" class="block" />
          <HeroCard
            :heroImage="kedin"
            :elementImage="dark"
            heroName="Кедин"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="kedin2"
            :elementImage="earth"
            heroName="Кедин"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="amber"
            :elementImage="fire"
            heroName="Эмбер"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="dalia"
            :elementImage="water"
            heroName="Далия"
            class="hidden md:block"
          />
          <HeroCard :heroImage="lauma" :elementImage="fire" heroName="Лаума" class="block" />
          <HeroCard :heroImage="ineffa" :elementImage="snow" heroName="Инеффа" class="block" />
          <HeroCard
            :heroImage="kedin"
            :elementImage="dark"
            heroName="Кедин"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="kedin2"
            :elementImage="earth"
            heroName="Кедин"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="amber"
            :elementImage="fire"
            heroName="Эмбер"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="dalia"
            :elementImage="water"
            heroName="Далия"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="lauma"
            :elementImage="fire"
            heroName="Лаума"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="ineffa"
            :elementImage="snow"
            heroName="Инеффа"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="kedin"
            :elementImage="dark"
            heroName="Кедин"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="kedin2"
            :elementImage="earth"
            heroName="Кедин"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="amber"
            :elementImage="fire"
            heroName="Эмбер"
            class="hidden md:block"
          />
          <HeroCard
            :heroImage="dalia"
            :elementImage="water"
            heroName="Далия"
            class="hidden md:block"
          />
        </div>
</template>

<script setup>
import HeroCard from './HeroCard.vue'

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