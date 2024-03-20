import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {IoMdClose,IoMdRemove,IoMdAdd} from 'react-icons/io';
import CartProvider, { CartContext } from '../contexts/CartContext' ;

const CartItem = ({item}) => {
  // console.log(CartContext[amount]);
  const{removeFromCart,increaseAmount, decreaseAmount,amount} = useContext(CartContext)
//destructure item
  // console.log(amount)
  const {id,title,price} = item;
  return <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
    {/*image*/}
    <Link to={`/products/${id}`}>
      <img className='max-w-[80px]' src={item.images} />
      </Link>
      <div className='flex justify-between mb-2'>
        {/*title* and remove icon*/}
        <div className='flex justify-between mb-2'>
          <Link
          to={`/products/${id}`}
          className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
            {title}
          </Link>
          {/*remove icon*/}
          <div onClick={()=> removeFromCart(id)} className='text-xl cursor-pointer'>
            <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
          </div>
        </div>
        <div className='flex gap-x-2 h-[36px] text-sm'>
          {/*qty*/}
          <div className='flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium'>
            {/*minus icon*/}
            <div onClick={()=>decreaseAmount(id)}
             className='flex-1 justify-center items-center cursor-pointer h-full' style={{ marginTop: '100px' }} >
            <IoMdRemove />
            </div>
            {/*amount*/}
            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
            {/* <p>{itemAmount}</p> */}
            {/*plus icon*/}
            <div  onClick={() =>increaseAmount(id)}className='flex-1 h-full flex justify-center items-center cursor-pointer'>
              <IoMdAdd />
            </div>
          </div>
          {/*item price*/}
          <div className='flex-1 flex items-center justify-around'>$ {price}</div>
          {/*final price*/}
          <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${price * amount}`}</div>
        </div>
      </div>
    </div>
    </div>;
};

export default CartItem;
