import { createBrowserRouter } from "react-router-dom";



import Main from "../layout/Main";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import UserRegister from "../components/UserRegister";
import UserLogIn from "../components/UserLogIn";


const router = createBrowserRouter([
   {
    path:"/",
    element:<Main/>,
    children:[
      {
         path: "/",
         element: (
             <Home />
           
         ),
      },
      {
         path: "/cart",
         element: (
            <Cart/>
           
         ),
      },
      {
         path: "/register",
         element: (
            <UserRegister/>
           
         ),
      },
      {
         path: "/login",
         element: (
           <UserLogIn/>
           
         ),
      },
    ]
   }
]) 

export default router