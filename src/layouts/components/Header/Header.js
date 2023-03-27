import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import config from "~/config";
import image from "~/assets/image";
import Button from "~/components/Button";
import Image from "~/components/Image";
import Menu from "~/components/Popper/Menu";
import { userMenu } from "~/data/userMenu";
import Search from "../Search";

const cx = classNames.bind(styles);
function Header() {
    let auth = true;
    return (
        <div className={cx("wrapper")}>
            <div className={cx("wrapper-header")}>
                <div className={cx("logo")}>
                    <Link to={config.routes.home} className={"logo-link"}>
                        <Image src={image.logo} alt="Website logo" />
                    </Link>
                </div>

                <div className={cx("wrapper-menu")}>
                    <ul className={cx("menu")}>
                        <li>
                            <Button to={""}>Trang Chủ</Button>
                        </li>
                        <li>
                            <Button to={""}>Xe</Button>
                        </li>
                        <li>
                            <Button to={""}>Giới Thiệu</Button>
                        </li>
                        <li>
                            <Button to={""}>Liên Hệ</Button>
                        </li>
                        <li>
                            <Button to={""}></Button>
                        </li>
                    </ul>
                </div>

                <Search />

                <div className={cx("actions")}>
                    {auth ? (
                        <Menu items={userMenu}>
                            <Image
                                className={cx("user-avatar")}
                                src={""}
                                alt={"avatar"}
                            />
                        </Menu>
                    ) : (
                        <Button primary>Đăng nhập</Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
