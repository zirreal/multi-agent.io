<template>
  <div class="gallery-grid">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "gallery"
}
</script>

<style scoped>

.gallery-grid {
  margin-top: var(--space);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.gallery-grid a {
  display: block;
  width: 33%;
  max-height: 300px;
  height: auto;
}

.gallery-grid > a:hover {
  transform: scale(1.15);
  transition: all .2s;
}

@media screen and (max-width: 900px) {
  .gallery-grid a {
    width: 50%;
  }
}

@media screen and (max-width: 390px) {
  .gallery-grid a {
    width: 100%;
  }
}

</style>