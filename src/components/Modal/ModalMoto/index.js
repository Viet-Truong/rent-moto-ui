import classNames from "classnames/bind";
import styles from "./ModalMoto.module.scss";
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

function ModalMoto() {
    const { isModalMotoVisible, data, typeModal, setIsModalMotoVisible } =
        useContext(AppContext);
    const [nameMoto, setNameMoto] = useState(data?.name ?? "");
    const [autoMaker, setAutoMaker] = useState(data?.autoMaker ?? "");
    const [price, setPrice] = useState(data?.price ?? "");
    const [type, setType] = useState(data?.type ?? "");
    const [licensePlates, setLicensePlates] = useState(
        data?.licensePlates ?? ""
    );

    useEffect(() => {
        setNameMoto(data?.name ?? "");
        setAutoMaker(data?.autoMaker ?? "");
        setPrice(data?.price ?? "");
        setType(data?.type ?? "");
        setLicensePlates(data?.licensePlates ?? "");
    }, [data]);

    return (
        <div className={cx("wrapper-modal")}>
            <MDBModal show={isModalMotoVisible} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>
                                {typeModal == "ADD"
                                    ? "Thêm xe"
                                    : "Sửa thông tin xe"}
                            </MDBModalTitle>
                            <MDBBtn
                                className="btn-close"
                                color="none"
                                onClick={() => setIsModalMotoVisible(false)}
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
                            <div className={cx("wrapper_image")}>
                                <input type="file" />
                            </div>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn
                                className={cx("button_save")}
                                color="secondary"
                                onClick={() => setIsModalMotoVisible(false)}
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

export default ModalMoto;
