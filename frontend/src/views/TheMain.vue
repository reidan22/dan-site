<template>
  <b-container fluid>
    <the-header></the-header>
    <the-body></the-body>
  </b-container>
</template>

<script>
import TheHeader from "@/views/TheHeader.vue";
import TheBody from "@/views/TheBody.vue";
export default {
  name: "TheMain",
  components: {
    TheHeader,
    TheBody,
  },
};
</script>
