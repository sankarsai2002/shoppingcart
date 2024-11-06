import React, { useContext } from 'react'
import { UserContextData } from './context/AppContext'

export default function Cart() {
  const {products,setProducts,cart,setCart} = useContext(UserContextData);
  
  const incrementQuantity = (product)=>{
    product.quantity+=1;
    // console.log("Increment");
    setCart(
      cart.map((item)=>{
        return item.name === product.name?product:item;
      })
    )

    
  }

  const decrementQuantity = (product)=>{
    // console.log("decrement");
    if(product.quantity==1){
      setCart(cart.filter((item)=>{
        return item.name !== product.name;
      }))
    }
    else{
      product.quantity-=1;
      setCart(
        cart.map((item)=>{
          return item.name === product.name?product:item;
        })
      )
    }
    
  }
  return (
    <div>Cart
      {/* <h1>Cart</h1> */}
    <ul>
      {cart.map((value, index) => (
            <li>
              
              {value.name}
              {value.desc}
              {value.price}
              <button onClick={()=>decrementQuantity(value)}>-</button>
              {value.quantity}
              <button onClick={()=>incrementQuantity(value)}>+</button>
              {value.price*value.quantity}
              </li>
          ))}
    </ul>
    </div>
  )
}
