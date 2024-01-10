<template>
  <section class="container py-5">
    <div class="row">
      <div class="col-12">
        <nav
          style="--bs-breadcrumb-divider: '.'"
          aria-label="breadcrumb"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item fs-5"><a href="#">Featured</a></li>
            <li
              class="breadcrumb-item fs-5"
              aria-current="page"
            >
              On sale
            </li>
            <li
              class="breadcrumb-item fs-5"
              aria-current="page"
            >
              Top Rated
            </li>
          </ol>
        </nav>
      </div>
      <div class="col-12">
        <div class="row g-5">
          <div
            class="col-lg-2 col-md-3 col-6 border-change-hover border position-relative"
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
              <div class="d-flex justify-content-between align-items-center">
                <strong>$ {{ products.price }}</strong>
                <div
                  class="cart-icon p-1 rounded-3 bg-light-orange"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-custom-class="custom-tooltip"
                  data-bs-title="ADD TO CART"
                >
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      numberOfProducts: 6,
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

<style scoped></style>
