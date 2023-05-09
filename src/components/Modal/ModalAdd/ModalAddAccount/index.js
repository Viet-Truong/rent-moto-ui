import classNames from "classnames/bind";
import styles from "./ModalAddAccount.module.scss";
import React, { useState } from "react";
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

const cx = classNames.bind(styles);
function ModalAddAccount() {
    const [basicModal, setBasicModal] = useState(false);
    const [valueDropdown, setValueDropdown] = useState("");
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();

    const toggleShow = () => setBasicModal(!basicModal);

    return (
        <div className={cx("wrapper-modal")}>
            <MDBBtn onClick={toggleShow} className={cx("button_showModal")}>
                Thêm tài khoản
            </MDBBtn>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Thêm tài khoản</MDBModalTitle>
                            <MDBBtn
                                className="btn-close"
                                color="none"
                                onClick={toggleShow}
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
                                            onClick={() =>
                                                setValueDropdown("Nhân viên")
                                            }
                                        >
                                            Nhân viên
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() =>
                                                setValueDropdown("Khách hàng")
                                            }
                                        >
                                            Khách hàng
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                <div className={cx("value_dropdown")}>
                                    {valueDropdown}
                                </div>
                            </div>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={toggleShow}>
                                Close
                            </MDBBtn>
                            <MDBBtn>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
}

export default ModalAddAccount;
