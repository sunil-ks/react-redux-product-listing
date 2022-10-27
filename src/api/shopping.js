import axios from 'axios';
import { API_ROOT } from '../config';

export const getProductsApi = () => {
    const url = `${API_ROOT}/products.json`;
    return axios.get(url);
};
