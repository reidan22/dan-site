<template>
  <b-container fluid id="nav" :class="{ 'open-header': !fromPropsIsOpen }">
    <b-row> <router-link to="/home">Home</router-link> </b-row
    ><b-row>
      <router-link to="/about">About</router-link>
    </b-row>
    <b-row>
      <a href="/gamefront/index.html">Game Front</a>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "TheHeader",
  props: ["isOpen"],
  components: {},
  computed: {
    fromPropsIsOpen() {
      return this.isOpen;
    },
  },
};
</script>

<style scoped>
#nav {
  position: absolute;
  left: 0px;
  top: 2vh;
  height: 50vh;
  width: 20vh;
  background-color: #0b0c1069;
  color: #66fcf1;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  transition: transform 0.5s;
  overflow: hidden;
}

a {
  color: #66fcf1;
  text-decoration: none;
  transition: font-size 0.5s;
  padding: 10px;
}

a:hover,
a:active {
  background-color: #66fcf1;
  color: #0b0c10;
  font-size: 120%;
  transition: font-size 0.5s;
}

.open-header {
  background-color: red;
  transition: transform 0.5s;
  transform: translateX(-20vh);
}
</style>
