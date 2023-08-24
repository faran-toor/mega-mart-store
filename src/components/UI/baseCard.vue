<template>
  <section class="base-card">
    <slot></slot>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section.base-card {
  width: 16%;
  padding: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  position: relative;
  background: #fff;
}
.mobile .section.base-card {
  margin: auto;
  width: 90%;
  height: 450px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  margin-bottom: 10px;
  position: relative;
}
@media (min-width: 768px) and (max-width: 999px) {
  .base-card {
    width: 21% !important;
  }
}
@media (max-width: 767px) {
  .base-card {
    width: 100% !important;
    height: auto !important;
  }
  @media (min-width: 600px) and (max-width: 767px) {
    .base-card {
      width: 40% !important;
    }
  }
}
</style>
