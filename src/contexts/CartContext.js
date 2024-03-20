import React,{createContext,useState,useEffect} from 'react';


// create context
export const CartContext = createContext()

const CartProvider = ({children}) => {
  //cart state
  const[cart,setCart] = useState([]);
  //item amount state
  const [itemAmount,setItemAmount] = useState(0);
  //total price state
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(1);
  


  useEffect(()=> {
    const total = cart.reduce((accumulator, currentItem)=>
    {
      return accumulator + currentItem.price * currentItem.amount;
    
    },0);
    setTotal(total);
  })

  //update item amount
  useEffect(()=>{
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem)=>
      {
        return accumulator + currentItem.amount;
      },0);
      setItemAmount(amount);
    }
  },[cart])
  //addToCart
  const addToCart = (product,id)=> {
    const newItem = {...product, id};
  //  console.log(id.category.image);
   //check if the item is already in the cart
   const cartItem = cart.find((item) => {
   return item.id === id;
  });

  //if the item is already in the cart
  // if (cartItem) {
  //   const newCart = [...cart].map(item=>{
  //     // console.log(item.id, id)
  //     if(item.id === id){
         
  //       return {
  //         ...item,
  //           amount:parseInt(item.amount )+ 1
  //        };
  //     }
        
  //     else {
  //       return item;
  //     }
      
  //   });
    
  //   setCart(newCart);
  // } else {
  //   setCart([...cart, {...newItem, amount}]);}
  
  if (cartItem) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: parseInt(item.amount) + 1,
        };
      }
      return item;
    });
    setCart(newCart);
  } else {
    setCart([...cart, { ...newItem, amount: 1 }]);
  }
  };
  //console.log(cart);

  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart);
  };

  //clearcart
  const clearCart = () => {
    setCart([]);
  };
//increase amount
  // const increaseAmount = (id)=>{
  //   const cartItem = cart.find(item => item.id === id);
  //   addToCart(cartItem,id);

  //  // console.log(`item ${id}amount increased`)
  // }
  // //decrease amount
  // const decreaseAmount = (id)=> {
  //   const cartItem = cart.find((item) =>{
  //     return item.id === id;});
  //     if(cartItem) {
  //       const newCart= cart.map(item => {
  //         if(item.id === id) {
  //           return {
  //             ...item,
  //             amount: cartItem.amount - 1
  //           };
          
  //         }
  //         else{
  //           return item;
  //         }
  //       });
  //       setCart(newCart);

  //     }else {
  //       if (cartItem.amount < 2){
  //         removeFromCart(id);
  //       }
  //     }
  //     //console.log(item);
  // }
  const increaseAmount = (id) => {
    const newCart = cart.map(item => {
        if (item.id === id) {
            return {
                ...item,
                amount:parseInt(item.amount) +1
            };
        }
        return item;
    });
    setCart(newCart);
    setAmount(amount+1);
    setItemAmount(itemAmount + 1);
};

const decreaseAmount = (id) => {
    const newCart = cart.map(item => {
        if (item.id === id && item.amount > 1) {
            return {
                ...item,
                setItemAmount: parseInt(item.amount)- 1
            };
        }
        return item;
    });
    setCart(newCart);
    setAmount(amount - 1);
    setItemAmount(itemAmount-1);
};

  return <CartContext.Provider value={ {cart ,addToCart, removeFromCart,clearCart,increaseAmount,decreaseAmount,itemAmount,amount,total} }>
    {children}
  </CartContext.Provider>;
};

export default CartProvider;
