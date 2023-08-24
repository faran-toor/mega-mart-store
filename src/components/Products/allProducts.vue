<template>
  <ProductList
    v-for="product in getAllProducts"
    :key="product"
    :product="product"
  />
</template>

<script>
import ProductList from "./productList.vue";

export default {
  components: {
    ProductList,
  },
  computed: {
    getAllProducts() {
      return this.$store.getters.getAllProduct;
    },
  },
};
</script>

<style></style>
