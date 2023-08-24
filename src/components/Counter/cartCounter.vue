<template>
  <div class="counter">
    <span>{{ valueCounter }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    valueCounter() {
      return this.$store.getters.getCounter;
    },
  },
};
</script>

<style scoped>
.counter {
  width: 18px;
  height: 18px;
  background: #008ecc;
  color: white;
  border-radius: 10px;
  margin-left: 5px;
}
.counter span {
  position: absolute;
  left: 42px;
}
</style>
