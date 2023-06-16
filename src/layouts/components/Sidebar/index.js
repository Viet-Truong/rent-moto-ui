import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import config from '~/config';
import Menu, { MenuItem } from './Menu';
import image from '~/assets/image';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { authLogout } from '~/redux/authAction';

import {
    faUsers,
    faUser,
    faMotorcycle,
    faRotateLeft,
    faCheckCircle,
    faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Sidebar() {
    const { auth } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logout = async (e) => {
        e.preventDefault();
        dispatch(authLogout());
    };

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('wrapper-fix')}>
                <div className={cx('header')}>
                    <div className={cx('logo')}>
                        <Link to={config.routes.home} className={'logo-link'}>
                            <Image src={image.logo} alt='Website logo' />
                        </Link>
                    </div>
                    <Image
                        className={cx('user-avatar')}
                        src={`http://localhost:5000/${auth?.avatar}` || ''}
                        alt={'avatar'}
                    />
                </div>
                <Menu>
                    <li className={cx('wrapper-divider')}>
                        <div className={cx('divider')}>
                            <span>Admin</span>
                        </div>
                    </li>
                    <MenuItem
                        disable={auth?.phanQuyen !== 'Admin'}
                        title={'Quản lí tài khoản'}
                        to={config.routes.admin + '/managerAccount'}
                        icon={<FontAwesomeIcon icon={faUsers} />}
                        activeIcon={<FontAwesomeIcon icon={faUsers} />}
                    />
                    <MenuItem
                        disable={auth?.phanQuyen !== 'Admin'}
                        title={'Xe'}
                        to={config.routes.admin + '/updateInfoMoto'}
                        icon={<FontAwesomeIcon icon={faMotorcycle} />}
                        activeIcon={<FontAwesomeIcon icon={faMotorcycle} />}
                    />
                    <li className={cx('wrapper-divider')}>
                        <div className={cx('divider')}>
                            <span>Cá nhân</span>
                        </div>
                    </li>
                    <MenuItem
                        title={'Cá nhân'}
                        to={config.routes.admin + '/updateProfile'}
                        icon={<FontAwesomeIcon icon={faUser} />}
                        activeIcon={<FontAwesomeIcon icon={faUser} />}
                    />
                    <li className={cx('wrapper-divider')}>
                        <div className={cx('divider')}>
                            <span>Nhân viên</span>
                        </div>
                    </li>
                    <MenuItem
                        disable={auth?.phanQuyen !== 'Nhân viên'}
                        title={'Duyệt đăng kí thuê xe'}
                        to={config.routes.admin + '/acceptRentMoto'}
                        icon={<FontAwesomeIcon icon={faCheckCircle} />}
                        activeIcon={<FontAwesomeIcon icon={faCheckCircle} />}
                    />
                    <MenuItem
                        disable={auth?.phanQuyen !== 'Nhân viên'}
                        title={'Xác nhận trả xe'}
                        to={config.routes.admin + '/acceptReturnMoto'}
                        icon={<FontAwesomeIcon icon={faRotateLeft} />}
                        activeIcon={<FontAwesomeIcon icon={faRotateLeft} />}
                    />
                </Menu>
                <div className={cx('footer')}>
                    <Button
                        onClick={logout}
                        leftIcon={<FontAwesomeIcon icon={faRightToBracket} />}
                    >
                        Đăng xuất
                    </Button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
