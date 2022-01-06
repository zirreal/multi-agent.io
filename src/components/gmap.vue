<template>
  <iframe :src="src"
          width="100%" height="460"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"></iframe>
</template>

<script>
export default {
  name: "gmap",
  props: {
    src: String
  }
}
</script>

<style scoped>
  iframe {
    margin-top: calc(2*var(--space));
    filter: grayscale(1);
    transition: all .3s;
  }

  iframe:hover {
    filter: grayscale(0);
    transition: all .3s;
  }
</style>