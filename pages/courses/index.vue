<template>
  <div id="wrapper">
    <section id="header">
      <h2 class="va-h2" style="max-width: 10em;">Courses</h2>
    </section>
    <va-affix offset-top="65">
      <div class="progress_bar">
        <va-progress-bar size="large" model-value="37" color="secondary"/>
      </div>
    </va-affix>
    <section id="body">
      <NuxtLink to="/courses/Course 1"  class="link mt-5">
        <va-card class="flex " style="max-width: 30%">
          <va-card-title>
            Course 1
          </va-card-title>
          <va-card-content >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
          </va-card-content>
        </va-card>
      </NuxtLink>
      <NuxtLink to="/courses/Course 2" class="link">
        <va-card class="flex mt-5" style="max-width: 30%">
          <va-card-title>
            Course 2
          </va-card-title>
          <va-card-content >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
          </va-card-content>
        </va-card>
      </NuxtLink>
      <NuxtLink to="/courses/Course 3" class="link">
        <va-card class="flex mt-5" style="max-width: 30%">
          <va-card-title>
            Course 3
          </va-card-title>
          <va-card-content >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
          </va-card-content>
        </va-card>
      </NuxtLink>
    </section>
  </div>
</template>

<script>
export default {
  name: "Courses"
}
</script>

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

.text {
  vertical-align: center;
}
.profile_pic {
  position:absolute;
  width:20%;
  height:20%;
  top: 40%;
  left:20%;
  clip-path: circle();
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

</style>
