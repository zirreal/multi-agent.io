<template>
  <Layout :form="'b2b'">
    <template v-slot:title><a href="/projects">{{$ts('Projects')}}</a> / {{$page.post.title}}</template>

    <template v-slot:subtitle>{{$page.post.subtitle}}</template>
    
    <component 
      :is="video ? 'g-link' : 'div'"
      v-bind:to="video"
      class="project-cover"
    >
      <g-image :src="$page.post.cover" :alt="$page.post.title"/>
    </component>

    <p v-if="$page.post.description" v-html="$page.post.description" />

    <VueRemarkContent class="remarkContent" />

  </Layout>
</template>

<style scoped>
  .project-cover {
    position: relative;
    display: block;
    margin-bottom: var(--space);
  }

  a.project-cover:after {
    content: "->";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--space);
    background-color: var(--color-blue);
    transform: scaleY(0);
    transform-origin: 50% 100%;
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  a.project-cover:hover::after{
    transform: scaleY(1);
  }

  html[lang="en"] a.project-cover:after {
    content: "Watch video on YouTube";
  }

  html[lang="ru"] a.project-cover:after {
    content: "Смотрите видео на YouTube";
  }
</style>

<script>
export default {
  name: 'Project',

  computed: {
    video() {
      return this.$page.post.video
    }
  }
}
</script>


<static-query>
  query {
    metadata {
      siteName,
      siteDescription
    }
  }
</static-query>


<page-query>
  query($id: ID!) {
    post(id: $id) {
      title
      subtitle
      content
      cover
      video
      description
    }
  }
</page-query>