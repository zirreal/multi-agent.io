<template>
  <layout>
<!--    <h2 v-html="$page.post.title"/>-->
    <template v-slot:title><a href="/projects">Projects</a> / {{$page.post.title}}</template>
    <VueRemarkContent class="templateInsert" />
  </layout>
</template>

<style scoped>

</style>

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
    path
    content
  }
}

</page-query>