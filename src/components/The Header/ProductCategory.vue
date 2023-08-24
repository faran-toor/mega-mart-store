<template>
  <div
    class="drop-down"
    @click="toogleDropDown"
  >
    <button class="drop-button">
      All
      <img
        src="../../assets/Vector.svg"
        alt=""
      />
    </button>

    <div class="dropdown-content">
      <div
        class="dropdown-span"
        v-for="category in categories"
        :key="category"
        @click="searchCategoryProduct(category)"
      >
        <span>{{ category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getCategories");
  },
  computed: {
    categories() {
      //   console.log(this.$store.getters.getAllCategories);
      return this.$store.getters.getAllCategories;
    },
  },
  methods: {
    searchCategoryProduct(selectedCategory) {
      this.$store.dispatch("searchCategoryProduct", selectedCategory);
    },
    // // Method to Show and Hide the Dropdown
    toogleDropDown() {
      const classToogle = document.querySelector(".web-tab-field");
      const classMobileToogle = document.querySelector(".mobile-field");
      if (classToogle || classMobileToogle) {
        const clasToogle = document.querySelectorAll(".dropdown-content");
        clasToogle.forEach(function (e) {
          e.classList.toggle("toogle-Drop-Down");
        });
      }
    },
  },
};
</script>

<style scoped>
.drop-button {
  background-color: #f3f9fb;
  color: black;
  font-size: 14px;
  border: none;
  cursor: pointer;
}
.drop-button img {
  position: absolute;
  left: 31px;
  bottom: 4px;
}

.drop-down {
  position: relative;
  display: inline-block;
  width: 15%;
  margin-left: 5px;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  top: 35px;
  border-radius: 6px;
  background: #effbff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.18);
  z-index: 1;
}

.dropdown-span {
  text-transform: capitalize;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-family: Inter, sans-serif;
  /* border-radius: 6px 6px 0px 0px; */
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);
}

.dropdown-span:hover {
  background-color: #b5b5b555;
}

.toogle-Drop-Down {
  display: block !important;
  overflow: hidden;
}
</style>
