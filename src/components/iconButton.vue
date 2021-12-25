<template>
  <g-link :to="url" class="button-outline">
    <g-image :src="src"/>
    <span>
      <slot/>
    </span>
  </g-link>
</template>

<script>
export default {
  name: "iconButton",
  props: ['src', 'to'],
  computed: {
    url() {
      let links = {
        opensea: this.$static.metadata.link_opensea,
        youtube: this.$static.metadata.link_youtube,
        rarible: this.$static.metadata.link_rarible,
        github: this.$static.metadata.link_github,
      }
      return links[this.$props.to]
    }
  }
}
</script>

<style scoped>
  .button-outline {
    border: 2px solid var(--color-blue);
    color: var(--color-blue);
    font-size: 1rem;
    font-weight: bold;
    padding: 11px;
    gap: 11px;
    transition: all .2s;
    cursor: pointer;
  }
  .button-outline > * {
    display: inline-block;
    vertical-align: middle;
  }

  .button-outline > *:not(:last-child) {
    margin-right: var(--space);
  }

  .button-outline img {
    max-width: 30px;
  }

  .button-outline:hover {
    background-color: var(--color-light);
    border-color: var(--color-green);
    color: var(--color-green);
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