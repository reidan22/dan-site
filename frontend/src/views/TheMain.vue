<template>
  <b-container fluid id="main">
    <a href="#">
      <span id="header-all">
        <the-header-tab
          @header-tab="isHeaderTabOpen"
          :isOpen="receivedIsTabOpen"
        ></the-header-tab>
        <the-header
          @header="closeHeaderTab"
          :isOpen="receivedIsTabOpen"
        ></the-header>
      </span>
    </a>
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
    closeHeaderTab(fromEmit) {
      this.receivedIsTabOpen = fromEmit;
    },
  },
};
</script>
<style scoped>
#main {
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
}

#header-all {
  margin: 0px;
  padding: 0px;
}
</style>
