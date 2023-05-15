import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import TippyHeadless from "@tippyjs/react/headless";
import { useState, useRef, useEffect } from "react";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import CarItem from "./MotoItem/index";
import useDebounce from "~/hooks/useDebounce";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 500);

    const handleClear = () => {
        setSearchValue("");
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(" ")) {
            setSearchValue(searchValue);
        }
    };

    useEffect(() => {
        // handle input = ''
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        // call API
        // const fetch = async () => {
        //     setLoading(true);
        //     const result = await searchService.search(debouncedValue);
        //     setSearchResult(result);
        //     setLoading(false);
        // };
        // fetch();
        setLoading(true);
        setSearchResult();
        setLoading(false);
    }, [debouncedValue]);

    return (
        <div>
            <TippyHeadless
                interactive
                visible={showResults && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx("search-label")}>Car</h4>
                            {searchResult.map((result) => (
                                <CarItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx("search")}>
                    <input
                        value={searchValue}
                        placeholder="Tìm xe"
                        type="text"
                        spellCheck={false}
                        onChange={handleChange}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx("clear")} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            className={cx("loading")}
                            icon={faSpinner}
                        />
                    )}
                    <button
                        className={cx("search-btn")}
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
