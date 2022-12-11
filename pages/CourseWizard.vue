<template>
  <div id="wrapper">
    <section id="header">
      <h2 class="va-h2" style="max-width: 10em;">Course #</h2>
      <VideoCard class="mt-5"/>
    </section>
    <section id="body">
      <va-card class="flex " style="max-width: 30%">
        <va-card-title>
          Lesson 1
        </va-card-title>
      </va-card>
      <va-card class="flex mt-5" style="max-width: 30%">
        <va-card-title>
          Lesson 2
        </va-card-title>
      </va-card>
      <va-card class="flex mt-5" style="max-width: 30%">
        <va-card-title>
          Lesson 3
        </va-card-title>
      </va-card>
      <va-card class="flex mt-5" style="max-width: 30%">
        <va-card-title>
          Lesson 4
        </va-card-title>
      </va-card>
      <va-card class="flex mt-5" style="max-width: 30%">
        <va-card-title>
          Lesson 5
        </va-card-title>
      </va-card>
    </section>
  </div>

</template>

<script>
export default {
  name: "CourseWizard"
}
</script>

<style scoped>

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
  background-image: url("~/assets/background_design.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100%;
  height: 60em;
  vertical-align: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;
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

</style>
