<template>
  <button @click="redirect" class="buttonWrapper">
    <g-image v-if="type === 'OpenSea' && imgHref === undefined" src="~/assets/images/OpenSea.png"/>
    <g-image v-if="type === 'Rarible' && imgHref === undefined" src="~/assets/images/Rarible.png"/>

    <g-image v-if="type === 'Github' && imgHref === undefined" src="~/assets/images/GitHub.png"/>
    <g-image v-if="type === 'Youtube' && imgHref === undefined" src="~/assets/images/YouTube.png"/>


    <g-image v-if="imgHref !== undefined" :src="imgHref"/>
    <slot/>
  </button>
</template>

<script>
export default {
  name: "iconButton",
  props: ['imgHref', 'to', 'type'],
  methods: {
    redirect() {
      window.location = this.$props.to
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
    justify-content: center;
    align-items: center;
    gap: 11px;
  }
  button img {
    height: 29px;
    width: auto;
  }
</style>