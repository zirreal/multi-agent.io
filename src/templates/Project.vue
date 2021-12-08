<template>
  <layout>
        <h2 v-html="$page.post.title"/>
        <VueRemarkContent />
  </layout>
</template>


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