<template>
    <div class="sidebar">

        <p>
            <g-link :to="localeSlash" class="link-clear"> <logo /> </g-link>
        </p>

        <p class="title">
            <g-link :to="localeSlash" exact>
                <template v-if="$locale=='en'">
                  <span>Multi-Agent</span>
                  <span>Systems</span>
                </template>

                <template v-if="$locale=='ru'">
                  <span>Мультиагентные</span>
                  <span>системы</span>
                </template>
            </g-link>
        </p>

        <nav>
            <div class="nav-line"><g-link :to="localeSlash + 'about'">{{$ts('About us')}}</g-link></div>
            <div class="nav-line">
              <g-link class="parent" :to="'/projects' + localeSlash">{{$ts('Projects')}}</g-link>

              <!-- <div class="child">
                <div v-for="edge in $static.sidebar.edges" :key="edge.node.id">
                  <g-link 
                  :to="edge.node.path"
                  v-if="edge.node.locale === $locale">

                    {{edge.node.title}}

                  </g-link>
                </div>
              </div> -->

            </div>

            <div class="nav-line"><g-link :to="localeSlash + 'jobs'">{{$ts('Jobs')}}</g-link></div>
            <div class="nav-line"><g-link :to="localeSlash + 'contacts'">{{$ts('Contacts')}}</g-link></div>
        </nav>

        <languageSwitcher />
    </div>
</template>

<script>
export default {
  components: {
    logo: () => import('../components/logo.vue'),
    languageSwitcher: () => import('../components/languageSwitcher.vue')
  },
  computed: {
    localeSlash(){
      if(this.$locale === 'en') {
        return '/'
      } else {
        return '/' + this.$locale + '/'
      }
    }
  }
}
</script>

<style scoped>
    .sidebar {
        font-size: var(--font-size-mid);
        -ms-overflow-style: none;  /* hide scrollbar IE and Edge */
            scrollbar-width: none;  /* hide scrollbar Firefox */
    }

    /* hide scrollbar */
    .sidebar::-webkit-scrollbar { display: none; }

    nav a, .title span {
        background-color: var(--color-dark);
        color: var(--color-light);
        font-weight: 500;
        display: inline-block;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    nav a.active, .title a.active span {
        background-color: var(--color-blue);
    }

    nav a:hover, .title a:hover span {
        background-color: var(--color-orange);
    }

    .nav-line {
      margin-bottom: var(--space);
    }

    nav .child {
      margin-top: var(--space);
      margin-bottom: var(--space);
      display: none;
    }

    nav .parent.active ~ .child {
      display: block;
    }

    nav .child a {
      display: block;
      color: var(--color-dark);
      background-color: transparent;
      padding-left: 10px;
      border-left: 4px solid var(--color-dark);
    }
    
    nav .child a.active {
      color: var(--color-blue);
      border-color: var(--color-blue);
      cursor: default;
    }

    nav .child > * > a:hover:not(.active) {
      color: var(--color-orange);
      border-color: var(--color-orange);
    }

    .title {
        margin: calc(var(--space)*2) 0
    }

    .title span {
        transition: 0.2s ease;
    }

    select {
        background-color: var(--color-dark);
        color: var(--color-light);
        padding-top: 0;
        padding-bottom: 0;
        margin-top: var(--space);
        background-image: url('/select-arrow-light.svg');
        transition: 0.2s ease;
    }

    select:hover {
        background-color: var(--color-orange);
        border-color: var(--color-orange);
    }

</style>

<static-query>
  query {
    sidebar: allPost {
      edges {
        node {
          id
          path
          title
          locale
        }
      }
    }
  }
</static-query>