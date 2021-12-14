<template>
  <div class="gallery-wrapper">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "gallery"
}
</script>

<style scoped>
  .gallery-wrapper {
    margin-top: 50px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .gallery-wrapper > a {
    display: inline-block;
    background-size: cover;
    margin-top: -13px;
    position: relative;
    width: 33.3333%;
    height: 0;
    padding-bottom: 33.3333%;
  }
  @media screen and (max-width: 500px){
    .gallery-wrapper > a {
      width: 50%;
      padding-bottom: 50%;
    }
  }

  @media screen and (max-width: 400px) {
    .gallery-wrapper > a {
      width: 100%;
      padding-bottom: 100%;
    }
  }
</style>