import React, { useState, useRef } from "react";
import { MDBInput, MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";
import classNames from "classnames/bind";
import styles from "./User.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import { user } from "~/data/data";

const cx = classNames.bind(styles);
function User() {
    const [name, setName] = useState(user.name);
    const [gender, setGender] = useState(user.gender);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [dob, setDob] = useState(user.dob);
    const [cccd, setCCCD] = useState(user.cccd);
    const [address, setAddress] = useState(user.address);

    const [inputStates, setInputStates] = useState({
        name: true,
        gender: true,
        phoneNumber: true,
        dob: true,
        cccd: true,
        address: true,
    });

    const handleEditClick = (fieldName) => {
        setInputStates({ ...inputStates, [fieldName]: false });
    };

    const handleSaveClick = () => {
        // Lưu lại các thông tin chỉnh sửa

        // Đặt lại trạng thái chỉnh sửa của tất cả các trường
        setInputStates({
            name: true,
            gender: true,
            phoneNumber: true,
            dob: true,
            cccd: true,
            address: true,
        });
    };

    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("header")}>Thông tin cá nhân</h1>
            <div className={cx("wrapper-content")}>
                <MDBContainer className="overflow-hidden">
                    <MDBRow className="gy-5">
                        <MDBCol size="4">
                            <div className={cx("fields")}>
                                <label htmlFor="">Tên</label>
                                <div className={cx("input_field")}>
                                    <MDBInput
                                        className={cx("input")}
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        id="formControlDisabled"
                                        type="text"
                                        disabled={inputStates.name}
                                    />
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        className={cx("icon")}
                                        onClick={() => handleEditClick("name")}
                                    />
                                </div>
                            </div>
                            <div className={cx("fields")}>
                                <label htmlFor="">Giới tính</label>
                                <div className={cx("input_field")}>
                                    <MDBInput
                                        className={cx("input")}
                                        value={gender}
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                        id="formControlDisabled"
                                        type="text"
                                        disabled={inputStates.gender}
                                    />
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        className={cx("icon")}
                                        onClick={() =>
                                            handleEditClick("gender")
                                        }
                                    />
                                </div>
                            </div>
                            <div className={cx("fields")}>
                                <label htmlFor="">Số điện thoại</label>
                                <div className={cx("input_field")}>
                                    <MDBInput
                                        className={cx("input")}
                                        value={phoneNumber}
                                        onChange={(e) =>
                                            setPhoneNumber(e.target.value)
                                        }
                                        id="formControlDisabled"
                                        type="text"
                                        disabled={inputStates.phoneNumber}
                                    />
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        className={cx("icon")}
                                        onClick={() =>
                                            handleEditClick("phoneNumber")
                                        }
                                    />
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol size="4">
                            <div className={cx("fields")}>
                                <label htmlFor="">Ngày sinh</label>
                                <div className={cx("input_field")}>
                                    <MDBInput
                                        className={cx("input")}
                                        label="Disabled"
                                        id="formControlDisabled"
                                        type="text"
                                        disabled={inputStates.dob}
                                    />
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        className={cx("icon")}
                                        onClick={() => handleEditClick("dob")}
                                    />
                                </div>
                            </div>
                            <div className={cx("fields")}>
                                <label htmlFor="">Căn cước công dân</label>
                                <div className={cx("input_field")}>
                                    <MDBInput
                                        className={cx("input")}
                                        value={cccd}
                                        onChange={(e) =>
                                            setCCCD(e.target.value)
                                        }
                                        id="formControlDisabled"
                                        type="text"
                                        disabled={inputStates.cccd}
                                    />
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        className={cx("icon")}
                                        onClick={() => handleEditClick("cccd")}
                                    />
                                </div>
                            </div>
                            <div className={cx("fields")}>
                                <label htmlFor="">Địa chỉ</label>
                                <div className={cx("input_field")}>
                                    <MDBInput
                                        className={cx("input")}
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                        id="formControlDisabled"
                                        type="text"
                                        disabled={inputStates.address}
                                    />
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        className={cx("icon")}
                                        onClick={() =>
                                            handleEditClick("address")
                                        }
                                    />
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            <Button className="btn btn-primary" onClick={handleSaveClick}>
                Lưu
            </Button>
        </div>
    );
}

export default User;
