<script lang="ts" setup>

interface QuoteProps {
    text: string;
    author: string;
}

defineProps<QuoteProps>()

</script>

<template>
    <div class="card bg-base-100 card-lg  shadow-sm">

        <div class="card-body">
            
            <q>{{ text }}</q>
            <h6 class="text-slate-400">
                {{ author }}
            </h6>
        </div>
    </div>
</template>