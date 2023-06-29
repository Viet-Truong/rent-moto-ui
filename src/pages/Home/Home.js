import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useEffect, useContext } from 'react';

import Slider from '~/components/Slider';
import { slider_data } from '~/data/slide';
import { policy } from '~/data/data';
import Moto from '~/components/Moto';
import * as motoServices from '~/api/motoServices';
import { AppContext } from '~/Context/AppContext';
import Toast from '~/components/Toast';

const cx = classNames.bind(styles);
function Home() {
    // const [moto, setMoto] = useState();
    const { dataMoto, setDataMoto, isToastVisible } = useContext(AppContext);

    useEffect(() => {
        const fetch = async () => {
            const result = await motoServices.getAllXe();
            console.log(result);
            setDataMoto(result.data);
        };

        fetch();
    }, []);

    return (
        <div className={cx('home')}>
            <Slider
                data={slider_data}
                timeOut={5000}
                auto={true}
                control={true}
            />
            <div className={cx('wrapper-policy')}>
                {policy.map((item) => (
                    <div className={cx('policy__card')} key={item.id}>
                        <div className={cx('policy__icon')}>{item.icon}</div>
                        <div className={cx('policy__info')}>
                            <h4 className={cx('policy__title')}>{item.name}</h4>
                            <p className={cx('policy__description')}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={cx('main-content')}>
                <h2 className={cx('content__title')}>
                    TẤT CẢ CÁC XE ĐANG ĐƯỢC CHO THUÊ
                </h2>
                <div className={cx('wrapper-car')}>
                    {dataMoto?.map((item, index) => {
                        return (
                            <figure key={index}>
                                <Moto
                                    img={item.hinhAnh}
                                    name={item.tenXe}
                                    price={item.giaThue}
                                    slug={item.slug}
                                />
                            </figure>
                        );
                    })}
                </div>
            </div>
            <Toast
                type={isToastVisible?.type}
                message={isToastVisible?.message}
                title={isToastVisible?.title}
            />
        </div>
    );
}

export default Home;
