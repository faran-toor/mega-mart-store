<template>
  <header>
    <nav class="bg-white navbar navbar-expand-lg bg-body-tertiary p-1">
      <div class="container-fluid p-2">
        <div>
          <img
            src="../assets/logo.png"
            alt=""
          />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse text-left"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link text-uppercase active"
                aria-current="page"
                href="#"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-uppercase"
                href="#"
                >collection</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-uppercase"
                href="#"
                >production</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase">pages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase">element</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="container-fluid">
      <div class="row g-2 gx-5 align-items-center">
        <div class="col-lg-10 col-md-8">
          <div class="header-bas position-relative">
            <div class="search-input-border rounded-1">
              <input
                placeholder="Search here..."
                class="ps-3 p-2 w-100 border-0"
                type="text"
              />
              <div class="search-icon position-absolute top-0 end-0 me-3 mt-2">
                <i class="fal fa-search"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <div
            class="profile-details rounded-1 search-input-border d-flex justify-content-around p-2"
          >
            <div class="profile-icon">
              <i class="far fa-user-circle"></i>
            </div>
            <div class="heart-icon">
              <i class="far fa-heart"></i>
            </div>
            <div class="cart-icon">
              <i class="far fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
