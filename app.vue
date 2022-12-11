<script setup>
  import {useNuxtApp} from "nuxt/app";
  import NavBar from "./components/NavBar";

  const appConfig = useNuxtApp()
</script>

<template>
  <NavBar/>
  <NuxtPage/>
  <Footer/>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@500&family=Poppins:wght@200&display=swap');
.logo {
  font-weight: 600;
  font-size: 1.5rem;
}
body::-webkit-scrollbar {
  display: none;
}

body {
  background-image: linear-gradient(to right, #b6bac8, #808080);
  font-family: 'Poppins', sans-serif;
}

</style>
