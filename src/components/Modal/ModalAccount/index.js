import classNames from 'classnames/bind';
import styles from './ModalAccount.module.scss';
import React, { useState, useContext } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
} from 'mdb-react-ui-kit';

import { AppContext } from '~/context/AppContext';
import * as authServices from '~/api/authServices';

const cx = classNames.bind(styles);
function ModalAccount() {
    const { isModalAccountVisible, data, typeModal, setIsModalAccountVisible } =
        useContext(AppContext);
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [role, setRole] = useState();
    const [error, setError] = useState({
        isError: false,
        message: '',
    });

    const handleAddAccount = async (taiKhoan, matKhau, role) => {
        if (password === confirmPassword) {
            const result = await authServices.register({
                username: taiKhoan,
                password: matKhau,
                role: role,
            });
            console.log(result);
            if (result.status === 'success') {
                setIsModalAccountVisible(false);
            } else {
                setError({
                    isError: true,
                    message: result.mess,
                });
            }
        } else {
            setError({
                isError: true,
                message: 'Mật khẩu không trùng khớp',
            });
            console.log('Mật khẩu không trùng khớp');
        }
    };

    return (
        <div className={cx('wrapper-modal')}>
            <MDBModal show={isModalAccountVisible} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>
                                {typeModal == 'ADD'
                                    ? 'Thêm tài khoản'
                                    : 'Sửa thông tin tài khoản'}
                            </MDBModalTitle>
                            <MDBBtn
                                className='btn-close'
                                color='none'
                                onClick={() => setIsModalAccountVisible(false)}
                            ></MDBBtn>
                        </MDBModalHeader>

                        <MDBModalBody>
                            <MDBInput
                                className={cx('input')}
                                label={'Tài khoản'}
                                value={account}
                                onChange={(e) => setAccount(e.target.value)}
                                type='text'
                            />

                            <MDBInput
                                className={cx('input')}
                                label={'Mật khẩu'}
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                type='password'
                            />

                            <MDBInput
                                className={cx('input')}
                                label={'Xác nhận mật khẩu'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                            />

                            <div className={cx('wrapper-dropdown')}>
                                <MDBDropdown className={cx('dropdown')}>
                                    <MDBDropdownToggle>
                                        Vai trò
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => setRole('Admin')}
                                        >
                                            Admin
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => setRole('Nhân viên')}
                                        >
                                            Nhân viên
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() =>
                                                setRole('Khách hàng')
                                            }
                                        >
                                            Khách hàng
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                <div className={cx('value_dropdown')}>
                                    {role}
                                </div>
                            </div>
                            <p className={cx('error-message')}>
                                {error.message}
                            </p>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn
                                className={cx('button_save')}
                                color='secondary'
                                onClick={() => setIsModalAccountVisible(false)}
                            >
                                Huỷ
                            </MDBBtn>
                            <MDBBtn
                                className={cx('button_save')}
                                onClick={() => {
                                    handleAddAccount(account, password, role);
                                }}
                            >
                                Lưu
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
}

export default ModalAccount;
