import classNames from "classnames/bind";
import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import styles from "./Sidebar.module.scss";
import image from "~/assets/image";
import Image from "~/components/Image";
import { Link } from "react-router-dom";
import {
    faUsers,
    faUser,
    faMotorcycle,
    faRotateLeft,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <div className={cx("wrapper-fix")}>
                <div className={cx("header")}>
                    <div className={cx("logo")}>
                        <Link to={config.routes.home} className={"logo-link"}>
                            <Image src={image.logo} alt="Website logo" />
                        </Link>
                    </div>
                    <Image
                        className={cx("user-avatar")}
                        src={""}
                        alt={"avatar"}
                    />
                </div>
                <Menu>
                    <MenuItem
                        title={"Quản lí tài khoản"}
                        to={config.routes.admin + "/managerAccount"}
                        icon={<FontAwesomeIcon icon={faUsers} />}
                        activeIcon={<FontAwesomeIcon icon={faUsers} />}
                    />
                    <MenuItem
                        title={"Cập nhật thông tin cá nhân"}
                        to={config.routes.admin + "/updateProfile"}
                        icon={<FontAwesomeIcon icon={faUser} />}
                        activeIcon={<FontAwesomeIcon icon={faUser} />}
                    />
                    <MenuItem
                        title={"Cập nhật thông tin xe"}
                        to={config.routes.admin + "/updateInfoMoto"}
                        icon={<FontAwesomeIcon icon={faMotorcycle} />}
                        activeIcon={<FontAwesomeIcon icon={faMotorcycle} />}
                    />
                    <MenuItem
                        title={"Xác nhận đăng kí thuê xe"}
                        to={config.routes.admin + "/acceptRentMoto"}
                        icon={<FontAwesomeIcon icon={faCheckCircle} />}
                        activeIcon={<FontAwesomeIcon icon={faCheckCircle} />}
                    />
                    <MenuItem
                        title={"Xác nhận trả xe"}
                        to={config.routes.admin + "/acceptReturnMoto"}
                        icon={<FontAwesomeIcon icon={faRotateLeft} />}
                        activeIcon={<FontAwesomeIcon icon={faRotateLeft} />}
                    />
                </Menu>
            </div>
        </aside>
    );
}

export default Sidebar;
