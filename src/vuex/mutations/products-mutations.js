import MutationTypes from '.';

const productsMutations = {
  [MutationTypes.SET_PRODUCTS](state, { products }) {
    state.allProducts = products;
  },

  [MutationTypes.DECREMENT_PRODUCTS_INVENTORY](state, { id }) {
    const matchedProduct = state.allProducts.find((p) => p.id === id);
    matchedProduct.inventory -= 1; // 總感覺怪怪的...，比起redux
  },
};

export default productsMutations;
