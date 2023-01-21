import React from 'react';
//import Footer from '../components/footer/footer';
import GuestNavbar from '../components/navbar/guest-navbar';
//import { Box, TextField, Button, Grid, Typography } from '@mui/material';
//import { DataGrid } from "@mui/x-data-grid";
import PaymentMsg from '../components/atoms/payment/paymentMsg';
//import { type } from '@testing-library/user-event/dist/type';



const paymentStatus = () => {
  // const columns = [
  //   {
  //     field: "actions",
  //     headerName: "ACTIONS",
  //     width: 100,
  //     sortable: false,
  //     disableColumnMenu: true,
  //     renderCell: (params) => {
  //       return (
  //         <Box
  //           sx={{
  //             width: "100%",
  //             height: "100%",
  //             display: "flex",
  //             justifyContent: "center",
  //             alignItems: "center",
  //           }}
  //         >
  //         </Box>
  //       );
  //     },
  //   },
  //   { field: "orderId", headerName: "Order Id", width: 80 },
  //   { field: "monthYear", headerName: "Month/Year", width: 100 },
  //   { field: "qty", headerName: "Qty", width: 150 },
  //   { field: "unitPrice", headerName: "Unit Price", width: 250 },
  //   { field: "price", headerName: "Price", width: 100 },
  //   { field: "tax", headerName: "Tax", width: 100 },
  //   { field: "totalPrice", headerName: "Total Price", width: 150 },
  //   { field: "paidAmount", headerName: "Paid Amount", width: 100 },
  //   { field: "balance", headerName: "Balance", width: 100 },
  //   { field: "status", headerName: "Status", width: 100 },
  //   { field: "payout", headerName: "Payout", witdh: 100},
  //   { field: "paid", headerName: "Paid", witdh: 100},
  //   { field: "balPayout", headerName: "Bal Payout", witdh: 100},
  // ];
  return (
    <div className="App">
      {<GuestNavbar />}
      {<PaymentMsg txStatus="success" orderAmount="100" referenceId="885704785"/>}
      {/* {<Footer />} */}
      <a href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>
    </div>
    // <>
          
                     
    //                     <Box>
    //                     <Typography component="p">Your Order Details</Typography>
    //                     <Grid container spacing={2} sx={{ mt: 0 }}>
    //                         <Grid item xs={6}>
    //                             <p>Warehouse:ABC</p>
    //                         </Grid>
    //                         <Grid item xs={6}>
    //                             <p>Order:</p>
    //                         </Grid>
    //                     </Grid>
    //                     <Grid container spacing={2} sx={{ mt: 1 }}>
    //                         <Grid item xs={6}>
    //                             <p>Order By: Mehboob Alam</p>
    //                         </Grid>
    //                         <Grid item xs={6}>
    //                             <p>Order Date: 01/01/2023</p>
    //                         </Grid>
    //                     </Grid>
    //                     <Grid container spacing={2} sx={{ mt: 1 }}>
    //                         <Grid item xs={6}>
    //                             <p>Start Date: 01/01/2012</p>
    //                         </Grid>
    //                         <Grid item xs={6}>
    //                             <p>End Date: 01/01/2024</p>
    //                         </Grid>
    //                     </Grid>
    //                     <div style={{ height: 370, width: "100%" }}>
    //         <DataGrid getRowHeight={() => 'auto'}
    //           rows={[
    //             {id:'1', orderId: '123', monthYear: '1270001', qty: '12-10-2022', unitPrice: '12-11-2022', price: 'UP, Noida', tax: '', totalPrice: '$90 million USD', paidAmount:'' ,balance: 'Active', status:'', payout:'',paid:'', balPayout:''},
    //             {id:'2', orderId: '123', monthYear: '1270001', qty: '12-10-2022', unitPrice: '12-11-2022', price: 'UP, Noida', tax: '', totalPrice: '$90 million USD', paidAmount:'' ,balance: 'Active', status:'', payout:'',paid:'', balPayout:''},
    //             {id:'3', orderId: '123', monthYear: '1270001', qty: '12-10-2022', unitPrice: '12-11-2022', price: 'UP, Noida', tax: '', totalPrice: '$90 million USD', paidAmount:'' ,balance: 'Active', status:'', payout:'',paid:'', balPayout:''},
    //           ]}
    //           componentsProps={{
    //           }}
    //           columns={columns}
    //           pageSize={5}
    //           rowsPerPageOptions={[5]}
    //           disableSelectionOnClick
    //         />
    //       </div>
    //                     <Grid container spacing={2} sx={{ mt: 1 }}>
    //                         <Grid item xs={12}>
    //                             <Button variant="contained" sx={{backgroundColor: '#fb8c00'}}>Verify</Button>
    //                         </Grid>
    //                     </Grid>
    //                     </Box>
                  
    //                     </>
  );
};

export default paymentStatus;