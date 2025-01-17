<template>
  <header class="page-header">
    <div class="page-header__container">
      <IconBrixTemplatesLogo />
      <SharedButton text="Clone now" @click="onCloneNowClick" />
    </div>
  </header>
</template>

<script setup lang="ts">
import SharedButton from '@/components/shared/SharedButton.vue'
import IconBrixTemplatesLogo from '@/components/icons/IconBrixTemplatesLogo.vue'

const onCloneNowClick = () => {
  console.log('Clone Now button clicked')
}
</script>

<style scoped>
.page-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-block: 42px 44px;
}

.page-header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.page-header__logo {
  height: 40px;
  object-fit: contain;
}
</style>
