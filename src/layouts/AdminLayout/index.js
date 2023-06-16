import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Sidebar from '../components/Sidebar';
const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    const { auth } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth) {
            navigate('/login');
        }
    }, [auth]);
    return (
        <div>
            {auth ? (
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <Sidebar />
                        <div className={cx('content')}>{children}</div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default AdminLayout;
