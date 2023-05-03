import classNames from "classnames/bind";
import styles from "./MotoView.module.scss";
import { useState, useEffect } from "react";
import { DatePicker, Row, Col } from "antd";

import Button from "../Button";
import { PropTypes } from "prop-types";
const { RangePicker } = DatePicker;

const cx = classNames.bind(styles);
function MotoView(props) {
    let product = props.product;

    if (product === undefined)
        product = {
            title: "Honda winner X",
            price: "130k / 1h",
            image01:
                "https://cdn.honda.com.vn/motorbike-versions/December2021/AjAslqMuYpko2d6wmuEs.png",
            image02:
                "https://cdn.honda.com.vn/motorbike-versions/November2022/v3mHZHIh1RLL4P8nndyd.png",
            hangxe: "Honda",
            color: "Black",
            slug: "honda-winner-x",
            type: "Xe số côn",
            state: "Sẵn sàng",
        };

    const [previewImg, setPreviewImg] = useState(product.image01);

    const [descriptionExpand, setDescriptionExpand] = useState(false);

    const [color, setColor] = useState(undefined);

    const [size, setSize] = useState(undefined);

    const [quantity, setQuantity] = useState(1);

    const updateQuantity = (type) => {
        if (type === "plus") {
            setQuantity(quantity + 1);
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }
    };

    useEffect(() => {
        setPreviewImg(product.image01);
        setQuantity(1);
        setColor(undefined);
        setSize(undefined);
    }, [product]);

    const check = () => {
        if (color === undefined) {
            alert("Vui lòng chọn màu sắc!");
            return false;
        }

        if (size === undefined) {
            alert("Vui lòng chọn kích cỡ!");
            return false;
        }

        return true;
    };

    const addToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity,
            };
            // if (dispatch(addItem(newItem))) {
            //     alert("Success");
            // } else {
            //     alert("Fail");
            // }
        }
    };

    const goToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity,
            };
            // if (dispatch(addItem(newItem))) {
            //     dispatch(remove());
            //     props.history.push("/cart");
            // } else {
            //     alert("Fail");
            // }
        }
    };

    return (
        <div>
            <div className={cx("product")}>
                <div className={cx("product__images")}>
                    <div className={cx("product__images__list")}>
                        <div
                            className={cx("product__images__list__item")}
                            onClick={() => setPreviewImg(product.image01)}
                        >
                            <img src={product.image01} alt="" />
                        </div>
                        <div
                            className={cx("product__images__list__item")}
                            onClick={() => setPreviewImg(product.image02)}
                        >
                            <img src={product.image02} alt="" />
                        </div>
                    </div>
                    <div className={cx("product__images__main")}>
                        <img src={previewImg} alt="" />
                    </div>
                </div>
                <div className={cx("product__info")}>
                    <h1 className={cx("product__info__title")}>
                        {product.title}
                    </h1>

                    <div className={cx("product__info__item")}>
                        <div className={cx("product__info__item__title")}>
                            Loại xe: {product.type}
                        </div>
                    </div>
                    <div className={cx("product__info__item")}>
                        <div className={cx("product__info__item__title")}>
                            Hãng xe: {product.hangxe}
                        </div>
                    </div>
                    <div className={cx("product__info__item")}>
                        <div className={cx("product__info__item__title")}>
                            Trạng thái: {product.state}
                        </div>
                    </div>
                    <div className={cx("product__info__item")}>
                        <span className={cx("product__info__item__price")}>
                            Giá: {product.price}
                        </span>
                    </div>
                    <div className={cx("wrapper-date-picker")}>
                        <Row className="main-row">
                            <Col lg={20} sm={24} className={cx("col")}>
                                <RangePicker
                                    className={cx(
                                        "RangePicker",
                                        "range-picker"
                                    )}
                                    format="DD MMM yyyy"
                                    // onChange={setFilter}
                                    style={{ height: "3.5rem", width: "37rem" }}
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className={cx("product__info__item")}>
                        <Button primary onClick={() => goToCart()}>
                            Đăng kí thuê xe
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className={cx(
                    `product-description${descriptionExpand ? "expand" : ""}`
                )}
            >
                <div className={cx("product-description__title")}>
                    Thủ tục khi thuê xe
                </div>
                <div className={cx("product-description__content")}>
                    <ul>
                        <li>
                            Cần 1 trong các loại giấysau: Chứng minh nhân dân,
                            Hộ chiếu, Passport, Hộ khẩu hoặc giấy tờ tuỳ thân có
                            hình khác.
                        </li>
                        <li>Bằng lái xe bắt buộc</li>
                        <li>Không cần đặt cọc</li>
                        <li>Thanh toán khi trả xe</li>
                    </ul>
                    <div className={cx("product-description__description")}>
                        <p>
                            Có giao nhận xe tận nơi miễn phí tại sân bay, bến
                            xe, bến tàu và các quận huyện nội thành Đà Nẵng.
                            Thời gian thuê được tính 1 ngày là 24 tiếng, quá
                            thời gian 6 tiếng sẽ tính thêm 1 ngày(được trể 1
                            tiếng). Khi thuê xe sẽ làm hợp đồng có 2 bản , mỗi
                            bên giữ 1 bản có ký tên đóng dấu công ty. Thời gian
                            giao nhận xe: từ 7h00 - 19h30 hàng ngày, tất cả các
                            ngày lễ tết vv…
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MotoView;
