import * as actionTypes from './actionTypes';

export {
    fetchProductListDataStarted,
    fetchProductListDataCompleted,
    fetchProductListDataFailed,
    fetchProducts,
    setProductsList,
} from '../actions/shopping';

export const reinitializeState = () => ({
    type: actionTypes.REINITIALIZE_STATE,
});
