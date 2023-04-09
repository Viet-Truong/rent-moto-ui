import classNames from "classnames/bind";
import MotoView from "~/components/MotoVIew";
import styles from "./MotoDetail.module.scss";

const cx = classNames.bind(styles);
function CarDetail(props) {
    return (
        <div className={cx("wrapper")}>
            <MotoView />
        </div>
    );
}

export default CarDetail;
