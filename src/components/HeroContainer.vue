<template>
  <div class="grid md:grid-cols-6 grid-cols-2 gap-[20px] mt-[67px] md:mt-[15px] z-40">
    <HeroCard
      v-for="hero in displayedHeroes"
      :key="hero.id"
      :heroImage="hero.image"
      :elementImage="hero.element"
      :heroName="hero.name"
      :class="hero.class"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
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

const props = defineProps({
  limit: {
    type: Number,
    default: null 
  }
})

// Все герои
const allHeroes = [
  { id: 1, image: lauma, element: fire, name: "Лаума", class: "md:block" },
  { id: 2, image: ineffa, element: snow, name: "Инеффа", class: "block" },
  { id: 3, image: kedin, element: dark, name: "Кедин", class: "hidden md:block" },
  { id: 4, image: kedin2, element: earth, name: "Кедин", class: "hidden md:block" },
  { id: 5, image: amber, element: fire, name: "Эмбер", class: "hidden md:block" },
  { id: 6, image: dalia, element: water, name: "Далия", class: "hidden md:block" },
  { id: 7, image: lauma, element: fire, name: "Лаума", class: "block" },
  { id: 8, image: ineffa, element: snow, name: "Инеффа", class: "block" },
  { id: 9, image: kedin, element: dark, name: "Кедин", class: "hidden md:block" },
  { id: 10, image: kedin2, element: earth, name: "Кедин", class: "hidden md:block" },
  { id: 11, image: amber, element: fire, name: "Эмбер", class: "hidden md:block" },
  { id: 12, image: dalia, element: water, name: "Далия", class: "hidden md:block" },
  { id: 13, image: lauma, element: fire, name: "Лаума", class: "md:block" },
  { id: 14, image: ineffa, element: snow, name: "Инеффа", class: "block" },
  { id: 15, image: kedin, element: dark, name: "Кедин", class: "hidden md:block" },
  { id: 16, image: kedin2, element: earth, name: "Кедин", class: "hidden md:block" },
  { id: 17, image: amber, element: fire, name: "Эмбер", class: "hidden md:block" },
  { id: 18, image: dalia, element: water, name: "Далия", class: "hidden md:block" },
  { id: 19, image: lauma, element: fire, name: "Лаума", class: "md:block" },
  { id: 20, image: ineffa, element: snow, name: "Инеффа", class: "block" },
  { id: 21, image: kedin, element: dark, name: "Кедин", class: "hidden md:block" },
  { id: 22, image: kedin2, element: earth, name: "Кедин", class: "hidden md:block" },
  { id: 23, image: amber, element: fire, name: "Эмбер", class: "hidden md:block" },
  { id: 24, image: dalia, element: water, name: "Далия", class: "hidden md:block" },
  { id: 25, image: lauma, element: fire, name: "Лаума", class: "md:block" },
  { id: 26, image: ineffa, element: snow, name: "Инеффа", class: "block" },
  { id: 27, image: kedin, element: dark, name: "Кедин", class: "hidden md:block" },
  { id: 28, image: kedin2, element: earth, name: "Кедин", class: "hidden md:block" },
  { id: 29, image: amber, element: fire, name: "Эмбер", class: "hidden md:block" },
  { id: 30, image: dalia, element: water, name: "Далия", class: "hidden md:block" },
]

const displayedHeroes = computed(() => {
  return props.limit ? allHeroes.slice(0, props.limit) : allHeroes
})
</script>
