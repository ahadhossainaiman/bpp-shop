import { auth } from "../../../firebase/firebase.config"
import { updateProfileFailure, updateProfileSuccess } from "../action"

const updateProfile = (displayName,photoURL)=> async (dispatch)=>{
    try{
      const user = updateProfile(auth.currentUser, {
          displayName,
          photoURL,
      })
        console.log(user);
        dispatch(updateProfileSuccess({displayName,photoURL}))
    }catch(error){
        dispatch(updateProfileFailure(error))
    }
}

export default updateProfile;