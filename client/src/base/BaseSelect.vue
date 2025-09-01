<script setup lang="ts">
import type { DaisyUIColors, DaisyUISizes, SelectOption } from '@/types/ui.types';
import { computed } from 'vue';


interface SelectProps {
    color?: DaisyUIColors;
    sizes?: DaisyUISizes
    disabled?: boolean;
    selected?: boolean;
    options: SelectOption[]
}

const props = defineProps<SelectProps>()
const model = defineModel<number>()

const selectClasses = computed(() => ({
    'select': true,
    [`select-${props.color}`]: props.color,
    [`select-${props.sizes}`]: props.sizes,
}))

</script>

<template>
    <select :class="selectClasses" v-model="model">
        <option disabled selected>Select</option>
        <option v-for="value in options" :value="value.value">{{ value.label }}</option>
    </select>
</template>