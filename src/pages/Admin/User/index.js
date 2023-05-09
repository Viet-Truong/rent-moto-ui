import React from "react";
import { MDBInput, MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";
import classNames from "classnames/bind";
import styles from "./User.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import { user } from "~/data/data";

const cx = classNames.bind(styles);
function User() {
    console.log(user);
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
                                        label={user.name}
                                        id="formControlDisabled"
                                        type="text"
                                        disabled
                                    />
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        className={cx("icon")}
                                    />
                                </div>
                            </div>
                            <div className={cx("fields")}>
                                <label htmlFor="">Giới tính</label>
                                <div className={cx("input_field")}>
                                    <MDBInput
                                        className={cx("input")}
                                        label={user.gender}
                                        id="formControlDisabled"
                                        type="text"
                                        disabled
                                    />
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        className={cx("icon")}
                                    />
                                </div>
                            </div>
                            <div className={cx("fields")}>
                                <label htmlFor="">Số điện thoại</label>
                                <div className={cx("input_field")}>
                                    <MDBInput
                                        className={cx("input")}
                                        label={user.phoneNumber}
                                        id="formControlDisabled"
                                        type="text"
                                        disabled
                                    />
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        className={cx("icon")}
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
                                        disabled
                                    />
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        className={cx("icon")}
                                    />
                                </div>
                            </div>
                            <div className={cx("fields")}>
                                <label htmlFor="">Căn cước công dân</label>
                                <div className={cx("input_field")}>
                                    <MDBInput
                                        className={cx("input")}
                                        label={user.cccd}
                                        id="formControlDisabled"
                                        type="text"
                                        disabled
                                    />
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        className={cx("icon")}
                                    />
                                </div>
                            </div>
                            <div className={cx("fields")}>
                                <label htmlFor="">Địa chỉ</label>
                                <div className={cx("input_field")}>
                                    <MDBInput
                                        className={cx("input")}
                                        label={user.address}
                                        id="formControlDisabled"
                                        type="text"
                                        disabled
                                    />
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        className={cx("icon")}
                                    />
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            <Button className="btn btn-primary">Lưu</Button>
        </div>
    );
}

export default User;
