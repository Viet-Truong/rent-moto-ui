import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Login() {
    return (
        <MDBContainer fluid className="vh-100">
            <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol col="12">
                    <MDBCard
                        className="bg-dark text-white my-5 mx-auto"
                        style={{ borderRadius: "1rem", maxWidth: "400px" }}
                    >
                        <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                            <h2 className="fw-bold mb-2 text-uppercase text-white">
                                Đăng nhập
                            </h2>
                            <p
                                className="fw-bold mb-5 mt-2 fz-2rem"
                                style={{ color: "#ff3d13" }}
                            >
                                Welcome Back!
                            </p>

                            <MDBInput
                                wrapperClass="mb-5 mx-10 w-100 p-2"
                                labelClass="text-white"
                                label="Tài khoản"
                                id="formControlLg"
                                type="email"
                                size="lg"
                            />
                            <MDBInput
                                wrapperClass="mb-5 mx-10 w-100 p-2"
                                labelClass="text-white"
                                label="Mật khẩu"
                                id="formControlLg"
                                type="password"
                                size="lg"
                            />

                            <p className="small mb-3 pb-lg-2">
                                <a class="text-white-50" href="#!">
                                    Quên mật khẩu?
                                </a>
                            </p>
                            <MDBBtn
                                outline
                                className="mx-2 px-5 mb-5 fw-bold"
                                color="white"
                                size="lg"
                                style={{ color: "#ff3d13", fontSize: "16px" }}
                            >
                                Đăng nhập
                            </MDBBtn>

                            <div>
                                <p className="mb-0">
                                    Bạn chưa có tài khoản?
                                    <Link
                                        to="/register"
                                        class="fw-bold"
                                        style={{ color: "#ff3d13" }}
                                    >
                                        Đăng kí
                                    </Link>
                                </p>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Login;
