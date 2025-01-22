<script setup lang="ts">
import MultiStepFormLayput from '@/components/layout/MultiStepFormLayout.vue'
</script>

<template>
  <main class="main-content"><MultiStepFormLayput /></main>
</template>

<style scoped>
.main-content {
  min-height: calc(100vh - 147px - 164px);
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 900px) {
  .main-content {
    min-height: calc(100vh - 90px - 194px);
  }
}
</style>
