<template>
    <section>
        <h4 class="tags" v-if="title"><span class="tag">{{title}}</span></h4>
        <div class="content" :class="{'small':title}" v-if="$slots.default"><slot /></div>
    </section>
</template>

<style scoped>
    section .content.small {
        font-size: 90%;
    }

    section h4.tags {
        margin-top: 0;
        margin-bottom: calc(var(--space) * 0.5);
        font-size: 110%;
    }
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  },
}
</script>
