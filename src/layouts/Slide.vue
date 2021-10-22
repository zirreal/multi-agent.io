<template>
  <div class="slide">
    <slot/>
  </div>
</template>


<style scoped>
  .slide {
    min-height: 100vh;
    position: relative;
  }

  .slide-content {
    position: relative;
    z-index: 1;
  }

  .slide-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
/*     
    width: 100vw;
    height: 100vh; */
    overflow: hidden;

    /* object-fit: cover; */

    object-fit: cover;
    width:100%;
    height:100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* For embedding YouTube videos */
  .slide-background.video iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);

    height: 100%;
    width: 177.77777778vw; /* 100 * 16 / 9 */
    min-width: 100%;
    min-height: 56.25vh; /* 100 * 9 / 16 */
    
  }
</style>