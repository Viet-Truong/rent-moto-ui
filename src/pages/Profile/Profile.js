import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPen } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import { useSelector } from 'react-redux';
import { DatePicker } from 'antd';
import moment from 'moment';
import * as userServices from '~/api/userServices';

const cx = classNames.bind(styles);

function Avatar() {
    const { auth } = useSelector((state) => state.auth);

    return (
        <MDBCard className={cx('mb-4', 'card')}>
            <MDBCardBody className={cx('text-center', 'card__body')}>
                <Image
                    src={`http://localhost:5000/${auth?.avatar}` || ''}
                    alt='avatar'
                    className='rounded-circle'
                    style={{ width: '150px' }}
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
                        <FontAwesomeIcon icon={faCamera} />
                    </label>
                    <input
                        type='file'
                        id='avatar'
                        style={{ display: 'none' }}
                    />
                </div>
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

function Profile() {
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
        setEditingField('');
    };

    const onChange = (date) => {
        setProfile({ ...profile, [editingField]: date });
    };

    const handleGenderChange = (e) => {
        setProfile({ ...profile, gioiTinh: e.target.value });
    };

    return (
        <section
            style={{
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                width: '100vw',
                marginTop: '10vh',
            }}
            className={cx('wrapper')}
        >
            <MDBContainer className='py-5'>
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
                        <MDBCard className='mb-4'>
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
                                            format={'DD/MM/YYYYY'}
                                            onChange={onChange}
                                        />
                                    </MDBCol>
                                    <MDBCol sm='1'>
                                        <FontAwesomeIcon icon={faPen} />
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
                                        >
                                            <option value='M'>Nam</option>
                                            <option value='W'>Nữ</option>
                                            <option value='O'>Khác</option>
                                        </select>
                                    </MDBCol>
                                    <MDBCol sm='1'>
                                        <FontAwesomeIcon icon={faPen} />
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
                                    <button
                                        className='btn btn-primary'
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
                                        Save
                                    </button>
                                </MDBCardBody>
                            )}
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default Profile;
