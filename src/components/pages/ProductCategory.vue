<template>
  <section class="container py-5">
    <div class="row">
      <div class="col-lg-3 col-md-6 border border-change-hover p-2">
        <div class="d-flex justify-content-center p-3">
          <div class="truck-icon">
            <i class="fs-1 far fa-truck-moving c-green"></i>
          </div>
          <div class="ps-2">
            <h5 class="mb-0">Free shipping</h5>
            <span>From $99</span>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 border border-change-hover p-2">
        <div class="d-flex justify-content-center p-3">
          <div class="cart-icon">
            <i class="fs-1 far fa-credit-card c-green"></i>
          </div>
          <div class="ps-2">
            <h5 class="mb-0">365 days</h5>
            <span>For free return</span>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 border border-change-hover p-2">
        <div class="d-flex justify-content-center p-3">
          <div class="support-icon">
            <i class="fs-1 fal fa-headphones-alt c-green"></i>
          </div>
          <div class="ps-2">
            <h5 class="mb-0">Support</h5>
            <span>Online support 24/7</span>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 border border-change-hover p-2">
        <div class="d-flex justify-content-center p-3">
          <div class="thumb-icon">
            <i class="fs-1 fal fa-thumbs-up c-green"></i>
          </div>
          <div class="ps-2">
            <h5 class="mb-0">99% Positive</h5>
            <span>Feedbacks</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-2 py-3">
      <div class="col-md-6 overflow-hidden position-relative p-0">
        <div class="overflow-hidden h-100 custom-image"></div>
        <div class="position-absolute content-image z-3">
          <h6 class="text-white fw-light">Catch the hottest deals in</h6>
          <h3 class="fw-medium fs-2 text-white">Camera category</h3>
          <span class="bg-light-orange text-uppercase text-white fw-medium"
            >Check out discount</span
          >
        </div>
      </div>
      <div class="col-md-6 p-0 position-relative">
        <div class="overflow-hidden image-zoom-wrapper">
          <div class="content-image position-absolute z-3">
            <h6 class="text-white fw-light">Catch the hottest deals in</h6>
            <h3 class="fw-medium fs-2 text-white">100 Classic phone</h3>
            <span class="bg-light-orange text-uppercase text-white fw-medium"
              >Check out discount</span
            >
          </div>
          <img
            class="w-100 image-zoom"
            src="../../assets/banner1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.custom-image {
  background-image: url("../../assets/banner2.png");
  background-repeat: no-repeat;
  transition: transform all 0.3s ease-in-out;
}
</style>
