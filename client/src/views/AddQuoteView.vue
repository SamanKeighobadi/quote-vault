<script setup lang="ts">
import BaseButton from '@/base/BaseButton.vue';
import BaseInput from '@/base/BaseInput.vue';
import BaseSelect from '@/base/BaseSelect.vue';
import BaseTextarea from '@/base/BaseTextarea.vue';
import { createQuoute } from '@/services/quote.services';
import { useQuoteStore } from '@/stores/quote';
import type { QuoteBody } from '@/types/quoute.types';


import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';

const router = useRouter()

const author = ref('')
const quote = ref('')
const category = ref<number>()

const quoteStore = useQuoteStore()

onMounted(() => quoteStore.getQuotesCategories())

const submit = () => {

    if (quote.value === "" && author.value === "") {
        return
    }

    const body: QuoteBody = {
        text: quote.value,
        author: author.value,
        categoryId: category.value!
    }

    toast.success("Quote added successfully")

    createQuoute(body)
    setTimeout(() => {
        router.push("/")
    }, 1000);
}


</script>

<template>

    <div class="flex justify-center mt-50">
        <div class="card shadow-lg">
            <div class="card-title px-6">
                    <p>Add New Quoute</p>
            </div>
            <div class="card-body">
                <div class="w-80">
                    <BaseInput color="accent" placeholder="author" v-model="author" />
                    <div class="mt-4">
                        <BaseSelect :options="quoteStore.categories" v-model="category" />
                    </div>


                    <div class="py-4">
                        <BaseTextarea color="accent" placeholder="quote" v-model="quote" />
                    </div>
                    <BaseButton color="primary" @click="submit()">Submit</BaseButton>
                </div>
            </div>
        </div>
    </div>

</template>