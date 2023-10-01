import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProductsFetch from "../redux/products/thunk/getProducts";
import ProductCart from "../components/ProductCart";


const Home = () => {
    const products = useSelector((state)=>state?.products)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProductsFetch)
    },[dispatch])
    console.log(products);
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
                    {
                        products[0]?.map((product)=><ProductCart product={product} key={product.id} />)
                    }
            </div>
            
            
        </div>
    );
};

export default Home;