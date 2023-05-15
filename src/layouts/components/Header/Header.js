import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import config from "~/config";
import image from "~/assets/image";
import Button from "~/components/Button";
import Image from "~/components/Image";
import Menu from "~/components/Popper/Menu";
import { userMenu } from "~/data/userMenu";
import Search from "../Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "~/Context/CartContext";
import { AppContext } from "~/Context/AppContext";

const cx = classNames.bind(styles);
function Header() {
    const { user, setUser } = useContext(AppContext);
    const { setIsOpen, cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "logout":
                // dispatch(authLogout());
                setUser(false);
                navigate(config.routes.home);
                break;
            default:
                break;
        }
    };

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
                            <Button to={config.routes.home} className>
                                Trang Chủ
                            </Button>
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
                    </ul>
                </div>

                <Search />

                <div className={cx("actions")}>
                    {user ? (
                        <>
                            <Button className={cx("cart-btn")}>
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                    className={cx("cart")}
                                    onClick={() => setIsOpen(true)}
                                />
                                <div className={cx("quantity")}>
                                    {cartItems.length}
                                </div>
                            </Button>
                            <Menu items={userMenu} onChange={handleMenuChange}>
                                <Image
                                    className={cx("user-avatar")}
                                    src={""}
                                    alt={"avatar"}
                                />
                            </Menu>
                        </>
                    ) : (
                        <Button primary to={config.routes.login}>
                            Đăng nhập
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
