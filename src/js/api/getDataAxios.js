// import axios from "https://cdnjs.cloudflare.com/ajax/libs/axios/1.5.0/axios.min.js";

const BASE_URL = 'https://voodoo-sandbox.myshopify.com'

export const getData = async (limit, page) => {
    const {data} = await axios(`${BASE_URL}/products.json?limit=${limit}&page=${page}`)
    return data
}