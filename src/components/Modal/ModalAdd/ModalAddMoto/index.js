import classNames from "classnames/bind";
import styles from "./ModalAddMoto.module.scss";
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

function ModalAddMoto() {
    const [basicModal, setBasicModal] = useState(false);
    const [nameMoto, setNameMoto] = useState();
    const [autoMaker, setAutoMaker] = useState();
    const [price, setPrice] = useState();
    const [type, setType] = useState();
    const [licensePlates, setLicensePlates] = useState();

    const toggleShow = () => setBasicModal(!basicModal);
    return (
        <div className={cx("wrapper-modal")}>
            <MDBBtn onClick={toggleShow} className={cx("button_showModal")}>
                Thêm xe
            </MDBBtn>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Thêm xe</MDBModalTitle>
                            <MDBBtn
                                className="btn-close"
                                color="none"
                                onClick={toggleShow}
                            ></MDBBtn>
                        </MDBModalHeader>

                        <MDBModalBody>
                            <MDBInput
                                className={cx("input")}
                                label={"Tên xe"}
                                value={nameMoto}
                                onChange={(e) => setNameMoto(e.target.value)}
                                type="text"
                            />

                            <MDBInput
                                className={cx("input")}
                                label={"Hãng xe"}
                                value={autoMaker}
                                onChange={(e) => setAutoMaker(e.target.value)}
                                type="text"
                            />

                            <MDBInput
                                className={cx("input")}
                                label={"giá xe"}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="text"
                            />

                            <MDBInput
                                className={cx("input")}
                                label={"Biển số xe"}
                                value={licensePlates}
                                onChange={(e) =>
                                    setLicensePlates(e.target.value)
                                }
                                type="text"
                            />
                            <div className={cx("wrapper-dropdown")}>
                                <MDBDropdown className={cx("dropdown")}>
                                    <MDBDropdownToggle>
                                        Loại xe
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => {
                                                setType("Xe côn tay");
                                            }}
                                        >
                                            Xe côn tay
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => {
                                                setType("Xe ga");
                                            }}
                                        >
                                            Xe ga
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => {
                                                setType("Xe số");
                                            }}
                                        >
                                            Xe số
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                <div className={cx("value_dropdown")}>
                                    {type}
                                </div>
                            </div>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={toggleShow}>
                                Huỷ
                            </MDBBtn>
                            <MDBBtn>Lưu</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
}

export default ModalAddMoto;
