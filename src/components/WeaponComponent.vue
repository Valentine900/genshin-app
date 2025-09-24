<template>
  <div
    class="bg-[#161E64CC] mx-auto md:grid grid-cols-[20%_70%] max-w-[310px] md:max-w-[1100px] rounded-[15px] mb-[25px]"
  >
    <div>
      <img :src="weaponImage" class="pt-[21px] md:mt-[44px] ml-[21px] md:mx-auto" />
    </div>
    <div class="mx-[21px] md:ml-[52px]">
      <h2 class="text-[20px] text-white mt-[60px] font-bold">
        {{ weaponHeading }}
      </h2>
      <p class="text-[18px] text-white font-normal leading-[30px] mt-[36px] pb-[21px] md:pb-0 md:mb-[69px]">
        {{ weaponDescription }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  weaponImage: {
    type: String,
    default: () => require('@/assets/weapon1.png'),
  },
  weaponHeading: {
    type: String,
    default: 'A thousand Floating Dreams (ATK: 542 • Elemental Mastery: 265)',
  },
  weaponDescription: {
    type: String,
    default: '[Refinement 1] Party members other than the equipping character will provide the equipping character with buffs based on whether their Elemental Type is the same as the latter or not. If their Elemental Types are the same, increase Elemental Mastery by 32. If not, increase the equipping character’s DMG Bonus from their Elemental Type by 10%. Each of the aforementioned effects can have up to 3 stacks. Additionally, all nearby party members other than the equipping character will have their Elemental Mastery increased by 40. Multiplesuch effects from multiple such weapons can stack.',
  },
})
</script>
