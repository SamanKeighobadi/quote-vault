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

const inputClasses = computed(() => ({
    "input": true,
    [`input-${color}`]: color,
    [`input-${size}`]: size,

}))

</script>

<template>

    <input :type="type" :placeholder="placeholder" :class="inputClasses" :disabled="disabled">
</template>