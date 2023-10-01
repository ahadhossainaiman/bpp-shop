import { useDispatch } from "react-redux";
import { cartItemDelete, decreaseProductQuantity, increaseProductQuantity } from "../redux/carts/action";


const TableContent = ({item,index}) => {
    const dispatch = useDispatch()
    const {id,image,title,orderQuantity,price,category} =item;
    const handleIncreaseQuantity = (item)=>{
        dispatch(increaseProductQuantity(item))
    }
    const handleDecreaseQuantity = (item)=>{
      dispatch(decreaseProductQuantity(item))
    }

    const handleDeleteItem = (id) =>{
      dispatch(cartItemDelete(id))
    }
    return (
    <tr>
        <td>{index+1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{category}</div>
          </div>
        </div>
      </td>
      <td>
     {price}$
      </td>
      <td><button onClick={()=>handleIncreaseQuantity(item)} className="py-1 px-2 mx-2 rounded-md text-white font-bold bg-green-500">+</button>{orderQuantity}<button  onClick={()=>handleDecreaseQuantity(item)} className="py-1 px-2 mx-2 rounded-md text-white font-bold bg-red-500">-</button></td>
      <td>
     {orderQuantity*price}$
      </td>
      <td>
        <button onClick={()=>handleDeleteItem(id)} className="btn btn-ghost btn-xs bg-red-700 text-white">DELETE</button>
      </td>
    </tr>
    );
};

export default TableContent;