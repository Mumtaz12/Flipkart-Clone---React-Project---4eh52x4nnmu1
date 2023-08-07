import React, { useState } from 'react'
// import "mdb-react-ui-kit/css/free/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Modal } from 'antd';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";
import './buyProduct.css'
import { Link } from 'react-router-dom';
function Payment({ fname, lname, tprice,handleCartClear }) {
  const handlePaid = () => {
    
  }
  const[purchased, setPurchased] = useState(false);
  const handlePurchase = ()=>{
    handleCartClear();
    setPurchased(true);
    alert(`${fname} ${lname} you have purchased succeessfully`);
  }
  return (
    <MDBContainer fluid className="py-0" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="7" lg="4" xl="12" >
          <MDBCard className="rounded-3">
            <MDBCardBody className="mx-1 my-2">
              <div className="d-flex align-items-center">
                <div>
                  <MDBIcon
                    fab
                    icon="cc-visa"
                    size="4x"
                    className="text-black pe-3"
                  />
                </div>
                <div>
                  <p className="d-flex flex-column mb-0">
                    <b>{fname} 
                    {lname}</b>
                    <span className="small text-muted">**** 9256</span>
                  </p>
                </div>
              </div>
              <div className="pt-3">
                <div className="d-flex flex-row pb-3">
                  <div
                    className="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
                    style={{ backgroundColor: "rgba(18, 101, 241, 0.07)" }}
                  >
                    <div className="d-flex align-items-center pe-3">
                      <MDBRadio
                        name="radioNoLabelX"
                        id="radioNoLabel11"
                        defaultChecked
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 small text-primary">
                        Total amount to be paid
                      </p>
                      <h6 className="mb-0 text-primary">₹{tprice}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row pb-3">
                <div className="rounded border d-flex w-100 px-3 py-2 align-items-center">
                  <div className="d-flex align-items-center pe-3">
                    <MDBRadio name="radioNoLabelX" id="radioNoLabel11" />
                  </div>
                  <div className="d-flex flex-column py-1">
                    <p className="mb-1 small text-primary">Other amount</p>
                    <div className="d-flex flex-row align-items-center">
                      <h6 className="mb-0 text-primary pe-1">₹ </h6>
                      <MDBInput
                        id="typeNumber"
                        type="number"
                        size="sm"
                        style={{ width: "55px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pb-1">
                <a href="#!" className="text-muted">
                  Go back
                </a>
                  <div>
                <MDBBtn size="lg" onClick={handlePurchase} >Pay amount</MDBBtn>
                <Link to={"/"}>
                <Modal open={purchased} footer={null} >
                  {fname} {lname}, have successfully purchased🎉🎉🎊🎊
                  <br/><br/>
                  <button style={{padding: "5px 25px 5px 25px"}} onClick={handlePaid}>Done</button>
                </Modal>
                </Link>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Payment