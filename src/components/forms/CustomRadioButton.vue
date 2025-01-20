<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps<{
  id: string
  value: string
  modelValue: string
  label: string
}>()

const emits = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

// methods вызываются каждый раз, когда они используются.
// computed кэшируются и переоцениваются только тогда, когда связанные данные изменяются.

const isChecked = computed(() => props.modelValue === props.value)

function handleChange() {
  emits('update:modelValue', props.value)
}
</script>

<template>
  <label class="radio-button" :class="{ 'radio-button--checked': isChecked }">
    <input
      class="radio-input"
      type="radio"
      :value="value"
      :checked="isChecked"
      @change="handleChange"
    />
    <div class="radio-content">
      <div class="radio-circle"></div>
      <span class="radio-label">{{ label }}</span>
    </div>
  </label>
</template>

<style scoped>
.radio-input {
  display: none;
}

.radio-button {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 100%;
  border: 2px solid var(--neutral-300);
  border-radius: 16px;
  padding-block: 47px;
  padding-left: 32px;
  background-color: var(--neutral-100);
  cursor: pointer;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease;
}

.radio-button:hover {
  border-color: var(--primary-color-1);
}

.radio-button--checked {
  border-color: var(--primary-color-1);
}

.radio-content {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.radio-circle {
  width: 24px;
  height: 24px;
  border: 2px solid var(--neutral-300);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
  position: relative;
}

.radio-circle::after {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--neutral-100);
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.radio-input:checked + .radio-content .radio-circle {
  border-color: var(--primary-color-1);
  background-color: var(--primary-color-1);
}

.radio-label {
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: var(--neutral-800);
}
</style>
