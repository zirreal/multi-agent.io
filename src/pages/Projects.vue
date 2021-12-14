<template>
  <Layout>
    <template v-slot:title>{{$ts('Projects')}}</template>
    <h2>Our last projects</h2>
    <div class="projectsGrid">
      <div class="project-card" v-for="edge in $static.allPost.edges">
        <a :href="'/projects/' + edge.node.title">{{edge.node.title}}</a>
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
  }
  .project-card {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
    padding: 20px;
    /*border-radius: 20px;*/
    width: 100%;
    height: 300px;
    box-shadow: 1px 1px 20px #999999;
  }
</style>

<static-query>
  query {
    allPost {
      edges {
        node {
          title
        }
      }
    }
  }
</static-query>