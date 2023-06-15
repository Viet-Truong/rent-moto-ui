import {
    faGem,
    faGift,
    faHandHoldingHeart,
    faMoneyCheckDollar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const policy = [
    {
        id: 1,
        name: 'Ưu đãi',
        description: 'Nhiều ưu đãi giảm giá',
        icon: <FontAwesomeIcon icon={faGift} />,
    },
    {
        id: 2,
        name: 'Thanh toán',
        description: 'Thanh toán khi nhận xe',
        icon: <FontAwesomeIcon icon={faMoneyCheckDollar} />,
    },
    {
        id: 3,
        name: 'Khách hàng VIP',
        description: 'Ưu đãi cho khách hàng VIP',
        icon: <FontAwesomeIcon icon={faGem} />,
    },
    {
        id: 4,
        name: 'Hỗ trợ',
        description: 'Hỗ trợ nhiệt tình, tận tâm',
        icon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
    },
];

export const account = [
    {
        id: 1,
        name: 'Viết Trường',
        email: 'viettruong0825@gmail.com',
        account: 'viettruong',
        password: '123456abc',
        role: 'Admin',
    },
    {
        id: 2,
        name: 'Đắc Toàn',
        email: 'viettruong0825@gmail.com',
        account: 'dactoan',
        password: '123456abc',
        role: 'Admin',
    },
    {
        id: 3,
        name: 'Ngọc Trọng',
        email: 'viettruong0825@gmail.com',
        account: 'ngoctrong',
        password: '123456abc',
        role: 'Admin',
    },
    {
        id: 4,
        name: 'Hữu Tam',
        email: 'viettruong0825@gmail.com',
        account: 'huutam',
        password: '123456abc',
        role: 'Admin',
    },
    {
        id: 5,
        name: 'NV1',
        email: 'viettruong0825@gmail.com',
        account: 'nhanvien01',
        password: '123456abc',
        role: 'Nhân viên',
    },
    {
        id: 6,
        name: 'khach',
        email: 'viettruong0825@gmail.com',
        account: 'Nguyễn Văn A',
        password: '123456abc',
        role: 'Khách hàng',
    },
];

export const moto = [
    {
        id: 1,
        name: 'Honda winner X',
        autoMaker: 'Honda',
        price: 130.0,
        type: 'Xe côn tay',
        status: 'Sẵn sàng',
        licensePlates: '43F1-123.45',
        description: 'Winner X',
        slug: 'honda-winner-x',
        image: [
            {
                id: 1,
                url: 'https://cdn.honda.com.vn/motorbike-versions/December2021/AjAslqMuYpko2d6wmuEs.png',
            },
            {
                id: 2,
                url: 'https://cdn.honda.com.vn/motorbike-versions/November2022/v3mHZHIh1RLL4P8nndyd.png',
            },
        ],
    },
    {
        id: 2,
        name: 'Super Cub C125',
        autoMaker: 'Honda',
        price: 110.0,
        type: 'Xe số',
        status: 'Sẵn sàng',
        licensePlates: '43F1-145.12',
        description: 'Super Cub C125',
        slug: 'Super-Cub-C125',
        image: [
            {
                id: 1,
                url: 'https://cdn.honda.com.vn/motorbike-strong-points/October2021/WwL6LIRJq466Z2Z5irlr.png',
            },
            {
                id: 2,
                url: 'https://cdn.honda.com.vn/motorbike-versions/October2021/rekvNMjwCvz3tiYHy27g.png',
            },
        ],
    },
    {
        id: 3,
        name: 'SH350i',
        autoMaker: 'Honda',
        price: 180.0,
        type: 'Xe ga',
        status: 'Sẵn sàng',
        licensePlates: '43F1-345.45',
        description: 'SH350i',
        slug: 'SH-350i',
        image: [
            {
                id: 1,
                url: 'https://cdn.honda.com.vn/motorbike-versions/December2022/VlhEoBOm76qFSuONryD1.png',
            },
            {
                id: 2,
                url: 'https://cdn.honda.com.vn/motorbike-versions/December2022/pxNbshmGP0Oz6VXFSZrb.png',
            },
        ],
    },
    {
        id: 4,
        name: 'Honda Vision',
        autoMaker: 'Honda',
        price: 165.0,
        type: 'Xe ga',
        status: 'Sẵn sàng',
        licensePlates: '43F1-876.45',
        description: 'Honda Vision',
        slug: 'Honda-Vision',
        image: [
            {
                id: 1,
                url: 'https://cdn.honda.com.vn/motorbike-versions/November2022/NZBGpkdoYhzAXSph7Pev.jpg',
            },
            {
                id: 2,
                url: 'https://cdn.honda.com.vn/motorbike-versions/November2022/igqvib4jtaVxAEcQ2y9k.jpg',
            },
        ],
    },
    {
        id: 5,
        name: 'Honda Air Blade',
        autoMaker: 'Honda',
        price: 170.0,
        type: 'Xe ga',
        status: 'Sẵn sàng',
        licensePlates: '43F1-123.45',
        description: 'Honda Air Blade',
        slug: 'Honda-Air-Blade',
        image: [
            {
                id: 1,
                url: 'https://cdn.honda.com.vn/motorbike-versions/May2022/UDvt2b8oUaEjVwt3fY1q.png',
            },
            {
                id: 2,
                url: 'https://cdn.honda.com.vn/motorbike-versions/May2022/bckho9q1kDOnzCApjNpq.png',
            },
        ],
    },
];

export const user = {
    id: 1,
    name: 'Viết Trường',
    dob: '02-08-2002',
    gender: 'Nam',
    cccd: '203830627',
    phoneNumber: '0789416451',
    address: 'Đà nẵng',
};

export const acceptMoto = [
    {
        id: 1,
        name: 'Viết Trường',
        startDate: '07-05-2023',
        endDate: '09-05-2023',
        status: 'Đã duyệt',
        price: '420.000 VNĐ',
        idMoto: [1, 2, 3],
    },
    {
        id: 2,
        name: 'Đắc Toàn',
        startDate: '04-05-2023',
        endDate: '11-05-2023',
        status: 'Đã duyệt',
        price: '350.000 VNĐ',
        idMoto: [1, 3, 4],
    },
    {
        id: 3,
        name: 'Ngọc Trọng',
        startDate: '09-05-2023',
        endDate: '15-05-2023',
        status: 'Chưa duyệt',
        price: '280.000 VNĐ',
        idMoto: [2, 3, 5],
    },
    {
        id: 4,
        name: 'Hữu Tam',
        startDate: '16-05-2023',
        endDate: '27-05-2023',
        status: 'Chưa duyệt',
        price: '510.000 VNĐ',
        idMoto: [1, 3, 5],
    },
];

export const acceptReturnMoto = [
    {
        id: 1,
        name: 'Viết Trường',
        startDate: '07-05-2023',
        endDate: '09-05-2023',
        status: 'Đang thuê',
        ChiTiet: [
            {
                id: 1,
                name: 'Honda winner X',
                autoMaker: 'Honda',
                price: 130.0,
                type: 'Xe côn tay',
                status: 'Sẵn sàng',
                licensePlates: '43F1-123.45',
                description: 'Winner X',
                slug: 'honda-winner-x',
                image: [
                    {
                        id: 1,
                        url: 'https://cdn.honda.com.vn/motorbike-versions/December2021/AjAslqMuYpko2d6wmuEs.png',
                    },
                    {
                        id: 2,
                        url: 'https://cdn.honda.com.vn/motorbike-versions/November2022/v3mHZHIh1RLL4P8nndyd.png',
                    },
                ],
            },
            {
                id: 2,
                name: 'Super Cub C125',
                autoMaker: 'Honda',
                price: 110.0,
                type: 'Xe số',
                status: 'Sẵn sàng',
                licensePlates: '43F1-145.12',
                description: 'Super Cub C125',
                slug: 'Super-Cub-C125',
                image: [
                    {
                        id: 1,
                        url: 'https://cdn.honda.com.vn/motorbike-strong-points/October2021/WwL6LIRJq466Z2Z5irlr.png',
                    },
                    {
                        id: 2,
                        url: 'https://cdn.honda.com.vn/motorbike-versions/October2021/rekvNMjwCvz3tiYHy27g.png',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'Đắc Toàn',
        startDate: '04-05-2023',
        endDate: '11-05-2023',
        status: 'Đang thuê',
        ChiTiet: [
            {
                id: 1,
                name: 'Honda winner X',
                autoMaker: 'Honda',
                price: 130.0,
                type: 'Xe côn tay',
                status: 'Sẵn sàng',
                licensePlates: '43F1-123.45',
                description: 'Winner X',
                slug: 'honda-winner-x',
                image: [
                    {
                        id: 1,
                        url: 'https://cdn.honda.com.vn/motorbike-versions/December2021/AjAslqMuYpko2d6wmuEs.png',
                    },
                    {
                        id: 2,
                        url: 'https://cdn.honda.com.vn/motorbike-versions/November2022/v3mHZHIh1RLL4P8nndyd.png',
                    },
                ],
            },
            {
                id: 2,
                name: 'Super Cub C125',
                autoMaker: 'Honda',
                price: 110.0,
                type: 'Xe số',
                status: 'Sẵn sàng',
                licensePlates: '43F1-145.12',
                description: 'Super Cub C125',
                slug: 'Super-Cub-C125',
                image: [
                    {
                        id: 1,
                        url: 'https://cdn.honda.com.vn/motorbike-strong-points/October2021/WwL6LIRJq466Z2Z5irlr.png',
                    },
                    {
                        id: 2,
                        url: 'https://cdn.honda.com.vn/motorbike-versions/October2021/rekvNMjwCvz3tiYHy27g.png',
                    },
                ],
            },
        ],
    },
];
