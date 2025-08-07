import type { ICategory, IQuote, QuoteBody } from "@/types/quoute.types";
import axios from "axios";

export const getQuotes = async (): Promise<IQuote[]> => {
  const { data } = await axios.get(`http://localhost:3000/api/quotes`);

  return data.data;
};

export const getCategories = async (): Promise<ICategory[]> => {
  const { data } = await axios.get(
    "http://localhost:3000/api/quotes/category/list"
  );

  return data.data;
};

export const createQuoute = async (data: QuoteBody) => {
  const response = await axios.post("http://localhost:3000/api/quotes", data);
  return response;
};



export const deleteQuote = async (id:number) =>{
    const response = await axios.delete(`http://localhost:3000/api/quotes/${id}`)
    return response
}