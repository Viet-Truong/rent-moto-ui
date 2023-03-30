import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import "./Home.css";
import Slider from "~/components/Slider";
import { slider_data } from "~/data/slide";
import { policy } from "~/data/data";
import { DateRangePicker } from "rsuite";

const cx = classNames.bind(styles);
function Home() {
    const { combine, allowedMaxDays, beforeToday } = DateRangePicker;

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
                    <DateRangePicker
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            maxWidth: "500px",
                            marginTop: "50px",
                        }}
                        disabledDate={combine(
                            allowedMaxDays(31),
                            beforeToday()
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
