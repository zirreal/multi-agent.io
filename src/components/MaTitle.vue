<template>
    <h2 :class="type">
      <slot v-if="$slots.default"/>
    </h2>
</template>

<script>
export default {
  name: 'MaTitle',

  props: {
    type: {
      type: String,
      default: null
    }
  },
}
</script>