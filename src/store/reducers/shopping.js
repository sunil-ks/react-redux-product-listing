import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
import { INITIATED, FAILED, COMPLETED } from "../../config";

const initialState = {
  allProducts: [],
  productsListDataStatus: null,
};

const fetchProductsDataStartedReducer = (state) => {
  return updateObject(state, {
    productsListDataStatus: `${INITIATED}`,
  });
};

const fetchProductsDataSuccessReducer = (state) => {
  return updateObject(state, {
    productsListDataStatus: `${COMPLETED}`,
  });
};

const fetchProductsDataFailedReducer = (state) => {
  return updateObject(state, {
    productsListDataStatus: `${FAILED}`,
  });
};

const setProductsListReducer = (state, action) => {
  return updateObject(state, {
    allProducts: action.products,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_DATA_STARTED:
      return fetchProductsDataStartedReducer(state);
    case actionTypes.FETCH_PRODUCTS_DATA_COMPLETED:
      return fetchProductsDataSuccessReducer(state);
    case actionTypes.FETCH_PRODUCTS_DATA_FAILED:
      return fetchProductsDataFailedReducer(state);
    case actionTypes.SET_ALL_PRODUCTS:
      return setProductsListReducer(state, action);
    default:
      return state;
  }
};
export default reducer;
