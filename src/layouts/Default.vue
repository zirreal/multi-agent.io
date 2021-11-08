<template>
  <div class="page layout">
      <sidebar/>

      <div class="page-content">
        <h1><slot name="title">Multi-Agent Systems</slot></h1>
        <div class="text">
          <slot/>
           <h2>{{$ts('Apply to join us')}}</h2>
          <formJoin/>
        </div>
      </div>

  </div>
</template>


<style>
  .page {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 4fr);
    gap: calc(var(--space) * 2);
    align-items: start;
  }

  .page h1 {
    border-bottom: 1px solid var(--color-dark);
    margin-bottom: calc(var(--space)*3);
  }

  .sidebar {
    position: sticky;
    top: var(--space)
  }

  .text {
    max-width: var(--w-content);
  }

  /* more space between columns on wide */
  @media screen and (min-width: 1800px) {
    .page { gap: calc(var(--space) * 4); }
  }

  /* align content right for non wide */
  @media screen and (min-width: 600px) and (max-width: 1800px) {

    .page h1 { text-align: right; }

    .text {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 100%;
    }

    .text > * {
      display: block;
      width: 100%;
    }

    .text > *:not(h2):not(h3):not(h4):not(h5)
    {
        max-width: calc(var(--w-content)*0.9);
    }

   .text h2, .text h3, .text h4, .text h5 {
      max-width: var(--w-content);
    }

  }

  @media screen and (max-width: 1240px) {
    .page {
      grid-template-columns: minmax(0, 1fr) minmax(0, 3fr);
      gap: var(--space);
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    .page {
      grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    }
  }

  @media screen and (min-width: 600px) {
    .sidebar {
      overflow-y: auto;
      max-height: 100vh;
      padding: 0 calc(var(--space)*2) calc(var(--space)*2) 0;
    }
  }

  @media screen and (max-width: 600px) {
    .page {
      display: block;
    }

    /* possible place toggler */
    /* .page .sidebar nav {
      display: none;
    } */

    .sidebar {
      position: static;
      margin-bottom: calc(var(--space)*4);
    }
  }
</style>

<script>
export default {
  components: {
    sidebar: () => import('../components/sidebar.vue'),
    formJoin: () => import('../components/formJoin.vue')
  }
}
</script>