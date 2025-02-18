import axiosClient from "@/app/_utils/axiosClient";

export const createOrder = (data : object) => {
    return axiosClient.post("/orders" , {data} );
};
export default createOrder