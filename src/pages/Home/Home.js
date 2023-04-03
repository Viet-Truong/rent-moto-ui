import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import "./Home.css";
import Slider from "~/components/Slider";
import { slider_data } from "~/data/slide";
import { policy } from "~/data/data";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const cx = classNames.bind(styles);
function Home() {
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
                    <h2 className={cx("date-picker__title")}>
                        Vui lòng chọn ngày bắt đầu và ngày kết thúc
                    </h2>
                    <RangePicker
                        className="RangePicker"
                        format="DD MMM yyyy"
                        // onChange={setFilter}
                        style={{ height: "3.5rem", width: "37rem" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
