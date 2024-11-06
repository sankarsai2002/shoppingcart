import React, { useContext } from "react";
import { useState } from "react";
import { UserContextData } from "./context/AppContext";
export default function Products() {
  const {products,setProducts,cart,setCart} = useContext(UserContextData);

  const addProduct = (product)=>{

    // product.quantity = 1;
    // console.log(cart);
    // // let newCart = [...cart,product];
    // // setCart(newCart);
    // setCart((prevCart)=>[...prevCart,product]);

    setCart((prevCart)=>{
      const existing = prevCart.find((item)=>item.name === product.name);
      if(existing){
        return prevCart.map((item)=>
          item.name === product.name?{...item,quantity:item.quantity+1}:item
        );
      }
      else{
        return [...prevCart,{...product,quantity:1}];
      }
    });
    
  }

  return (
    <div className="App-products">
      {products.map((value, index) => (
        <div className="App-item">
          
          <h3>{value.name}</h3>
          <p>{value.desc}</p>
          <h4>{value.price}</h4>
          <button onClick={()=>addProduct(value)}>Add</button>
          
          </div>
      ))}

    </div>
  );
}
