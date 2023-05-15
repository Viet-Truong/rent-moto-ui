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
                <MDBCard className="p-3" style={{ height: "100vh" }}>
                    <FontAwesomeIcon
                        icon={faClose}
                        className={cx("icon_close")}
                        onClick={() => setIsOpen(false)}
                    />

                    <hr />
                    <div
                        className={cx("wrapper-cartItem")}
                        onClick={() => setIsOpen(true)}
                    >
                        {cartItems.map((cartItem) => (
                            <div className={cx("item")}>
                                <div className={cx("header-item")}>
                                    <RangePicker
                                        key={cartItem.id}
                                        className={cx(
                                            "RangePicker",
                                            "range-picker"
                                        )}
                                        disabledDate={disabledDate}
                                        defaultValue={[
                                            moment(
                                                cartItem.date.startDate,
                                                "DD-MM-YYYY"
                                            ),
                                            moment(
                                                cartItem.date.endDate,
                                                "DD-MM-YYYY"
                                            ),
                                        ]}
                                        format="DD MMM yyyy"
                                        style={{
                                            height: "3.5rem",
                                            width: "37rem",
                                        }}
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
                                    <input
                                        type={"checkbox"}
                                        className={cx("form-control-checkbox")}
                                    />
                                </div>
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
                                                            {item.price}.000
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
                            </div>
                        ))}
                    </div>

                    <MDBCard className="bg-primary text-white rounded-3 mt-auto">
                        <MDBCardBody>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <MDBTypography tag="h5" className="mb-0">
                                    Đăng kí
                                </MDBTypography>
                            </div>

                            <p className="small">Tuỳ chọn thanh toán</p>
                            <a
                                href="#!"
                                type="submit"
                                className={cx("text-white")}
                            >
                                <MDBIcon
                                    fas
                                    icon="money-bill-wave-alt fa-2x me-2"
                                />
                            </a>
                            <a
                                href="#!"
                                type="submit"
                                className={cx("text-white", "disable")}
                            >
                                <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                            </a>
                            <a
                                href="#!"
                                type="submit"
                                className={cx("text-white", "disable")}
                            >
                                <MDBIcon fab icon="cc-visa fa-2x me-2" />
                            </a>
                            <a
                                href="#!"
                                type="submit"
                                className={cx("text-white", "disable")}
                            >
                                <MDBIcon fab icon="cc-amex fa-2x me-2" />
                            </a>
                            <a
                                href="#!"
                                type="submit"
                                className={cx("text-white", "disable")}
                            >
                                <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                            </a>

                            <hr />

                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Tiền</p>
                                <p className="mb-2">479.000 VNĐ</p>
                            </div>

                            <div className="d-flex justify-content-between">
                                <p className="mb-2">VAT</p>
                                <p className="mb-2">47.900 VNĐ</p>
                            </div>

                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Tổng tiền</p>
                                <p className="mb-2">526.900 VNĐ</p>
                            </div>

                            <MDBBtn color="info" block size="lg">
                                <div className="d-flex justify-content-between">
                                    <span>526.900 VNĐ</span>
                                    <span>Đăng kí thuê xe</span>
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
