import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRadio,
} from "mdb-react-ui-kit";

function Register() {
    return (
        <MDBContainer fluid className="vh-100 w-100">
            <MDBRow className="justify-content-center align-items-center m-5">
                <MDBCard>
                    <MDBCardBody className="px-4">
                        <h3
                            className="d-flex justify-content-center fw-bold mb-4 pb-2 pb-md-0 mb-md-5"
                            style={{ color: "#ff3d13" }}
                        >
                            Đăng kí
                        </h3>

                        <MDBRow>
                            <MDBCol md="6">
                                <MDBInput
                                    wrapperClass="mb-4 p-2"
                                    label="Nhập tên"
                                    size="lg"
                                    id="form1"
                                    type="text"
                                />
                            </MDBCol>

                            <MDBCol md="6">
                                <MDBInput
                                    wrapperClass="mb-4 p-2"
                                    label="DOB"
                                    size="lg"
                                    id="form2"
                                    type="text"
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBInput
                                wrapperClass="mb-4 p-2"
                                label="Tài khoản"
                                size="lg"
                                id="form3"
                                type="text"
                            />
                        </MDBRow>

                        <MDBRow>
                            <MDBInput
                                wrapperClass="mb-4 p-2"
                                label="Mật khẩu"
                                size="lg"
                                id="form3"
                                type="text"
                            />
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md="6">
                                <MDBInput
                                    wrapperClass="mb-4 p-2"
                                    label="CCCD"
                                    size="lg"
                                    id="form4"
                                    type="email"
                                />
                            </MDBCol>

                            <MDBCol md="6">
                                <MDBInput
                                    wrapperClass="mb-4 p-2"
                                    label="Số điện thoại"
                                    size="lg"
                                    id="form5"
                                    type="rel"
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md="6">
                                <MDBInput
                                    wrapperClass="mb-4 p-2"
                                    label="Email"
                                    size="lg"
                                    id="form4"
                                    type="email"
                                />
                            </MDBCol>

                            <MDBCol md="6">
                                <MDBCol md="6" className="mb-4">
                                    <h6 className="fw-bold">Gender: </h6>
                                    <MDBRadio
                                        name="inlineRadio"
                                        id="inlineRadio1"
                                        value="option1"
                                        label="Female"
                                        inline
                                    />
                                    <MDBRadio
                                        name="inlineRadio"
                                        id="inlineRadio2"
                                        value="option2"
                                        label="Male"
                                        inline
                                    />
                                    <MDBRadio
                                        name="inlineRadio"
                                        id="inlineRadio3"
                                        value="option3"
                                        label="Other"
                                        inline
                                    />
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>

                        <MDBBtn
                            outline
                            className="mx-2 px-5 mb-5 fw-bold"
                            color="white"
                            size="lg"
                            style={{ color: "#ff3d13", fontSize: "16px" }}
                        >
                            Đăng kí
                        </MDBBtn>

                        <div>
                            <p className="mb-0">
                                Have an account?{" "}
                                <a
                                    href="#!"
                                    class="fw-bold"
                                    style={{ color: "#ff3d13" }}
                                >
                                    Login
                                </a>
                            </p>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        </MDBContainer>
    );
}

export default Register;
