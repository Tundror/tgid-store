import { createContext, useContext, useEffect, useState } from "react";
import jsonApi from "../services/jsonApi.js";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (cart && cart.length === 0) {
                const products = await jsonApi.getCartProducts();
                setCart(products);
            } else {
                jsonApi.postCartProducts(cart);
            }
        }
        fetchData();
    }, []);

    return (
        <CartContext.Provider value={{ cart, setCart}}>
            {children}
        </CartContext.Provider>
    );

}