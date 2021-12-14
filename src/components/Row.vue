<template>
  <div :class="[{'centered': stickToTop !== undefined}, 'row-wrapper']">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: ['stickToTop']
}
</script>

<style scoped>
  .row-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 20px 0 20px 0;
    gap: 15px;
    align-items: flex-start;
  }
  .row-wrapper:not(:last-child) {
    border-bottom: 1px solid black;
  }
  .centered {
    align-items: center;
  }
</style>