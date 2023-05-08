import classNames from "classnames/bind";
import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <div className={cx("wrapper-fix")}>
                <Menu>
                    <MenuItem
                        title={"Quản lí tài khoản"}
                        to={config.routes.admin + "/managerAccount"}
                        icon={""}
                        activeIcon={""}
                    />
                    <MenuItem
                        title={"Cập nhật thông tin cá nhân"}
                        to={config.routes.admin + "/updateProfile"}
                        icon={""}
                        activeIcon={""}
                    />
                    <MenuItem
                        title={"Cập nhật thông tin xe"}
                        to={config.routes.admin + "/updateInfoMoto"}
                        icon={""}
                        activeIcon={""}
                    />
                    <MenuItem
                        title={"Xác nhận đăng kí thuê xe"}
                        to={config.routes.admin + "/acceptRentMoto"}
                        icon={""}
                        activeIcon={""}
                    />
                    <MenuItem
                        title={"Xác nhận trả xe"}
                        to={config.routes.admin + "/acceptReturnMoto"}
                        icon={""}
                        activeIcon={""}
                    />
                </Menu>
            </div>
        </aside>
    );
}

export default Sidebar;
