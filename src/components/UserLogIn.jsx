import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import signIn from "../redux/auth/thunk/authSignIn";
import { useRef, useState } from "react";

const UserLogIn = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state)=>state.auth);
  console.log(currentUser);
  const [email,setEmail] = useState('');
  const { register, handleSubmit, reset } = useForm();
  const emailRef = useRef()

  const onSubmit = (data) => {
    console.log(data);
    dispatch(signIn(data.email, data.password));
    setEmail(data.email)
    reset();
  };


    const handleResetPass = (e)=>{
      const email1 = emailRef.current;
      console.log(email1);
    }

    const email1 = emailRef
      console.log(email1);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold my-5">Please Login Now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              {/* <input type="text" ref={emailRef} /> */}
              <input
                placeholder="email"
                type="email"
                className="input input-bordered"
                ref={emailRef}
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary"></input>
            </div>
            <p>Forget Password? Please <button onClick={handleResetPass}>Reset Password</button> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogIn;
