import ModalAccount from '~/components/Modal/ModalAccount';
import classNames from 'classnames/bind';
import styles from './Account.module.scss';
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
import { useState, useEffect, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from '~/Context/AppContext';
import * as adminServices from '~/api/adminServices';

const cx = classNames.bind(styles);

const TYPE_MODAL = {
    add: 'ADD',
    update: 'UPDATE',
};

function Account() {
    const [accountData, setAccountData] = useState();
    const [page, setPage] = useState(1);
    const { setIsModalAccountVisible, setTypeModal, setData } =
        useContext(AppContext);

    useEffect(() => {
        const fetch = async () => {
            const result = await adminServices.getAllUser();
            setAccountData(result);
        };

        fetch();
    }, [page]);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('header')}>
                <FontAwesomeIcon icon={faUsers} className={cx('header-icon')} />
                Quản lí tài khoản
            </h1>
            <MDBBtn
                onClick={() => {
                    setIsModalAccountVisible(true);
                    setTypeModal(TYPE_MODAL.add);
                    setData(undefined);
                }}
                className={cx('button_showModal')}
            >
                <FontAwesomeIcon icon={faPlus} />
            </MDBBtn>
            <ModalAccount />
            <MDBTable align='middle' className={cx('table')}>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Tên</th>
                        <th scope='col'>Tài khoản</th>
                        <th scope='col'>Mật khẩu</th>
                        <th scope='col'>Role</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {accountData?.map((item) => {
                        return (
                            <tr key={item.maTaiKhoan}>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                            alt=''
                                            style={{
                                                width: '45px',
                                                height: '45px',
                                            }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>
                                                {item.hoTen}
                                            </p>
                                            <p className='text-muted mb-0'>
                                                {item.email}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.taiKhoan}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.matKhau}
                                    </p>
                                </td>
                                <td>
                                    {item.phanQuyen == 'Admin' ? (
                                        <MDBBadge
                                            color='success'
                                            pill
                                            className='fw-normal mb-1'
                                        >
                                            {item.phanQuyen}
                                        </MDBBadge>
                                    ) : (
                                        <MDBBadge
                                            color='warning'
                                            pill
                                            className='fw-normal mb-1'
                                        >
                                            {item.phanQuyen}
                                        </MDBBadge>
                                    )}
                                </td>
                                <td>
                                    {/* <MDBBtn
                                        color="link"
                                        rounded
                                        size="sm"
                                        onClick={() => {
                                            setIsModalAccountVisible(true);
                                            setTypeModal(TYPE_MODAL.update);
                                            setData(item);
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faPen}
                                            className={cx("actions-btn")}
                                        />
                                    </MDBBtn> */}
                                    <MDBBtn color='link' rounded size='sm'>
                                        <FontAwesomeIcon
                                            icon={faLock}
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
                        <MDBPaginationLink href='#' active aria-current='page'>
                            1<span className='visually-hidden'>(current)</span>
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href='#'>2</MDBPaginationLink>
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

export default Account;
