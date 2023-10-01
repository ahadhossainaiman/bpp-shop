import { ADD_TO_CART, CART_ITEM_DELETE, DECREASE_PRODUCT_QUANTITY, INCREASE_PRODUCT_QUANTITY } from "./actionType";


export const addToCart = (item) =>{
    return{
        type:ADD_TO_CART,
        payload:item
    }
}

export const increaseProductQuantity = (item)=>{
    return {
        type:INCREASE_PRODUCT_QUANTITY,
        payload:item
    }
}

export const decreaseProductQuantity = (item)=>{
    return {
        type:DECREASE_PRODUCT_QUANTITY,
        payload:item
    }
}

export const cartItemDelete = (item)=>{
    return{
        type:CART_ITEM_DELETE,
        payload:item
    }
}