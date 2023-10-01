import { SET_USER, SIGN_IN_FAILURE, SIGN_IN_SUCCESS, SIGN_OUT_FAILURE, SIGN_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, UPDATE_PROFILE_SUCCESS } from "./actionType";

const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: { ...action.payload },
        error: null,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        user: null,
        error: null,
      };
    case SET_USER:
      return {
        ...state,
        user: { ...action.payload },
      };
    case SIGN_IN_SUCCESS:return {
        ...state,user:{
            ...action.payload
        },
        error:null
    } 
    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:  
        return {
            ...state,user:null,error:action.payload
        } 
    case SIGN_OUT_SUCCESS:
      return{
        ...state,user:null,error:null
      }   
    case UPDATE_PROFILE_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          displayName: action.payload.displayName,
          photoURL: action.payload.photoURL,
        },
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
