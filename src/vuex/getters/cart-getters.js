const cartProducts = (state, getters, rootState) => state.cartItems.map(({ id, quantity }) => {
  const product = rootState.products.allProducts.find((p) => p.id === id);
  return {
    title: product.title,
    price: product.price,
    quantity,
  };
});

const cartTotalPrice = (state, getters) => (
  getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
);

const cartGetters = {
  cartProducts,
  cartTotalPrice,
};

export default cartGetters;
