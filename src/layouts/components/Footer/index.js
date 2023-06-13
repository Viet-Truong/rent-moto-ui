import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const footerAboutLinks = [
    {
        display: 'Giới thiệu',
        path: '/about',
    },
    {
        display: 'Liên hệ',
        path: '/about',
    },
    {
        display: 'Tuyển dụng',
        path: '/about',
    },
    {
        display: 'Tin tức',
        path: '/about',
    },
    {
        display: 'Hệ thống cửa hàng',
        path: '/about',
    },
];

const footerCustomerLinks = [
    {
        display: 'Chính sách đổi trả',
        path: '/about',
    },
    {
        display: 'Chính sách bảo hành',
        path: '/about',
    },
    {
        display: 'Chính sách hoàn tiền',
        path: '/about',
    },
];

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('container')}>
                <div>
                    <div className={cx('footer__title')}>Tổng đài hỗ trợ</div>
                    <div className={cx('footer__content')}>
                        <p>
                            Liên hệ đặt hàng
                            <strong className={cx('value')}> 0123456789</strong>
                        </p>
                        <p>
                            Thắc mắc đơn hàng{' '}
                            <strong className={cx('value')}> 0123456789</strong>
                        </p>
                        <p>
                            Góp ý, khiếu nại{' '}
                            <strong className={cx('value')}> 0123456789</strong>
                        </p>
                    </div>
                </div>
                <div>
                    <div className={cx('footer__title')}>Về Chúng tôi</div>
                    <div className={cx('footer__content')}>
                        {footerAboutLinks.map((item, index) => (
                            <p key={index}>
                                <Link to={item.path} className={cx('item')}>
                                    {item.display}
                                </Link>
                            </p>
                        ))}
                    </div>
                </div>
                <div>
                    <div className={cx('footer__title')}>
                        Chăm sóc khách hàng
                    </div>
                    <div className={cx('footer__content')}>
                        {footerCustomerLinks.map((item, index) => (
                            <p key={index}>
                                <Link to={item.path} className={cx('item')}>
                                    {item.display}
                                </Link>
                            </p>
                        ))}
                    </div>
                </div>
                <div className={cx('footer__about')}>
                    <p>
                        MOTOCYCLE{' '}
                        <span dangerouslySetInnerHTML={{ __html: '&copy;' }} />
                    </p>
                    <p>
                        Hướng đến mục tiêu mang lại trải nghiệm dịch vụ thuê xe
                        một cách đơn giản nhất
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
