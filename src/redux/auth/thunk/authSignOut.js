import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { signOutFailure, signOutSuccess } from "../action";

const userSignOut = ()=>async (dispatch)=>{
    try{
      const logOut =  await signOut(auth);
      console.log(logOut);
      dispatch(signOutSuccess())
    }catch(error){
        dispatch(signOutFailure(error))
    }
}

export default userSignOut;