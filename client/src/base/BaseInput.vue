<script setup lang="ts">
import type { DaisyUIColors, DaisyUISizes } from '@/types/ui.types';
import { computed } from 'vue';

type InputType = "text" | "password" | "email"

interface InputProps {
    color?: DaisyUIColors;
    size?: DaisyUISizes;
    type?: InputType;
    placeholder?: string
    disabled?: boolean
}

const { color, placeholder, size, type } = defineProps<InputProps>()
const model = defineModel<string>({ default: '' })

const inputClasses = computed(() => [
    "input",
    [`input-${color}`],
    [`input-${size || "md"}`]
].filter(Boolean).join(' '))


</script>

<template>

    <input :type="type" :placeholder="placeholder" :class="inputClasses" :disabled="disabled" v-model="model">
</template>