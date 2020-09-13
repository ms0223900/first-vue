import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initCartState = () => ({
  cartItems: [],
  checkoutStatus: null,
});
const initProductsState = () => ({
  allProducts: [],
});

const cart = {
  state: initCartState,
};
const products = {
  state: initProductsState,
};

const store = new Vuex.Store({
  modules: {
    cart,
    products,
  },
});

export default store;
