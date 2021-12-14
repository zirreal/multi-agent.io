<template>
  <div class="caption-wrapper">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "imgCaption"
}
</script>

<style scoped>
  .caption-wrapper {
    margin-top: 50px;
  }
</style>