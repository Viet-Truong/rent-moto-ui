import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';

import Sidebar from '../components/Sidebar';
const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
