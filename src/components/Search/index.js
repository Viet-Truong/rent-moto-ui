import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useState, useRef, useEffect } from 'react';
import useDebounce from '~/hooks/useDebounce';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 500);
    const handleClear = () => {
        setSearchValue('');
        setSearchResults([]);
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
            setSearchResults([]);
            return;
        }
        // call API
        // const fetch = async () => {
        //     setLoading(true);
        //     const result = await searchService.search(debouncedValue);
        //     setSearchResults(result);
        //     setLoading(false);
        // };
        // fetch();
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
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    );
}

export default Search;
