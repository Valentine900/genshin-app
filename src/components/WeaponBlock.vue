<template>
    <WeaponComponent
    :weaponImage="weapon1"
      weaponHeading='A thousand Floating Dreams (ATK: 542 • Elemental Mastery: 265)'
      weaponDescription='[Refinement 1] Party members other than the equipping character will provide the equipping character with buffs based on whether their Elemental Type is the same as the latter or not. If their Elemental Types are the same, increase Elemental Mastery by 32. If not, increase the equipping character’s DMG Bonus from their Elemental Type by 10%. Each of the aforementioned effects can have up to 3 stacks. Additionally, all nearby party members other than the equipping character will have their Elemental Mastery increased by 40. Multiplesuch effects from multiple such weapons can stack.'
      />
    <WeaponComponent
    :weaponImage="weapon2"
      weaponHeading='Sacrificial Fragments (ATK: 454 • Elemental Mastery: 221)'
      weaponDescription='[Refinement 5]After dealing damage to an opponent with an Elemental Skill, the skill has a 80% chance to end its own CD. Can only occur once every 16s.'
      />
    <WeaponComponent
    :weaponImage="weapon3"
      weaponHeading='Hakushin Ring (ATK: 565 • Energy Recharge: 30.6%)'
      weaponDescription='[Refinement 5] After the character equipped with this weapon triggers an Electro elemental reaction, nearby party members of an Elemental Type involved in the elemental reaction receive a 20% Elemental DMG Bonus for their element, lasting 6s. Elemental Bonuses gained in this way cannot be stacked. Note: This weapon is a good option for teams where Sucrose can swirl Electro to trigger its damage-boosting passive. In Electro-Charged teams, she can buff Hydro DMG% as well.'
      />
</template>

<script setup>
import WeaponComponent from './WeaponComponent.vue';

import weapon1 from '@/assets/weapon1.png'
import weapon2 from '@/assets/weapon2.png'
import weapon3 from '@/assets/weapon3.png'
</script>