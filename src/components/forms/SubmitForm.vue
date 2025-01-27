<script setup lang="ts">
import { defineProps } from 'vue'
import SharedButton from '@/components/shared/SharedButton.vue'
import iconSubmit from '@/assets/icons/submit.svg'

const props = defineProps<{
  onSubmit: () => void
}>()
</script>

<template>
  <div class="form-content">
    <img class="form-icon" :src="iconSubmit" alt="icon" />
    <h2 class="form-title">Submit your quote request</h2>
    <p class="form-subtitle">
      Please review all the information you previously typed in the past steps, and if all is okay,
      submit your message to receive a project quote in 24 - 48 hours.
    </p>
    <SharedButton text="Submit" @click="props.onSubmit" type="submit" />
  </div>
</template>

<style scoped>
.form-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: var(--neutral-800);
  height: 100%;
}

.form-title {
  font-size: 24px;
  line-height: 146%;
  font-weight: 700;
  color: var(--neutral-800);
}

.form-subtitle {
  font-size: 18px;
  line-height: 167%;
  font-weight: 400;
  color: var(--neutral-600);
  max-width: 496px;
}

@media (max-width: 900px) {
  .form-content {
    gap: 20px;
  }
  .form-icon {
    height: 90px;
    width: auto;
  }
  .form-title {
    font-size: 18px;
    line-height: 120%;
  }

  .form-subtitle {
    font-size: 16px;
    line-height: 100%;
  }
}
</style>
