<template>
  <base-card>
    <div class="product-image">
      <img
        :src="product.image"
        alt=""
      />
      <div class="image-overlay"></div>
    </div>

    <div class="product-caption">
      <div class="title-price-rapper">
        <span class="product-title">{{ product.title }}</span>
        <span class="ragular-price">${{ product.price }}</span>
      </div>
      <div class="rating-button-rapper">
        <productRating :productRating="product.rating" />
        <button
          class="mobile-cart-button"
          @click="addOnCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
    <button
      v-if="addCart"
      class="add-cart-button view-cart-button"
    >
      <img
        class="cart-icon"
        src="../../assets/Buy.svg"
        alt=""
      />
      <span class="view-cart">View Cart</span>
    </button>
    <button
      v-else
      class="add-cart-button"
      @click="addOnCart"
    >
      Add To Cart
    </button>
  </base-card>
</template>

<script>
import productRating from "./productRating.vue";
import baseCard from "../UI/baseCard.vue";
export default {
  props: ["product"],
  components: {
    baseCard,
    productRating,
  },
  data() {
    return {
      addCart: false,
      counter: 0,
    };
  },
  methods: {
    addOnCart() {
      this.addCart = true;
      this.increaseValueCart();
    },
    increaseValueCart() {
      this.counter = this.$store.getters.getCounter;
      this.counter = this.counter + 1;
      this.$store.commit("setCounter", this.counter);
    },
  },
};
</script>

<style scoped>
.product-image {
  overflow: hidden;
}
.product-image img {
  width: 100%;
  height: 220px;
  max-height: 300px;
  object-fit: contain;
  transition: transform 0.5s ease-in-out;
}
.base-card:hover .add-cart-button,
.base-card:hover .image-overlay {
  display: block;
}
.base-card:hover .product-image img {
  transform: scale(1.2);
}
.product-caption {
  display: flex;
  flex-direction: column;
  padding: 5px;
  text-align: left;
  background: #ffffffa6;
}
.title-price-rapper {
  display: flex;
  justify-content: space-between;
}
span.product-title {
  font-size: 18px;
  font-family: Inter, sans-serif;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 70%;
}
span.ragular-price {
  font-family: Inter, sans-serif;
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  color: #222222;
}
.rating-button-rapper {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .title-price-rapper {
    flex-direction: column;
  }
  .product-title {
    width: 100% !important;
  }
}

@media (max-width: 767px) {
  .add-cart-button,
  .image-overlay {
    display: none !important;
  }
  .product-image img {
    height: 200px !important;
    max-height: 500px !important;
  }
  .mobile-cart-button {
    display: block !important;
  }
}

.image-overlay {
  display: none;
  height: 234px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
}
.add-cart-button {
  display: none;
  font-family: Inter, sans-serif;
  position: absolute;
  bottom: 183px;
  right: 1px;
  top: 98px;
  left: 0;
  padding: 3px;
  width: 70%;
  margin: auto;
  border-radius: 10px;
  font-size: 18px;
  border: none;
  background: #fff;
  cursor: pointer;
  color: black;
}
.add-cart-button:hover {
  background: #ffc915;
}
.view-cart-button {
  background: #ffc915 !important;
  cursor: default !important;
}
.cart-icon {
  filter: grayscale(100%) invert(100%) brightness(0);
}
span.view-cart {
  position: relative;
  top: -5px;
  margin-left: 5px;
  font-family: Inter, sans-serif;
}
.mobile-cart-button {
  display: none;
  padding: 8px;
  bottom: 12px;
  width: 30%;
  border-radius: 5px;
  right: 22px;
  border: none;
  font-family: Inter, sans-serif;
  color: black;
  background: #ffc915;
  cursor: pointer;
}
</style>
