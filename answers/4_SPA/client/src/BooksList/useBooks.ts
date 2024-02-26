import { ref } from "vue";
import api from "../utils/api.ts";
import Book from "../types/Book.ts";

interface BookListResponse {
  books: Book[];
  meta: {
    count: number;
  };
}

export default function useBooks() {
  const books = ref<Book[]>([]);

  const getBooks = async () => {
    // TODO error handling
    const { books: bookList } = await api<BookListResponse>("books");
    books.value = bookList;
  };
  return { books, getBooks };
}
