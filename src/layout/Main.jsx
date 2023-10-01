/* eslint-disable react/jsx-key */
import { Link, Outlet } from "react-router-dom";
import NavbarWithDropDawn from "../shared/NavbarWithDropDawn";
import { useSelector } from "react-redux";
import cart from '../assets/animation_ln6ywgzg.json';
import Lottie from "lottie-react";


const Main = () => {
  const carts = useSelector((state) => state.cart);
 
  return (
    <div className="relative">
      <NavbarWithDropDawn />
      <Outlet />
      <Link to='/cart' className="dropdown dropdown-end fixed top-1/2 right-0 bg-yellow-200 w-14 rounded-md">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            
            <Lottie animationData={cart} loop={true} />
           
            <span className="badge badge-sm indicator-item">
              {carts.cartItem.length}
            </span>
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          
          

          
        </div>
      </Link>
    </div>
  );
};

export default Main;
