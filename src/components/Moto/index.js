import classNames from 'classnames/bind';
import styles from './Moto.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Moto(props) {
    return (
        <div>
            <Link to={`/moto/${props.slug}`}>
                <div className={cx('container', 'page-wrapper')}>
                    <div className={cx('page-inner')}>
                        <div className={cx('row_123123')}>
                            <div className={cx('el-wrapper')}>
                                <div className={cx('box-up')}>
                                    <img
                                        className={cx('img')}
                                        src={`http://localhost:5000/${props.img[0]}`}
                                        alt=''
                                    />
                                    <div className={cx('img-info')}>
                                        <div className={cx('info-inner')}>
                                            <span className={cx('p-name')}>
                                                {props.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('box-down')}>
                                    <div className={cx('h-bg')}>
                                        <div className={cx('h-bg-inner')}></div>
                                    </div>

                                    <a className={cx('cart')} href=''>
                                        <span className={cx('price')}>
                                            {props.price}.000 / 1 ngày
                                        </span>
                                        <span className={cx('add-to-cart')}>
                                            <span className={cx('txt')}>
                                                Thuê xe
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Moto;
