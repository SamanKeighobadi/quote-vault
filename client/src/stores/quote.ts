import { convertDataToSelectInput } from "@/helpers";
import {
  deleteQuote,
  getCategories,
  getQuotes,
} from "@/services/quote.services";
import type { ICategory, IQuote } from "@/types/quoute.types";
import type { SelectOption } from "@/types/ui.types";
import { showToast } from "@/utils/showToast";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuoteStore = defineStore("quote", () => {
  const categories = ref<SelectOption[]>([]);
  const quotes = ref<IQuote[]>([]);

  const getQuotesCategories = async () => {
    try {
      const data: ICategory[] = await getCategories();

      const convertedCategories = convertDataToSelectInput(data, "name", "id");
      categories.value = convertedCategories ?? [];
    } catch (error) {
      console.error(error);
    }
  };

  const getAllQuotes = async () => {
    try {
      quotes.value = await getQuotes();
    } catch (error) {}
  };

  const removeQuote = async (quoteId: number) => {
    await deleteQuote(quoteId);
    showToast("success", "Quote deleted successfully");
  };

  return {
    removeQuote,
    getAllQuotes,
    getQuotesCategories,
    categories,
    quotes,
  };
});
