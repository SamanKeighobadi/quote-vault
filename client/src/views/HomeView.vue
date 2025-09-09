<script setup lang="ts">
import BaseButton from '@/base/BaseButton.vue';
import QuotesList from '@/components/qoutes/QuotesList.vue';
import { useQuoteStore } from '@/stores/quote';
import { onMounted } from 'vue';



const quoteStore = useQuoteStore()

onMounted(() => quoteStore.getAllQuotes())

</script>

<template>
  <main class="py-10">
    <div class="flex justify-end">
      <RouterLink to="/add">
        <BaseButton color="accent" size="md" class="mb-4">
          Add Quote
        </BaseButton>
        
      </RouterLink>

    </div>
    <QuotesList :quotes="quoteStore.quotes" />
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: auto;
}
</style>