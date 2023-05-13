import classNames from "classnames/bind";
import Image from "../../../../components/Image";
import styles from "./MotoItem.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function CarItem({ data }) {
    return (
        <Link to={`/@${data.name}`} className={cx("wrapper")}>
            <Image src={data.avatar} alt={data.name} className={cx("avatar")} />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>{data.full_name}</span>
                </h4>
                <span className={cx("price")}>{data.price}</span>
            </div>
        </Link>
    );
}

export default CarItem;
