import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    headers: { "Content-Type": "application/json" },
});

const getProducts = async (query = "") => {
    try {
        const response = await axiosInstance.get(`/produtos${query}`);
        return response.data;
    } catch (error) {
        return error.data;
    }
};

const getOneProduct = async (product) => {
    try {
        const response = await axiosInstance.get(`/produtos/${product}`);
        return response.data;
    } catch (error) {
        return error.data;
    }
};

const getCartProducts = async (token) => {
    try {
        const response = await axiosInstance.get(`/cart`);
        return response.data.userCart;
    } catch (error) {
        return error.data;
    }
};

const postCartProducts = async (products, token) => {
    try {
        await axiosInstance.post(`/cart`, { products });
    } catch (error) {
        return error.data;
    }
};

export default {
    getProducts,
    getOneProduct,
    getCartProducts,
    postCartProducts
};