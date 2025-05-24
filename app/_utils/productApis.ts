import axiosClient from "@/app/_utils/axiosClient";

export const getProducts = () => {
    return axiosClient.get("/products?populate=*");
};

export const getProductById = (id: number) => {
    return axiosClient.get(`/products/${id}`);
};

export const getProductByCategory = (category: string) => {
    return axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);
};

export default {
    getProducts,
    getProductById,
    getProductByCategory
};