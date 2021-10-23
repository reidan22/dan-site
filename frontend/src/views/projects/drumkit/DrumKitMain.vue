<template>
  <b-container fluid id="drum-kit" class="centrify">
    <b-col>
      <drum-kit-header id="drim-kit-header" class="centrify"
        >Vue JS Mini DRUM KIT<i class="fas fa-drum"></i
      ></drum-kit-header>
      <drum-kit-body id="drum-kit-body" class="centrify"></drum-kit-body>
    </b-col>
  </b-container>
</template>

<script>
import DrumKitHeader from "./DrumKitHeader.vue";
import DrumKitBody from "./DrumKitBody.vue";
export default {
  name: "DrumKitMain",
  components: {
    DrumKitHeader,
    DrumKitBody,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cute+Font&family=Fira+Sans+Extra+Condensed:wght@100;200;800&display=swap");
#drum-kit {
  font-family: "Fira Sans Extra Condensed", sans-serif;
  font-size: 5vw;
  background-color: rgb(241, 227, 188);
  width: 100vw;
  height: 100vh;
  color: rgb(211, 172, 55);
}
.fas.fa-drum {
  width: auto;
}
#drum-kit-header {
  height: 7vh;
  font-size: 10vw;
}
#drum-kit-body {
  height: 80vh;
  margin: 10px;
  background-color: rgb(216, 194, 130);

  border-radius: 20px;
}
</style>
