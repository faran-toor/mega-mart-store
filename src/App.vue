<template>
  <theHeader />
  <home-layout></home-layout>
</template>

<script>
import homeLayout from "./views/homeLayout.vue";
import theHeader from "./views/theHeader.vue";
export default {
  components: {
    theHeader,
    homeLayout,
  },
  beforeCreate() {
    this.$store.dispatch("getAllProducts");
  },
};
</script>

<style></style>
