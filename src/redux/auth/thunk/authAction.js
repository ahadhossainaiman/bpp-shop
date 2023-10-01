


import { signUpFailure, signUpSuccess } from "../action";

import {auth} from "../../../firebase/firebase.config";
import { createUserWithEmailAndPassword, updateCurrentUser } from "firebase/auth";


const createUser = (data)=>{
    const {email,password,fullName,imgUrl,phoneNumber} = data;
    console.log(email);
    return async (dispatch,getState)=>{
        try{
           const user =  await createUserWithEmailAndPassword(auth,email,password)
           console.log(user.user); 
           user.user.displayName =fullName,
           user.user.photoURL=imgUrl,
           user.user.phoneNumber = phoneNumber
       
            dispatch(signUpSuccess(user.user))
            
        }catch (error){
            dispatch(signUpFailure(error))
        }
    }
}

export default createUser;