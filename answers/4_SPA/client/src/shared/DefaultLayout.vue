<template>
  <div class="default-layout">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/variables/colors";
@import "../styles/variables/breakpoints";

.default-layout {
  background-color: $backgroundColor;
  display: flex;
  flex-direction: column;

  .container {
    flex: 1;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    max-width: 650px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
