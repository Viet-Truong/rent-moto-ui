import {
    faGem,
    faGift,
    faHandHoldingHeart,
    faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AcceptMoto } from "~/pages/Admin/AcceptMoto";

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

export const account = [
    {
        id: 1,
        name: "Viết Trường",
        email: "viettruong0825@gmail.com",
        account: "viettruong",
        password: "123456abc",
        role: "Admin",
    },
    {
        id: 2,
        name: "Đắc Toàn",
        email: "viettruong0825@gmail.com",
        account: "dactoan",
        password: "123456abc",
        role: "Admin",
    },
    {
        id: 3,
        name: "Ngọc Trọng",
        email: "viettruong0825@gmail.com",
        account: "ngoctrong",
        password: "123456abc",
        role: "Admin",
    },
    {
        id: 4,
        name: "Hữu Tam",
        email: "viettruong0825@gmail.com",
        account: "huutam",
        password: "123456abc",
        role: "Admin",
    },
    {
        id: 5,
        name: "NV1",
        email: "viettruong0825@gmail.com",
        account: "nhanvien01",
        password: "123456abc",
        role: "Nhân viên",
    },
    {
        id: 6,
        name: "khach",
        email: "viettruong0825@gmail.com",
        account: "Nguyễn Văn A",
        password: "123456abc",
        role: "Khách hàng",
    },
];

export const moto = [
    {
        id: 1,
        name: "Honda winner X",
        autoMaker: "Honda",
        price: 130.0,
        type: "Xe côn tay",
        status: "Đang được thuê",
        licensePlates: "43F1-123.45",
        description: "Winner X",
    },
];

export const user = {
    id: 1,
    name: "Viết Trường",
    dob: "02-08-2002",
    gender: "Nam",
    cccd: "203830627",
    phoneNumber: "0789416451",
    address: "Đà nẵng",
};

export const acceptMoto = [
    {
        id: 1,
        name: "Viết Trường",
        startDate: "07-05-2023",
        endDate: "09-05-2023",
        status: "Đã duyệt",
        price: "420.000 VNĐ",
    },
    {
        id: 2,
        name: "Đắc Toàn",
        startDate: "04-05-2023",
        endDate: "11-05-2023",
        status: "Đã duyệt",
        price: "350.000 VNĐ",
    },
    {
        id: 3,
        name: "Ngọc Trọng",
        startDate: "09-05-2023",
        endDate: "15-05-2023",
        status: "Chưa duyệt",
        price: "280.000 VNĐ",
    },
    {
        id: 4,
        name: "Hữu Tam",
        startDate: "16-05-2023",
        endDate: "27-05-2023",
        status: "Chưa duyệt",
        price: "510.000 VNĐ",
    },
];

export const acceptReturnMoto = [
    {
        id: 1,
        name: "Viết Trường",
        startDate: "07-05-2023",
        endDate: "09-05-2023",
        status: "Đang thuê",
        price: "420.000 VNĐ",
    },
    {
        id: 2,
        name: "Đắc Toàn",
        startDate: "04-05-2023",
        endDate: "11-05-2023",
        status: "Đang thuê",
        price: "350.000 VNĐ",
    },
];
