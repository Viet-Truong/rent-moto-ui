import {
    faGem,
    faGift,
    faHandHoldingHeart,
    faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const car = [
    {
        id: 1,
        name: "Winner X",
        avatar: "",
        full_name: "Honda Winner X",
        price: "1tr",
    },
    {
        id: 2,
        name: "Winner X",
        avatar: "",
        full_name: "Honda Winner X",
        price: "1tr",
    },
    {
        id: 3,
        name: "Winner X",
        avatar: "",
        full_name: "Honda Winner X",
        price: "1tr",
    },
];

export const policy = [
    {
        id: 1,
        name: "Ưu đãi",
        description: "Nhiều ưu đãi giảm giá",
        icon: <FontAwesomeIcon icon={faGift} />,
    },
    {
        id: 2,
        name: "Thanh toán",
        description: "Thanh toán khi nhận xe",
        icon: <FontAwesomeIcon icon={faMoneyCheckDollar} />,
    },
    {
        id: 3,
        name: "Khách hàng VIP",
        description: "Ưu đãi cho khách hàng VIP",
        icon: <FontAwesomeIcon icon={faGem} />,
    },
    {
        id: 4,
        name: "Hỗ trợ",
        description: "Hỗ trợ nhiệt tình, tận tâm",
        icon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
    },
];
