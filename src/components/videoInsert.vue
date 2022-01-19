<template>
  <div class="embed-v video-margin"><iframe :src="src" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
</template>

<script>
export default {
  name: "videoInsert",
  props: ['src']
}
</script>

<style scoped>
  .video-margin {
    margin-top: 84px;
  }
</style>