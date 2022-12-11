<script setup>
const { id } = useRoute().params
console.log(id)
</script>

<template>
  <div id="wrapper">
    <section id="header">
      <h2 class="va-h2" style="max-width: 10em;"> {{ id }}</h2>
    </section>
    <va-affix offset-top="65">
      <div class="progress_bar">
          <va-progress-bar size="large" model-value="50" color="secondary"/>
      </div>
    </va-affix>
    <va-spacer/>
    <section id="body">
      <NuxtLink :to="'/courses/lessons/Lesson 1'"  class="link mt-5">
        <va-card class="flex cards " style="max-width: 30%">
          <va-card-title>
            Lesson 1
          </va-card-title>
          <va-card-content >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
          </va-card-content>
        </va-card>
      </NuxtLink>
      <NuxtLink :to="'/courses/lessons/Lesson 2'" class="link">
        <va-card class="flex mt-5" style="max-width: 30%">
          <va-card-title>
            Lesson 2
          </va-card-title>
          <va-card-content >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
          </va-card-content>
        </va-card>
      </NuxtLink>
      <NuxtLink :to="'/courses/lessons/Lesson 3'" class="link">
        <va-card class="flex mt-5" style="max-width: 30%">
          <va-card-title>
            Lesson 3
          </va-card-title>
          <va-card-content >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
          </va-card-content>
        </va-card>
      </NuxtLink>
    </section>
  </div>
</template>


<style scoped>

.link {
  display: flex;
  justify-content: center;
}

#header{
  background-color: #FCA311;
  background-image: url("~/assets/guitar_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100%;
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
  background-color: #34495e;
  background-image: linear-gradient(to bottom right, #EBECF0, #808080);
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
#progress_title {
  margin-bottom: 1em;
  font-weight: bold;
  color: #34495e;
}

.text {
  vertical-align: center;
}

.cards {
  margin-top: 5em;
}

.progress_bar {
  position:absolute;
  width:100%;
  flex-direction: column;
  align-items: center;
  /*height:1em;*/
  padding: 1em;
  display: flex;
  justify-content: center;
  top: 46%;
  /*left:20%;*/
  /*clip-path: circle();*/
  background-color: white;
  border-radius: 20px;

}
va-spacer {
  margin-bottom: -50px;
  height: 50px;
}


</style>
