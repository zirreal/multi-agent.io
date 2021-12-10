<template>
  <section class="tags">
    <span class="tag">
      <slot/>
    </span>
  </section>
</template>

<style scoped>
  section {
    margin-bottom: 0;
  }
  .tag {
    font-size: 1rem;
    font-weight: bold;
  }
</style>