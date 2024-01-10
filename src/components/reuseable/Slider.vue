<template>
  <div class="slider">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active bg-yellow"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          class="bg-yellow"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row custom-image">
            <div class="col-md-6">
              <h2 class="fs-1 text-black fw-bold">
                Mega Sale Special Offer Up to 60% OFF
              </h2>
              <p class="border text-black rounded-pill col-md-8 p-2">
                Exclusive Product New Arrival
              </p>
              <div class="button-container d-flex flex-wrap gap-2">
                <button
                  class="btn bg-yellow text-blacks f-color text-uppercase text-white rounder-pill pz-2 py-3"
                >
                  shop now
                </button>
                <button
                  class="btn bg-dark text-uppercase text-white rounder-pill pz-2 py-3"
                >
                  explore more
                </button>
              </div>
            </div>
            <div class="col-md-4">
              <img
                class="w-100 h-100"
                src="../../assets/porto46-intro-1-item.png"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div class="row carousel-item">
          <div class="row">
            <div class="col-md-4">
              <img
                src="../../assets/porto46-intro-2-item.png"
                class="w-100 h-100"
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <h2 class="fs-1 text-black fw-bold">
                Mega Sale Special Offer Up to 60% OFF
              </h2>
              <p class="border text-black rounded-pill col-md-8 p-2">
                Exclusive Product New Arrival
              </p>
              <div class="button-container d-flex flex-wrap gap-5">
                <button
                  class="btn bg-yellow text-blacks f-color text-uppercase text-white rounder-pill py-3 pz-2"
                >
                  shop now
                </button>
                <button
                  class="btn bg-dark text-uppercase text-white rounder-pill py-3 pz-2"
                >
                  explore more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
