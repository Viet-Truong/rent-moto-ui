import classNames from "classnames/bind";
import styles from "./AcceptMoto.module.scss";
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
import { acceptMoto } from "~/data/data";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);

function AcceptMoto() {
    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("header")}>Duyệt đăng kí thuê xe</h1>
            <MDBTable align="middle" className={cx("table")}>
                <MDBTableHead>
                    <tr>
                        <th scope="col">Mã đơn thuê</th>
                        <th scope="col">Tên khách hàng</th>
                        <th scope="col">Ngày bắt đầu</th>
                        <th scope="col">Ngày kết thúc</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Giá thuê</th>
                        <th scope="col">Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {acceptMoto.map((item) => {
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
                                        {item.startDate}
                                    </p>
                                </td>
                                <td>
                                    <p>{item.endDate}</p>
                                </td>
                                <td>
                                    {item.status == "Đã duyệt" ? (
                                        <MDBBadge color="success" pill>
                                            {item.status}
                                        </MDBBadge>
                                    ) : (
                                        <MDBBadge color="danger" pill>
                                            {item.status}
                                        </MDBBadge>
                                    )}
                                </td>
                                <td>
                                    <p>{item.price}</p>
                                </td>
                                <td>
                                    <MDBBtn color="link" rounded size="sm">
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

export default AcceptMoto;
