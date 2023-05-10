import ModalMoto from "~/components/Modal/ModalAdd/ModalMoto";
import classNames from "classnames/bind";
import styles from "./ManagerMoto.module.scss";
import {
    MDBBadge,
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink,
} from "mdb-react-ui-kit";
import { moto } from "~/data/data";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "~/Context/AppContext";

const cx = classNames.bind(styles);

const TYPE_MODAL = {
    add: "ADD",
    update: "UPDATE",
};

function ManagerMoto() {
    const [motoData, setMotoData] = useState(moto);
    const { setIsModalMotoVisible, setTypeModal, setData } =
        useContext(AppContext);

    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("header")}>Cập nhật thông tin xe</h1>
            <MDBBtn
                onClick={() => {
                    setIsModalMotoVisible(true);
                    setTypeModal(TYPE_MODAL.add);
                    setData(undefined);
                }}
                className={cx("button_showModal")}
            >
                Thêm xe
            </MDBBtn>
            <ModalMoto />
            <MDBTable align="middle" className={cx("table")}>
                <MDBTableHead>
                    <tr>
                        <th scope="col">ID xe</th>
                        <th scope="col">Tên xe</th>
                        <th scope="col">Hãng xe</th>
                        <th scope="col">Giá xe</th>
                        <th scope="col">Loại xe</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Biển số xe</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {motoData.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <p className="fw-bold mb-1">{item.id}</p>
                                </td>
                                <td>
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">
                                            {item.name}
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">
                                        {item.autoMaker}
                                    </p>
                                </td>
                                <td>
                                    <p>{item.price}</p>
                                </td>
                                <td>
                                    <p>{item.type}</p>
                                </td>
                                <td>
                                    {item.status == "Hoạt động" ? (
                                        <MDBBadge color="success" pill>
                                            {item.status}
                                        </MDBBadge>
                                    ) : (
                                        <MDBBadge color="warning" pill>
                                            {item.status}
                                        </MDBBadge>
                                    )}
                                </td>
                                <td>
                                    <p>{item.licensePlates}</p>
                                </td>
                                <td>
                                    <p>{item.description}</p>
                                </td>
                                <td>
                                    <MDBBtn
                                        color="link"
                                        rounded
                                        size="sm"
                                        onClick={() => {
                                            setIsModalMotoVisible(true);
                                            setTypeModal(TYPE_MODAL.update);
                                            setData(item);
                                        }}
                                    >
                                        Edit
                                    </MDBBtn>
                                    <MDBBtn color="link" rounded size="sm">
                                        Delete
                                    </MDBBtn>
                                </td>
                            </tr>
                        );
                    })}
                </MDBTableBody>
            </MDBTable>
            <nav aria-label="..." className={cx("page_navigation")}>
                <MDBPagination className="mb-0">
                    <MDBPaginationItem disabled>
                        <MDBPaginationLink
                            href="#"
                            tabIndex={-1}
                            aria-disabled="true"
                        >
                            Previous
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href="#">1</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem active aria-current="page">
                        <MDBPaginationLink href="#">
                            2 <span className="visually-hidden">(current)</span>
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href="#">3</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href="#">Next</MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            </nav>
        </div>
    );
}

export default ManagerMoto;
