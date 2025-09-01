<script lang="ts" setup>
import BaseButton from '@/base/BaseButton.vue';

import { useQuoteStore } from '@/stores/quote';


interface QuoteProps {
    id: number;
    text: string;
    author: string;
}

defineProps<QuoteProps>()

const quoteStore = useQuoteStore()

const handleRemoveQuoute = async (quoteId: number) => {
    console.log(quoteId)
    await quoteStore.removeQuote(quoteId)
}

</script>

<template>
    <div class="card bg-base-100 card-lg  shadow-lg mb-5">

        <div class="card-body">

            <q>{{ text }}</q>
            <h6 class="text-slate-400">
                {{ author }}
            </h6>
            <div class="flex justify-end">
                <BaseButton color="error" @click="handleRemoveQuoute(id)">
                    Delete
                </BaseButton>

            </div>
        </div>
    </div>
</template>