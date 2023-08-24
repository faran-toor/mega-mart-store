<template>
  <div
    class="home"
    @click="closeCategoryDropDown"
  >
    <div class="all-products">
      <h1 class="title-hrader">Results</h1>
      <allProducts />
    </div>
  </div>
</template>

<script>
import allProducts from "@/components/Products/allProducts.vue";
export default {
  name: "HomeView",
  components: {
    allProducts,
  },
  methods: {
    closeCategoryDropDown() {
      const classToogle = document.querySelector(".web-tab-field");
      const classMobileToogle = document.querySelector(".mobile-field");
      if (classToogle || classMobileToogle) {
        const clasToogle = document.querySelectorAll(".dropdown-content");
        clasToogle.forEach(function (e) {
          e.classList.remove("toogle-Drop-Down");
        });
      }
    },
  },
};
</script>

<style scoped>
.home {
  background: #e1e1e1;
  padding: 2rem;
}
@media (max-width: 500px) {
  .home {
    padding: 1.5rem 1rem 1rem 1rem;
  }
}
.title-hrader {
  color: #008ecc;
  width: 90%;
  font-family: Inter, sans-serif;
  line-height: 38px;
  font-weight: 500;
  font-size: 32px;
  margin: auto;
}
.all-products {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
</style>
