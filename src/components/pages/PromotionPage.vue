<template>
  <section
    class="py-5 bg-smoke"
    id="livePage"
  >
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 bg-custom-background position-relative text-center text-white"
        >
          <div
            class="header position-absolute w-100 me-5 start-0 p-2 m-auto d-flex justify-content-between"
          >
            <span class="fs-4">Super deals</span>
            <span class="rounded-pill deal p-2">0%</span>
          </div>
          <div class="image">
            <img
              class="img-fluid"
              src="../../assets/hkioiuytt.png"
              alt=""
            />
          </div>
          <div class="fotter text-center position-absolute p-3">
            <h3>Bluetooth Speaker</h3>
            <span>$100.00</span>
            <div class="counts d-flex w-100 justify-content-between py-1 mb-1">
              <span>Already Sold:9</span>
              <span>Available:16</span>
            </div>
            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="45"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar w-75"></div>
            </div>
            <strong class="">Hurry up! Offer ends in:</strong>
            <span>The product out of time deal special</span>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div
              class="col-md-3 col-6 border-change-hover border position-relative"
              v-for="products in slicedProducts"
              :key="products.id"
            >
              <div class="">
                <img
                  class="card-image"
                  :src="products.thumbnail"
                  alt=""
                />
              </div>
              <div class="card-content p-2">
                <h5 class="card-header-overflow fw-light">
                  {{ products.title }}
                </h5>
                <div
                  class="d-flex justify-content-between align-items-center"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-custom-class="custom-tooltip"
                  data-bs-title="ADD TO CART"
                >
                  <strong>$ {{ products.price }}</strong>
                  <div class="cart-icon p-1 rounded-3 bg-light-orange">
                    <i class="fal fa-shopping-basket text-white"></i>
                  </div>
                </div>
                <div class="show-detail-outer d-none">
                  <div
                    class="show-detail-icons position-absolute start-0 d-flex justify-content-around p-3 w-100 bg-green"
                  >
                    <div class="heart-icon">
                      <i class="fal text-white fa-heart"></i>
                    </div>
                    <div class="repeat-icon border-end-white border-end-white">
                      <i class="fal fa-repeat text-white"></i>
                    </div>
                    <div class="detail-icon">
                      <i class="fal fa-eye text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      numberOfProducts: 4,
    };
  },
  async created() {
    await this.$store.dispatch("getAllProducts");
    this.products = this.$store.getters.getAllProduct.products;
  },
  computed: {
    slicedProducts() {
      return this.sliceProducts(this.products, this.numberOfProducts);
    },
  },
  methods: {
    sliceProducts(array, count) {
      return array.slice(0, count);
    },
  },
};
</script>

<style></style>
