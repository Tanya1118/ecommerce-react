import React,{useContext} from 'react';
//import useParams
import { useParams } from 'react-router-dom';
//import cart context
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  //get the product id from url
  const { id } = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);
  const {increaseAmount} = useContext(CartContext);
  //console.log(id);

  //get the single product based on id
  const product = products.find(item => {
    return item.id === parseInt(id);
  });
  // if product is not found
  if(! product) {
    return(
      <section className = 'h-screen flex justify-center items-center'>
        Loading...
      </section>
    )
  }

  console.log(product);
  // destructive product
  const {title,price,description,images} = product;
  return <section className='pt-32 pb-12 lg:py-32 h-screen'>
    <div className='container mx-auto'>
      {/*image &text wrapper */}
      <div className='flex flex-col lg:flex-row items-center'></div>
      {/*image*/}
      <div className='max-w-[200px] lg:max-w-sm'>
        <img className='max-w-[200px] lg:max-w-sm ml-[50px]' src={images} alt='' />
      </div>
      {/*title*/}
      <div className='flex-1 text-center lg:text-left'>
      <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:max-0 mt-[-400px] ml-[500px]'>
    {title}
    </h1>

        <div className='text-xl text-red-500 font-medium mb-6 ml-[500px]'>$ {price}</div>
        <p className='mb-8 ml-[500px]'>
          {description}
          </p>
          
        

        <button onClick={()=> addToCart(product.id,product)} className='bg-black py-4 px-8 text-white ml-[500px]'>Add to cart </button>
      </div>
    </div>
  </section>;
};

export default ProductDetails;
