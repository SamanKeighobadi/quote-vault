import type { IQuote } from "@/types/quoute.types";
import axios from "axios";

export const getQuotes = async ():Promise<IQuote[]> => {
  const {data} = await axios.get(`http://localhost:3000/api/quotes`);

  return data.data;
};
