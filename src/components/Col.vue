<template>
  <div class="col-wrapper">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Col"
}
</script>

<style scoped>
  .col-wrapper {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

  }
</style>