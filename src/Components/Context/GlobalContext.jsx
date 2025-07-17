import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [product, setProduct] = useState([])
    const [cartt, setCartt] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/all`)
            .then(res => setProduct(res.data))
            .catch(err => console.log("error: ", err));
    }, [])

    // Fixed AddToCart function to properly handle quantity
    const AddToCart = (item, quantity = 1) => {
        const exists = cartt.find((p) => p.id === item.id);
        if (exists) {
            // Update quantity if item already exists
            setCartt(cartt.map(p => 
                p.id === item.id 
                    ? { ...p, quantity: p.quantity + quantity }
                    : p
            ));
            alert("Item quantity updated in cart");
            return;
        }
        // Add new item with quantity
        const newItem = { ...item, quantity };
        setCartt([...cartt, newItem]);
        alert("Item added to cart");
    }

    // New function to remove item from cart
    const removeFromCart = (itemId) => {
        setCartt(cartt.filter(item => item.id !== itemId));
        alert("Item removed from cart");
    }

    // New function to update quantity in cart
    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
            return;
        }
        setCartt(cartt.map(item => 
            item.id === itemId 
                ? { ...item, quantity: newQuantity }
                : item
        ));
    }

    return (
        <GlobalContext.Provider value={{ 
            product, 
            cartt, 
            setCartt, 
            AddToCart, 
            removeFromCart, 
            updateQuantity 
        }}>
            {children}
        </GlobalContext.Provider>
    )
}