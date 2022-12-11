<script setup>
const { id } = useRoute().params
console.log(id)
</script>

<template>
  <div id="wrapper">
    <section id="header">
      <h2 class="va-h2" style="max-width: 10em; color: #14213D;"> {{ id }}</h2>
<!--      <VideoCard></VideoCard>-->
      <va-card style="min-height: 70%; min-width: 60%">
        <iframe  class="video" allow="fullscreen"
                src="https://www.youtube.com/embed/OzbkOZnwchM">
        </iframe>
      </va-card>
    </section>
<!--    <div class="progress_bar">-->
<!--      <va-progress-bar size="large" model-value="50" color="secondary"/>-->
<!--    </div>-->
    <section id="body">
      <va-card gradient class="mt-5" style="max-height: 90%; min-width: 90%; padding: 1em">
        <va-scroll-container vertical style="max-height: 99%; max-width: 99.5%; display: flex; justify-content: center;">
          <va-list>
            <va-list-item v-for="i in 1000" :key="i">
              {{ i }}
            </va-list-item>
          </va-list>
        </va-scroll-container>
      </va-card>
    </section>
  </div>
</template>


<style scoped>

.link {
  display: flex;
  justify-content: center;
}
#wrapper {
  background-color: #34495e;
  background-image: linear-gradient(to bottom right, #EBECF0, #808080);
}

.video {
  width: 90%;
  height: 90%;
  margin-top: 2em;
  border-radius: 6px;
}

#header{
  /*background-color: #14213D;*/
  /*background-image url("~/assets/guitar_1.jpg");*/

  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100%;
  border-radius: 20px;
  height: 60em;
  vertical-align: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  overflow: visible;
  color: white;
}
#body {
  /*background-color: #34495e;*/
  /*background-image: url("~/assets/background_design.jpg");*/
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100%;
  height: 60em;
  vertical-align: center;
  flex-direction: column;
  text-align: center;
  justify-items: center;
  overflow: visible;
  align-items: center;
}

.text {
  vertical-align: center;
}
.progress_bar {
  /*position:absolute;*/
  width:100%;
  height:20%;
  padding: 1em;
  /*top: 40%;*/
  /*left:20%;*/
  /*clip-path: circle();*/
  background-color: white;
  border-radius: 20px;

}

</style>
