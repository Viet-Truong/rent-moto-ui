import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const result = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => {
            clearTimeout(result);
        };
    }, [value]);

    return debounce;
}

export default useDebounce;
