import { deleteQuote } from "@/services/quote.services";
import { showToast } from "@/utils/showToast";
import { defineStore } from "pinia";

export const useQuoteStore = defineStore("quote", () => {
  const removeQuote = async (quoteId: number) => {
    await deleteQuote(quoteId);
    showToast("success", "Quote deleted successfully");
  };

  return {
    removeQuote,
  };
});
