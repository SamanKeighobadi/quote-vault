<script lang="ts" setup>
import type { IQuote } from '@/types/quoute.types';
import QuoteItem from './QuoteItem.vue';

const { quotes } = defineProps<{ quotes: IQuote[] }>()


</script>

<template>
  <div class="">

    <QuoteItem v-for="quote in quotes" :text="quote.text" :author="quote.author" :id="quote.id" />
  </div>
</template>