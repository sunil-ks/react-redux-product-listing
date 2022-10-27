import { put } from "redux-saga/effects";
import {
  fetchProductListDataStarted,
  setProductsList,
  fetchProductListDataCompleted,
  fetchProductListDataFailed,
} from "../actions";
import { getProductsApi } from "../../api/shopping";

export function* fetchProductsDataSaga() {
  try {
    yield put(fetchProductListDataStarted());
    const response = yield getProductsApi();
    yield put(setProductsList(response.data));

    yield put(fetchProductListDataCompleted());
  } catch (error) {
    console.log(error);
    yield put(fetchProductListDataFailed());
  }
}
