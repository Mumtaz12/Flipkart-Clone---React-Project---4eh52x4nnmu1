import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './buyProduct.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Modal } from 'antd';
import { MDBBtn,MDBRadio, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import Payment from './Payment';

export default function BuyProduct({handlePayment, tprice,handleCartClear}) {
  const[paymentmodal, setPaymentmodal] = useState(false);
  const[fname, setfname] = useState("");
  const[lname, setlname] = useState("");
  const[add, setAdd] = useState("");
  const[state, setState] = useState("");
  const[city, setCity] = useState("");
  const[zip, setZip] = useState("");
  const[email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleBill= () => {
    if(fname === "" || lname === "" || add==="" || state==="" || city==="" || zip==="" || email===""){
      window.alert("Please enter all details!")
    }else{
      setPaymentmodal(true);
      handlePayment();
    }
  }
  const handleCancel =() => {
    navigate("/")
  }
  return (
    <>
    <MDBContainer className="py-5" style={{ maxWidth: '1100px' }}>
      <MDBRow className="justify-content-center align-items-center">
        <MDBCol>
          <MDBCard className="my-4 shadow-3">
            <MDBRow className="g-0">
              <MDBCol md="6" className="d-xl-block bg-image">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp" alt="Sample photo" fluid />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                  <div className="justify-content-center align-items-center h-100">
                    <div className="text-center" style={{ marginTop: '220px' }}>
                      <MDBIcon fas icon="truck text-white" size="3x" />
                      <p className="text-white title-style">Flipkart delivery</p>
                      <p className="text-white mb-0"></p>

                      <figure className="text-center mb-0">
                        <blockquote className="blockquote text-white">
                          <p className="pb-3">
                            <MDBIcon fas icon="quote-left text-primary" size="xs" style={{color: 'hsl(210, 100%, 50%)'}} />
                            <span className="lead font-italic">Everything at your doorstep.</span>
                            <MDBIcon fas icon="quote-right text-primary" size="xs" style={{color: 'hsl(210, 100%, 50%)'}} />
                          </p>
                        </blockquote>
                      </figure>
                    </div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody className="p-md-5 text-black">
                  <MDBTypography tag="h3" className="mb-4 text-uppercase">Delivery Info</MDBTypography>

                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <MDBInput value={fname} onChange={(e)=>setfname(e.target.value)} required label='First name' type='text' size="lg" />
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                      <MDBInput value={lname} onChange={(e)=>setlname(e.target.value)} required label='Last name' type='text' size="lg" />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput value={add} onChange={(e)=>setAdd(e.target.value)} required label='Address' type='text' className="mb-4" size="lg" />

                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <MDBInput value={state} onChange={(e)=>setState(e.target.value)} required label='State' type='text' size="lg" />
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                      <MDBInput value={city} onChange={(e)=>setCity(e.target.value)} required label='City' type='text' size="lg" />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput value={zip} onChange={(e)=>setZip(e.target.value)} required label='Zip' type='text' className="mb-4" size="lg" />

                  <MDBInput value={email} onChange={(e)=>setEmail(e.target.value)} required label='Email' type='text' className="mb-4" size="lg" />
                  <MDBBtn onClick={handleCancel} size="lg" className="ms-2" style={{backgroundColor: 'red'}}>Cancel</MDBBtn>
                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn onClick={handleBill} size="lg" className="ms-2" style={{backgroundColor: 'hsl(210, 100%, 50%)'}}>Place order</MDBBtn>
                    <Modal open={paymentmodal} footer={null}>
                      <Payment fname={fname} lname = {lname} tprice={tprice} handleCartClear={handleCartClear} />
                    </Modal>
                  </div>

                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
   </>
  );
}
{/* <Payment handlePayment={handlePayment} /> */}