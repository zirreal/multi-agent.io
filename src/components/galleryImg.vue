<template>
  <a target="_blank" :href="url">
    <g-image :src="url" :alt="alt"/>
  </a>
</template>

<script>
export default {
  name: "galleryImg",
  props: ['url', 'alt'],
}
</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>