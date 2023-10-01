import { useSelector } from "react-redux";
import TableContent from "../components/TableContent";


const Cart = () => {
    const carts = useSelector((state)=>state.cart)
    console.log(carts.cartItem);
  const totalPrice = carts.cartItem.reduce((sum,item)=>{
    return sum+=item.price*item.orderQuantity
  },0)
  // console.log(totalPrice);
 

    return (
        <div className="overflow-x-auto flex sm:flex-col lg:flex-row  gap-4 py-5">
        <table className="table lg:w-1/2 sm:w-full">

          <thead>
            <tr>
            <th>#</th>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUB_PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
        
           {
             carts.cartItem.length? carts.cartItem?.map((item,index)=><TableContent index={index} item={item} key={item.id}/>): <h1 className="text-red-500 text-5xl px-10">No Product Found</h1>
           }
    
          </tbody>
        </table>
        <div className="flex-1 rounded-md px-16 border border-gray-400 mx-10">
            <div className="billDetailsCard py-5">
              <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                Summary
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b-2 border-yellow-500">
                  <p>Sub Total</p>
                  <p>
                    BDT <span className="lws-subtotal">{totalPrice.toFixed(2)}</span>
                  </p>
                </div>

                <div className="flex items-center justify-between border-b-2 border-yellow-500">
                  <p>Discount</p>
                  <p>
                    BDT <span className="lws-discount">20</span>
                  </p>
                </div>

                <div className="flex items-center justify-between border-b-2 border-yellow-500">
                  <p>VAT</p>
                  <p>
                    BDT <span className="vat">5</span>
                  </p>
                </div>

                <div className="flex items-center justify-between py-10">
                  <p className="font-bold">TOTAL</p>
                  <p className="font-bold">
                    BDT <span className="lws-total">{totalPrice+25}</span>
                  </p>
                </div>
              
              </div>
              <button className="px-20 py-5 block mx-auto rounded-md font-bold text-white bg-yellow-500">PLACE ORDER</button>
            </div>
          </div>
      </div>
    );
};

export default Cart;