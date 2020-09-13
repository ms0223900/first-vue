import Vue from 'vue';
import Vuex from 'vuex';
import cartActions from '../actions/cart-actions';
import productsActions from '../actions/products-actions';
import cartGetters from '../getters/cart-getters';
import productsGetters from '../getters/products-getters';
import cartMutations from '../mutations/cart-mutations';
import productsMutations from '../mutations/products-mutations';

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
  actions: cartActions,
  mutations: cartMutations,
  getters: cartGetters,
};
const products = {
  state: initProductsState,
  actionts: productsActions,
  mutations: productsMutations,
  getters: productsGetters,
};

const store = new Vuex.Store({
  modules: {
    cart,
    products,
  },
});

export default store;
