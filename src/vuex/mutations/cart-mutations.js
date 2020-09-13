/* eslint-disable no-plusplus */
import MutationTypes from '.';

const cartMutations = {
  [MutationTypes.PUSH_PRODUCT_TO_CART](state, { id }) {
    state.cartItems.push({
      id, quantity: 1,
    });
  },

  [MutationTypes.ADD_ITEM_QUANTITY](state, { id }) {
    const cartItem = state.cartItems.find((item) => item.id === id);
    cartItem.quantity++;
  },

  [MutationTypes.DECREMENT_ITEM_QUANTITY](state, { id }) {
    // reducers 作法
    const cartItem = state.cartItems.find((item) => item.id === id);
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      const filteredCartItems = state.cartItems.filter((c) => c.id !== id);
      state.cartItems = filteredCartItems;
    }
  },

  [MutationTypes.SET_CART_ITEMS](state, { items }) {
    state.cartItems = items;
  },

  [MutationTypes.SET_CHECKOUT_STATUS](state, { status }) {
    state.checkoutStatus = status;
  },
};

export default cartMutations;
