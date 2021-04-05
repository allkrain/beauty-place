import { createStore } from 'vuex';

export default createStore({
  state: {
    orders: [],
    products: [
      {
        id: 1,
        image: 'assets/products/product1.jpg',
        alt: '@@',
        describe: 'Crossbody bag with shoulder strap in beige diamond quilt',
        sizes: ['xl', 'l', 'md', 's', 'xs'],
        price: 10,
      },
      {
        id: 2,
        image: 'assets/products/product2.jpg',
        alt: '@@',
        describe: 'Shoulder Bag',
        sizes: ['xxl', 'xl', 'l'],
        price: 20,
      },
      {
        id: 3,
        image: 'assets/products/product3.jpg',
        alt: '@@',
        describe: 'Unisex Backpack',
        sizes: ['l', 'md', 's'],
        price: 30,
      },
      {
        id: 4,
        image: 'assets/products/product4.jpg',
        alt: '@@',
        describe: 'Handheld Bag',
        sizes: ['s', 'xs', 'xxs'],
        price: 40,
      },
      {
        id: 5,
        image: 'assets/products/product5.jpg',
        alt: '@@',
        describe: 'Crossbody bag',
        sizes: ['xxl', 'xl', 'l', 'md', 's', 'xs', 'xxs'],
        price: 50,
      },
    ],
    lastOrderId: 0,
    lastProductId: 5,
    sizes: ['xxl', 'xl', 'l', 'md', 's', 'xs', 'xxs'],
  },
  getters: {
    getTotalProductCount(state) {
      return state.products.length;
    },
    getProductList(state) {
      return state.products;
    },
    getProductById(id, state) {
      return state.products.find((product) => (product.id === id));
    },
    getOrderById(id, state) {
      return state.orders.find((order) => (order.id === id));
    },
    getSizes(state) {
      return state.sizes;
    },
  },
  mutations: {
    addOrder() {

    },
    addOrderPosition() {

    },
    removeOrderPosition() {

    },
    addProduct() {

    },
    removeProduct() {

    },
  },
  actions: {
    addOrder() {

    },
    addOrderPosition() {

    },
    removeOrderPosition() {

    },
    addProduct() {

    },
    removeProduct() {

    },
  },
  modules: {
  },
});
