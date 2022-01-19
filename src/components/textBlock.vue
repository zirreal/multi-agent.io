<template>
  <div class="text-wrapper">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "textBlock",
}
</script>

<style scoped>
  .text-wrapper {
    font-size: 0.8rem;
  }
</style>