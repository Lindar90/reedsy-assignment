<script setup lang="ts">
import useBooks from "./useBooks.ts";
import BookCard from "./BookCard.vue";
import usePagination from "../shared/usePagination.ts";
import Book from "../types/Book.ts";

const { books, getBooks } = useBooks();

getBooks();

const {
  paginatedItems,
  onPrevPage,
  onNextPage,
  hasPrev,
  hasNext,
  page,
  totalPages,
  itemsPerPage,
  itemsPerPageOptions,
} = usePagination<Book>(books);
</script>

<template>
  <h1>Top books of all time</h1>

  <!-- TODO: Extract into reusable component -->
  <div class="pagination">
    <div>
      <span>Page {{ page }} out of {{ totalPages }}</span>
      <button v-if="hasPrev" @click="onPrevPage" class="pagination-btn">
        {{ "<" }} Prev
      </button>
      <button v-if="hasNext" @click="onNextPage" class="pagination-btn">
        Next {{ ">" }}
      </button>
    </div>

    <div>
      <span>Items per page:</span>
      <select v-model="itemsPerPage">
        <option
          v-for="option in itemsPerPageOptions"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
  </div>

  <div>
    <BookCard v-for="book in paginatedItems" :key="book.slug" :book="book" />
  </div>
</template>

<style scoped lang="scss">
@import "../styles/variables/colors";

h1 {
  color: $primaryColor;
  text-align: center;
  margin-bottom: 20px;
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin: 20px;

  .pagination-btn {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    color: $primaryColor;
    font-weight: bolder;
  }
}
</style>
