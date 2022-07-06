<template>
  <Layout>
    <template v-slot:title>{{$ts('Projects')}}</template>
    <p v-if="$locale=='en'">Let us tell you about our R&D projects. All of them has scientific mission and real-life implementation. Some of them we can build for business, bring IoT to your life.</p>
    <p v-if="$locale=='ru'">Расскажем о наших R&D проектах. Все они имеют научную миссию и реальное воплощение. Некоторые из них мы можем построить для бизнеса, внедрить IoT в вашу жизнь.</p>

    <section class="projects" v-if="$page.projects.edges.length > 0">
      <g-link
        v-for="edge in $page.projects.edges"
        :key="edge.node.title"
        :to="edge.node.path">

        <g-image alt="" :src="edge.node.cover" />

        <h3 class="projects-text">
          <span class="title">{{edge.node.title}}</span>
          <span class="subtitle">{{edge.node.subtitle}}</span>
        </h3>

      </g-link>
    </section>
  </Layout>

</template>

<script>
export default {
  name: "Projects"
}
</script>

<style scoped>
  .projects > a {
    display: block;
    position: relative;
    max-width: 1000px;
    margin-bottom: calc(var(--space) * 2);
  }

  .projects > a:hover {
    background: none;
  }

  .projects > a img {
    display: block;
    max-width: 100%;
  }

  .projects > a .projects-text {
    position: absolute;
    bottom: calc(var(--space) * 2);
    left: calc(var(--space) * -2);
  }

  .projects-text span {
    display: block;
    padding: 0.1rem 0.2rem;
    background-color: var(--color-blue);
    color: var(--color-light);
    font-weight: bold;
    width: fit-content;
    animation: title 0.4s forwards;
  }

  .projects > a span:first-child {
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .projects > a span:last-child {
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .projects > a:hover {
    box-shadow: 0 var(--space) 0 var(--color-blue)
  }

  .projects > a:hover span {
    animation: titleOn 0.2s forwards;
  }

  .projects > a:hover span:first-child {
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .projects > a:hover span:last-child {
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  @media screen and (max-width: 600px) {
    .projects > a .projects-text {
      left: 0;
      bottom: var(--space)
    }
  }

  @keyframes title {
    from{
      transform: translateX(calc(var(--space)*2));
    }
    to{
      transform: translateX(0);
    }
  }

  @keyframes titleOn {
    from{
      transform: translateX(0);
    }
    to{
      transform: translateX(calc(var(--space)*2));
    }
  }

</style>

<page-query>
  query ($locale: String!) {
    projects: allPost(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          path
          title
          subtitle
          cover
          locale
        }
      }
    }
  }
</page-query>
