<template>
  <va-navbar color="secondary"  fixed class="nav mb-2">
    <template #left/>
    <template #center>
      <va-navbar-item class="logo va-h1 ml-5">
        <NuxtLink to="/" style="color: white">
          <h1>Dave's Guitar</h1>
        </NuxtLink>
      </va-navbar-item>

    </template>
    <template #right>
      <!-- <va-navbar-item>Reports</va-navbar-item>
      <va-navbar-item>Users</va-navbar-item>
      <va-navbar-item>
        <va-icon name="book" />
      </va-navbar-item> -->
      <va-navbar-item class="mr-5">
        <NuxtLink style="color: white" to="/courses/">
          Courses
        </NuxtLink>
      </va-navbar-item>
      <va-navbar-item >
        <va-button color="dark" round>
          <va-icon name="account_circle" />
        </va-button>
      </va-navbar-item>
    </template>
  </va-navbar>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .nav {
    z-index: 10;
    position: absolute;
  }

</style>
