<script lang="ts" setup>
import type { DaisyUIColors, DaisyUISizes } from '@/types/ui.types';
import { computed } from 'vue';


interface BaseButtonProps {
    color: DaisyUIColors,
    disabled?: boolean,
    size?: DaisyUISizes,
    loading?: boolean
}

const { color, disabled, loading, size } = defineProps<BaseButtonProps>()


const buttonClasses = computed(() =>
  [
    'btn',
    color && `btn-${color}`,
    size && `btn-${size}`,
    disabled && 'btn-disabled',
    loading && 'loading',
  ]
    .filter(Boolean)
    .join(' ')
);


</script>

<template>

    <button :class="buttonClasses" :disabled="disabled || loading">
        <slot></slot>
    </button>
</template>