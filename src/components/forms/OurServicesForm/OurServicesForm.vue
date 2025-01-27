<script setup lang="ts">
import { defineEmits, ref, watch } from 'vue'

import FormLayout from '@/components/layout/FormLayout.vue'
import CustomCheckbox from './CustomCheckbox.vue'
import { SERVICES } from './OurServicesForm.const'

const emits = defineEmits<{
  (event: 'update:services', value: string[]): void
}>()

const selectedServices = ref<string[]>([])

watch(selectedServices, (newValue) => {
  emits('update:services', newValue)
})
</script>

<template>
  <FormLayout title="Our services" subtitle="Please select which service you are interested in.">
    <CustomCheckbox
      v-for="service in SERVICES"
      :key="service.id"
      :value="service.value"
      :label="service.label"
      :icon="service.icon"
      v-model="selectedServices"
    />
  </FormLayout>
</template>
