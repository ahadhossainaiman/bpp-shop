import { ADD_PRODUCT, GET_DETAILS, GET_PRODUCT } from "./actionType";

const initialState = {
    products:[],
    productDetails:{}
}

const nextProductId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    0
  );
  return maxId + 1;
};
const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: nextProductId(state.products),
            ...action.payload,
          },
        ],
      };
    case GET_PRODUCT:
        console.log("aiman",action.payload);
      return {
        ...state,
       ...action.payload
      }
      case GET_DETAILS:
      console.log(action.payload);  
      return {
        ...state,
        productDetails:{...action.payload}
      }
    default:
      return state;
  }
};

export default productsReducers;
