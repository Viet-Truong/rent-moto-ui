import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import TippyHeadless from '@tippyjs/react/headless';
import { useState, useRef, useEffect } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MotoItem from './MotoItem/index';
import useDebounce from '~/hooks/useDebounce';
import * as searchService from '~/api/searchServices';

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
    const [showResults, setShowResults] = useState(false);
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

    const handleHideResults = () => {
        setShowResults(false);
    };

    useEffect(() => {
        // handle input = ''
        if (!debouncedValue.trim()) {
            setSearchResults([]);
            return;
        }
        // call API
        const fetch = async () => {
            setLoading(true);
            const result = await searchService.search(debouncedValue);
            setSearchResults(result);
            setLoading(false);
        };
        fetch();
    }, [debouncedValue]);

    return (
        <div>
            <TippyHeadless
                interactive
                visible={showResults && searchResults?.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex='-1'
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-label')}>Danh sách xe</h4>
                            {searchResults?.map((result, index) => (
                                <MotoItem key={index} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResults}
            >
                <div className={cx('search')}>
                    <input
                        value={searchValue}
                        placeholder='Tìm xe'
                        type='text'
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResults(true)}
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
            </TippyHeadless>
        </div>
    );
}

export default Search;
