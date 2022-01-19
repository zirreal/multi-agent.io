<template>
    <component 
      :is="href ? 'g-link' : 'button'"
      v-bind:to="href"
      class="button"
    >

      <slot v-if="$slots.default"/>

    </component>
</template>

<script>
export default {
  name: 'MaButton',

  props: {
    href: {
      type: String,
      default: null
    }
  },
}
</script>

<style scoped>
  .button {
    appearance: none;
    text-decoration: none;

    border: 2px solid var(--color-blue);
    color: var(--color-blue);
    padding: calc(var(--space) * 0.5) var(--space);
    display: inline-block;
    width: fit-content;
    font-weight: bold;
  }

  .button:hover {
    background-color: var(--color-blue);
    color: var(--color-light)
  }

  .button > * {
    display: inline-block;
    vertical-align: middle;
  }

  .button > *:not(:last-child) {
    margin-right: calc(var(--space) * 0.5);
  }

  .button img {
    max-width: 30px;
  }
</style>