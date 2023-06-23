import classNames from 'classnames/bind';
import styles from './ManagerMoto.module.scss';
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
    faPlus,
    faMotorcycle,
    faAngleLeft,
    faAngleRight,
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    faToggleOn,
    faExclamation,
} from '@fortawesome/free-solid-svg-icons';

import Policy from '~/components/Policy';
import useDebounce from '~/hooks/useDebounce';
import ModalMoto from '~/components/Modal/ModalMoto';
import { AppContext } from '~/Context/AppContext';
import * as motoServices from '~/api/motoServices';
import Toast from '~/components/Toast';

const cx = classNames.bind(styles);
const PAGE = 1;
const TYPE_MODAL = {
    add: 'ADD',
    update: 'UPDATE',
};

function ManagerMoto() {
    const [motoData, setMotoData] = useState();
    const [page, setPage] = useState();
    const {
        isModalMotoVisible,
        setIsModalMotoVisible,
        setTypeModal,
        setData,
        isToastVisible,
    } = useContext(AppContext);

    const [dash, setDash] = useState();
    const [totalPage, setTotalPage] = useState();
    const [pageNumber, setPageNumber] = useState(PAGE);
    const [selectedOption, setSelectedOption] = useState('');

    // Search

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
            const result = await motoServices.thongKeXe();
            setDash(result);
        };
        const fetch = async () => {
            const result = await motoServices.getAllXeAdmin({
                q: debouncedValue,
                page: pageNumber,
                type: selectedOption,
            });
            setMotoData(result.data);
            setTotalPage(result.soTrang);
        };

        thongKe();
        fetch();
    }, [page, debouncedValue, pageNumber, selectedOption, isModalMotoVisible]);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        // Gọi API tương ứng với giá trị đã chọn
        if (selectedValue === '') {
            // fetchData();
        } else if (selectedValue === 'Employees') {
            // fetchDataEmployees();
        } else if (selectedValue === 'Customer') {
            // fetchDataCustomer();
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('header')}>
                <FontAwesomeIcon
                    icon={faMotorcycle}
                    className={cx('header-icon')}
                />
                Cập nhật thông tin xe
            </h1>

            <ModalMoto />
            <div className={cx('wrapper-policy')}>
                <Policy
                    icon={<FontAwesomeIcon icon={faMotorcycle} />}
                    name={'Tổng số xe'}
                    value={dash?.SumMoto}
                />
                <Policy
                    icon={<FontAwesomeIcon icon={faToggleOn} />}
                    name={'Tổng xe hiện đang cho thuê'}
                    value={dash?.SumMotoActive}
                />
                <Policy
                    icon={<FontAwesomeIcon icon={faExclamation} />}
                    name={'Tổng xe đang hư'}
                    value={dash?.SumMotoUnActive}
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
                <div className={cx('right-action')}>
                    <MDBBtn
                        onClick={() => {
                            setIsModalMotoVisible(true);
                            setTypeModal(TYPE_MODAL.add);
                            setData(undefined);
                        }}
                        className={cx('button_showModal')}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </MDBBtn>
                    <div>
                        <select
                            className={cx('select')}
                            onChange={handleChange}
                        >
                            <option value=''>Mặc định</option>
                            <option value='Xe ga'>Xe ga</option>
                            <option value='Xe số'>Xe số</option>
                            <option value='Xe côn tay'>Xe côn tay</option>
                        </select>
                    </div>
                </div>
            </div>
            <MDBTable align='middle' className={cx('table')}>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>ID xe</th>
                        <th scope='col'>Tên xe</th>
                        <th scope='col'>Hãng xe</th>
                        <th scope='col'>Giá xe</th>
                        <th scope='col'>Loại xe</th>
                        <th scope='col'>Trạng thái</th>
                        <th scope='col'>Biển số xe</th>
                        <th scope='col'>Mô tả</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {motoData?.map((item) => {
                        return (
                            <tr key={item.maXe}>
                                <td>
                                    <p className='fw-bold mb-1'>{item.maXe}</p>
                                </td>
                                <td>
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>
                                            {item.tenXe}
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.hangXe}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.giaThue}.000
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.loaiXe}
                                    </p>
                                </td>
                                <td>
                                    {item.trangThai == 'Hoạt động' ? (
                                        <MDBBadge
                                            color='success'
                                            pill
                                            className='fw-normal mb-1'
                                        >
                                            {item.trangThai}
                                        </MDBBadge>
                                    ) : (
                                        <MDBBadge
                                            color='warning'
                                            pill
                                            className='fw-normal mb-1'
                                        >
                                            {item.trangThai}
                                        </MDBBadge>
                                    )}
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.bienSoXe}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.moTa}
                                    </p>
                                </td>
                                <td>
                                    <MDBBtn
                                        color='link'
                                        rounded
                                        size='sm'
                                        onClick={() => {
                                            setIsModalMotoVisible(true);
                                            setTypeModal(TYPE_MODAL.update);
                                            setData(item);
                                        }}
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
            <Toast
                type={isToastVisible?.type}
                message={isToastVisible?.message}
                title={isToastVisible?.title}
            />
        </div>
    );
}

export default ManagerMoto;
