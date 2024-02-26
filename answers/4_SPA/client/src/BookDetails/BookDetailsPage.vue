<script setup lang="ts">
import { useRoute } from "vue-router";
import useBook from "./useBook.ts";
import PrimaryBtn from "../shared/PrimaryBtn/PrimaryBtn.vue";
import SecondaryBtn from "../shared/SecondaryBtn/SecondaryBtn.vue";

const route = useRoute();
const bookSlug = route.params.id as string;

const { book, getBook } = useBook();

getBook(bookSlug);
</script>

<template>
  <div v-if="!book">Loading... Styles TBD</div>

  <div v-else class="book-details">
    <div class="title-line">
      <h1>{{ book.title }}</h1>

      <div class="upvotes-section">
        <span>Upvoted {{ book.upvotes }} times</span>

        <PrimaryBtn v-if="book.upvoted">Upvoted</PrimaryBtn>
        <SecondaryBtn v-else>Upvote</SecondaryBtn>
      </div>
    </div>

    <p>
      <em>{{ book.author }}</em>
    </p>

    <img :src="book.cover" :alt="book.title" />

    <h3 class="synopsis-title">Synopsis</h3>

    <p class="synopsis-text">{{ book.synopsis }}</p>

    <h4>Rating: {{ book.rating }}/10</h4>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/variables/colors";
@import "../styles/variables/breakpoints";

.book-details {
  height: 100%;
  padding: 30px;
  background-color: $surfaceColor;

  .title-line {
    display: flex;
    flex-direction: column;

    @media screen and (width > $md) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      color: $primaryColor;
    }

    .upvotes-section {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;

      @media screen and (width > $md) {
        justify-content: flex-end;
      }
    }
  }

  img {
    max-height: 400px;
    margin: 30px auto;
    border-radius: 15px;
  }

  .synopsis-title {
    margin-bottom: 10px;
  }

  .synopsis-text {
    margin-bottom: 30px;
  }
}
</style>
