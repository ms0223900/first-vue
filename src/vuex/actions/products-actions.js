const { default: ActionTypes } = require('.');
const { default: mockApi } = require('../constants/api');

function getAllProducts({ commit }) {
  mockApi.getProducts((products) => {
    commit(ActionTypes.SET_PRODUCTS, { products });
  });
}

const actions = {
  getAllProducts,
};

export default actions;
