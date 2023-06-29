import classNames from 'classnames/bind';
import styles from './Toast.module.scss';
import { useEffect, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faClose,
    faExclamation,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

import { AppContext } from '~/context/AppContext';

const cx = classNames.bind(styles);
const icons = {
    success: <FontAwesomeIcon icon={faCheck} />,
    warning: <FontAwesomeIcon icon={faExclamation} />,
    error: <FontAwesomeIcon icon={faXmark} />,
};
function Toast({ type, title, message }) {
    // const [openToast, setOpenToast] = useState(() => Boolean(open));
    const { isToastVisible, setIsToastVisible } = useContext(AppContext);
    const isClose = isToastVisible.open ? '' : 'close';

    useEffect(() => {
        if (isToastVisible.open) {
            const timer = setTimeout(() => {
                setIsToastVisible({
                    open: false,
                });
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isToastVisible.open]);

    return (
        <div className={cx('toast-wrapper', `${isClose}`)}>
            <div className={cx('toast', `toast--${type}`)}>
                <div class={cx('toast__icon')}>
                    {type === 'success' ? icons.success : icons.error}
                </div>
                <div class={cx('toast__body')}>
                    <h3 class={cx('toast__title')}>{title}</h3>
                    <p class={cx('toast__msg')}>{message}</p>
                </div>
                <div class={cx('toast__close')}>
                    <FontAwesomeIcon
                        icon={faClose}
                        onClick={() =>
                            setIsToastVisible({
                                open: false,
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Toast;
