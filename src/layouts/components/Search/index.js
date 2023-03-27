import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import TippyHeadless from "@tippyjs/react/headless";
import { useState, useRef } from "react";

const cx = classNames.bind(styles);
function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);

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

    return (
        <div>
            <TippyHeadless interactive>
                <div className={cx("search")}>
                    <input
                        value={searchValue}
                        placeholder="Tìm xe"
                        type="text"
                        spellCheck={false}
                        onChange={handleChange}
                    />
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
