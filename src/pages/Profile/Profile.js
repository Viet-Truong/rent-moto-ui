import React from "react";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPen } from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/image";

const cx = classNames.bind(styles);
function Profile() {
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
                                <MDBCardImage
                                    src={images.noImage}
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
                                            Bùi Viết Trường
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
                                            viettruong0825@gmail.com
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
                                            0789416451
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
                                            123 456 789 123
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
                                            Liên Chiểu, Đà Nẵng
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
