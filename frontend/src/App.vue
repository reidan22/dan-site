<template>
  <div id="app">
    <the-front></the-front>
    <the-main></the-main>
  </div>
</template>

<script>
import TheMain from "@/views/TheMain.vue";
import TheFront from "@/views/TheFront.vue";

export default {
  name: "App",
  components: {
    TheMain,
    TheFront,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap");

#app {
  /* font-family: Helvetica, Avenir, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #282c30;
}

.centrify {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 
Colors:
#0b0C10
#1F2833
#C5C6C7
#66FCF1
#45A29e
*/
</style>
