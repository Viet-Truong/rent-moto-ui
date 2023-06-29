import classNames from 'classnames/bind';
import styles from './MotoDetail.module.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import MotoView from '~/components/MotoVIew';
import { AppContext } from '~/context/AppContext';

const cx = classNames.bind(styles);
function MotoDetail() {
    const location = useLocation();
    const slug = location.pathname.substring(
        location.pathname.lastIndexOf('/') + 1
    );
    const [data, setData] = useState();
    const { dataMoto } = useContext(AppContext);
    console.log(slug);
    // get slug and transfer slug to component MotoView
    const findMotoBySlug = (slug_item) => {
        const foundMoto = dataMoto?.find((item) => item.slug === slug_item);
        return foundMoto;
    };

    const motoFounded = findMotoBySlug(slug);

    useEffect(() => {
        setData(motoFounded);
    }, [slug]);

    return (
        <div className={cx('wrapper')}>
            <MotoView item={data} />
        </div>
    );
}

export default MotoDetail;
