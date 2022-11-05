import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { PAGES } from '../../../utils/Constants';

const ClientDashboard = (props) => {
    // const userType = props.userType;
    const navigate = useNavigate();

    const handelOnClick = (path: string) => {
        navigate(path);
    }

    return (
        <>
            <div className='sf-flex-grid sf-justify'>
                <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.BUSINESS_INFO.path) }}>
                    Business
                </Button>

                <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.PG_SEARCH.path) }}>
                    Warehouse
                </Button>

                <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.ADD_INFO.path) }}>
                    User Management
                </Button>
                <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.ADD_INFO.path) }}>
                    Payments
                </Button>
            </div>
            <div className='sf-flex-grid sf-justify'>
                <Button className='m-sm sf-btn w100' size="lg" active>
                    Location
                </Button>

                <Button className='m-sm sf-btn w100' size="lg" active>
                    View Reports
                </Button>

                <Button className='m-sm sf-btn w100' size="lg" active>
                    Contact update
                </Button>

                <Button className='m-sm sf-btn w100' size="lg" active>
                    Lease Establish
                </Button>
            </div>
        </>
    )
}

export default ClientDashboard;