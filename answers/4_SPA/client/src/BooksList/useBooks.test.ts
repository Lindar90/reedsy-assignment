import { vi, describe, it, expect } from "vitest";
import useBooks from "./useBooks.ts";

vi.mock("../utils/api.ts", () => ({
  default: () =>
    Promise.resolve({ books: [{ title: "title" }], meta: { count: 1 } }),
}));

describe("useBooks", () => {
  it("should return a list of books", async () => {
    const { books, getBooks } = useBooks();

    // Is the list of books initially empty?
    expect(books.value).toEqual([]);

    await getBooks();

    // Is the list of books now defined?
    expect(books.value).toEqual([{ title: "title" }]);
  });
});
