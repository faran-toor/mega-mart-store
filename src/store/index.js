import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import { createStore } from "vuex";

export default createStore({
  state: {
    allProducts: [],
    productCategories: [],
    counter: 0,
    products:[],
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {},
});
