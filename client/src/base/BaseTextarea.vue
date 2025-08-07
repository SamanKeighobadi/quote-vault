<script setup lang="ts">
import type { DaisyUIColors, DaisyUISizes } from '@/types/ui.types';
import { computed } from 'vue';


interface TextareaProps {
    color?: DaisyUIColors;
    size?: DaisyUISizes;
    placeholder?: string
    disabled?: boolean;
    rows?: number;
    cols?: number
}

const { color, placeholder, size } = defineProps<TextareaProps>()
const model = defineModel<string>({ default: '' })


const classes = computed(() => ({
    'textarea': true,
    [`textarea-${color}`]: color,
    [`textarea-${size}`]: size
}))

</script>

<template>
    <textarea :placeholder="placeholder" :class="classes" :disabled="disabled" :rows="rows" :cols="cols"
        v-model="model"></textarea>
</template>