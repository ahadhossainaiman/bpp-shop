import { useSelector } from "react-redux"
import { auth } from "../../../firebase/firebase.config"
import { updateProfileFailure, updateProfileSuccess } from "../action"

// const currentUser = useSelector((state)=>state.auth);
// console.log(currentUser);
console.log(auth.currentUser);
const updateProfile = (user,displayName,photoURL)=> async (dispatch)=>{
    try{
      const user = updateProfile(user, {
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