import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/carts/action";
import { useState } from "react";
import { getDetails } from "../redux/products/action";
import { toast } from "react-toastify";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state)=>state.products)

  const { id, title, price, description, category, image, rating } = product;

  const handleAddToCart = (item) => {
    // toast('ADD SUCCESSFULLY')
    dispatch(addToCart(item));
  };

  const handleDetails = (product)=>{
    console.log(product);

    dispatch(getDetails(product))
  }
  // console.log(productDetails);
  // console.log(productDetails.image);
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure
        className="p-5 object-cover cursor-pointer"
        onClick={()=>handleDetails(product)}
      >
        <img  onClick={() => document.getElementById("my_modal_4").showModal()} className="h-52" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{category}</p>
        <div className="card-actions justify-between">
          <p className="font-bold text-3xl">{price}$</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card card-side flex sm:flex-col">
            <figure className="border-gray-300 border-2 rounded-md p-3">
              <img className="h-[50%] w-[40%]"
                src={productDetails.image}
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-3xl">{productDetails.title}</h2>
              <p>{productDetails.category}</p>
              <p className="">{productDetails.description}</p>
              <p className="font-bold text-3xl">{price}$</p>
              <div className="card-actions justify-end">
              <button
            onClick={() => handleAddToCart(productDetails)}
            className="btn btn-primary"
          >
            ADD TO CART
          </button>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
      
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProductCart;
