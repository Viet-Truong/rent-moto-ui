import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header/Header";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
