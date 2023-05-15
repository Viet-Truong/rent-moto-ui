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

const cx = classNames.bind(styles);
function ModalHandleSignMoto() {
    const { isModalAcceptVisible, data, typeModal, setIsModalAcceptVisible } =
        useContext(AppContext);
    // const [id, setId] = useState(data?.id ?? "");
    // const [name, setName] = useState(data?.name ?? "");
    // const [startDate, setStartDate] = useState(data?.startDate ?? "");
    // const [endDate, setEndDate] = useState(data?.endDate ?? "");
    // const [status, setStatus] = useState(data?.status ?? "");
    const [acceptMoto, setAcceptMoto] = useState([data] ?? []);
    console.log([data]);

    useEffect(() => {
        // setId(data?.id ?? "");
        // setName(data?.name ?? "");
        // setStartDate(data?.startDate ?? "");
        // setEndDate(data?.endDate ?? "");
        // setStatus(data?.status ?? "");
        setAcceptMoto([data] ?? []);
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
                                    {moto?.map((item) => {
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
                                                <td className="fw-normal mb-1">
                                                    <p>{item?.price}.000</p>
                                                </td>
                                                <td>
                                                    <MDBBtn
                                                        color="link"
                                                        rounded
                                                        size="sm"
                                                    >
                                                        Duyệt
                                                    </MDBBtn>
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
