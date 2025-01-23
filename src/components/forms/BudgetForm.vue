<script setup lang="ts">
import { defineEmits, ref, watch } from 'vue'

import FormLayout from '@/components/layout/FormLayout.vue'
import CustomRadioButton from '@/components/forms/CustomRadioButton.vue'

const emits = defineEmits<{
  (event: 'update:budget', value: string): void
}>()

const selectedBudget = ref<string>('$5,000 - $10,000')

watch(selectedBudget, (newValue) => {
  emits('update:budget', newValue)
})

const budgets = [
  { id: 'budget1', value: '$5,000 - $10,000', label: '$5,000 - $10,000' },
  { id: 'budget2', value: '$10,000 - $20,000', label: '$10,000 - $20,000' },
  { id: 'budget3', value: '$20,000 - $50,000', label: '$20,000 - $50,000' },
  { id: 'budget4', value: '$50,000+', label: '$50,000+' },
]
</script>

<template>
  <FormLayout
    title="What’s your project budget?"
    subtitle="Please select the project budget range you have in mind."
  >
    <CustomRadioButton
      v-for="budget in budgets"
      :key="budget.id"
      :id="budget.id"
      :value="budget.value"
      :label="budget.label"
      v-model="selectedBudget"
    />
  </FormLayout>
</template>
