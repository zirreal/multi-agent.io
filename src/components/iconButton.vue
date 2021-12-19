<template>
  <button @click="redirect" class="buttonWrapper">
    <g-image v-if="type === 'OpenSea' && imgHref === undefined" src="~/assets/images/OpenSea.png"/>
    <g-image v-if="type === 'Rarible' && imgHref === undefined" src="~/assets/images/Rarible.png"/>

    <g-image v-if="type === 'Github' && imgHref === undefined" src="~/assets/images/GitHub.png"/>
    <g-image v-if="type === 'Youtube' && imgHref === undefined" src="~/assets/images/YouTube.png"/>

    <g-image v-if="imgHref !== undefined" :src="imgHref"/>
    <div class="text-wrapper">
      <slot/>
    </div>
  </button>
</template>

<script>
export default {
  name: "iconButton",
  props: ['imgHref', 'to', 'type'],
  methods: {
    redirect() {
      if(this.$props.to === '' || this.$props.to === undefined) {
        console.log('switch is on')
        switch (this.$props.type) {
          case 'Github':
            window.location = this.$static.metadata.link_github
            break
          case 'Youtube':
            window.location = this.$static.metadata.link_youtube
            break
          case 'OpenSea':
            window.location = this.$static.metadata.link_opensea
            break
          case 'Rarible':
            window.location = this.$static.metadata.link_rarible
            break
          default:
            window.location = '/'
            break;
        }
      } else {
        window.location = this.$props.to
      }
    }
  }
}
</script>

<style scoped>
  .buttonWrapper {
    display: flex;
    border: 2px solid var(--color-blue);
    color: var(--color-blue);
    font-size: 1rem;
    font-weight: bold;
    padding: 11px;
    align-items: center;
    gap: 11px;
    transition: all .2s;
    cursor: pointer;
  }
  button img {
    height: 29px;
    width: auto;
  }
  .text-wrapper {
    text-align: left;
    flex-wrap: wrap;
  }

  button:hover {
    border-color: var(--color-green);
    color: var(--color-green);
    /*filter: saturate(.4);*/
  }
</style>

<static-query>
  query {
    metadata {
      link_opensea,
      link_youtube,
      link_rarible,
      link_github
    }
  }
</static-query>