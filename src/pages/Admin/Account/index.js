import ModalAddAccount from "~/components/Modal/ModalAdd/ModalAddAccount";
import classNames from "classnames/bind";
import styles from "./Account.module.scss";
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
import { account } from "~/data/data";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);
function Account() {
    const [accountData, setAccountData] = useState(account);
    const [page, setPage] = useState(1);
    useEffect(() => {
        setAccountData(accountData);
    }, [accountData, page]);
    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("header")}>Quản lí tài khoản</h1>
            <ModalAddAccount />
            <MDBTable align="middle" className={cx("table")}>
                <MDBTableHead>
                    <tr>
                        <th scope="col">Tên</th>
                        <th scope="col">Tài khoản</th>
                        <th scope="col">Mật khẩu</th>
                        <th scope="col">Role</th>
                        <th scope="col">Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {accountData.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            style={{
                                                width: "45px",
                                                height: "45px",
                                            }}
                                            className="rounded-circle"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">
                                                {item.name}
                                            </p>
                                            <p className="text-muted mb-0">
                                                {item.email}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">
                                        {item.account}
                                    </p>
                                </td>
                                <td>
                                    <p>{item.password}</p>
                                </td>
                                <td>
                                    {item.role == "Admin" ? (
                                        <MDBBadge color="success" pill>
                                            {item.role}
                                        </MDBBadge>
                                    ) : (
                                        <MDBBadge color="warning" pill>
                                            {item.role}
                                        </MDBBadge>
                                    )}
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

export default Account;
