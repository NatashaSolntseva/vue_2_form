<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentStep: number
  totalSteps: number
}>()

const stepsArray = computed(() => {
  return Array.from({ length: props.totalSteps }, (_, i) => i + 1)
})
</script>

<template>
  <div class="steps-counter">
    <div
      v-for="(step, index) in stepsArray"
      :key="index"
      class="step"
      :class="{
        'step--active': step === currentStep,
        'step--completed': step < currentStep,
        'step--last-active': currentStep === totalSteps,
      }"
    >
      <span class="step-number">{{ step }}</span>
      <span
        v-if="step !== totalSteps"
        class="step-line"
        :class="{
          'step-line--completed': step < currentStep,
          'step-line--half-completed': step === currentStep,
        }"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.steps-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.step {
  display: flex;
  align-items: center;
  gap: 16px;
}

@media (max-width: 600px) {
  .steps-counter {
    gap: 8px;
  }

  .step {
    gap: 8px;
  }
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: var(--neutral-300);
  color: var(--neutral-800);
  font-size: 16px;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .step-number {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .step-number {
    width: 24px;
    height: 24px;
    font-size: 12px;
  }
}

.step--active .step-number {
  background-color: var(--primary-color-1);
  color: var(--neutral-100);
}

.step--completed .step-number {
  background-color: var(--primary-color-1);
  color: var(--neutral-100);
}

.step--last-active .step-number {
  background-color: var(--primary-color-1);
  color: var(--neutral-100);
}

.step-line {
  width: 98px;
  height: 6px;
  border-radius: 40px;
  background-color: var(--neutral-300);
  position: relative;
}

@media (max-width: 600px) {
  .step-line {
    width: 50px;
  }
}

@media (max-width: 360px) {
  .step-line {
    width: 30px;
  }
}

.step-line--completed {
  background-color: var(--primary-color-1);
}

.step-line--half-completed::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: var(--primary-color-1);
  border-radius: 40px;
  z-index: 1;
}
</style>
