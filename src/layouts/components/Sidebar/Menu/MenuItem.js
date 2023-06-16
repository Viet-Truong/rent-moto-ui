import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, activeIcon, disable }) {
    const handleClick = (e) => {
        if (disable) {
            e.preventDefault(); // Ngăn chặn xử lý sự kiện onClick
        }
    };
    return (
        <NavLink
            // properties end fix always active item home
            disabled={disable}
            onClick={handleClick}
            end
            className={({ isActive }) => cx('menu-item', { active: isActive })}
            to={to}
            children={({ isActive }) => {
                const iconCurrent = isActive ? activeIcon : icon;
                if (to === '') {
                    iconCurrent = icon;
                }
                return (
                    <>
                        {iconCurrent}
                        <span className={cx('title')}>{title}</span>
                    </>
                );
            }}
        />
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};
export default MenuItem;
