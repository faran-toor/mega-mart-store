<template>
  <div class="rating">
    <span
      class="star"
      v-for="index in 5"
      :key="index"
      :class="getStarClass(index)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-star"
      >
        <polygon
          points="12 2 15.09 8.66 22 9.82 17 14.14 18.18 21 12 17.66 5.82 21 7 14.14 2 9.82 8.91 8.66 12 2"
        ></polygon>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  props: ["productRating"],
  methods: {
    getStarClass(index) {
      const fullStars = Math.floor(this.productRating.rate);
      const remainingStarValue = this.productRating.rate - fullStars;

      if (index <= fullStars) {
        return "filled";
      } else if (index === fullStars + 1 && remainingStarValue > 0) {
        return "partially-filled";
      } else {
        return "empty";
      }
    },
  },
};
</script>

<style scoped>
.rating {
  font-size: 24px;
}

.star {
  display: inline-block;
  width: 15px;
  height: 15px;
}

.star-rating {
  display: flex;
  align-items: center;
}

.filled svg {
  fill: gold;
  stroke: none;
}
.empty svg {
  fill: #ccc;
  stroke: none;
}

.partially-filled svg {
  /* background: linear-gradient(to right, gold 60%, #ccc 60%); */
  fill: #ccc;
  stroke: none;
}
</style>
