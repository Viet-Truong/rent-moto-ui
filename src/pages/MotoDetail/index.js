import classNames from "classnames/bind";
import styles from "./MotoDetail.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { moto } from "~/data/data";

import MotoView from "~/components/MotoVIew";

const cx = classNames.bind(styles);
function MotoDetail() {
    const { slug } = useParams();
    const [data, setData] = useState();
    // get slug and transfer slug to component MotoView
    const findMotoBySlug = (slug_item) => {
        const foundMoto = moto.find((item) => item.slug === slug_item);
        return foundMoto;
    };

    const motoFounded = findMotoBySlug(slug);
    console.log(slug, motoFounded);

    useEffect(() => {
        setData(motoFounded);
    }, [slug]);

    return (
        <div className={cx("wrapper")}>
            <MotoView item={data} />
        </div>
    );
}

export default MotoDetail;
