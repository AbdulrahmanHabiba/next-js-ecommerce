import {CartItem} from "@/app/_utils/types";
import axiosClient from "@/app/_utils/axiosClient";


export const addToCart = (
    data: { email: string; username: string | null; products: (number | undefined)[] }) => {
    return axiosClient.post("/carts", {data});
};
export const getUserCarts = (email: string )=>{
    return axiosClient.get(`/carts?populate[products][populate]=*&filters[email][$eq]=${email}&pagination[limit]=100`)
}
export const deleteCartItem = (cartId: number | undefined)=>{
    return axiosClient.delete(`/carts/${cartId}`)
}
export const deleteAllCarts = (email : string)=>{
    return axiosClient.delete(`/carts?filters[email][$eq]=${email}`)
}


export default {
    addToCart ,
    getUserCarts ,
    deleteCartItem ,
    deleteAllCarts
}