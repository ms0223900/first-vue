import MutationTypes from '../mutations/index';
import mockApi from '../constants/api';
import ActionTypes from '.';

const STATUS = {
  success: 'success',
  failed: 'failed',
};

function checkoutOrders({ commit, state }, { products }) { // ctx, payload
  const originItems = [...state.cartItems];
  commit(MutationTypes.SET_CHECKOUT_STATUS, {
    status: null,
  });
  // clear items
  commit(MutationTypes.SET_CART_ITEMS, {
    items: [],
  });
  mockApi.buyProducts(
    products,
    () => commit(MutationTypes.SET_CHECKOUT_STATUS, {
      status: STATUS.success,
    }), // success callback
    () => {
      commit(MutationTypes.SET_CHECKOUT_STATUS, {
        status: STATUS.failed,
      });
      commit(MutationTypes.SET_CART_ITEMS, {
        items: originItems,
      });
    }, // failed callback
  );
}

function addProductToCart({ commit, state }, { product }) {
  commit(MutationTypes.SET_CHECKOUT_STATUS, {
    status: null,
  }); // init
  if (product.inventory > 0) {
    const cartItem = state.cartItems.find((i) => i.id === product.id);
    if (!cartItem) {
      commit(MutationTypes.PUSH_PRODUCT_TO_CART, { id: product.id });
    } else {
      commit(MutationTypes.ADD_ITEM_QUANTITY, cartItem);
    }
    commit(`products/${MutationTypes.DECREMENT_PRODUCTS_INVENTORY}`, { id: product.id }, { root: true });
  }
}

function decrementProductInCart({ commit }, { product }) {
  console.log(product);

  commit(MutationTypes.SET_CHECKOUT_STATUS, {
    status: null,
  }); // init
  commit(MutationTypes.DECREMENT_ITEM_QUANTITY, { id: product.id });

  commit(`products/${MutationTypes.ADD_PRODUCTS_INVENTORY}`, { id: product.id }, { root: true });
}

const cartActions = {
  [ActionTypes.CHECKOUT_ORDERS]: checkoutOrders,
  [ActionTypes.ADD_PRODUCT_TO_CART]: addProductToCart,
  [ActionTypes.DECREMENT_PRODUCT_IN_CART]: decrementProductInCart,
};

export default cartActions;
