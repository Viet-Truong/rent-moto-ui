import classNames from "classnames/bind";
import styles from "./ModalAddError.module.scss";
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
function ModalAddError() {
    const { isModalAddErrorVisible, setIsModalAddErrorVisible } =
        useContext(AppContext);
    const [note, setNote] = useState();
    const [priceNote, setPriceNote] = useState();
    const [error, setError] = useState();
    return (
        <div className={cx("wrapper-modal")}>
            <MDBModal show={isModalAddErrorVisible} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Thêm lỗi phạt</MDBModalTitle>
                            <MDBBtn
                                className="btn-close"
                                color="none"
                                onClick={() => setIsModalAddErrorVisible(false)}
                            ></MDBBtn>
                        </MDBModalHeader>

                        <MDBModalBody>
                            <MDBInput
                                className={cx("input")}
                                label={"Ghi chú nội dung lỗi"}
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                type="text"
                            />

                            <MDBInput
                                className={cx("input")}
                                label={"Tiền phạt"}
                                value={priceNote}
                                onChange={(e) => setPriceNote(e.target.value)}
                                type="text"
                            />
                            <div className={cx("wrapper-dropdown")}>
                                <MDBDropdown className={cx("dropdown")}>
                                    <MDBDropdownToggle>
                                        Nội dung lỗi
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => setError("Mất xe")}
                                        >
                                            Mất xe
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() =>
                                                setError("Trả trễ hẹn")
                                            }
                                        >
                                            Trả trễ hẹn
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() =>
                                                setError("Trầy xước xe")
                                            }
                                        >
                                            Trầy xước xe
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() =>
                                                setError("Hư hỏng phụ tùng")
                                            }
                                        >
                                            Hư hỏng phụ tùng
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => setError("Khác")}
                                        >
                                            Khác
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                <div className={cx("value_dropdown")}>
                                    {error}
                                </div>
                            </div>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn
                                className={cx("button_save")}
                                color="secondary"
                                onClick={() => setIsModalAddErrorVisible(false)}
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

export default ModalAddError;
