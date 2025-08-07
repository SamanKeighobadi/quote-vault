<script setup lang="ts">
import BaseButton from '@/base/BaseButton.vue';
import BaseInput from '@/base/BaseInput.vue';
import BaseSelect from '@/base/BaseSelect.vue';
import BaseTextarea from '@/base/BaseTextarea.vue';
import { createQuoute, getCategories } from '@/services/quote.services';
import type { ICategory, QuoteBody } from '@/types/quoute.types';
import type { SelectOption } from '@/types/ui.types';

import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';

const router = useRouter()

const author = ref('')
const quote = ref('')
const category = ref<number>()
const categories = ref<SelectOption[]>([])

onMounted(async () => {
    try {
        const data: ICategory[] = await getCategories()
        const convertedCategories = data?.map(category => {
            return {
                label: category.name,
                value: category.id
            }
        })
        categories.value = convertedCategories ?? []
    } catch (error) {
        console.error(error)
    }
})

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

    <div class="card">
        <div class="card-body">
            <div class="w-80">
                <BaseInput color="accent" placeholder="author" v-model="author" />
                <BaseSelect :options="categories" v-model="category" />
                <div class="py-4">
                    <BaseTextarea color="accent" placeholder="quote" v-model="quote" />
                </div>
                <BaseButton color="primary" @click="submit()">Submit</BaseButton>
            </div>
        </div>
    </div>

</template>