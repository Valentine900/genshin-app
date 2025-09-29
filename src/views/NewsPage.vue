<template>
  <div class="relative main-content mx-auto flex md:mt-[40px] mt-[30px] justify-between">
    <div class="text-content">
      <div class="relative">
        <RouterLink to="/NewsItemPage">
          <h1
            class="md:text-[40px] text-[30px] font-medium text-white leading-[112%] md:mt-[32px] md:mb-[60px] mb-[38px]"
          >
            🔔 Новости Genshin Impact
          </h1>
        </RouterLink>
      </div>
    </div>
  </div>
  <NewsAndGuidesComponent placeholderText="Поиск по новостям" />
  <GuideBlock />
  <GuideBlock />
</template>

<script setup>
import NewsAndGuidesComponent from '@/components/base/BaseNewsAndGuides.vue'
import GuideBlock from '@/components/block/BlockGuide.vue'
</script>
