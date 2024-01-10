<template>
  <HomePage />
  <ProductCategory />
  <ProductsList />
  <PromotionPage />
</template>

<script>
import HomePage from "@/components/pages/HomePage.vue";
import ProductCategory from "@/components/pages/ProductCategory.vue";
import ProductsList from "@/components/pages/ProductsList.vue";
import PromotionPage from "@/components/pages/PromotionPage.vue";
export default {
  components: {
    HomePage,
    ProductCategory,
    ProductsList,
    PromotionPage,
  },
};
</script>

<style></style>
