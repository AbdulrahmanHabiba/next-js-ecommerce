import axios from "axios";

const STRAPI_API_TOKEN  = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
const apiUrl = "https://strapi-ecommerce-production-f8fb.up.railway.app/api/" ;

const axiosClient = axios.create({

    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
    },
})


export default axiosClient;