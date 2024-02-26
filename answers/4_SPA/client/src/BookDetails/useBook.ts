import { ref } from "vue";
import Book from "../types/Book.ts";
import api from "../utils/api.ts";

export default function useBook() {
  const book = ref<Book>();

  const getBook = async (slug: string) => {
    // TODO error handling
    book.value = await api<Book>(`books/${slug}`);
  };
  return { book, getBook };
}
