<template>
  <transition name="slide-fade">
    <b-container
      id="front-page"
      fluid
      class="front-page centrify"
      @click="onClickOfFrontElement()"
      v-if="showFrontElement"
    >
      {{ currentHello }}!
    </b-container>
  </transition>
</template>

<script>
export default {
  name: "TheFront",
  components: {},
  data() {
    return {
      showFrontElement: true,
      helloArray: [
        "Hello",
        "Kumusta",
        "你好",
        "今日は",
        "안녕하세요",
        "Bonjour",
        "Hola",
      ],
      currentHello: "Kumusta",
    };
  },
  methods: {
    onClickOfFrontElement() {
      this.showFrontElement = false;
      this.$router.push("/home", () => {});
      this.selectHelloRandomly();
    },
    selectHelloRandomly() {
      const randomNumber = Math.floor(Math.random() * 7);
      return this.helloArray[randomNumber];
    },
  },
  created() {
    setInterval(() => {
      this.currentHello = this.selectHelloRandomly();
    }, 5000);
  },
};
</script>
<style scoped>
.front-page {
  position: absolute;
  background-color: rgb(32, 32, 32);
  width: 100vw;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  font-size: 15vw;
  color: rgb(151, 187, 253);
}

.slide-fade-leave-active {
  transition: all 1s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-100vh);
  opacity: 0;
}
</style>
