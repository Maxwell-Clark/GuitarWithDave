<template>
  <va-card class="flex sm4 md6 lg4 card"  gradient>
    <va-card-title class="title">{{ title }}</va-card-title>
<!--    <va-card-content>-->
      <iframe class="video"
              :src="video"
              allow="fullscreen">
      </iframe>
<!--    </va-card-content>-->

  </va-card>
</template>

<script>
export default {
  name: "VideoCard",
  props: {
    video: String,
    title: String
  }
}
</script>

<style scoped>
  .card{
    min-width: 30em;
  }
  .video {
    width: 30em;
    height: 15em;
    margin: 1em;
    border-radius: 6px;
  }
  .title {
    padding: 1em;
  }
</style>
