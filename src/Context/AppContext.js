import { createContext, useContext, useState, useMemo } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [isModalAccountVisible, setIsModalAccountVisible] = useState(false);
    const [isModalMotoVisible, setIsModalMotoVisible] = useState(false);
    const [isModalAcceptVisible, setIsModalAcceptVisible] = useState(false);
    const [isModalReturnVisible, setIsModalReturnVisible] = useState(false);
    const [data, setData] = useState();
    const [typeModal, setTypeModal] = useState();

    return (
        <AppContext.Provider
            value={{
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
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
