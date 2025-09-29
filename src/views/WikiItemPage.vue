<template>
  <div class="md:w-[1200px] rounded-[20px] mt-[14px] relative">
    <BreadcrumbsComponent
      back-path="/WikiPage"
      back-text="🎭 Wiki по персонажам"
      current-page="Сахароза"
    />
    <div class="absolute md:right-[-1%] md:top-[1%] md:z-10 scale-[0.95] md:scale-[1]">
      <img src="@/assets/sucrose2.png" class="w-[512px]" />
    </div>
    <div
      class="md:w-[1100px] bg-[#080C20B2] backdrop-blur-[10px] mt-[265px] md:mt-[40px] rounded-[20px] border border-[#00EEFF4D]"
    >
      <div class="flex mt-[20px] md:mt-[32px] ml-[20px] md:ml-[36px] gap-[16px] md:gap-[30px]">
        <img src="@/assets/snow.svg" class="w-[32px] md:w-[50px]" />
        <h1 class="text-white text-[28px] md:text-[50px] font-bold md:font-medium">Сахароза</h1>
      </div>
      <div class="md:w-[565px] md:ml-[120px]">
        <h2 class="text-white text-[14px] md:text-[18px] font-light ml-[70px] md:ml-0">
          4 уровень
        </h2>
        <div class="h-px bg-[#00EEFF99] mt-[24px] md:mt-[38px] mx-[20px] md:mx-0"></div>
        <p
          class="text-[#FFFFFFE5] text-[18px] font-light mt-[28px] md:mt-[42px] leading-[34px] mx-[20px] md:mx-0"
        >
          Сахароза — одаренный алхимик но в то же время мечтательная и милая симпатичная девушка. Ее
          милый, а местами и опасные эксперименты позволят вам расправляться с группами мелких
          врагов. и не забудьте что она в первую очередь алхимик и ее пассивный навык может
          сэкономить вам немало ресурсов. Создаёт маленького Воздушного духа, который притягивает к
          себе врагов. Создаёт маленького Воздушного духа.
        </p>
        <div class="h-px bg-[#00EEFF99] mt-[37px] md:mt-[50px] mx-[20px] md:mx-0"></div>
      </div>
      <div class="mx-[20px] md:ml-[63px] md:mx-0">
        <h1 class="text-white text-[24px] md:text-[34px] font-medium mt-[37px] md:mt-[70px]">
          Talent Priorities
        </h1>
        <p class="text-[#FFFFFFE5] text-[16px] font-normal mt-[38px] leading-[32px] md:w-[727px]">
          When utilized as a Viridescent Venerer (4) artifact set holder, make sure you don’t
          immediately swap away after casting Skill/Burst, you need to be on-field when the swirl
          reaction happens for you to trigger the 4-set effect.
        </p>
        <p class="text-[#FFFFFFE5] text-[16px] font-normal mt-[38px] leading-[32px] md:w-[727px]">
          Sucrose’s Ascension 4 Talent boosts the entire team’s EM by 20% of Sucrose’s total EM,
          this is why you want to stack as much Elemental Mastery as possible in her artifacts. As a
          support, most of Sucrose’s value lies on her Ascension 1 and 4 talents, hence leveling her
          other talents (Normal Attack, Skill, Burst) is not required.
        </p>
        <img src="@/assets/sucrose-skills.png" class="mt-[44px] md:mt-[60px]" />
        <ConstellationsBlock />
        <img src="@/assets/sucrose-stars.png" class="hidden md:flex mt-[60px]" />
        <h2
          class="text-[24px] md:text-[34px] mt-[37px] md:mt-[75px] text-nowrap mb-[37px] md:mb-[56px] text-white"
        >
          Recommended Weapons
        </h2>
        <div class="md:mr-[63px]">
          <WeaponBlock />
        </div>
        <div class="md:mr-[15px]">
          <LinksComponent />
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-[30px] mt-[70px] text-white hidden md:flex md:mb-[70px]">
        🎭 Смотрите также:
      </h3>
    </div>
  </div>
  <HeroContainer :limit="6" class="hidden md:grid" />
</template>

<script setup>
import HeroContainer from '@/components/base/BaseHeroContainer.vue'
import LinksComponent from '@/components/base/BaseLinks.vue'
import BreadcrumbsComponent from '@/components/ui/UiBreadcrumbs.vue'
import ConstellationsBlock from '@/components/block/BlockConstellations.vue'
import WeaponBlock from '@/components/block/BlockWeapon.vue'
</script>
