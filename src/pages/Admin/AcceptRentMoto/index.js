import classNames from 'classnames/bind';
import styles from './AcceptMoto.module.scss';
import {
    MDBBadge,
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from 'mdb-react-ui-kit';
import { useState, useEffect, useContext, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPen,
    faCheckCircle,
    faDatabase,
    faExclamation,
    faMoneyBill,
    faAngleLeft,
    faAngleRight,
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import useDebounce from '~/hooks/useDebounce';
import { AppContext } from '~/Context/AppContext';
import ModalHandleRentMoto from '~/components/Modal/ModalHandleRentMoto';
import Policy from '~/components/Policy';
import * as adminServices from '~/api/adminServices';

const cx = classNames.bind(styles);
const PAGE = 1;

function AcceptMoto() {
    const {
        isModalAcceptVisible,
        setIsModalAcceptVisible,
        setTypeModal,
        setData,
        dataRentMoto,
        setDataRentMoto,
    } = useContext(AppContext);
    const [totalPage, setTotalPage] = useState();
    const [pageNumber, setPageNumber] = useState(PAGE);
    const [dash, setDash] = useState();
    const [selectedOption, setSelectedOption] = useState('DF');

    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleChangeInput = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    useEffect(() => {
        const thongKe = async () => {
            const result = await adminServices.thongKe();
            setDash(result);
        };
        thongKe();

        if (!debouncedValue.trim()) {
            if (selectedOption === 'DF') {
                fetchData();
            } else if (selectedOption === 'Accepted') {
                fetchDataAccepted();
            } else if (selectedOption === 'UnAccepted') {
                fetchDataUnAccepted();
            }
        }
        // call API
        if (selectedOption === 'DF') {
            const fetch = async () => {
                setLoading(true);
                fetchData(debouncedValue);
                setLoading(false);
            };
            fetch();
        } else if (selectedOption === 'Accepted') {
            const fetch = async () => {
                setLoading(true);
                fetchDataAccepted(debouncedValue);
                setLoading(false);
            };
            fetch();
        } else {
            const fetch = async () => {
                setLoading(true);
                fetchDataUnAccepted(debouncedValue);
                setLoading(false);
            };
            fetch();
        }
    }, [pageNumber, isModalAcceptVisible, debouncedValue]);

    const fetchData = async (debouncedValue = '') => {
        const result = await adminServices.getAllOrder({
            q: debouncedValue,
            page: pageNumber,
        });
        setDataRentMoto(result.data);
        setTotalPage(result.soTrang);
    };

    const fetchDataAccepted = async (debouncedValue = '') => {
        const result = await adminServices.getAllOrderAccepted({
            q: debouncedValue,
            page: 1,
        });
        setDataRentMoto(result.data);
        setTotalPage(result.soTrang);
    };

    const fetchDataUnAccepted = async (debouncedValue = '') => {
        const result = await adminServices.getAllOrderUnAccepted({
            q: debouncedValue,
            page: 1,
        });
        setDataRentMoto(result.data);
        setTotalPage(result.soTrang);
    };

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        // Gọi API tương ứng với giá trị đã chọn
        if (selectedValue === 'DF') {
            fetchData();
        } else if (selectedValue === 'Accepted') {
            fetchDataAccepted();
        } else if (selectedValue === 'UnAccepted') {
            fetchDataUnAccepted();
        }
    };

    const handleTotalOneRent = (item) => {
        if (item?.chiTiet) {
            return item.chiTiet.reduce((total, item) => {
                return total + item.giaThue;
            }, 0);
        }
        return 0;
    };

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
                    value={dash?.TongSoDangKyThueXe}
                />
                <Policy
                    icon={<FontAwesomeIcon icon={faCheckCircle} />}
                    name={'Số đơn đã duyệt'}
                    value={dash?.TongSoDangKyThueXeDaDuyet}
                />
                <Policy
                    icon={<FontAwesomeIcon icon={faExclamation} />}
                    name={'Số đơn chưa duyệt'}
                    value={dash?.TongSoDangKyThueXeChuaDuyet}
                />
                <Policy
                    icon={<FontAwesomeIcon icon={faMoneyBill} />}
                    name={'Tổng tiền'}
                    value={`${dash?.TongTienDangKyThueXe}.000 VND`}
                />
            </div>
            <div className={cx('action-table')}>
                {/* <Search /> */}
                <div>
                    <div className={cx('search')}>
                        <input
                            value={searchValue}
                            placeholder='Tìm kiếm'
                            type='text'
                            spellCheck={false}
                            onChange={handleChangeInput}
                        />
                        {!!searchValue && !loading && (
                            <button
                                className={cx('clear')}
                                onClick={handleClear}
                            >
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        {loading && (
                            <FontAwesomeIcon
                                className={cx('loading')}
                                icon={faSpinner}
                            />
                        )}
                        <button
                            className={cx('search-btn')}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} on />
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <select
                            className={cx('select')}
                            onChange={handleChange}
                        >
                            <option value='DF'>Mặc định</option>
                            <option value='Accepted'>Đã duyệt</option>
                            <option value='UnAccepted'>Chưa duyệt</option>
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
                    {dataRentMoto?.map((item, index) => {
                        return (
                            <tr
                                style={{ cursor: 'pointer' }}
                                key={index}
                                onClick={() => {
                                    setIsModalAcceptVisible(true);
                                    setTypeModal('ACCEPT');
                                    setData(item);
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
                                            {item.hoTen}
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
                                    <p className='fw-bold mb-1'>
                                        {handleTotalOneRent(item)}.000
                                    </p>
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
                                                setData(item);
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
                <button
                    className={cx('btn-nav', 'left-btn')}
                    onClick={() => {
                        if (pageNumber > 1) setPageNumber((prev) => prev - 1);
                    }}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div className={cx('page-numbers')}>
                    {Array.from({ length: totalPage }, (_, i) => i + 1).map(
                        (page) => (
                            <button
                                className={cx(
                                    'btn-page',
                                    pageNumber == page ? 'btn-selected' : ''
                                )}
                                onClick={() => setPageNumber(page)}
                                key={page}
                            >
                                {page}
                            </button>
                        )
                    )}
                </div>
                <button
                    className={cx('btn-nav', 'right-btn')}
                    onClick={() => {
                        if (pageNumber < totalPage) {
                            setPageNumber((prev) => prev + 1);
                        } else {
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </nav>
        </div>
    );
}

export default AcceptMoto;
