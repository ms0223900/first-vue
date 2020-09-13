<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart({ product })">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ActionTypes from '../actions';

export default {
  computed: mapState({
    products: (state) => {
      console.log(state);
      return state.products.allProducts;
    },
  }),
  methods: mapActions('cart', {
    addProductToCart: ActionTypes.ADD_PRODUCT_TO_CART,
  }),
  created() {
    this.$store.dispatch(`products/${ActionTypes.GET_ALL_PRODUCTS}`);
  },
};
</script>
