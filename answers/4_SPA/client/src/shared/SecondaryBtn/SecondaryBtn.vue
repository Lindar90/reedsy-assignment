<template>
  <button class="secondary-btn">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@import "../../styles/variables/colors";

.secondary-btn {
  border: 2px solid $primaryColor;
  font-weight: bold;
  border-radius: 7px;
  color: $primaryColor;
  padding: 5px 12px;
  background-color: transparent;
  cursor: pointer;
}
</style>
