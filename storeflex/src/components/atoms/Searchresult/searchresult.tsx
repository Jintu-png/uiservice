import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './searchresult.css';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Filter from './filter';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import InputBox from '../textfield/InputBox';
import WarehouseDetails from './warehouseDetails';
import { Grid } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Searchresult() {

  const [warehouse, setWarehouse] = useState<Array<any>>([]);


  const [office, setOffice] = useState<Array<any>>([]);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const { state } = useLocation();

  const img = 'https://media.istockphoto.com/photos/warehouse-worker-picture-id1179825208';
  const img2 = 'https://media.istockphoto.com/id/1165357335/photo/male-worker-working-in-warehouse.webp?s=612x612&w=is&k=20&c=zcBK2kcxFDIBbd_aKXh_-kek_MGX30smjx64GURYGAU=';
  const img3 = 'https://media.istockphoto.com/id/980114338/photo/supervisor-and-employee-at-warehouse.webp?s=612x612&w=is&k=20&c=6TtBd269scsOMBrswgxy0tsa64_MsChdpXo_oBrz8yk=';
  const img4 = 'https://media.istockphoto.com/photos/warehouse-worker-picture-id1179825208';




  const price = '200';


  useEffect(() => {
    const stateData: any = state;
    setWarehouse(stateData);
  }, [])



  const addToCart = (e: any, selectedItem: any) => {
    navigate('/cart',{state: selectedItem});
  }



  const handleFilte = (data: any, filter: any) => {

    setFilter(filter);
    setOffice(data);

  }

  const WarehouseDetails = (id: String) => {
    navigate('/WarehouseDetails', { state: id });
  }



  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <>


      <div className="row">

        <Filter officeData={office} handleFilte={handleFilte} />




        <div className="col-md-10 p-0">

          <div className=' d-flex justify-content-center'>
            <div className="input-group">
              <select className="input-group-text">
                <option value="">All</option>
                <option value="">Search By Location</option>
                <option value="">Search By Warehouse</option>
                <option value="">Search By Company</option>
              </select>
              {/* </span> */}
              {/* </div> */}
              <input type="text" className="form-control" placeholder='ABC Company' />
              {/* <div className="input-group-append"> */}
              <span className="input-group-text btn primary-btn py-0 d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              {/* </div> */}
            </div>
          </div>

          <section>
            <div className="container">

              {warehouse.map((ware) => (
                <div className="row justify-content-center mb-3">
                  <div className="col-md-12 col-xl-12">
                    <div className="card shadow-0 border rounded-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                              <img src={img}
                                className="w-100" />
                              <a href="#!">
                                <div className="hover-overlay">
                                  <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5><BeenhereIcon />{ware.warehouseName}</h5>
                            <div className="d-flex flex-row">
                              {/* <div className="text-danger mb-1 me-2">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div> */}
                              <span>{ware.descp}</span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                              <span>{ware.streetAddrs}, {ware.state}, {ware.pincode}</span>
                              {/* <span className="text-primary"> • </span>
                              <span>Light weight</span>
                              <span className="text-primary"> • </span>
                            <span>Best finish<br /></span> */}
                            </div>
                            &nbsp;
                            <div className="mb-2 text-muted small">
                              <span><b>Minimum Order Quantity</b></span>
                              <span className="text-primary"> • </span>
                              <span>24</span>
                              {/* <span className="text-primary"> • </span>
                              <span>10x12<br /></span> */}
                            </div>
                            <div className="mb-2 text-muted small">
                              <span><b>Available Space</b></span>
                              <span className="text-primary"> • </span>
                              <span>9250 Sq Ft </span>
                              <Grid container className='p-top-md' spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid xs={4}>
                                  <InputBox data={{ type: 'date', name: 'fromdate', label: 'From', isDisabled: true }} />
                                </Grid>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Grid xs={4}>
                                  <InputBox data={{ type: 'date', name: 'todate', label: 'To', isDisabled: true }} />
                                </Grid>
                              </Grid>
                            </div>
                            <div className="mb-2 text-muted small">
                              <span><b>Industries Served</b></span>
                              <span className="text-primary"> • </span>
                              <span>Base Metals</span>
                              <span className="text-primary"> • </span>
                              <span>Industrial & Manufacturing Materials</span>
                            </div>
                            <div className="mb-2 text-muted small">
                              <span><b>Storage Layout</b></span>
                              <span className="text-primary"> • </span>
                              <span>Video Surveillance</span>
                              <span className="text-primary"> • </span>
                              <span>On Site Guards</span>
                              <span className="text-primary"> • </span>
                              <span>Security System</span>
                            </div>
                            {/* <p className="text-truncate mb-4 mb-md-0">
                              There are many variations of passages of Lorem Ipsum available, but the
                              majority have suffered alteration in some form, by injected humour, or
                              randomised words which don't look even slightly believable.
                            </p> */}
                          </div>
                          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1">&#x20B9; {price}.00</h4>
                              <span className="text-danger"><s>&#x20B9; 200.99</s></span>
                            </div>
                            <h6 className="text-success"> Few rooms left.</h6>
                            <div className="d-flex flex-column mt-4">
                              <button className="btn primary-btn-outline rounded-full" type="button" onClick={() => WarehouseDetails(ware.warehouseId)}>Details</button>
                              <button className="btn primary-btn rounded-full" style={{ marginTop: '5px' }} type="button" onClick={(e) => { addToCart(e, ware) }} >
                                Proceed to Buy
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}






            </div>
          </section>

        </div>

      </div>





    </>
  );
}