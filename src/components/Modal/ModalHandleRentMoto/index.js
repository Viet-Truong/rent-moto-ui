import classNames from 'classnames/bind';
import styles from './ModalHandleSignMoto.module.scss';
import {
    MDBBadge,
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
} from 'mdb-react-ui-kit';
import { AppContext } from '~/Context/AppContext';
import { useState, useEffect, useContext } from 'react';
import { moto } from '~/data/data';
import Button from '~/components/Button';
import ModalAddError from '../ModalAddError';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function ModalHandleSignMoto() {
    const {
        isModalAcceptVisible,
        data,
        typeModal,
        setIsModalAcceptVisible,
        setIsModalAddErrorVisible,
    } = useContext(AppContext);
    const [checkAll, setCheckAll] = useState(false);
    // const [id, setId] = useState(data?.id ?? "");
    // const [name, setName] = useState(data?.name ?? "");
    // const [startDate, setStartDate] = useState(data?.startDate ?? "");
    // const [endDate, setEndDate] = useState(data?.endDate ?? "");
    // const [status, setStatus] = useState(data?.status ?? "");
    const [dataModal, setDataModal] = useState(data ?? []);
    console.log(dataModal);

    const handleCheckAll = () => {
        const updatedCheckboxes = dataModal.map((checkbox) => ({
            ...checkbox,
            checked: !checkAll,
        }));
        setCheckAll(!checkAll);
        setDataModal(updatedCheckboxes);
    };

    const handleCheckboxChange = (checkboxId) => {
        const updatedCheckboxes = dataModal.map((checkbox) =>
            checkbox.id === checkboxId
                ? { ...checkbox, checked: !checkbox.checked }
                : checkbox
        );
        setDataModal(updatedCheckboxes);
        setCheckAll(updatedCheckboxes.every((checkbox) => checkbox.checked));
    };

    const totalAmount = dataModal?.reduce((total, item) => {
        if (item.checked) {
            return total + item.price;
        }
        return total;
    }, 0);

    useEffect(() => {
        setDataModal(data ?? []);
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            <MDBModal show={isModalAcceptVisible} tabIndex='-1'>
                <MDBModalDialog className={cx('modal_dialog')}>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>
                                {typeModal == 'ACCEPT'
                                    ? 'Duyệt đăng kí thuê xe'
                                    : 'Xác nhận trả xe'}
                            </MDBModalTitle>
                            <MDBBtn
                                className='btn-close'
                                color='none'
                                onClick={() => setIsModalAcceptVisible(false)}
                            ></MDBBtn>
                        </MDBModalHeader>

                        <MDBModalBody className={cx('modal_body')}>
                            <MDBTable align='middle' className={cx('table')}>
                                <MDBTableHead>
                                    <tr>
                                        {typeModal !== 'ACCEPT' ? (
                                            <th scope='col'>
                                                <input
                                                    type='checkbox'
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    checked={checkAll}
                                                    onChange={handleCheckAll}
                                                />
                                            </th>
                                        ) : (
                                            ''
                                        )}
                                        <th scope='col'>ID xe</th>
                                        <th scope='col'>Tên xe</th>
                                        <th scope='col'>Hãng xe</th>
                                        <th scope='col'>Loại xe</th>
                                        <th scope='col'>Biển số xe</th>
                                        <th scope='col'>Giá thuê</th>
                                        {typeModal !== 'ACCEPT' ? (
                                            <th scope='col'>Actions</th>
                                        ) : (
                                            ''
                                        )}
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {dataModal?.map((item) => {
                                        return (
                                            <tr key={item?.id}>
                                                {typeModal !== 'ACCEPT' ? (
                                                    <td>
                                                        <input
                                                            type='checkbox'
                                                            className='fw-bold mb-1'
                                                            style={{
                                                                cursor: 'pointer',
                                                            }}
                                                            checked={
                                                                item.checked
                                                            }
                                                            onChange={() =>
                                                                handleCheckboxChange(
                                                                    item.maXe
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                ) : (
                                                    ''
                                                )}
                                                <td>
                                                    <p className='fw-bold mb-1'>
                                                        {item?.maXe}
                                                    </p>
                                                </td>
                                                <td>
                                                    <div className='ms-3'>
                                                        <p className='fw-bold mb-1'>
                                                            {item?.tenXe}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>
                                                        {item?.hangXe}
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>
                                                        {item?.loaiXe}
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>
                                                        {item?.bienSoXe}
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>
                                                        {item?.giaThue}.000
                                                    </p>
                                                </td>
                                                <td>
                                                    {typeModal !== 'ACCEPT' && (
                                                        <>
                                                            {item.trangThai ===
                                                            'Đã duyệt' ? (
                                                                <Button
                                                                    color='link'
                                                                    size='sm'
                                                                    small={true}
                                                                    className={cx(
                                                                        'fw-normal',
                                                                        'mb-1',
                                                                        'btn'
                                                                    )}
                                                                    onClick={() =>
                                                                        setIsModalAddErrorVisible(
                                                                            true
                                                                        )
                                                                    }
                                                                >
                                                                    THÊM LỖI
                                                                </Button>
                                                            ) : (
                                                                <MDBBtn
                                                                    color='link'
                                                                    rounded
                                                                    size='sm'
                                                                    className={cx(
                                                                        'fw-normal',
                                                                        'mb-1',
                                                                        'btn'
                                                                    )}
                                                                >
                                                                    Duyệt
                                                                </MDBBtn>
                                                            )}
                                                        </>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </MDBTableBody>
                                {typeModal === 'ACCEPT' ? (
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <Button
                                                    size='sm'
                                                    primary
                                                    className={cx('fw-normal')}
                                                >
                                                    Duyệt
                                                </Button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                ) : (
                                    <tfoot>
                                        <tr>
                                            <td className='fw-bold mb-1'>
                                                Tổng tiền:
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{totalAmount}.000</td>
                                            <td>
                                                <Button
                                                    color='link'
                                                    size='sm'
                                                    small={true}
                                                    className={cx(
                                                        'fw-normal',
                                                        'mb-1',
                                                        'btn'
                                                    )}
                                                >
                                                    XÁC NHẬN
                                                </Button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                )}
                            </MDBTable>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <ModalAddError />
        </div>
    );
}

export default ModalHandleSignMoto;
