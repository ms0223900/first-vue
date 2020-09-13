/* eslint-disable no-unused-expressions */
/**
 * Mocking client-server processing
 */
const mockProducts = [
  {
    id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2,
  },
  {
    id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10,
  },
  {
    id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5,
  },
];

const mockApi = {
  getProducts(cb) {
    setTimeout(() => cb(mockProducts), 100);
  },

  buyProducts(products, successCb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? successCb()
        : errorCb();
    }, 100);
  },
};

export default mockApi;
