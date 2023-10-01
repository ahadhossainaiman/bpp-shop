import { SET_USER, SIGN_IN_SUCCESS, SIGN_OUT_FAILURE, SIGN_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS } from "./actionType"

export const signUpSuccess = (user)=>{
    return{
        type:SIGN_UP_SUCCESS,
        payload:user
    }
}

export const signUpFailure = (error)=>{
    return{
        type:SIGN_UP_FAILURE,
        payload:error
    }
}

export const setUser = (user)=>{
    return {
        type:SET_USER,
        payload:user
    }
}

export const signInSuccess = (user)=>{
    return {
        type:SIGN_IN_SUCCESS,
        payload:user
    }
}

export const signInFailure = (error) =>{
    return {
        type:SIGN_UP_FAILURE,
        payload:error
    }
}

export const signOutSuccess = ()=>{
    return {
        type:SIGN_OUT_SUCCESS,
        
    }
}

export const signOutFailure = (error) =>{
    return {
        type:SIGN_OUT_FAILURE,
        payload:error
    }
}

export const updateProfileSuccess = (updateItem)=>{
    return {
        type:UPDATE_PROFILE_SUCCESS,
        payload:updateItem
        
    }
}
export const updateProfileFailure = (error)=>{
    return {
        type:UPDATE_PROFILE_FAILURE,
        payload:error
        
    }
}