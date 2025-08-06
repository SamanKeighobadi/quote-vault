<script setup lang="ts">
import BaseButton from '@/base/BaseButton.vue';
import QuotesList from '@/components/qoutes/QuotesList.vue';
import { getQuotes } from '@/services/quote.services';
import type { IQuote } from '@/types/quoute.types';
import { onMounted, ref } from 'vue';

const quotes = ref<IQuote[]>([])

onMounted(
  async () => {
    try {

      quotes.value = await getQuotes()

    } catch (error) {
      console.log(error);

    }
  }
)

</script>

<template>
  <main class="">
    <div>
      <BaseButton color="primary">
        <RouterLink to="/add">Add Quote</RouterLink>
      </BaseButton>

    </div>
    <QuotesList :quotes="quotes" />
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: auto;
}
</style>