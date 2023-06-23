import classNames from 'classnames/bind';
import styles from './ModalMoto.module.scss';
import React, { useState, useEffect, useContext, useRef } from 'react';
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from '~/Context/AppContext';
import Button from '~/components/Button';
import * as motoServices from '~/api/motoServices';

const cx = classNames.bind(styles);

function ModalMoto() {
    const {
        isModalMotoVisible,
        data,
        typeModal,
        setIsModalMotoVisible,
        setIsToastVisible,
    } = useContext(AppContext);
    const [idMoto, setIdMoto] = useState(data?.maXe ?? '');
    const [nameMoto, setNameMoto] = useState(data?.tenXe ?? '');
    const [autoMaker, setAutoMaker] = useState(data?.hangXe ?? '');
    const [price, setPrice] = useState(data?.giaThue ?? '');
    const [type, setType] = useState(data?.loaiXe ?? '');
    const [licensePlates, setLicensePlates] = useState(data?.bienSoXe ?? '');
    const [status, setStatus] = useState(data?.trangThai ?? '');
    const [hinhAnh, setHinhAnh] = useState(data?.hinhAnh ?? []);
    const [multipleImages, setMultipleImages] = useState([]);
    const formDataRef = new FormData();

    useEffect(() => {
        setIdMoto(data?.idMoto ?? '');
        setNameMoto(data?.tenXe ?? '');
        setAutoMaker(data?.hangXe ?? '');
        setPrice(data?.giaThue ?? '');
        setType(data?.loaiXe ?? '');
        setLicensePlates(data?.bienSoXe ?? '');
        setHinhAnh(data?.hinhAnh ?? '');
        setStatus(data?.trangThai ?? '');
    }, [data]);

    const changeMultipleFiles = (e) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const filesArray = Array.from(e.target.files);
            const imageArray = filesArray.map((file) =>
                URL.createObjectURL(file)
            );
            // add image to call api
            setHinhAnh(file);

            // preview image
            setMultipleImages((prevImages) => prevImages.concat(imageArray));
        }
    };

    const removeImage = (index) => {
        setMultipleImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        );
    };

    function formDataToJSON(formData) {
        const json = {};
        for (const [key, value] of formData.entries()) {
            json[key] = value;
        }
        return json;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (typeModal !== 'ADD') {
            formDataRef.append('maXe', data?.maXe);
        }

        formDataRef.append('tenXe', nameMoto);
        formDataRef.append('hangXe', autoMaker);
        formDataRef.append('bienSoXe', licensePlates);
        formDataRef.append('loaiXe', type);
        formDataRef.append('giaThue', price);
        formDataRef.append('trangThai', status);
        formDataRef.append('moTa', '');
        formDataRef.append('slug', '123');
        formDataRef.append('images', hinhAnh);

        const fetchData = async () => {
            if (typeModal === 'ADD') {
                const result = await motoServices.addXe(formDataRef);
                if (result.status === 'success') {
                    setIsToastVisible({
                        type: 'success',
                        message: result.mess,
                        title: 'Thành công',
                        open: true,
                    });
                    setIsModalMotoVisible(false);
                } else {
                    setIsToastVisible({
                        type: 'error',
                        message: 'Có lỗi xảy ra. Vui lòng thử lại sau',
                        title: 'Thất bại',
                        open: true,
                    });
                }
                console.log(result);
            } else {
                const result = await motoServices.updateXe(formDataRef);
                console.log(result);
                if (result.status === 'success') {
                    setIsToastVisible({
                        type: 'success',
                        message: result.mess,
                        title: 'Thành công',
                        open: true,
                    });
                    setIsModalMotoVisible(false);
                } else {
                    setIsToastVisible({
                        type: 'error',
                        message: 'Có lỗi xảy ra. Vui lòng thử lại sau',
                        title: 'Thất bại',
                        open: true,
                    });
                }
            }
        };

        console.log(formDataToJSON(formDataRef));

        fetchData();
    };

    return (
        <div className={cx('wrapper-modal')}>
            <MDBModal show={isModalMotoVisible} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>
                                {typeModal == 'ADD'
                                    ? 'Thêm xe'
                                    : 'Sửa thông tin xe'}
                            </MDBModalTitle>
                            <MDBBtn
                                className='btn-close'
                                color='none'
                                onClick={() => setIsModalMotoVisible(false)}
                            ></MDBBtn>
                        </MDBModalHeader>

                        <MDBModalBody>
                            <MDBInput
                                className={cx('input')}
                                label={'Tên xe'}
                                value={nameMoto}
                                onChange={(e) => setNameMoto(e.target.value)}
                                type='text'
                            />

                            <MDBInput
                                className={cx('input')}
                                label={'Hãng xe'}
                                value={autoMaker}
                                onChange={(e) => setAutoMaker(e.target.value)}
                                type='text'
                            />

                            <MDBInput
                                className={cx('input')}
                                label={'Giá xe'}
                                value={`${price}`}
                                onChange={(e) => setPrice(e.target.value)}
                                type='text'
                            />

                            <MDBInput
                                className={cx('input')}
                                label={'Biển số xe'}
                                value={licensePlates}
                                onChange={(e) =>
                                    setLicensePlates(e.target.value)
                                }
                                type='text'
                            />
                            <div className={cx('wrapper-dropdown')}>
                                <MDBDropdown className={cx('dropdown')}>
                                    <MDBDropdownToggle>
                                        Loại xe
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => {
                                                setType('Xe côn tay');
                                            }}
                                        >
                                            Xe côn tay
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => {
                                                setType('Xe ga');
                                            }}
                                        >
                                            Xe ga
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => {
                                                setType('Xe số');
                                            }}
                                        >
                                            Xe số
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                <div className={cx('value_dropdown')}>
                                    {type}
                                </div>
                            </div>
                            <div className={cx('wrapper-dropdown')}>
                                <MDBDropdown className={cx('dropdown')}>
                                    <MDBDropdownToggle>
                                        Trạng thái
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => {
                                                setStatus('Hoạt động');
                                            }}
                                        >
                                            Hoạt động
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => {
                                                setStatus('Ngưng hoạt động');
                                            }}
                                        >
                                            Ngưng hoạt độn
                                        </MDBDropdownItem>
                                        <MDBDropdownItem
                                            link
                                            onClick={() => {
                                                setStatus('Đã mất');
                                            }}
                                        >
                                            Đã mất
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                <div className={cx('value_dropdown')}>
                                    {status}
                                </div>
                            </div>
                            <div className={cx('wrapper_image')}>
                                <input
                                    type='file'
                                    multiple
                                    onChange={changeMultipleFiles}
                                />
                                {multipleImages.map((image, index) => {
                                    return (
                                        <div
                                            style={{
                                                display: 'flex',
                                                marginTop: '10px',
                                            }}
                                            key={index}
                                        >
                                            <img
                                                className='image'
                                                src={image}
                                                alt=''
                                                key={image}
                                                width='200'
                                                height='200'
                                            />
                                            <Button
                                                style={{ marginLeft: '10px' }}
                                                onClick={() =>
                                                    removeImage(index)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faClose}
                                                />
                                            </Button>
                                        </div>
                                    );
                                })}
                            </div>
                        </MDBModalBody>

                        <MDBModalFooter>
                            {typeModal === 'ADD' ? (
                                <Button
                                    primary
                                    onClick={handleSubmit}
                                    style={{ marginTop: '20px' }}
                                >
                                    Thêm
                                </Button>
                            ) : (
                                <Button
                                    primary
                                    onClick={handleSubmit}
                                    style={{ marginTop: '20px' }}
                                >
                                    Sửa
                                </Button>
                            )}
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
}

export default ModalMoto;
