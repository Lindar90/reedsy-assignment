import { describe, it, expect } from "vitest";
import usePagination from "./usePagination";
import { ref } from "vue";

describe("usePagination", () => {
  it("should return the current page", () => {
    const { page } = usePagination(ref([1, 2, 3]));
    expect(page.value).toBe(1);
  });

  it("should return the current items per page", () => {
    const { itemsPerPage } = usePagination(ref([1, 2, 3]));
    expect(itemsPerPage.value).toBe(5);
  });

  it("should return the paginated items", () => {
    const { paginatedItems, itemsPerPage, page } = usePagination(
      ref([1, 2, 3]),
    );
    // Returns the first 5 items
    expect(paginatedItems.value).toEqual([1, 2, 3]);

    // Check if the items are paginated correctly
    itemsPerPage.value = 1;
    page.value = 2;
    expect(paginatedItems.value).toEqual([2]);

    itemsPerPage.value = 2;
    page.value = 1;
    expect(paginatedItems.value).toEqual([1, 2]);
  });

  it("should return the total number of pages", () => {
    const { totalPages } = usePagination(ref([1, 2, 3]));
    expect(totalPages.value).toBe(1);
  });

  it("should return if there is a previous page", () => {
    const { hasPrev, itemsPerPage, page } = usePagination(ref([1, 2, 3]));
    expect(hasPrev.value).toBe(false);

    itemsPerPage.value = 1;
    page.value = 2;
    expect(hasPrev.value).toBe(true);
  });

  it("should return if there is a next page", () => {
    const { hasNext, itemsPerPage, page } = usePagination(ref([1, 2, 3]));
    expect(hasNext.value).toBe(false);

    itemsPerPage.value = 1;
    expect(hasNext.value).toBe(true);

    page.value = 3;
    expect(hasNext.value).toBe(false);
  });

  it("should return the items per page options", () => {
    const { itemsPerPageOptions } = usePagination(ref([1, 2, 3]));
    expect(itemsPerPageOptions).toEqual([1, 2, 3, 4, 5, 10]);
  });

  it("should go to the next page", () => {
    const { onNextPage, page, itemsPerPage } = usePagination(ref([1, 2, 3]));
    onNextPage();
    expect(page.value).toBe(1);

    itemsPerPage.value = 1;
    onNextPage();
    expect(page.value).toBe(2);

    page.value = 3;
    onNextPage();
    expect(page.value).toBe(3);
  });

  it("should go to the previous page", () => {
    const { onPrevPage, page, itemsPerPage } = usePagination(ref([1, 2, 3]));
    onPrevPage();
    expect(page.value).toBe(1);

    itemsPerPage.value = 1;
    onPrevPage();
    expect(page.value).toBe(1);

    page.value = 3;
    onPrevPage();
    expect(page.value).toBe(2);
  });
});
