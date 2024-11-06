import React, { createContext, useState } from 'react'

export const UserContextData = createContext();
export default function AppContexts(props) {
    const items = [
        { name: "Product 1", desc: "This is a dummy description", price: 30 },
        { name: "Product 2", desc: "This is a dummy description", price: 80 },
        { name: "Product 3", desc: "This is a dummy description", price: 90 },
        { name: "Product 4", desc: "This is a dummy description", price: 50 },
        { name: "Product 5", desc: "This is a dummy description", price: 40 },
        { name: "Product 6", desc: "This is a dummy description", price: 50 },
        { name: "Product 7", desc: "This is a dummy description", price: 70 },
        { name: "Product 8", desc: "This is a dummy description", price: 50 },
    ];
    const [products, setProducts] = useState(items);
    const [cart,setCart] = useState([]);
    return (
        <UserContextData.Provider value={{products,setProducts,cart,setCart}}>{props.children}</UserContextData.Provider>
    )
}
