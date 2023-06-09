import classNames from 'classnames/bind';
import styles from './AcceptReturnMoto.module.scss';
import {
    MDBBadge,
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { acceptReturnMoto } from '~/data/data';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '~/Context/AppContext';
import ModalHandleSignMoto from '~/components/Modal/ModalHandleRentMoto';
import * as adminServices from '~/api/adminServices';

const cx = classNames.bind(styles);
const PAGE = 1;
function AcceptReturnMoto() {
    const {
        setIsModalAcceptVisible,
        setTypeModal,
        setData,
        dataRentMoto,
        setDataRentMoto,
    } = useContext(AppContext);
    const [page, setPage] = useState(PAGE);

    useEffect(() => {
        const fetch = async () => {
            const result = await adminServices.getAllOrder({
                q: '',
                page,
            });
            setDataRentMoto(result);
            console.log(result);
        };
        fetch();
    }, [page]);
    return (
        <div className={cx('wrapper')}>
            <ModalHandleSignMoto />
            <h1 className={cx('header')}>
                <FontAwesomeIcon
                    icon={faRotateLeft}
                    className={cx('header-icon')}
                />
                Xác nhận trả xe
            </h1>
            <MDBTable align='middle' className={cx('table')}>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Mã đơn thuê</th>
                        <th scope='col'>Tên khách hàng</th>
                        <th scope='col'>Ngày bắt đầu</th>
                        <th scope='col'>Ngày kết thúc</th>
                        <th scope='col'>Trạng thái</th>
                        <th scope='col'>Giá thuê</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {dataRentMoto?.map((item) => {
                        return (
                            <tr
                                key={item.id}
                                onClick={() => {
                                    setIsModalAcceptVisible(true);
                                    setTypeModal('RETURN');
                                    setData(item);
                                }}
                            >
                                <td>
                                    <p className='fw-bold mb-1'>{item.id}</p>
                                </td>
                                <td>
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>
                                            {item.name}
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.startDate}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-bold mb-1'>
                                        {item.endDate}
                                    </p>
                                </td>
                                <td>
                                    <MDBBadge
                                        color='success'
                                        pill
                                        className='fw-bold mb-1'
                                    >
                                        {item.status}
                                    </MDBBadge>
                                </td>
                                <td>
                                    <p className='fw-bold mb-1'>{item.price}</p>
                                </td>
                                <td>
                                    <MDBBtn
                                        color='link'
                                        rounded
                                        size='sm'
                                        className='fw-bold mb-1'
                                    >
                                        <FontAwesomeIcon
                                            icon={faPen}
                                            className={cx('actions-btn')}
                                        />
                                    </MDBBtn>
                                </td>
                            </tr>
                        );
                    })}
                </MDBTableBody>
            </MDBTable>
            <nav aria-label='...' className={cx('page_navigation')}>
                <MDBPagination className='mb-0'>
                    <MDBPaginationItem disabled>
                        <MDBPaginationLink
                            href='#'
                            tabIndex={-1}
                            aria-disabled='true'
                        >
                            Previous
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href='#'>1</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem active aria-current='page'>
                        <MDBPaginationLink href='#'>
                            2 <span className='visually-hidden'>(current)</span>
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href='#'>3</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href='#'>Next</MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            </nav>
        </div>
    );
}

export default AcceptReturnMoto;
