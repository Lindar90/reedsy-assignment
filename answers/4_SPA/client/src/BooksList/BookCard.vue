<script setup lang="ts">
import { computed } from "vue";
import PrimaryBtn from "../shared/PrimaryBtn/PrimaryBtn.vue";
import SecondaryBtn from "../shared/SecondaryBtn/SecondaryBtn.vue";
import Book from "../types/Book.ts";

const props = defineProps<{ book: Book }>();

const description = computed(() => {
  if (props.book.synopsis.length > 200) {
    return props.book.synopsis.slice(0, 200) + "...";
  }

  return props.book.synopsis;
});
</script>

<template>
  <div class="book-list-card">
    <div class="info">
      <div class="title-line">
        <router-link :to="`/books/${book.slug}`" class="title-link">
          <h3>{{ book.title }}</h3>
        </router-link>

        {{ " " }}
        <span>({{ book.rating }}/{{ 10 }})</span>
      </div>

      <p class="author">
        <em>{{ book.author }}</em>
      </p>

      <p class="description">
        {{ description }}
      </p>

      <div class="upvotes-line">
        <SecondaryBtn v-if="book.upvoted">Upvoted</SecondaryBtn>
        <PrimaryBtn v-else>Upvote</PrimaryBtn>

        <span class="upvoted-times">Upvoted {{ book.upvotes }} times</span>
      </div>
    </div>

    <router-link :to="`/books/${book.slug}`">
      <img :src="book.cover" :alt="book.title" />
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/variables/colors";
@import "../styles/variables/breakpoints";

.book-list-card {
  padding: 30px;
  display: flex;
  flex-direction: column-reverse;

  @media screen and (width >= $md) {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: auto 120px;
  }

  .info {
    .title-line {
      margin-bottom: 10px;

      .title-link {
        color: $primaryColor;
        text-decoration: none;

        h3 {
          display: inline;
        }
      }
    }

    .author {
      margin-bottom: 20px;
    }

    .upvotes-line {
      margin-top: 20px;

      .upvoted-times {
        margin-left: 15px;
      }
    }
  }

  img {
    border-radius: 10px;
    margin: 0 auto 20px auto;

    @media screen and (width >= $md) {
      margin: 0;
    }
  }

  &:nth-child(odd) {
    background-color: $surfaceColor;
  }
}
</style>
