import classNames from "classnames/bind";
import Image from "../../../../components/Image";
import styles from "./MotoItem.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function CarItem({ data }) {
    return (
        <Link to={`/moto/${data.slug}`} className={cx("wrapper")}>
            <Image
                src={data?.avatar || ""}
                alt={data.tenXe}
                className={cx("avatar")}
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>{data.tenXe}</span>
                </h4>
                <span className={cx("price")}>
                    {data.giaThue}.000 VNĐ / 1 ngày
                </span>
            </div>
        </Link>
    );
}

export default CarItem;
