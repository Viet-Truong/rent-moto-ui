import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

import images from '~/assets/image';
import Button from '../Button';
import Image from '../Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Slider(props) {
    // activeSlide la` bien de biet slide nao` dang dc hien thi
    const [activeSlide, setActiveSlide] = useState(0);

    // neu props.timeOut === true thi se lay timeOut false thi 3s
    const timeOut = props.timeOut ? props.timeOut : 3000;

    const nextSlide = useCallback(() => {
        const index =
            activeSlide + 1 === props.data.length ? 0 : activeSlide + 1;
        setActiveSlide(index);
    }, [activeSlide, props.data]);

    const prevSlide = () => {
        const index =
            activeSlide - 1 < 0 ? props.data.length - 1 : activeSlide - 1;
        setActiveSlide(index);
    };

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide();
            }, timeOut);
            return () => {
                clearInterval(slideAuto);
            };
        }
    }, [nextSlide, timeOut, props]);
    return (
        <>
            <Image src={images.banner} className={cx('slider__banner')} />
            <div className={cx('slider')}>
                {props.data.map((item, index) => (
                    <SliderItem
                        key={index}
                        item={item}
                        active={index === activeSlide}
                    />
                ))}
                {props.control ? (
                    <div className={cx('slider__control')}>
                        <div
                            className={cx('slider__control__item')}
                            onClick={prevSlide}
                        >
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                className={cx('slider__control__icon')}
                            />
                        </div>
                        <div className={cx('slider__control__item')}>
                            <div className={cx('index')}>{activeSlide + 1}</div>
                        </div>
                        <div
                            className={cx('slider__control__item')}
                            onClick={nextSlide}
                        >
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className={cx('slider__control__icon')}
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
}

const SliderItem = (props) => (
    <div className={cx('slider-item', `${props.active ? 'active' : ''}`)}>
        <div className={cx('slider-item__info')}>
            <div className={cx('slider-item__info__title')}>
                <span>{props.item.title}</span>
            </div>
            <div className={cx('slider-item__info__description')}>
                <span>{props.item.description}</span>
            </div>
            <div className={cx('slider-item__info__btn')}>
                <Link to={props.item.path}>
                    <Button primary>Bắt đầu</Button>
                </Link>
            </div>
        </div>
        <div className={cx('slider-item__image')}>
            <div className={cx('shape-item')}></div>
            <Image src={props.item.img} alt={'image-item'} />
        </div>
    </div>
);

export default Slider;
