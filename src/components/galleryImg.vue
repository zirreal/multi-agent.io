<template>
  <a class="gallery-image" target="_blank" :href="url" :style="style"></a>
</template>

<script>
export default {
  name: "galleryImg",
  props: ['url'],
  computed: {
    style () {
        return `background-image: url('${this.url}')`
    }
  }
}
</script>

<style scoped>
  .gallery-image {
    display: block;
  }
</style>