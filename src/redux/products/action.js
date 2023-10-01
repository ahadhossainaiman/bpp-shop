import { GET_PRODUCT } from "./actionType"


export const getProducts = (products)=>{
    return {
        type:GET_PRODUCT,
        payload:products
    }
}
export const getDetails = (product)=>{
    return {
        type:GET_PRODUCT,
        payload:product
    }
}