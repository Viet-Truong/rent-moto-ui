import classNames from "classnames/bind";
import styles from "./ModalHandleSignMoto.module.scss";
import {
    MDBBadge,
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
} from "mdb-react-ui-kit";
import { AppContext } from "~/Context/AppContext";
import { useState, useEffect, useContext } from "react";
import { moto } from "~/data/data";
import Button from "~/components/Button";

const cx = classNames.bind(styles);
function ModalHandleSignMoto() {
    const { isModalAcceptVisible, data, typeModal, setIsModalAcceptVisible } =
        useContext(AppContext);
    // const [id, setId] = useState(data?.id ?? "");
    // const [name, setName] = useState(data?.name ?? "");
    // const [startDate, setStartDate] = useState(data?.startDate ?? "");
    // const [endDate, setEndDate] = useState(data?.endDate ?? "");
    // const [status, setStatus] = useState(data?.status ?? "");
    const [dataModal, setDataModal] = useState(data ?? []);
    const [motoFounded, setMotoFounded] = useState([]);

    const findMotoByID = (id) => {
        const foundMoto = moto.find((item) => item.id === id);
        return foundMoto;
    };

    const founded = data?.idMoto?.map((item) => {
        return findMotoByID(item);
    });

    useEffect(() => {
        // setId(data?.id ?? "");
        // setName(data?.name ?? "");
        // setStartDate(data?.startDate ?? "");
        // setEndDate(data?.endDate ?? "");
        // setStatus(data?.status ?? "");
        setMotoFounded(founded);
        setDataModal(data ?? []);
    }, [data]);

    return (
        <div className={cx("wrapper")}>
            <MDBModal show={isModalAcceptVisible} tabIndex="-1">
                <MDBModalDialog className={cx("modal_dialog")}>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>
                                {typeModal == "ACCEPT"
                                    ? "Duyệt đăng kí thuê xe"
                                    : "Xác nhận trả xe"}
                            </MDBModalTitle>
                            <MDBBtn
                                className="btn-close"
                                color="none"
                                onClick={() => setIsModalAcceptVisible(false)}
                            ></MDBBtn>
                        </MDBModalHeader>

                        <MDBModalBody className={cx("modal_body")}>
                            <MDBTable align="middle" className={cx("table")}>
                                <MDBTableHead>
                                    <tr>
                                        <th scope="col">ID xe</th>
                                        <th scope="col">Tên xe</th>
                                        <th scope="col">Hãng xe</th>
                                        <th scope="col">Loại xe</th>
                                        <th scope="col">Biển số xe</th>
                                        <th scope="col">Giá thuê</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {motoFounded?.map((item) => {
                                        return (
                                            <tr key={item?.id}>
                                                <td>
                                                    <p className="fw-bold mb-1">
                                                        {item?.id}
                                                    </p>
                                                </td>
                                                <td>
                                                    <div className="ms-3">
                                                        <p className="fw-bold mb-1">
                                                            {item?.name}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fw-normal mb-1">
                                                        {item?.autoMaker}
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="fw-normal mb-1">
                                                        {item?.type}
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="fw-normal mb-1">
                                                        {item?.licensePlates}
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="fw-normal mb-1">
                                                        {item?.price}.000
                                                    </p>
                                                </td>
                                                <td>
                                                    {dataModal.status ==
                                                    "Đã duyệt" ? (
                                                        <Button
                                                            color="link"
                                                            size="sm"
                                                            small={true}
                                                            className={cx(
                                                                "fw-normal",
                                                                "mb-1",
                                                                "btn"
                                                            )}
                                                        >
                                                            CHI TIẾT
                                                        </Button>
                                                    ) : (
                                                        <MDBBtn
                                                            color="link"
                                                            rounded
                                                            size="sm"
                                                            className={cx(
                                                                "fw-normal",
                                                                "mb-1",
                                                                "btn"
                                                            )}
                                                        >
                                                            Duyệt
                                                        </MDBBtn>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </MDBTableBody>
                            </MDBTable>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
}

export default ModalHandleSignMoto;
