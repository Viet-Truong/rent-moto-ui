import classNames from "classnames/bind";
import Sidebar from "../components/Sidebar";
import styles from "./AdminLayout.module.scss";

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <div>
            <div className={cx("wrapper")}>
                <div className={cx("container")}>
                    <Sidebar />
                    <div className={cx("content")}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
