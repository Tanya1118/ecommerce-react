import React,{useContext} from 'react';
//import link
import { Link } from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
//import components
import CartItem from '../components/CartItem';
//import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//import cartContext
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
   const {isOpen, handleClose } = useContext(SidebarContext);
   const { cart,clearCart, total,itemAmount } = useContext(CartContext);
   //console.log(useContext(CartContext));
  return( <div className={`${
    isOpen ? 'right-0' : '-right-full'
  } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
      {/*icon*/}
      <div 
      onClick={handleClose} 
      className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl' />
      </div>
    </div>
    <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b '>{cart.map(item => {
      return <CartItem key={item} item={item.id} />;
    })}</div>
    <div className=' flex flex-col gap-y-3 py-4'>
      <div className=' flex w-full justify-between items-center'>
        {/*total*/}
        <div className='uppercase font-semibold'>
          <span className='mr-2'>Total:</span> ${total}
        </div>
        {/*clear cart*/}
        <div onClick={() => clearCart()} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
  <FiTrash2 />
</div>



      </div>
      <Link to='/cart' className='bg-black flex p-4 justify-center items-center text-primary w-full font-medium'>View cart</Link>
      <Link to='/'className= 'text-white flex p-4 justify-center items-center text-primary w-full font-medium'>Checkout</Link>
    </div>
  </div>);
};

export default Sidebar;

