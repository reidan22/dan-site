<template>
  <b-container fluid id="main"
    ><span id="header-all">
      <the-header-tab @header-tab="isHeaderTabOpen"></the-header-tab>
      <the-header :isOpen="receivedIsTabOpen"></the-header>
    </span>
    <the-body></the-body>
  </b-container>
</template>

<script>
import TheHeaderTab from "@/components/TheHeaderTab.vue";
import TheHeader from "@/views/TheHeader.vue";
import TheBody from "@/views/TheBody.vue";
export default {
  name: "TheMain",
  components: {
    TheHeader,
    TheBody,
    TheHeaderTab,
  },
  data() {
    return {
      receivedIsTabOpen: false,
    };
  },
  methods: {
    isHeaderTabOpen(isTabOpen) {
      this.receivedIsTabOpen = isTabOpen;
    },
  },
};
</script>
<style scoped>
#main {
  width: 100vw;
  height: 100vh;
}
</style>
