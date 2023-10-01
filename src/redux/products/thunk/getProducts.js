import { getProducts } from "../action";




const getProductsFetch = async (dispatch,getState) =>{
    const response = await fetch(`http://localhost:9000/products`);
    const products = await response.json();
    dispatch(getProducts(products))

}

export default getProductsFetch;