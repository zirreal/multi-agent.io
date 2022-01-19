<template>
  <div class="page layout">
      <sidebar/>

      <div class="page-content">
        <h1><slot name="title">Multi-Agent Systems</slot></h1>
        <h2 class="callout" v-if="$slots.subtitle"><slot name="subtitle"></slot></h2>

        <div class="text">
          <slot/>

          <template v-if="form === $static.metadata.formNameJobs">
            <h2>{{$ts('Apply to join us')}}</h2>
            <formJoin/>
          </template>
        </div>
      </div>

  </div>
</template>


<static-query>
query {
  metadata {
    formNameJobs
  }
}
</static-query>


<style scoped>
  @import url('../assets/style/layout.css');
  
  h2.callout {
    margin-top: 0;
  }
</style>>

<script>
export default {
  components: {
    sidebar: () => import('../components/sidebar.vue'),
    formJoin: () => import('../components/formJoin.vue')
  },

  props: {
    form: {
      type: String,
      default: null
    }
  },
}
</script>