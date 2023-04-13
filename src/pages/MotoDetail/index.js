import classNames from "classnames/bind";
import styles from "./MotoDetail.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import MotoView from "~/components/MotoVIew";

const cx = classNames.bind(styles);
function MotoDetail() {
    const { slug } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {}, [slug]);

    return (
        <div className={cx("wrapper")}>
            <MotoView product={product} />
        </div>
    );
}

export default MotoDetail;
