<template>
  <Layout>
    <template v-slot:title>{{$ts('Projects')}}</template>
    <p>Let us tell you about our R&D projects. All of them has scientific mission and real-life implementation. Some of them we can build for business, bring IoT to your life.</p>
    <div class="projectsGrid">
      <div class="project-card"
           v-for="edge in $static.allPost.edges"
           :style="{'background-image': 'url(' + edge.node.coverSrc + ')'}">
        <p>
          <a :href="'/projects/' + edge.node.title">{{edge.node.title}}</a>
          <br/>
          <a :href="'/projects/' + edge.node.title">{{edge.node.subtitle}}</a>
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Projects"
}
</script>

<style scoped>
  .projectsGrid {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 65px;
  }
  .project-card {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 442px;
    /*background-image: url("/gakachuCover.png");*/
    background-size: cover;
    background-position: center;
  }

  .project-card > p {
    position: relative;
    left: -30px;
    bottom: 20px;
    transition: all .3s;
  }

  .project-card > p > a {
    background-color: var(--color-blue);
    color: var(--color-light);
    display: inline-block;
    padding: 0 0.5rem;
    font-size: 1.3rem;
    font-weight: bold;
    transition: all .3s;
  }

  .project-card > p:hover > a {
    transition: all .3s;
    background-color: var(--color-orange);
    transform: translateX(10px);
  }

</style>

<static-query>
  query {
    allPost {
      edges {
        node {
          title
          subtitle
          coverSrc
        }
      }
    }
  }
</static-query>