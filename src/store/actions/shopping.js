import * as actionTypes from "./actionTypes";

export const fetchProductListDataStarted = () => ({
  type: actionTypes.FETCH_PRODUCTS_DATA_STARTED,
});

export const fetchProductListDataCompleted = () => ({
  type: actionTypes.FETCH_PRODUCTS_DATA_COMPLETED,
});

export const fetchProductListDataFailed = () => ({
  type: actionTypes.FETCH_PRODUCTS_DATA_FAILED,
});

export const fetchProducts = () => ({
  type: actionTypes.FETCH_PRODUCTS,
});

export const setProductsList = (products) => ({
  type: actionTypes.SET_ALL_PRODUCTS,
  products: products,
});
