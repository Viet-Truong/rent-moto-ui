import { useState, createContext } from 'react';
import ModalCart from '~/components/Modal/ModalCart';
import { v4 as uuid } from 'uuid';

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addCartItem = (data) => {
        // Nếu giỏ hàng chưa có gì, tạo mới 1 object và thêm vào sản phẩm
        if (cartItems.length === 0) {
            setCartItems([
                {
                    id: uuid(),
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
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
                        id: uuid(),
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

    // bug
    const removeCartItem = (cartItemId, itemId) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = prevCartItems.map((cartItem) => {
                if (cartItem.id === cartItemId) {
                    // Nếu cartItem.id trùng khớp với cartItemId cần xóa,
                    // sử dụng hàm filter để tạo một mảng mới chỉ chứa các object khác với object cần xóa trong data_moto
                    const updatedDataMoto = cartItem.data_moto.filter(
                        (moto) => moto.id !== itemId
                    );
                    // Trả về một object mới với data_moto đã được cập nhật
                    if (updatedDataMoto.length === 0) {
                        // Nếu data_moto rỗng, loại bỏ cartItem khỏi cartItems
                        return null;
                    } else {
                        return { ...cartItem, data_moto: updatedDataMoto };
                    }
                }
                // Trả về cartItem không thay đổi nếu cartItem.id không trùng khớp
                return cartItem;
            });
            const filteredCartItems = updatedCartItems.filter(
                (item) => item !== null
            );
            return filteredCartItems;
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
                setCartItems,
            }}
        >
            <ModalCart />
            {children}
        </CartContext.Provider>
    );
};
