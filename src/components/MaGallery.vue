<template>
    <section class="gallery-grid">
        <g-link 
            v-for="link in links"
            :key="link.id" 
            :to="link.data.attrs['data-src']"
            target="_blank">

            <img
                class="g-image g-image--lazy g-image--loaded"
                :src="link.data.attrs['data-src']" 
                :data-src="link.data.attrs['src']" 
                :width="link.data.attrs['width']"/>
        </g-link>
    </section>
</template>

<script>
export default {
  name: 'MaGallery',
  data: {
      links: {}
  },
  created() {
      if(this.$slots.default) {
          this.links = this.$slots.default.filter(item => item.tag === "img")   
      }
  }
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

.gallery-grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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