import ActionTypes from '.';
import mockApi from '../constants/api';
import MutationTypes from '../mutations';

function getAllProducts({ commit }) {
  mockApi.getProducts((products) => {
    commit(MutationTypes.SET_PRODUCTS, { products });
  });
}

const productsActions = {
  [ActionTypes.GET_ALL_PRODUCTS]: getAllProducts,
};

export default productsActions;
