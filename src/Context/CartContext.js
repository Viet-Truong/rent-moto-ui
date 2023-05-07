import { useState, createContext } from "react";
import ModalCart from "~/components/Modal/ModalCart";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addCartItem = (data) => {
        // Nếu giỏ hàng chưa có gì, tạo mới 1 object và thêm vào sản phẩm
        if (cartItems.length === 0) {
            setCartItems([
                {
                    id: "",
                    date: {
                        startDate: data.startDate,
                        endDate: data.endDate,
                    },
                    data_moto: [
                        {
                            id: data.id,
                            image: data.image,
                            name: data.name,
                            price: data.price,
                            type: data.type,
                            slug: data.slug,
                        },
                    ],
                },
            ]);
        }
        // Nếu giỏ hàng đã có sản phẩm, tìm object có cùng ngày và thêm sản phẩm vào mảng data_moto
        else {
            const cartItemIndex = cartItems.findIndex(
                (item) =>
                    item.date.startDate === data.startDate &&
                    item.date.endDate === data.endDate
            );
            if (cartItemIndex === -1) {
                // Không tìm thấy object có ngày giống
                setCartItems((prevState) => [
                    ...prevState,
                    {
                        id: "",
                        date: {
                            startDate: data.startDate,
                            endDate: data.endDate,
                        },
                        data_moto: [
                            {
                                id: data.id,
                                image: data.image,
                                name: data.name,
                                price: data.price,
                                type: data.type,
                                slug: data.slug,
                            },
                        ],
                    },
                ]);
            } else {
                // Tìm thấy object có ngày giống, thêm sản phẩm vào mảng data_moto
                setCartItems((prevState) => {
                    const updatedItem = { ...prevState[cartItemIndex] };
                    updatedItem.data_moto.push({
                        id: data.id,
                        image: data.image,
                        name: data.name,
                        price: data.price,
                        type: data.type,
                        slug: data.slug,
                    });
                    const updatedCartItems = [...prevState];
                    updatedCartItems[cartItemIndex] = updatedItem;
                    return updatedCartItems;
                });
            }
        }
    };
    console.log(cartItems);

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
