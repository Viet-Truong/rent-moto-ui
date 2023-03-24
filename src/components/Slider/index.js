import classNames from "classnames/bind";
import styles from "./Slider.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button";
import Image from "../Image";

const cx = classNames.bind(styles);
function Slider({ props }) {
    return <div className={cx("slider")}></div>;
}

const SliderItem = (props) => (
    <div className={cx("slider-item", `${props.active ? "active" : ""}`)}>
        <div className={cx("slider-item__info")}>
            <div className={cx("slider-item__info__title")}>
                <span>{props.item.title}</span>
            </div>
            <div className={cx("slider-item__info__description")}>
                <span>{props.item.title}</span>
            </div>
            <div className={cx("slider-item__info__btn")}>
                <Link to={props.item.path}>
                    <Button primary>Xem chi tiết</Button>
                </Link>
            </div>
        </div>
        <div className={cx("slider-item__image")}>
            <div className={cx("shape-item")}></div>
            <Image src={""} alt={"image-item"} />
        </div>
    </div>
);

export default Slider;
