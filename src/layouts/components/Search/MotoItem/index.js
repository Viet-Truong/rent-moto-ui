import classNames from 'classnames/bind';
import styles from './MotoItem.module.scss';
import { Link } from 'react-router-dom';

import Image from '../../../../components/Image';
const cx = classNames.bind(styles);
function CarItem({ data }) {
    return (
        <Link to={`/moto/${data.slug}`} className={cx('wrapper')}>
            <Image
                src={`http://localhost:5000/${data?.hinhAnh[0]}` || ''}
                alt={data.tenXe}
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.tenXe}</span>
                </h4>
                <span className={cx('price')}>
                    {data.giaThue}.000 VNĐ / 1 ngày
                </span>
            </div>
        </Link>
    );
}

export default CarItem;
