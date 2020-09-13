import ActionTypes from './index';
import mockApi from '../constants/api';

const STATUS = {
  success: 'success',
  failed: 'failed',
};

function checkoutOrders({ commit, state }, { products }) { // ctx, payload
  const originItems = [...state.cartItems];
  commit(ActionTypes.SET_CHECKOUT_STATUS, null);
  // clear items
  commit(ActionTypes.SET_CART_ITEMS, []);
  mockApi.buyProducts(
    products,
    () => commit(ActionTypes.SET_CHECKOUT_STATUS, STATUS.success),
    () => {
      commit(ActionTypes.SET_CHECKOUT_STATUS, STATUS.failed);
      commit(ActionTypes.SET_CART_ITEMS, { items: originItems });
    },
  );
}

function addProductToCart({ commit, state }, { product }) {
  commit(ActionTypes.SET_CHECKOUT_STATUS, null); // init
  if (product.inventory > 0) {
    const cartItem = state.items.find((i) => i.id === product.id);
    if (!cartItem) {
      commit(ActionTypes.PUSH_PRODUCT_TO_CART, { id: product.id });
    } else {
      commit(ActionTypes.ADD_ITEM_QUANTITY, cartItem);
    }
    commit(`products/${ActionTypes.DECREMENT_PRODUCTS_INVENTORY}`, { id: product.id }, { root: true });
  }
}

const actions = {
  checkoutOrders,
  addProductToCart,
};

export default actions;
