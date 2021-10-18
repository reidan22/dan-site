<template>
  <b-container fluid id="nav">
    <b-row>
      <b-col> <router-link to="/home">Home</router-link> | </b-col>
      <b-col>
        <router-link to="/about">About</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "TheHeader",
  components: {},
};
</script>

<style scoped></style>
