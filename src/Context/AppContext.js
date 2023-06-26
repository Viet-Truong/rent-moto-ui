import { createContext, useContext, useState, useMemo } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [isModalAddErrorVisible, setIsModalAddErrorVisible] = useState(false);
    const [isModalAccountVisible, setIsModalAccountVisible] = useState(false);
    const [isModalMotoVisible, setIsModalMotoVisible] = useState(false);
    const [isModalRentVisible, setIsModalRentVisible] = useState(false);
    const [isToastVisible, setIsToastVisible] = useState({
        open: false,
    });
    const [data, setData] = useState();
    const [dataRentMoto, setDataRentMoto] = useState();
    const [dataMoto, setDataMoto] = useState();
    const [typeModal, setTypeModal] = useState();

    return (
        <AppContext.Provider
            value={{
                isModalAccountVisible,
                setIsModalAccountVisible,
                isModalMotoVisible,
                setIsModalMotoVisible,
                isModalRentVisible,
                setIsModalRentVisible,
                data,
                setData,
                dataRentMoto,
                setDataRentMoto,
                typeModal,
                setTypeModal,
                isModalAddErrorVisible,
                setIsModalAddErrorVisible,
                dataMoto,
                setDataMoto,
                isToastVisible,
                setIsToastVisible,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
