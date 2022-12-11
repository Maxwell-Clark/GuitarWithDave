<script setup>
  const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div id="wrapper">
    <section id="header">
      <h2 class="va-h2" style="max-width: 10em; margin-right: 10em;">Learn to play guitar the right way</h2>
      <p class="text" style="max-width: 20em">
        short blurb about what makes this site different Or a Site Motto like
        Become a real player without the bullSh!t
      </p>
    </section>
    <img class="profile_pic"/>
    <div class="progress_bar">
      <Marquee/>
    </div>
    <section id="body">
      <VideoCard style="left: 10%" title="Site Intro" video="https://www.youtube.com/embed/cVsQLlk-T0s"/>
      <va-card class="flex mt-5" style="max-width: 30%">
        <va-card-title>
          Who Am I?
        </va-card-title>
        <va-card-content >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
        </va-card-content>
      </va-card>
      <VideoCard class="mt-5" title="Who I am" video="https://www.youtube.com/embed/dQw4w9WgXcQ"/>
    </section>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@500&family=Poppins:wght@200&display=swap');

  #header{
    background-color: #FCA311;
    background-image: url("~/assets/guitar_1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    width: 100%;
    height: 60em;
    vertical-align: center;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
    overflow: visible;
    color: white;
    font-family: math;

  }
  #body {
    background-color: #BEBEBE;
    background-image: linear-gradient(to bottom right, #EBECF0, #808080);
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
    z-index: 2;
    width:20%;
    height:20%;
    top: 40%;
    left:20%;
    background: url("../assets/dave_profile_3.jpg");
    background-size: cover;
    clip-path: circle();
  }

  .progress_bar {
    position:absolute;
    z-index: 1;
    width:100%;
    min-height: 3em;
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
