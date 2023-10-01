import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import createUser from "../redux/auth/thunk/authAction";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { setUser } from "../redux/auth/action";
import updateProfile from "../redux/auth/thunk/authUpdateProfile";


const UserRegister = () => {
    const dispatch = useDispatch();
    const registerUser = useSelector((state)=>state.auth);
    console.log(registerUser);
    const {
        register,
        handleSubmit,
        reset
       
      } = useForm();

      const onSubmit = (data)=>{
        console.log(data);
        dispatch(createUser(data))
        dispatch(updateProfile(data.fullName,data.imgUrl,data.phoneNumber))
        reset()

      }

      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
          dispatch(setUser(currentUser))
          console.log(currentUser);
        })
        return ()=>{
          unsubscribe()
        }
      },[dispatch])

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold my-5">Please Register Now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
        
          <input placeholder="Full Name" type="type" className="input input-bordered"   {...register("fullName",{required:true})} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
        
          <input placeholder="Image Url" type="text" className="input input-bordered"   {...register("imgUrl",{required:true})} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
        
          <input placeholder="Phone Number" type="number" className="input input-bordered"   {...register("phoneNumber",{required:true})} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
        
          <input placeholder="email" type="email" className="input input-bordered"   {...register("email",{required:true})} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  {...register("password",{required:true})}/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary"></input>
        </div>
      </form>
    </div>
  </div>
        </div>
    );
};

export default UserRegister;