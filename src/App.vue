<template>
  <nav class="nave-bar">
    <headerLayout />
  </nav>
  <HomeView />
</template>

<script>
import headerLayout from "./components/The Header/headerLayout.vue";
import HomeView from "./views/HomeView.vue";
export default {
  components: {
    headerLayout,
    HomeView,
  },
  created() {
    this.$store.dispatch("getAllProducts");
  },
};
</script>

<style>
.nave-bar {
  padding: 7px;
}
body {
  margin: 0;
}
</style>
