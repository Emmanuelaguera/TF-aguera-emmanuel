import React, { createContext, useState } from 'react'
export const CartContext = createContext({});

const cartInitial = {
    products: [],
    totalPrice: 0,
    totalProducts: 0,
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(cartInitial)

    const clearCart = () => { setCart(cartInitial) }

    const addToCart = (item, newQuantity) => {
        let product = cart.products.find(prd => prd.id === item.id)

        if (product) {
            product = { ...product, quantity: product.quantity + newQuantity }
            const products = cart.products.map(prd => prd.id === product.id ? product : prd)
            setCart(prevState => ({
                products,
                totalPrice: prevState.totalPrice + product.price * newQuantity,
                totalProducts: prevState.totalProducts + newQuantity,
            }))
        } else {
            setCart(prevState => ({
                products: [...prevState.products, { ...item, quantity: newQuantity }],
                totalPrice: prevState.totalPrice + item.price * newQuantity,
                totalProducts: prevState.totalProducts + newQuantity,
            }))
        }
    }

    const removeItem = (productId) => {
        const toDelete = cart.products.findIndex((item) => item.id === productId)
        if(toDelete != -1){
            setCart(prevState => ({
                products: prevState.products.filter(elem=> elem.id !== productId),
                totalProducts: prevState.totalProducts - prevState.products[toDelete].quantity,
                totalPrice: prevState.totalPrice - (prevState.products[toDelete].price * prevState.products[toDelete].quantity)
            }))
        }
      }
   
    return (
        <CartContext.Provider value={{ clearCart, addToCart, removeItem, cart }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider




