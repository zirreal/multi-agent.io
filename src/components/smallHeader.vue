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
    text-wrap: normal;
    margin-right: var(--space);
  }
  .tags {
    width: 100%;
  }
</style>