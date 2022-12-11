<template>
  <div id="wrapper">
    <div class="footer-list">
      <h2>
        social media
      </h2>
      <p>
        facebook
      </p>
      <p>insta</p>
      <p>twitter</p>
    </div>
    <div class="footer-list">
      <h2>
        contact info
      </h2>
      <p>email</p>
      <p>phone</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  #wrapper {
    height: 8em;
    background-color: #14213D;
    width: 100%;
    color: white;
    border-radius: 20px 20px 0 0;
    display: flex;
    justify-content: space-between;
    padding: 0 30% 0 30%;
  }
  .footer-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>
