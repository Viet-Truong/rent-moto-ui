import classNames from 'classnames/bind';
import styles from './MotoDetail.module.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import MotoView from '~/components/MotoVIew';
import * as motoServices from '~/api/motoServices';

const cx = classNames.bind(styles);
function MotoDetail() {
    const location = useLocation();
    const slug = location.pathname.substring(
        location.pathname.lastIndexOf('/') + 1
    );
    const [data, setData] = useState();

    useEffect(() => {
        const fetchDate = async () => {
            const result = await motoServices.getDateById(slug);
            setData(result);
        };
        fetchDate();
    }, [slug]);

    return (
        <div className={cx('wrapper')}>
            <MotoView item={data} />
        </div>
    );
}

export default MotoDetail;
