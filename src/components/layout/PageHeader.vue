<script setup lang="ts">
import SharedButton from '@/components/shared/SharedButton.vue'
import IconBrixTemplatesLogo from '@/components/icons/IconBrixTemplatesLogo.vue'

const onCloneNowClick = () => {}
</script>

<template>
  <header class="page-header">
    <div class="page-header__container">
      <IconBrixTemplatesLogo class="page-header__logo" />
      <SharedButton text="Clone now" @click="onCloneNowClick" />
    </div>
  </header>
</template>

<style scoped>
.page-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-block: 42px 44px;
}

@media (max-width: 900px) {
  .page-header {
    padding-block: 25px;
  }
}

.page-header__container {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.page-header__logo {
  height: 40px;
  object-fit: contain;
}

@media (max-width: 600px) {
  .page-header__logo {
    height: 30px;
    width: auto;
  }
}

@media (max-width: 400px) {
  .page-header__logo {
    height: 20px;
    width: auto;
  }
}
</style>
