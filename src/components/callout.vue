<template>
  <div class="callout-wrapper">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "callout"
}
</script>

<style scoped>
  .callout-wrapper {
    display: flex;
    justify-content: flex-end;
    font-style: italic;
    font-weight: 300;
    font-size: 1.25rem;
    margin-bottom: 50px;
  }
</style>