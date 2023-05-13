import classNames from "classnames/bind";
import styles from "./ModalAccount.module.scss";
import React, { useState, useEffect, useContext } from "react";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
} from "mdb-react-ui-kit";
import { AppContext } from "~/Context/AppContext";

const cx = classNames.bind(styles);
function ModalAccount() {
    const { isModalAccountVisible, data, typeModal, setIsModalAccountVisible } =
        useContext(AppContext);
    const [account, setAccount] = useState(data?.account ?? "");
    const [password, setPassword] = useState(data?.password ?? "");
    const [role, setRole] = useState(data?.role ?? "");

    useEffect(() => {
        setAccount(data?.account ?? "");
        setPassword(data?.password ?? "");
        setRole(data?.role ?? "");
    }, [data]);

    return (
        <div className={cx("wrapper-modal")}>
            <MDBModal show={isModalAccountVisible} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>
                                {typeModal == "ADD"
                                    ? "Thêm tài khoản"
                                    : "Sửa thông tin tài khoản"}
                            </MDBModalTitle>
                            <MDBBtn
                                className="btn-close"
                                color="none"
                                onClick={() => setIsModalAccountVisible(false)}
                            ></MDBBtn>
                        </MDBModalHeader>

                        <MDBModalBody>
                            <MDBInput
                                className={cx("input")}
                                label={"Tài khoản"}
                                value={account}
                                onChange={(e) => setAccount(e.target.value)}
                                type="text"
                            />

                            <MDBInput
                                className={cx("input")}
                                label={"Mật khẩu"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                            />
                            <div className={cx("wrapper-dropdown")}>
                                <MDBDropdown className={cx("dropdown")}>
                                    <MDBDropdownToggle>
                                        Vai trò
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => setRole("Nhân viên")}
                                        >
                                            Nhân viên
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() =>
                                                setRole("Khách hàng")
                                            }
                                        >
                                            Khách hàng
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                <div className={cx("value_dropdown")}>
                                    {role}
                                </div>
                            </div>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn
                                className={cx("button_save")}
                                color="secondary"
                                onClick={() => setIsModalAccountVisible(false)}
                            >
                                Huỷ
                            </MDBBtn>
                            <MDBBtn className={cx("button_save")}>Lưu</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
}

export default ModalAccount;
