/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProductsFetch from "../redux/products/thunk/getProducts";
import ProductCart from "../components/ProductCart";
import { AiOutlineRight } from "react-icons/ai";
import SideDropdownMenu from "../components/SideDropdownMenu";

const Home = () => {
  const products = useSelector((state) => state?.products);
  const [productCategory, setProductCategory] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsFetch);
  }, [dispatch]);

  useEffect(() => {
    fetch(`https://backend.bppshop.com.bd/api/v1/categories`)
      .then((res) => res.json())
      .then((data) => setProductCategory(data.data));
  }, []);
//   console.log(products);
console.log(productCategory);
  return (
    <div className="flex ">
      <div className="max-w-[300px] bg-white-500 h-[100vh] py-3 ">

      <div className="px-3 border-t-2 border-b-2 border-yellow-500">Home</div>
       <SideDropdownMenu categories={productCategory}/>


        {/* <div className="flex items-center border-b-2 border-yellow-500 my-1">
      
      <div className="w-10 mx-3">
        <img
          src={`https://backend.bppshop.com.bd/storage/category/${category.icon}`}
          alt=""
        />
      </div>
      <div className="">{category.name}</div>
   
    </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
        {products[0]?.map((product) => (
          <ProductCart product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
