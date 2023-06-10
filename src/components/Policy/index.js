import classNames from 'classnames/bind';
import styles from './Policy.module.scss';

const cx = classNames.bind(styles);
function Policy({ icon, name, value }) {
    return (
        <div className={cx('policy__card')}>
            <div className={cx('policy__icon')}>{icon}</div>
            <div className={cx('policy__info')}>
                <h4 className={cx('policy__title')}>{name}</h4>
                <h2 className={cx('policy__description')}>{value}</h2>
            </div>
        </div>
    );
}

export default Policy;
