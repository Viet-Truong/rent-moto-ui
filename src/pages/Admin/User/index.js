import React, { useState, useContext, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './User.module.scss';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { DatePicker } from 'antd';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPen, faUser } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import * as userServices from '~/api/userServices';
import Toast from '~/components/Toast';
import { AppContext } from '~/Context/AppContext';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Avatar() {
    const { auth } = useSelector((state) => state.auth);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [avatarUrl, setAvatarUrl] = useState(
        `http://localhost:5000/${auth?.avatar}` || ''
    );
    const { isToastVisible, setIsToastVisible } = useContext(AppContext);
    const formDataRef = useRef(new FormData());

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        formDataRef.current.append('avatar', file);
        setSelectedImage(file);
        setPreviewImage(URL.createObjectURL(file));
        setIsEditing(true);
    };

    const handleCancel = () => {
        setSelectedImage(null);
        setIsEditing(false);
        setPreviewImage('');
    };

    function formDataToJSON(formData) {
        const json = {};
        for (const [key, value] of formData.entries()) {
            json[key] = value;
        }
        return json;
    }

    const handleSave = async () => {
        // Call your API to save the selected image
        // ...
        formDataRef.current.append('maTaiKhoan', auth.maTaiKhoan);
        try {
            const result = await userServices.updateAvatar(formDataRef.current);
            // Cập nhật dữ liệu mới vào localStorage
            localStorage.setItem('auth', JSON.stringify(result));
            if (result.status === 'success') {
                setAvatarUrl(`http://localhost:5000/${result.data.avatar}`);
                setIsToastVisible({
                    type: 'success',
                    message: 'Đã cập nhật thông tin thành công',
                    title: 'Thành công',
                    open: true,
                });
            } else {
                setIsToastVisible({
                    type: 'error',
                    message: 'Có lỗi xảy ra. Vui lòng thử lại sau',
                    title: 'Thất bại',
                    open: true,
                });
            }
        } catch (error) {
            // Xử lý lỗi nếu cần
            setIsToastVisible({
                type: 'error',
                message: 'Có lỗi xảy ra. Vui lòng thử lại sau',
                title: 'Thất bại',
                open: true,
            });
        }

        setIsEditing(false);
    };

    return (
        <MDBCard className={cx('mb-4', 'card')}>
            <MDBCardBody className={cx('text-center', 'card__body')}>
                <Image
                    src={isEditing ? previewImage : avatarUrl}
                    alt='avatar'
                    className='rounded-circle'
                    style={{ width: '150px', height: '150px' }}
                    fluid
                />
                <div
                    className={cx(
                        'd-flex',
                        'justify-content-center',
                        'mb-2',
                        'mt-5',
                        'card__body--icon'
                    )}
                >
                    <label className={cx('label')} htmlFor='avatar'>
                        {!isEditing ? <FontAwesomeIcon icon={faCamera} /> : ''}
                    </label>
                    <input
                        type='file'
                        id='avatar'
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </div>
                {isEditing && (
                    <div style={{ marginTop: '10px' }}>
                        <Button
                            primary
                            style={{ padding: '5px', marginLeft: '10px' }}
                            onClick={handleCancel}
                        >
                            Huỷ
                        </Button>
                        <Button
                            primary
                            style={{ padding: '5px', marginLeft: '10px' }}
                            onClick={handleSave}
                        >
                            Lưu
                        </Button>
                    </div>
                )}
            </MDBCardBody>
        </MDBCard>
    );
}

function ProfileField({ label, value, editing, onEdit, onChange }) {
    return (
        <MDBRow>
            <MDBCol sm='3'>
                <MDBCardText>{label}</MDBCardText>
            </MDBCol>
            <MDBCol sm='8'>
                {editing ? (
                    <input
                        type='text'
                        className={cx('form-control')}
                        value={value}
                        onChange={onChange}
                    />
                ) : (
                    <p className='text-muted mb-0'>{value}</p>
                )}
            </MDBCol>
            <MDBCol sm='1'>
                {!editing && <FontAwesomeIcon icon={faPen} onClick={onEdit} />}
            </MDBCol>
        </MDBRow>
    );
}

