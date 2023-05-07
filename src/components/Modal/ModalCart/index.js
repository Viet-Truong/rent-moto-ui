import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBTypography,
} from "mdb-react-ui-kit";
import classNames from "classnames/bind";
import styles from "./ModalCart.module.scss";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "~/Context/CartContext";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function ModalCart() {
    const { isOpen, setIsOpen, cartItems } = useContext(CartContext);
    const toogleClose = isOpen ? "" : "close";

    return (
        <section className={cx("wrapper", `${toogleClose}`)}>
            <div className={cx("wrapper_modal")}>
                <MDBCard
                    className="p-3"
                    style={{ height: "100vh" }}
                    onClick={() => setIsOpen(false)}
                >
                    <FontAwesomeIcon
                        icon={faClose}
                        className={cx("icon_close")}
                    />

                    <hr />
                    <div className={cx("items")}>
                        {cartItems.map((cartItem, index) => (
                            <MDBCard className="mb-3" key={index}>
                                <MDBCardBody>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div>
                                                <MDBCardImage
                                                    src={cartItem.image}
                                                    fluid
                                                    className="rounded-3"
                                                    style={{
                                                        width: "65px",
                                                    }}
                                                    alt="Shopping item"
                                                />
                                            </div>
                                            <div className="ms-3">
                                                <MDBTypography tag="h5">
                                                    {cartItem.name}
                                                </MDBTypography>
                                                <p className="small mb-0">
                                                    {cartItem.type}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <div
                                                style={{
                                                    width: "80px",
                                                    marginLeft: "2rem",
                                                }}
                                            >
                                                <MDBTypography
                                                    tag="h5"
                                                    className="mb-0"
                                                >
                                                    {cartItem.price}
                                                </MDBTypography>
                                            </div>
                                            <a
                                                href="#!"
                                                style={{
                                                    color: "#cecece",
                                                }}
                                            >
                                                <MDBIcon fas icon="trash-alt" />
                                            </a>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        ))}
                    </div>

                    <MDBCard className="bg-primary text-white rounded-3 mt-auto">
                        <MDBCardBody>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <MDBTypography tag="h5" className="mb-0">
                                    Thanh toán
                                </MDBTypography>
                            </div>

                            <p className="small">Tuỳ chọn thanh toán</p>
                            <a href="#!" type="submit" className="text-white">
                                <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                                <MDBIcon fab icon="cc-visa fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                                <MDBIcon fab icon="cc-amex fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                                <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                            </a>

                            <hr />

                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Tiền</p>
                                <p className="mb-2">$4798.00</p>
                            </div>

                            <div className="d-flex justify-content-between">
                                <p className="mb-2">VAT</p>
                                <p className="mb-2">$20.00</p>
                            </div>

                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Tổng tiền</p>
                                <p className="mb-2">$4818.00</p>
                            </div>

                            <MDBBtn color="info" block size="lg">
                                <div className="d-flex justify-content-between">
                                    <span>$4818.00</span>
                                    <span>Thanh toán </span>
                                </div>
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCard>
            </div>
        </section>
    );
}

export default ModalCart;
