<template>
  <button class="primary-btn">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@import "../../styles/variables/colors";

.primary-btn {
  background-color: $primaryColor;
  border: 0;
  border-radius: 7px;
  color: $textOnDarkColor;
  padding: 5px 12px;
  cursor: pointer;
}
</style>
