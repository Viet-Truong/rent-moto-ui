import classNames from "classnames/bind";
import styles from "./MotoView.module.scss";
import { useState, useEffect } from "react";
import { DatePicker, Row, Col } from "antd";
import moment from "moment/moment";

import Button from "../Button";
import { useContext } from "react";
import { CartContext } from "~/Context/CartContext";

const { RangePicker } = DatePicker;

const cx = classNames.bind(styles);
function MotoView({ slug }) {
    const [product, setProduct] = useState({});
    const [startDate, setStartDate] = useState(moment());
    const [endDate, setEndDate] = useState(moment());
    const { addCartItem } = useContext(CartContext);

    useEffect(() => {
        // using slug to call API get Moto and setProduct = Moto
        setProduct({
            title: "Honda winner X",
            price: "130k / 1h",
            image01:
                "https://cdn.honda.com.vn/motorbike-versions/December2021/AjAslqMuYpko2d6wmuEs.png",
            image02:
                "https://cdn.honda.com.vn/motorbike-versions/November2022/v3mHZHIh1RLL4P8nndyd.png",
            hangxe: "Honda",
            color: "Black",
            slug: slug,
            type: "Xe côn tay",
            state: "Sẵn sàng",
        });
    }, [slug]);

    const [previewImg, setPreviewImg] = useState(product.image01);

    const disabledDate = (current) => {
        // Chỉ cho phép chọn các ngày bắt đầu từ ngày hiện tại trở đi
        return current && current < moment().startOf("day");
    };

    const handleRangePickerChange = (dates) => {
        const startDate = dates[0].format("DD-MM-YYYY");
        const endDate = dates[1].format("DD-MM-YYYY");
        console.log(startDate, endDate);
        setStartDate(startDate);
        setEndDate(endDate);
    };

    useEffect(() => {
        setPreviewImg(product.image01);
    }, [product]);

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
                                    onChange={handleRangePickerChange}
                                    disabledDate={disabledDate}
                                    format="DD MMM yyyy"
                                    // onChange={setFilter}
                                    style={{ height: "3.5rem", width: "37rem" }}
                                    placeholder={[
                                        "Ngày bắt đầu",
                                        "Ngày kết thúc",
                                    ]}
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className={cx("product__info__item")}>
                        <Button
                            primary
                            onClick={() =>
                                addCartItem({
                                    id: 1,
                                    image: product.image01,
                                    name: product.title,
                                    price: product.price,
                                    slug: product.slug,
                                    startDate: startDate,
                                    endDate: endDate,
                                })
                            }
                        >
                            Đăng kí thuê xe
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx("product-description")}>
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
