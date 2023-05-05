import { useState, createContext } from "react";
import ModalCart from "~/components/Modal/ModalCart";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addCartItem = (data) => {
        setCartItems((prev) => [
            ...prev,
            {
                id: data.id,
                image: data.image,
                name: data.name,
                price: data.price,
                slug: data.slug,
            },
        ]);
    };

    const removeCartItem = (id) => {
        setCartItems((item) => {
            return item.filter((item) => item.id !== id);
        });
    };
    return (
        <CartContext.Provider
            value={{
                isOpen,
                setIsOpen,
                cartItems,
                addCartItem,
                removeCartItem,
            }}
        >
            <ModalCart />
            {children}
        </CartContext.Provider>
    );
};
