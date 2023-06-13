import React, { useState, useEffect } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
} from 'mdb-react-ui-kit';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authRegister } from '~/redux/authAction';

const cx = classNames.bind(styles);
function Register() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [errorMessage, setErrorMessage] = useState({
        status: false,
        text: '',
    });
    const { auth } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth) {
            navigate(-1);
        }
    }, [navigate, auth]);

    const checkPassword = () => {
        return confirmPassword === password;
    };

    const submit = async (e) => {
        if (checkPassword()) {
            e.preventDefault();
            dispatch(authRegister({ username, password }));
            // if (true) {
            //     setErrorMessage({
            //         status: true,
            //         text: "Tài khoản đã tồn tại",
            //     });
            // }
        } else {
            setErrorMessage({
                status: true,
                text: 'Mật khẩu không trùng khớp',
            });
        }
    };
    return (
        <MDBContainer fluid className='vh-100'>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>
                    <MDBCard
                        className='bg-dark text-white my-5 mx-auto'
                        style={{ borderRadius: '1rem', maxWidth: '400px' }}
                    >
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                            <h2 className='fw-bold mb-2 text-uppercase text-white'>
                                Đăng kí
                            </h2>
                            <p
                                className='fw-bold mb-5 mt-2 fz-2rem'
                                style={{ color: '#ff3d13' }}
                            >
                                Welcome!
                            </p>

                            <MDBInput
                                wrapperClass='mb-5 mx-10 w-100 p-2'
                                labelClass='text-white'
                                label='Tài khoản'
                                type='email'
                                className={cx('input')}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                size='lg'
                            />
                            <MDBInput
                                wrapperClass='mb-5 mx-10 w-100 p-2'
                                labelClass='text-white'
                                label='Mật khẩu'
                                type='password'
                                className={cx('input')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                size='lg'
                            />
                            <MDBInput
                                wrapperClass='mb-5 mx-10 w-100 p-2'
                                labelClass='text-white'
                                label='Xác nhận mật khẩu'
                                type='password'
                                className={cx('input')}
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                size='lg'
                            />
                            {errorMessage.status && (
                                <span className={cx('error')}>
                                    {errorMessage.text}
                                </span>
                            )}
                            <MDBBtn
                                outline
                                className='mx-2 px-5 mb-5 fw-bold'
                                color='white'
                                size='lg'
                                style={{ color: '#ff3d13', fontSize: '16px' }}
                                onClick={submit}
                            >
                                Đăng kí
                            </MDBBtn>

                            <div>
                                <p className='mb-0'>
                                    Bạn đã có tài khoản?
                                    <Link
                                        to='/login'
                                        class='fw-bold'
                                        style={{ color: '#ff3d13' }}
                                    >
                                        Đăng nhập
                                    </Link>
                                </p>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Register;
