<template>
  <section
    id="homePage"
    class="container-fluid"
  >
    <div class="row pt-2">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            class="carousel-item position-relative carousel-item-1 p-3 active"
          >
            <div class="content-image position-absolute">
              <h2 class="w-75 fw-light">
                The New Collection <strong class="fw-bold">Smartwatches</strong>
              </h2>
              <p class="text-uppercase c-smogWhite">
                SHOP TO GET WHAT YOU LOVE
              </p>
              <span
                class="text-uppercase fw-bold home-button p-2 rounded-pill border"
                role="button"
                >Start buying</span
              >
            </div>
          </div>
          <div class="carousel-item carousel-item-2 position-relative p-3">
            <div class="content-image position-absolute">
              <h2 class="w-75 fw-light">
                The New Collection <strong class="fw-bold">Smartwatches</strong>
              </h2>
              <p class="text-uppercase c-smogWhite">
                SHOP TO GET WHAT YOU LOVE
              </p>
              <span
                class="text-uppercase fw-bold home-button p-2 rounded-pill border"
                role="button"
                >Start buying</span
              >
            </div>
          </div>
          <div class="carousel-item carousel-item-3 position-relative">
            <div class="content-image position-absolute">
              <h2 class="w-75 fw-light">
                The New Collection <strong class="fw-bold">Smartwatches</strong>
              </h2>
              <p class="text-uppercase c-smogWhite">
                SHOP TO GET WHAT YOU LOVE
              </p>
              <span
                class="text-uppercase fw-bold home-button p-2 rounded-pill border"
                role="button"
                >Start buying</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // data() {
  //   return {
  //     promotion: [
  //       {
  //         id: 1,
  //         img: "../../assets/100-alert-1-1.png",
  //         heading: "Continuous Campaigns",
  //         description: "Items prices that fit your budget",
  //       },
  //       {
  //         id: 2,
  //         img: "../../assets/016-fast-delivery-1-1.png",
  //         heading: "Completely free shipping",
  //         description: "Well handle the shipping",
  //       },
  //       {
  //         id: 3,
  //         img: "../../assets/071-credit-card-1-1.png",
  //         heading: "All Payment Methods",
  //         description: "Don't bother with payment details.",
  //       },
  //       {
  //         id: 4,
  //         img: "../../assets/011-best-seller-1-1.png",
  //         heading: "Successful Customer Service",
  //         description: "We work with a focus on 100% customer satisfaction.",
  //       },
  //       {
  //         id: 5,
  //         img: "../../assets/033-tag-1-1.png",
  //         heading: "Amazing Value Every Day",
  //         description: "Items prices that fit your budget",
  //       },
  //     ],
  //   };
  // },
};
</script>

<style scoped>
.carousel-item-1 {
  background-image: url("../../assets/home1-slide (1).jpg");
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;
}
.carousel-item-2 {
  background-image: url("../../assets/slider22.jpg");
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;
}
.carousel-item-3 {
  background-image: url("../../assets/slider111.jpg");
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;
}
</style>