function User() {
    const { auth } = useSelector((state) => state.auth);
    const [profile, setProfile] = useState({
        hoTen: auth?.hoTen,
        email: auth?.email,
        ngaySinh: auth?.ngaySinh,
        gioiTinh: auth?.gioiTinh,
        sdt: auth?.sdt,
        cccd: auth?.cccd,
        diaChi: auth?.diaChi,
    });
    // const [toast, setToast] = useState({
    //     open: false,
    // });

    const { isToastVisible, setIsToastVisible } = useContext(AppContext);

    const [editingField, setEditingField] = useState('');

    const handleEditClick = (field) => {
        setEditingField(field);
    };

    const handleInputChange = (event) => {
        // handleInputChange sẽ được gọi khi giá trị trong input thay đổi
        // và cập nhật giá trị mới cho trường tương ứng trong state
        // ở đây tôi giả sử "hoTen" là trường tương ứng
        const { value } = event.target;
        setProfile({ ...profile, [editingField]: value });
    };

    const handleSaveClick = async (
        maTaiKhoan,
        email,
        hoTen,
        ngaySinh,
        cccd,
        sdt,
        diaChi,
        gioiTinh
    ) => {
        // Thực hiện lưu các thay đổi vào cơ sở dữ liệu hoặc nơi lưu trữ phù hợp
        try {
            const result = await userServices.updateProfile({
                maTaiKhoan,
                email,
                hoTen,
                ngaySinh,
                cccd,
                sdt,
                diaChi,
                gioiTinh,
            });
            // Cập nhật dữ liệu mới vào localStorage
            localStorage.setItem('auth', JSON.stringify(result));
            if (result.status === 'success') {
                setIsToastVisible({
                    type: 'success',
                    message: 'Đã cập nhật thông tin thành công',
                    title: 'Thành công',
                    open: true,
                });
            } else {
                setIsToastVisible({
                    type: 'error',
                    message: 'Có lỗi xảy ra. Vui lòng thử lại sau',
                    title: 'Thất bại',
                    open: true,
                });
            }
            console.log(result);
        } catch (error) {
            // Xử lý lỗi nếu cần
            setIsToastVisible({
                type: 'error',
                message: 'Có lỗi xảy ra. Vui lòng thử lại sau',
                title: 'Thất bại',
                open: true,
            });
        }

        setEditingField('');
    };

    const onChangeDate = (date, dateString) => {
        setProfile({ ...profile, ngaySinh: dateString });
    };

    const handleGenderChange = (e) => {
        setProfile({ ...profile, gioiTinh: e.target.value });
    };

    return (
        <section className={cx('wrapper')}>
            <h1 className={cx('header')}>
                <FontAwesomeIcon icon={faUser} className={cx('header-icon')} />
                Cập nhật thông tin cá nhân
            </h1>
            <MDBContainer className={cx('wrapper-content')}>
                <MDBRow
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <MDBCol lg='8'>
                        <Avatar />
                    </MDBCol>

                    <MDBCol lg='8'>
                        <MDBCard
                            className='mb-4'
                            style={{ borderRadius: '15px' }}
                        >
                            <MDBCardBody>
                                <ProfileField
                                    label='Họ và tên'
                                    value={profile?.hoTen}
                                    editing={editingField === 'hoTen'}
                                    onEdit={() => handleEditClick('hoTen')}
                                    onChange={handleInputChange}
                                />
                                <hr />
                                <ProfileField
                                    label='Email'
                                    value={profile?.email}
                                    editing={editingField === 'email'}
                                    onEdit={() => handleEditClick('email')}
                                    onChange={handleInputChange}
                                />
                                <hr />

                                <MDBRow>
                                    <MDBCol sm='3'>
                                        <MDBCardText>Ngày sinh</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm='8'>
                                        <DatePicker
                                            className={cx('input')}
                                            defaultValue={moment(
                                                profile?.ngaySinh
                                            )}
                                            format={'DD/MM/YYYY'}
                                            onChange={onChangeDate}
                                            disabled={
                                                editingField !== 'ngaySinh'
                                            }
                                        />
                                    </MDBCol>
                                    <MDBCol sm='1'>
                                        {editingField !== 'ngaySinh' && (
                                            <FontAwesomeIcon
                                                icon={faPen}
                                                onClick={() =>
                                                    handleEditClick('ngaySinh')
                                                }
                                            />
                                        )}
                                    </MDBCol>
                                </MDBRow>

                                <hr />

                                <MDBRow>
                                    <MDBCol sm='3'>
                                        <MDBCardText>Giới tính</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm='8'>
                                        <select
                                            defaultValue={profile?.gioiTinh}
                                            onChange={handleGenderChange}
                                            disabled={
                                                editingField !== 'gioiTinh'
                                            }
                                        >
                                            <option value='M'>Nam</option>
                                            <option value='W'>Nữ</option>
                                            <option value='O'>Khác</option>
                                        </select>
                                    </MDBCol>
                                    <MDBCol sm='1'>
                                        {editingField !== 'gioiTinh' && (
                                            <FontAwesomeIcon
                                                icon={faPen}
                                                onClick={() =>
                                                    handleEditClick('gioiTinh')
                                                }
                                            />
                                        )}
                                    </MDBCol>
                                </MDBRow>

                                <hr />

                                <ProfileField
                                    label='Số điện thoại'
                                    value={profile?.sdt}
                                    editing={editingField === 'sdt'}
                                    onEdit={() => handleEditClick('sdt')}
                                    onChange={handleInputChange}
                                />
                                <hr />
                                <ProfileField
                                    label='CCCD'
                                    value={profile?.cccd}
                                    editing={editingField === 'cccd'}
                                    onEdit={() => handleEditClick('cccd')}
                                    onChange={handleInputChange}
                                />
                                <hr />
                                <ProfileField
                                    label='Địa chỉ'
                                    value={profile?.diaChi}
                                    editing={editingField === 'diaChi'}
                                    onEdit={() => handleEditClick('diaChi')}
                                    onChange={handleInputChange}
                                />
                                <hr />
                            </MDBCardBody>
                            {editingField && (
                                <MDBCardBody>
                                    <Button
                                        primary
                                        onClick={() =>
                                            handleSaveClick(
                                                auth.maTaiKhoan,
                                                profile.email,
                                                profile.hoTen,
                                                profile.ngaySinh,
                                                profile.cccd,
                                                profile.sdt,
                                                profile.diaChi,
                                                profile.gioiTinh
                                            )
                                        }
                                    >
                                        Lưu
                                    </Button>
                                </MDBCardBody>
                            )}
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Toast
                type={isToastVisible?.type}
                message={isToastVisible?.message}
                title={isToastVisible?.title}
            />
        </section>
    );
}

export default User;
