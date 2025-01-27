<script setup lang="ts">
import { defineEmits, ref, watch } from 'vue'

import FormLayout from '@/components/layout/FormLayout.vue'
import CustomRadioButton from './CustomRadioButton.vue'

import { BUDGETS } from './BudgetForm.const.ts'

const emits = defineEmits<{
  (event: 'update:budget', value: string): void
}>()

const selectedBudget = ref<string>('$5,000 - $10,000')

watch(selectedBudget, (newValue) => {
  emits('update:budget', newValue)
})
</script>

<template>
  <FormLayout
    title="What’s your project budget?"
    subtitle="Please select the project budget range you have in mind."
  >
    <CustomRadioButton
      v-for="budget in BUDGETS"
      :key="budget.id"
      :name="budget.name"
      :value="budget.value"
      :label="budget.label"
      v-model="selectedBudget"
    />
  </FormLayout>
</template>
