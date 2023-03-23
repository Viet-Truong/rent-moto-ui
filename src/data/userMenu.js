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
        title: "View profile",
        type: "profile",
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: "History",
        to: "/history",
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: "Settings",
        to: "/settings",
    },
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: "Log out",
        type: "logout",
        separate: true,
    },
];
