import React, { useState, useEffect, useContext } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
} from "mdb-react-ui-kit";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "~/Context/AppContext";
import * as authServices from "~/api/authServices";

const cx = classNames.bind(styles);
function Register() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState({
        status: false,
        text: "",
    });
    const { user, setUser } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(-1);
        }
    }, [user]);

    const checkPassword = () => {
        return confirmPassword === password;
    };

    const submit = async (username, password) => {
        if (checkPassword()) {
            const result = await authServices.register({ username, password });
            if (result.status === "success") {
                localStorage.setItem("user", JSON.stringify(result.data));
                console.log(result);
                setUser(result);
            } else {
                console.log(result);
                setError({
                    status: true,
                    text: result.mess,
                });
            }
        } else {
            setError({
                status: true,
                text: "Mật khẩu không trùng khớp",
            });
        }
    };
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
                                Đăng kí
                            </h2>
                            <p
                                className="fw-bold mb-5 mt-2 fz-2rem"
                                style={{ color: "#ff3d13" }}
                            >
                                Welcome!
                            </p>

                            <MDBInput
                                wrapperClass="mb-5 mx-10 w-100 p-2"
                                labelClass="text-white"
                                label="Tài khoản"
                                type="email"
                                className={cx("input")}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                size="lg"
                            />
                            <MDBInput
                                wrapperClass="mb-5 mx-10 w-100 p-2"
                                labelClass="text-white"
                                label="Mật khẩu"
                                type="password"
                                className={cx("input")}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                size="lg"
                            />
                            <MDBInput
                                wrapperClass="mb-5 mx-10 w-100 p-2"
                                labelClass="text-white"
                                label="Xác nhận mật khẩu"
                                type="password"
                                className={cx("input")}
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                size="lg"
                            />
                            {error.status && (
                                <span className={cx("error")}>
                                    {error.text}
                                </span>
                            )}
                            <MDBBtn
                                outline
                                className="mx-2 px-5 mb-5 fw-bold"
                                color="white"
                                size="lg"
                                style={{ color: "#ff3d13", fontSize: "16px" }}
                                onClick={() => submit(username, password)}
                            >
                                Đăng kí
                            </MDBBtn>

                            <div>
                                <p className="mb-0">
                                    Bạn đã có tài khoản?
                                    <Link
                                        to="/login"
                                        class="fw-bold"
                                        style={{ color: "#ff3d13" }}
                                    >
                                        Đăng nhập
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

export default Register;
