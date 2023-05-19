import { createContext, useContext, useState, useMemo } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const authJSON = localStorage.getItem("user");
    const [user, setUser] = useState(JSON.parse(authJSON) || null);
    const [isModalAddErrorVisible, setIsModalAddErrorVisible] = useState(false);
    const [isModalAccountVisible, setIsModalAccountVisible] = useState(false);
    const [isModalMotoVisible, setIsModalMotoVisible] = useState(false);
    const [isModalAcceptVisible, setIsModalAcceptVisible] = useState(false);
    const [isModalReturnVisible, setIsModalReturnVisible] = useState(false);
    const [data, setData] = useState();
    const [typeModal, setTypeModal] = useState();

    console.log(user);

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                isModalAccountVisible,
                setIsModalAccountVisible,
                isModalMotoVisible,
                setIsModalMotoVisible,
                isModalAcceptVisible,
                setIsModalAcceptVisible,
                isModalReturnVisible,
                setIsModalReturnVisible,
                data,
                setData,
                typeModal,
                setTypeModal,
                isModalAddErrorVisible,
                setIsModalAddErrorVisible,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
