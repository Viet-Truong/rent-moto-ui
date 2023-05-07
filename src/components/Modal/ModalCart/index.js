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
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import moment from "moment/moment";

import { CartContext } from "~/Context/CartContext";

const { RangePicker } = DatePicker;
const cx = classNames.bind(styles);
function ModalCart() {
    const { isOpen, setIsOpen, cartItems } = useContext(CartContext);
    const [dateRanges, setDateRanges] = useState({});
    const toogleClose = isOpen ? "" : "close";

    const handleDateChange = (cartItemId, dateRange) => {
        setDateRanges({
            ...dateRanges,
            [cartItemId]: dateRange,
        });
    };

    const disabledDate = (current) => {
        // Chỉ cho phép chọn các ngày bắt đầu từ ngày hiện tại trở đi
        return current && current < moment().startOf("day");
    };

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
                        onClick={() => setIsOpen(true)}
                    />

                    <hr />
                    <div className={cx("items")}>
                        {cartItems.map((cartItem) => (
                            <>
                                <RangePicker
                                    key={cartItem.id}
                                    className={cx(
                                        "RangePicker",
                                        "range-picker"
                                    )}
                                    disabledDate={disabledDate}
                                    format="DD MMM yyyy"
                                    style={{ height: "3.5rem", width: "37rem" }}
                                    placeholder={[
                                        "Ngày bắt đầu",
                                        "Ngày kết thúc",
                                    ]}
                                    onChange={(dates) =>
                                        handleDateChange(cartItem.id, {
                                            startDate: dates[0],
                                            endDate: dates[1],
                                        })
                                    }
                                />
                                {cartItem.data_moto.map((item, index) => (
                                    <MDBCard className="mb-3" key={index}>
                                        <MDBCardBody>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex flex-row align-items-center">
                                                    <div>
                                                        <MDBCardImage
                                                            src={item.image}
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
                                                            {item.name}
                                                        </MDBTypography>
                                                        <p className="small mb-0">
                                                            {item.type}
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
                                                            {item.price}
                                                        </MDBTypography>
                                                    </div>
                                                    <a
                                                        href="#!"
                                                        style={{
                                                            color: "#cecece",
                                                        }}
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon="trash-alt"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                ))}
                            </>
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
