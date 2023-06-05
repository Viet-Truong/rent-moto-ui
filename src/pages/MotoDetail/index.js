import classNames from 'classnames/bind';
import styles from './MotoDetail.module.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { moto } from '~/data/data';

import MotoView from '~/components/MotoVIew';
import { AppContext } from '~/Context/AppContext';

const cx = classNames.bind(styles);
function MotoDetail() {
    const { slug } = useParams();
    const [data, setData] = useState();
    const { dataMoto } = useContext(AppContext);
    // get slug and transfer slug to component MotoView
    const findMotoBySlug = (slug_item) => {
        const foundMoto = dataMoto.find((item) => item.slug === slug_item);
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
