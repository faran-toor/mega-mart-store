<template>
  <header class="class-header">
    <div class="header-title">
      <stores-icon></stores-icon>
      <img
        src="../../assets/MegaMart.svg"
        alt=""
      />
    </div>
    <div class="search-field web-tab-field">
      <product-category></product-category>
      <input
        @keyup="checkDelete"
        v-model="searchKey"
        type="text"
        placeholder="Search here.."
      />
      <search-icon></search-icon>
    </div>
    <div class="cart-div">
      <cart-icon></cart-icon>
      <p class="cart-title">Cart</p>
      <cartCounter />
    </div>
  </header>
  <div class="search-field mobile-field">
    <product-category></product-category>
    <input
      @keyup="checkDelete"
      v-model="searchKey"
      type="text"
      placeholder="Search here.."
    />
    <search-icon></search-icon>
  </div>
</template>

<script>
import cartIcon from "../Icons/cartIcon.vue";
import cartCounter from "../Counter/cartCounter.vue";
import searchIcon from "../Icons/searchIcon.vue";
import storesIcon from "../Icons/storesIcon.vue";
import ProductCategory from "./ProductCategory.vue";
export default {
  components: {
    storesIcon,
    searchIcon,
    cartIcon,
    cartCounter,
    ProductCategory,
  },
  data() {
    return {
      products: [],
      product: [],
      searchKey: "",
    };
  },
  methods: {
    checkDelete(event) {
      if (event.keyCode === 8) {
        this.$store.dispatch("getAllProducts");
      } else {
        this.filterProduct();
      }
    },
    filterProduct() {
      this.products = this.$store.getters.getAllProduct;
      this.product = this.products.filter((product) =>
        product.title.toLowerCase().includes(this.searchKey)
      );
      this.$store.commit("allProducts", this.product);
    },
  },
};
</script>

<style scoped>
.class-header {
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin: auto;
}
.header-title {
  font-family: Inter, sans-serif;
  display: flex;
  position: relative;
  align-items: center;
}
h1.store-title {
  margin: 0%;
  color: #008ecc;
}
.cart-title {
  color: var(--text, #666);
  text-align: right;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
}
.cart-div {
  display: flex;
  position: relative;
  align-items: center;
}
.search-field {
  display: flex;
  align-items: center;
  width: 45%;
  background-color: #f3f9fb;
  border-radius: 10px;
}

@media (max-width: 993px) {
  .web-tab-field {
    display: none !important;
  }
  .header-title {
    margin-left: 10px;
  }
}
@media (min-width: 992px) {
  .mobile-field {
    display: none !important;
  }
}
@media (max-width: 1199px) {
  .search-field {
    width: 60%;
  }
}
@media (min-width: 1200px) {
  .search-field {
    width: 45%;
  }
}
.search-field input {
  padding: 15px;
  width: 75%;
  border: none;
  margin-top: 0;
  margin-bottom: 0;
  background: #f3f9fb;
}
.search-field input:focus {
  outline: none;
  border-color: transparent;
}
.mobile-field {
  display: flex;
  width: 100%;
  /* position: relative;
  top: 9px; */
}
</style>
