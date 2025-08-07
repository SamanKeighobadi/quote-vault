export interface IQuote {
  text: string;
  author: string;
  categoryId: number;
}

export interface ICategory{
  id: number,
  name: string
}

export interface QuoteBody {
  text: string;
  author: string;
  categoryId: number;
}