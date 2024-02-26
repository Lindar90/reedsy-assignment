import { computed, ref, Ref, watch } from "vue";

export default function usePagination<T>(
  items: Ref<T[]>,
  defaultItemsPerPage: number = 5,
) {
  const page = ref(1);
  const itemsPerPage = ref(defaultItemsPerPage);

  const paginatedItems = computed(() => {
    const start = (page.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return items.value.slice(start, end);
  });

  const totalPages = computed(() =>
    Math.ceil(items.value.length / itemsPerPage.value),
  );

  const hasPrev = computed(() => page.value > 1);
  const hasNext = computed(() => page.value < totalPages.value);

  const onNextPage = () => {
    if (hasNext.value) page.value++;
  };

  const onPrevPage = () => {
    if (hasPrev.value) page.value--;
  };

  const itemsPerPageOptions = [1, 2, 3, 4, 5, 10];

  watch(itemsPerPage, () => {
    if (page.value > totalPages.value) {
      page.value = totalPages.value;
    }
  });

  return {
    page,
    itemsPerPage,
    paginatedItems,
    onNextPage,
    onPrevPage,
    hasPrev,
    hasNext,
    totalPages,
    itemsPerPageOptions,
  };
}
