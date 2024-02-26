import { vi, describe, it, expect } from "vitest";
import useBook from "./useBook.ts";

vi.mock("../utils/api.ts", () => ({
  default: () => Promise.resolve({ title: "title" }),
}));

describe("useBook", () => {
  it("should return a book", async () => {
    const { book, getBook } = useBook();

    // Is the book initially undefined?
    expect(book.value).toBeUndefined();

    await getBook("slug");

    // Is the book now defined?
    expect(book.value).toEqual({ title: "title" });
  });
});
