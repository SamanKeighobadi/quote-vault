<script lang="ts" setup>
import { computed } from 'vue';


type ButtonColors = "neutral" | "primary" | "info" | "error" | "secondary" | "accent" | "success"
type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

interface BaseButtonProps {
    color?: ButtonColors,
    disabled?: boolean,
    size?: ButtonSizes,
    loading?: boolean
}

const { color, disabled, loading, size } = defineProps<BaseButtonProps>()

const buttonClasses = computed(() => ({
    'btn': true,
    [`btn-${color}`]: color,
    [`btn-${size}`]: size,
    'btn-disabled': disabled,
    'loading': loading,
}));
</script>

<template>
    <button :class="buttonClasses" :disabled="disabled || loading">
        <slot></slot>
    </button>
</template>