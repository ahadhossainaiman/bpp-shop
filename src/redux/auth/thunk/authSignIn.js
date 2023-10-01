import { signInWithEmailAndPassword } from "firebase/auth"
import { signInFailure, signInSuccess } from "../action";
import { auth } from "../../../firebase/firebase.config";


const signIn = (email,password)=>{
    return async (dispatch) =>{
        try{
          const signinUser =   await signInWithEmailAndPassword(auth,email,password);
           console.log(signinUser.user);

          dispatch(signInSuccess(signinUser.user))
        }catch(error){
            dispatch(signInFailure(error.message))
        }
    }
}

export default signIn;