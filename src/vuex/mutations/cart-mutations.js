import MutationTypes from '.';

const cartMutations = {
  [MutationTypes.PUSH_PRODUCT_TO_CART](state, { id }) {
    state.cartItems.push({
      id, quantity: 1,
    });
  },

  [MutationTypes.ADD_ITEM_QUANTITY](state, { id }) {
    const cartItem = state.cartItems.find((item) => item.id === id);
    // eslint-disable-next-line no-plusplus
    cartItem.quantity++;
  },

  [MutationTypes.SET_CART_ITEMS](state, { items }) {
    state.cartItems = items;
  },

  [MutationTypes.SET_CHECKOUT_STATUS](state, { status }) {
    state.checkoutStatus = status;
  },
};

export default cartMutations;
