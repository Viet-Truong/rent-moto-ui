import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBTypography,
} from 'mdb-react-ui-kit';
import classNames from 'classnames/bind';
import styles from './ModalCart.module.scss';
import React, { useContext, useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '~/Context/CartContext';
import * as userServices from '~/api/userServices';
import Button from '~/components/Button';
import { AppContext } from '~/Context/AppContext';

const { RangePicker } = DatePicker;
const cx = classNames.bind(styles);
function ModalCart() {
    const { auth } = useSelector((state) => state.auth);
    const { isOpen, setIsOpen, cartItems, removeCartItem, setCartItems } =
        useContext(CartContext);
    const { setIsToastVisible } = useContext(AppContext);
    const [dateRanges, setDateRanges] = useState({});
    const [check, setCheck] = useState(false);
    const toogleClose = isOpen ? '' : 'close';

    const handleDateChange = (cartItemId, dateRange) => {
        setDateRanges({
            ...dateRanges,
            [cartItemId]: dateRange,
        });
    };

    const disabledDate = (current) => {
        // Chỉ cho phép chọn các ngày bắt đầu từ ngày hiện tại trở đi
        return current && current < moment().startOf('day');
    };

    const handleRemoveCartItem = (cartItemId, itemId) => {
        console.log(cartItemId, itemId);
        removeCartItem(cartItemId, itemId);
    };

    const handleCheckboxChange = (checkboxId) => {
        const updatedCheckboxes = cartItems?.map((checkbox) =>
            checkbox.id === checkboxId
                ? { ...checkbox, checked: !checkbox.checked }
                : checkbox
        );
        setCartItems(updatedCheckboxes);
        setCheck(!check);
    };

    const totalAmount = cartItems?.map((item) => {
        if (item.checked) {
            const total = item.data_moto.reduce((total, item) => {
                return total + item.price;
            }, 0);
            return total;
        }
    }, 0);

    const handleRentMoto = async () => {
        const rentMoto = cartItems?.filter((item) => item.checked);
        if (rentMoto.length > 0 || cartItems?.length > 0) {
            const ngayBD = rentMoto?.map((item) => item.date.startDate).join();
            const ngayKT = rentMoto?.map((item) => item.date.endDate).join();
            const listMoto = rentMoto?.map((item) =>
                item.data_moto.map((i) => i.id)
            );
            const result = await userServices.rentMoto({
                maTaiKhoan: auth.maTaiKhoan,
                ngayBD,
                ngayKT,
                listMoto: listMoto[0],
            });
            if (result.status === 'success') {
                setIsToastVisible({
                    type: 'success',
                    message: result.mess,
                    title: 'Thành công',
                    open: true,
                });
                setIsOpen(false);
            } else {
                setIsToastVisible({
                    type: 'error',
                    message: result.mess,
                    title: 'Thất bại',
                    open: true,
                });
                setIsOpen(false);
            }
        } else {
            setIsToastVisible({
                type: 'error',
                message: 'Bạn chưa thêm xe nào vào giỏ hàng',
                title: 'Thất bại',
                open: true,
            });
            setIsOpen(false);
        }
    };

    return (
        <section className={cx('wrapper', `${toogleClose}`)}>
            <div className={cx('wrapper_modal')}>
                <MDBCard className='p-3' style={{ height: '100vh' }}>
                    <FontAwesomeIcon
                        icon={faClose}
                        className={cx('icon_close')}
                        onClick={() => setIsOpen(false)}
                    />

                    <hr />
                    <div
                        className={cx('wrapper-cartItem')}
                        onClick={() => setIsOpen(true)}
                    >
                        {cartItems.map((cartItem) => (
                            <div className={cx('item')} key={cartItem.id}>
                                <div className={cx('header-item')}>
                                    <RangePicker
                                        className={cx(
                                            'RangePicker',
                                            'range-picker'
                                        )}
                                        disabledDate={disabledDate}
                                        defaultValue={[
                                            moment(
                                                cartItem.date.startDate,
                                                'DD-MM-YYYY'
                                            ),
                                            moment(
                                                cartItem.date.endDate,
                                                'DD-MM-YYYY'
                                            ),
                                        ]}
                                        format='DD MMM yyyy'
                                        style={{
                                            height: '3.5rem',
                                            width: '37rem',
                                        }}
                                        placeholder={[
                                            'Ngày bắt đầu',
                                            'Ngày kết thúc',
                                        ]}
                                        onChange={(dates) =>
                                            handleDateChange(cartItem.id, {
                                                startDate: dates[0],
                                                endDate: dates[1],
                                            })
                                        }
                                    />
                                    <input
                                        type={'checkbox'}
                                        className={cx('form-control-checkbox')}
                                        check={check}
                                        onChange={() =>
                                            handleCheckboxChange(cartItem.id)
                                        }
                                    />
                                </div>
                                {cartItem.data_moto.map((item, index) => (
                                    <MDBCard className='mb-3' key={index}>
                                        <MDBCardBody>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex flex-row align-items-center'>
                                                    <div>
                                                        <MDBCardImage
                                                            src={`http://localhost:5000/${item.image}`}
                                                            fluid
                                                            className='rounded-3'
                                                            style={{
                                                                width: '65px',
                                                            }}
                                                            alt='Shopping item'
                                                        />
                                                    </div>
                                                    <div className='ms-3'>
                                                        <MDBTypography tag='h5'>
                                                            {item.name}
                                                        </MDBTypography>
                                                        <p className='small mb-0'>
                                                            {item.type}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='d-flex flex-row align-items-center'>
                                                    <div
                                                        style={{
                                                            width: '80px',
                                                            marginLeft: '2rem',
                                                        }}
                                                    >
                                                        <MDBTypography
                                                            tag='h5'
                                                            className='mb-0'
                                                        >
                                                            {item.price}.000
                                                        </MDBTypography>
                                                    </div>
                                                    <MDBIcon
                                                        fas
                                                        icon='trash-alt'
                                                        className={cx(
                                                            'icon-trash'
                                                        )}
                                                        onClick={() =>
                                                            handleRemoveCartItem(
                                                                cartItem.id,
                                                                item.id
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                ))}
                            </div>
                        ))}
                    </div>

                    <MDBCard className='bg-primary text-white rounded-3 mt-auto'>
                        <MDBCardBody>
                            <div className='d-flex justify-content-between align-items-center mb-4'>
                                <MDBTypography tag='h5' className='mb-0'>
                                    Đăng kí
                                </MDBTypography>
                            </div>

                            <p className='small'>Tuỳ chọn thanh toán</p>
                            <a
                                href='#!'
                                type='submit'
                                className={cx('text-white')}
                            >
                                <MDBIcon
                                    fas
                                    icon='money-bill-wave-alt fa-2x me-2'
                                />
                            </a>
                            <a
                                href='#!'
                                type='submit'
                                className={cx('text-white', 'disable')}
                            >
                                <MDBIcon fab icon='cc-mastercard fa-2x me-2' />
                            </a>
                            <a
                                href='#!'
                                type='submit'
                                className={cx('text-white', 'disable')}
                            >
                                <MDBIcon fab icon='cc-visa fa-2x me-2' />
                            </a>
                            <a
                                href='#!'
                                type='submit'
                                className={cx('text-white', 'disable')}
                            >
                                <MDBIcon fab icon='cc-amex fa-2x me-2' />
                            </a>
                            <a
                                href='#!'
                                type='submit'
                                className={cx('text-white', 'disable')}
                            >
                                <MDBIcon fab icon='cc-paypal fa-2x me-2' />
                            </a>

                            <hr />

                            <div className='d-flex justify-content-between'>
                                <p className='mb-2'>Tổng tiền</p>
                                <p className='mb-2'>
                                    {`${totalAmount}000` || 0}
                                </p>
                            </div>

                            <Button primary onClick={handleRentMoto}>
                                <div>
                                    <span style={{ textAlign: 'center' }}>
                                        Đăng kí thuê xe
                                    </span>
                                </div>
                            </Button>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCard>
            </div>
        </section>
    );
}

export default ModalCart;
