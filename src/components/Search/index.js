import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useState, useRef, useEffect, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import useDebounce from '~/hooks/useDebounce';
import { AppContext } from '~/Context/AppContext';
import * as adminServices from '~/api/adminServices';

const cx = classNames.bind(styles);
function Search() {
    const { filter, setFilter, setDataRentMoto } = useContext(AppContext);
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 500);
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    useEffect(() => {
        // handle input = ''
        if (!debouncedValue.trim()) {
            return;
        }
        // call API
        if (filter === 'DF') {
            const fetch = async () => {
                setLoading(true);
                const result = await adminServices.getAllOrder({
                    q: debouncedValue,
                });
                setDataRentMoto(result.data);
                setLoading(false);
            };
            fetch();
        } else if (filter === 'Accepted') {
            const fetch = async () => {
                setLoading(true);
                const result = await adminServices.getAllOrderAccepted({
                    q: debouncedValue,
                });
                setDataRentMoto(result.data);
                setLoading(false);
            };
            fetch();
        } else {
            const fetch = async () => {
                setLoading(true);
                const result = await adminServices.getAllOrderUnAccepted({
                    q: debouncedValue,
                });
                setDataRentMoto(result.data);
                setLoading(false);
            };
            fetch();
        }
    }, [debouncedValue]);

    return (
        <div>
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    placeholder='Tìm xe'
                    type='text'
                    spellCheck={false}
                    onChange={handleChange}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner}
                    />
                )}
                <button
                    className={cx('search-btn')}
                    onMouseDown={(e) => e.preventDefault()}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} on/>
                </button>
            </div>
        </div>
    );
}

export default Search;
