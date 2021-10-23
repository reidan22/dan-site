<template>
  <b-container fluid id="drum-kit" class="centrify">
    <b-col>
      <b-row id="drum-kit-header" class="centrify">VueJS DRUM KIT</b-row>
      <b-row id="drum-kit-body" class="centrify">put here</b-row>
    </b-col>
  </b-container>
</template>

<script>
export default {
  name: "DrumKitMain",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cute+Font&family=Fira+Sans+Extra+Condensed:wght@100;200;800&display=swap");
#drum-kit {
  font-family: "Fira Sans Extra Condensed", sans-serif;
  font-size: 10vw;
  background-color: rgb(241, 227, 188);
  width: 100vw;
  height: 100vh;
  color: rgba(25, 25, 105, 0.815);
}

#drum-kit-header {
  height: 10vh;
}
#drum-kit-body {
  height: 90vh;
}
</style>
