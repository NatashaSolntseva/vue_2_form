<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="form-layout">
    <div class="form-header">
      <h2 class="form-title">{{ title }}</h2>
      <p class="form-subtitle">{{ subtitle }}</p>
    </div>
    <div class="form-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.form-layout {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-block: 32px 0px;
  padding-inline: 32px;
}

.form-header {
  text-align: left;
  margin-bottom: 24px;
}

.form-title {
  font-size: 24px;
  color: var(--neutral-800);
  margin-bottom: 8px;
}

.form-subtitle {
  font-size: 16px;
  color: var(--neutral-600);
}

.form-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
</style>
