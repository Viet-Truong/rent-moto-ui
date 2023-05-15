import classNames from "classnames/bind";
import Button from "~/components/Button";
import Image from "~/components/Image";
import styles from "./History.module.scss";

const cx = classNames.bind(styles);
function History() {
    const purchaseData = [
        {
            id: 1,
            startDate: "2023-05-10",
            endDate: "2023-05-10",
            quantity: "3",
            status: "Chưa duyệt",
            price: "$10",
            image: "",
        },
        {
            id: 2,
            startDate: "2023-05-10",
            endDate: "2023-05-10",
            quantity: "3",
            status: "Chưa duyệt",
            price: "$10",
            image: "",
        },
        {
            id: 3,
            startDate: "2023-05-10",
            endDate: "2023-05-10",
            quantity: "3",
            status: "Đã duyệt",
            price: "$10",
            image: "",
        },
    ];
    return (
        <div className={cx("purchase-history")}>
            <h2>Lịch sử đăng kí thuê xe</h2>
            <div className={cx("purchase-items")}>
                {purchaseData.map((purchase) => (
                    <div key={purchase.id} className={cx("purchase-item")}>
                        <div className={cx("purchase-item__image")}>
                            <Image src={purchase.image} alt="Product" />
                        </div>
                        <div className={cx("purchase-item__details")}>
                            <div className={cx("purchase-item__date")}>
                                <p>Ngày bắt đầu: {purchase.startDate}</p>
                            </div>
                            <div className={cx("purchase-item__date")}>
                                <p>Ngày kết thúc: {purchase.endDate}</p>
                            </div>
                            <div className={cx("purchase-item__product")}>
                                <p>Số lượng xe : {purchase.quantity}</p>
                            </div>
                            <div className={cx("purchase-item__status")}>
                                <p>Trạng thái: {purchase.status}</p>
                            </div>
                            <div className={cx("purchase-item__price")}>
                                <p>Tổng tiền: {purchase.price}</p>
                            </div>
                        </div>
                        <div className={cx("purchase-footer")}>
                            {purchase.status == "Đã duyệt" ? (
                                ""
                            ) : (
                                <Button>HUỶ</Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default History;
