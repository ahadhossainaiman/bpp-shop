/* eslint-disable no-case-declarations */

import { ADD_TO_CART, CART_ITEM_DELETE, DECREASE_PRODUCT_QUANTITY, INCREASE_PRODUCT_QUANTITY } from "./actionType";
import { toast } from "react-toastify";


const initialState = {
    cartItem:[]
}

// const product = useSelector((state)=>state.products);
// console.log(product);

const cartReducers = (state=initialState,action) =>{
    switch(action.type){
        
        case ADD_TO_CART:
            console.log(action.payload)
            const findProduct = state.cartItem.find((item)=>item.id=== action.payload.id);

        return findProduct ? toast('ALLREADY ADDED') && state:toast('SUCCESSFULLY ADDED') && {

            cartItem:[...state.cartItem,{
                ...action.payload,orderQuantity:1
            }]
        }

        case INCREASE_PRODUCT_QUANTITY:
            const updateIncreaseQuantityList = state.cartItem.map((item)=>{
            if(item.id===action.payload.id && item.qty> action.payload.orderQuantity){
                return {
                    ...item,
                    orderQuantity:item.orderQuantity+1
                }
            }
            else{
                return item
            }
        }
            )
            // console.log(updateQuantityList);
            return{
                cartItem:[...updateIncreaseQuantityList]
            }

        case DECREASE_PRODUCT_QUANTITY:
            const updateDecreaseQuantityList = state.cartItem.map((item)=>{
                if(item.id===action.payload.id && item.qty>action.payload.orderQuantity && action.payload.orderQuantity>1){
                    return {
                        ...item,
                        orderQuantity:item.orderQuantity-1
                    }
                }else{
                    return item
                }
            })
            return {
                cartItem:[...updateDecreaseQuantityList]
            }

        case CART_ITEM_DELETE:
            const filterProducts = state.cartItem.filter((item)=>item.id!==action.payload) 
            return {
                cartItem:[...filterProducts]
            }  


        default:return state;
    }

}

export default cartReducers;