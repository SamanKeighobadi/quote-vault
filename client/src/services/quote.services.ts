import type { ICategory, IQuote, QuoteBody } from "@/types/quoute.types";
import axios from "axios";

/**
 * Get all quotes from the server
 *
 * @returns {Promise<IQuote[]>} Promise that resolves to an array of all quotes
 */
export const getQuotes = async (): Promise<IQuote[]> => {
  const { data } = await axios.get(`http://localhost:3000/api/quotes`);

  return data.data;
};

/**
 * Get all categories from the server
 *
 * @returns {Promise<ICategory[]>} Promise that resolves to an array of all categories
 */
export const getCategories = async (): Promise<ICategory[]> => {
  const { data } = await axios.get(
    "http://localhost:3000/api/quotes/category/list"
  );

  return data.data;
};

/**
 * Create a new quote on the server
 *
 * @param {QuoteBody} data Object containing the quote's text, author, and category
 * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the response from the server
 */
export const createQuoute = async (data: QuoteBody) => {
  const response = await axios.post("http://localhost:3000/api/quotes", data);
  return response;
};



/**
 * Delete a quote from the server
 *
 * @param {number} id The ID of the quote to delete
 * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the response from the server
 */
export const deleteQuote = async (id:number) =>{
    const response = await axios.delete(`http://localhost:3000/api/quotes/${id}`)
    return response
}