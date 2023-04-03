import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Slider from "~/components/Slider";
import { slider_data } from "~/data/slide";
import { policy } from "~/data/data";
import { DatePicker, Row, Col } from "antd";
import { useState } from "react";
import Car from "~/components/Car";
const { RangePicker } = DatePicker;

const cx = classNames.bind(styles);
function Home() {
    const [cars, setCars] = useState([]);
    // const setFilter = (values) => {
    //     if (values) {
    //         if (values.length > 1) {
    //             // var selectedFrom = moment(values[0], "MMM DD yyyy HH:mm");
    //             // var selectedTo = moment(values[1], "MMM DD yyyy HH:mm");
    //             setFrom(moment(values[0]).format("MMM DD yyyy HH"));
    //             setTo(moment(values[1]).format("MMM DD yyyy HH"));
    //             var selectedFrom = moment(new Date(values[0]._d)).format(
    //                 "MMM DD yyyy HH:mm"
    //             );
    //             var selectedTo = moment(new Date(values[1]._d)).format(
    //                 "MMM DD yyyy HH:mm"
    //             );
    //         }
    //     }
    // };

    return (
        <div className={cx("home")}>
            <Slider
                data={slider_data}
                timeOut={5000}
                auto={true}
                control={true}
            />
            <div className={cx("wrapper-policy")}>
                {policy.map((item) => (
                    <div className={cx("policy__card")} key={item.id}>
                        <div className={cx("policy__icon")}>{item.icon}</div>
                        <div className={cx("policy__info")}>
                            <h4 className={cx("policy__title")}>{item.name}</h4>
                            <p className={cx("policy__description")}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={cx("main-content")}>
                <div className={cx("wrapper-date-picker")}>
                    <Row className="main-row" justify="center">
                        <h2 className={cx("date-picker__title")}>
                            Vui lòng chọn ngày bắt đầu và ngày kết thúc
                        </h2>
                        <Col lg={20} sm={24} className={cx("col")}>
                            <RangePicker
                                className={cx("RangePicker", "range-picker")}
                                format="DD MMM yyyy"
                                // onChange={setFilter}
                                style={{ height: "3.5rem", width: "37rem" }}
                            />
                        </Col>
                    </Row>
                </div>
                <div className={cx("wrapper-car")}>
                    {cars.map((car, index) => (
                        <Car />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
