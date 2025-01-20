<script setup lang="ts">
import { defineEmits, ref, watch } from 'vue'

import CustomCheckbox from '@/components/forms/CustomCheckbox.vue'

import FormLayout from '@/components/layout/FormLayout.vue'
import IconDevelopment from '@/components/icons/IconDevelopment.vue'
import IconDesign from '@/components/icons/IconDesign.vue'
import IconMarketing from '@/components/icons/IconMarketing.vue'
import IconOther from '@/components/icons/IconOther.vue'

const emits = defineEmits<{
  (event: 'update:services', value: string[]): void
}>()

const selectedServices = ref<string[]>([])

watch(selectedServices, (newValue) => {
  emits('update:services', newValue)
})

const services = [
  { id: 'dev', value: 'Development', label: 'Development', icon: IconDevelopment },
  { id: 'design', value: 'Web Design', label: 'Web Design', icon: IconDesign },
  { id: 'marketing', value: 'Marketing', label: 'Marketing', icon: IconMarketing },
  { id: 'other', value: 'Other', label: 'Other', icon: IconOther },
]
</script>

<template>
  <FormLayout title="Our services" subtitle="Please select which service you are interested in.">
    <CustomCheckbox
      v-for="service in services"
      :key="service.id"
      :id="service.id"
      :value="service.value"
      :label="service.label"
      :icon="service.icon"
      v-model="selectedServices"
    />
  </FormLayout>
</template>
