import classNames from 'classnames/bind';
import styles from './AcceptMoto.module.scss';
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
import {
    faPen,
    faCheckCircle,
    faDatabase,
    faExclamation,
    faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '~/Context/AppContext';
import ModalHandleRentMoto from '~/components/Modal/ModalHandleRentMoto';
import Search from '~/components/Search';
import Policy from '~/components/Policy';
import * as adminServices from '~/api/adminServices';

const cx = classNames.bind(styles);
const PAGE = 1;

function AcceptMoto() {
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
        };
        fetch();
    }, [page]);

    const totalRentPrice = dataRentMoto?.reduce((total, item) => {
        const chiTiet = item.chiTiet;
        const giaThueSum = chiTiet.reduce(
            (sum, detail) => sum + detail.giaThue,
            0
        );
        return total + giaThueSum;
    }, 0);

    const TotalUnApproved = dataRentMoto?.filter(
        (item) => item.status === 'Chưa duyệt'
    ).length;

    return (
        <div className={cx('wrapper')}>
            <ModalHandleRentMoto />
            <h1 className={cx('header')}>
                <FontAwesomeIcon
                    icon={faCheckCircle}
                    className={cx('header-icon')}
                />
                Duyệt đăng kí thuê xe
            </h1>
            <div className={cx('wrapper-policy')}>
                <Policy
                    icon={<FontAwesomeIcon icon={faDatabase} />}
                    name={'Tổng đơn đăng kí'}
                    value={dataRentMoto?.length}
                />
                <Policy
                    icon={<FontAwesomeIcon icon={faCheckCircle} />}
                    name={'Số đơn đã duyệt'}
                    value={TotalUnApproved}
                />
                <Policy
                    icon={<FontAwesomeIcon icon={faExclamation} />}
                    name={'Số đơn chưa duyệt'}
                    value={`${dataRentMoto?.length - TotalUnApproved}`}
                />
                <Policy
                    icon={<FontAwesomeIcon icon={faMoneyBill} />}
                    name={'Tổng tiền'}
                    value={`${totalRentPrice}.000 VND`}
                />
            </div>
            <div className={cx('action-table')}>
                <Search />
                <div>
                    <div>
                        <select className={cx('select')}>
                            <option value='DF'>Mặc định</option>
                            <option value='StartDate'>Ngày bắt đầu</option>
                            <option value='Accepted'>Đã duyệt</option>
                            <option value='StartDate'>Chưa duyệt</option>
                            <option value='Money'>Tổng tiền</option>
                        </select>
                    </div>
                </div>
            </div>
            <MDBTable align='middle' className={cx('table')}>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Mã đơn thuê</th>
                        <th scope='col'>Tên khách hàng</th>
                        <th scope='col'>Ngày bắt đầu</th>
                        <th scope='col'>Ngày kết thúc</th>
                        <th scope='col'>Trạng thái</th>
                        <th scope='col'>Nhân viên duyệt</th>
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
                                    setTypeModal('ACCEPT');
                                    setData(item.chiTiet);
                                }}
                            >
                                <td>
                                    <p className='fw-bold mb-1'>
                                        {item.maThue}
                                    </p>
                                </td>
                                <td>
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>
                                            {item.maKH}
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.ngayBD}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-bold mb-1'>
                                        {item.ngayKT}
                                    </p>
                                </td>
                                <td>
                                    {item.trangThai == 'Đã duyệt' ? (
                                        <MDBBadge
                                            color='success'
                                            pill
                                            className='fw-bold mb-1'
                                        >
                                            {item.trangThai}
                                        </MDBBadge>
                                    ) : (
                                        <MDBBadge
                                            color='danger'
                                            pill
                                            className='fw-bold mb-1'
                                        >
                                            {item.trangThai}
                                        </MDBBadge>
                                    )}
                                </td>
                                <td>
                                    <p className='fw-bold mb-1'>
                                        {item.maNVDuyet}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-bold mb-1'></p>
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
                                            onClick={() => {
                                                setIsModalAcceptVisible(true);
                                                setTypeModal('ACCEPT');
                                                setData(item.chiTiet);
                                            }}
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

export default AcceptMoto;
