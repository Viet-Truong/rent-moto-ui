import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";

export const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: "Cá nhân",
        to: "/profile",
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: "Lịch sử thuê xe",
        to: "/history",
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: "Cài đặt",
        to: "",
    },
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: "Đăng xuất",
        type: "logout",
        separate: true,
    },
];
