import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './History.module.scss';

import Button from '~/components/Button';
import { useState, useEffect } from 'react';
import * as adminServices from '~/api/adminServices';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);
function History() {
    const [history, setHistory] = useState([]);
    const { auth } = useSelector((state) => state.auth);
    useEffect(() => {
        const fetchData = async () => {
            const result = await adminServices.getOrderByID(auth.maTaiKhoan);
            setHistory(result.data);
        };
        fetchData();
    }, []);

    const handleCancelRent = () => {};

    return (
        <div className={cx('purchase-history')}>
            <h2>Lịch sử đăng kí thuê xe</h2>
            <div className={cx('purchase-items')}>
                {history?.map((purchase) => (
                    <div key={purchase.id} className={cx('purchase-item')}>
                        <div className={cx('purchase-item__image')}>
                            {/* <Image src={purchase.image} alt='Product' /> */}
                        </div>
                        <div className={cx('purchase-item__details')}>
                            <div className={cx('purchase-item__date')}>
                                <p>Ngày bắt đầu: {purchase.ngayBD}</p>
                            </div>
                            <div className={cx('purchase-item__date')}>
                                <p>Ngày kết thúc: {purchase.ngayKT}</p>
                            </div>
                            <div className={cx('purchase-item__product')}>
                                {/* <p>Số lượng xe : {purchase.quantity}</p> */}
                            </div>
                            <div className={cx('purchase-item__status')}>
                                <p>Trạng thái: {purchase.trangThai}</p>
                            </div>
                            <div className={cx('purchase-item__price')}>
                                {/* <p>Tổng tiền: {purchase.price}</p> */}
                            </div>
                        </div>
                        <div className={cx('purchase-footer')}>
                            {purchase.trangThai == 'Đã duyệt' ? (
                                ''
                            ) : (
                                <Button onClick={handleCancelRent}>HUỶ</Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default History;
