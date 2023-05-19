import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPen } from "@fortawesome/free-solid-svg-icons";
import Image from "~/components/Image";
import { AppContext } from "~/Context/AppContext";

const cx = classNames.bind(styles);
function Profile() {
    const [profile, setProfile] = useState({});
    const { user } = useContext(AppContext);
    console.log(user);
    useEffect(() => {}, [user]);
    return (
        <section
            style={{
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                width: "100vw",
                marginTop: "10vh",
            }}
            className={cx("wrapper")}
        >
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <Image
                                    src={user?.avatar || ""}
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: "150px" }}
                                    fluid
                                />
                                <div className="d-flex justify-content-center mb-2 mt-5">
                                    <label
                                        className={cx("label")}
                                        htmlFor="avatar"
                                    >
                                        <FontAwesomeIcon icon={faCamera} />
                                    </label>
                                    <input
                                        type="file"
                                        id="avatar"
                                        style={{ display: "none" }}
                                    />
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Họ và tên</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="8">
                                        <MDBCardText className="text-muted">
                                            {user?.hoTen}
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="1">
                                        <FontAwesomeIcon icon={faPen} />
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="8">
                                        <MDBCardText className="text-muted">
                                            {user?.email}
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="1">
                                        <FontAwesomeIcon icon={faPen} />
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Số điện thoại</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="8">
                                        <MDBCardText className="text-muted">
                                            {user?.sdt}
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="1">
                                        <FontAwesomeIcon icon={faPen} />
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>CCCD</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="8">
                                        <MDBCardText className="text-muted">
                                            {user?.cccd}
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="1">
                                        <FontAwesomeIcon icon={faPen} />
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Địa chỉ</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="8">
                                        <MDBCardText className="text-muted">
                                            {user?.diaChi}
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="1">
                                        <FontAwesomeIcon icon={faPen} />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default Profile;
