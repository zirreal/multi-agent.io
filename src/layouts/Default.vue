<template>
  <div class="page layout">
      <sidebar/>

      <div class="page-content">
        <h1><slot name="title">Multi-Agent Systems</slot></h1>
        <div class="text"><slot/></div>
      </div>

  </div>
</template>


<style>
  .page {
    display: grid;
    grid-template-columns: minmax(0, var(--sidebarwidth)) minmax(0, 1fr);
    gap: calc(var(--space) * 2);
    align-items: start;
  }

  .page h1 {
    text-align: right;
    border-bottom: 1px solid var(--color-dark);
    margin-bottom: calc(var(--space)*3);
  }


  .text {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .text > * {
    display: block;
    width: 100%;
  }

  .text > *:not(h1):not(h2):not(h3):not(h4):not(h5)
  {
      max-width: 900px;
  }

  h2, h3, h4, h5 {
    max-width: 1000px;
  }

  .sidebar {
    position: sticky;
    top: var(--space)
  }

  @media screen and (max-width: 1100px) {
    .page {
      grid-template-columns: 1fr
    }

    /* place toggler */
    /* .page .sidebar nav {
      display: none;
    } */

    .sidebar {
      position: static;
    }
  }
</style>

<script>
export default {
  components: {
    sidebar: () => import('../components/sidebar.vue')
  },

  mounted: function(){
    console.log(this.$locale)
  }
}
</script>