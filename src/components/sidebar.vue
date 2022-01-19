<template>
    <div class="sidebar">

        <p>
            <g-link v-show="$locale=='en'" to="/" class="link-clear"> <logo /> </g-link>
            <g-link v-show="$locale=='ru'" to="/ru/" class="link-clear"> <logo /> </g-link>
        </p>

        <p class="title">
            <g-link to="/" exact v-show="$locale=='en'">
                <span>Multi-Agent</span>
                <span>Systems</span>
            </g-link>

            <g-link to="/ru" exact v-show="$locale=='ru'">
                <span>Мультиагентные</span>
                <span>системы</span>
            </g-link>
        </p>

        <nav>
            <p><g-link to="/about">{{$ts('About us')}}</g-link></p>
            <p><g-link to="/projects">{{$ts('Projects')}}</g-link></p>
            <div class="posts-col" v-if="$route.path.split('/')[1] === 'projects'">
              <p v-for="edge in $static.sidebar.edges" :key="edge.node.id">
                <g-link 
                :to="edge.node.path"
                v-if="edge.node.locale === $locale"
                exact>

                  {{edge.node.title}}
                </g-link>
              </p>
            </div>
            <p><g-link to="/jobs">{{$ts('Jobs')}}</g-link></p>
            <p><g-link to="/contacts">{{$ts('Contacts')}}</g-link></p>
        </nav>

        <!-- <nav v-show="$locale=='ru'">
            <p><g-link to="/ru/about">{{$ts('About us')}}</g-link></p>
            <p><g-link to="/ru/contacts">{{$ts('Contacts')}}</g-link></p>
            <p><g-link to="/ru/jobs">{{$ts('Jobs')}}</g-link></p>
        </nav> -->

        <languageSwitcher />
    </div>
</template>

<script>
export default {
  components: {
    logo: () => import('../components/logo.vue'),
    languageSwitcher: () => import('../components/languageSwitcher.vue')
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

    nav .posts-col {
      margin-bottom: var(--space)
    }

    nav .posts-col a {
      display: block;
      color: var(--color-dark);
      background-color: transparent;
      padding-left: 10px;
      border-left: 4px solid var(--color-dark);
    }
    
    nav .posts-col a.active {
      color: var(--color-blue);
      border-color: var(--color-blue);
      cursor: default;
    }

    nav .posts-col > p > a:hover:not(.active) {
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
          path
          title
          locale
        }
      }
    }
  }
</static-query>