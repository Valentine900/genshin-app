<template>
      <div
        class="md:w-[1200px] rounded-[20px] mt-[18px] grid grid-cols-1 md:grid-cols-[250px_1fr] gap-[32px] md:gap-[55px] bg-[#080C20B2] border border-[#00EEFF4D]"
      >
        <ProfileComponent />
        <ProfileTableComponent />
      </div>
</template>

<script setup>
import ProfileTableComponent from '@/components/base/BaseProfileTable.vue'
import ProfileComponent from '@/components/base/BaseProfile.vue'
</script>
