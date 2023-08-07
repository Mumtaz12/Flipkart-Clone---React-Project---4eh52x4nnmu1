import React, { useState } from 'react'
import Header from '../Header/Header'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
const [email,setEmail] = useState();
const [name,setName] = useState();
const [password1,setPassword1] = useState();
const [password2,setPassword2] = useState();
const navigate = useNavigate();
function handleSubmit(){
  if(password1===password2){
    localStorage.setItem("userLoggedIn", name);
  localStorage.setItem(email, [password1,name,email]);
  alert("Congratulations... Registerd Successfully 🎉🎉🎊🎊🎊🎊🎉")
  navigate('/');
  } else{
    alert("Please Enter Correct Details!")
  }
}

  return (
    <>
    <Header />
    <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '20px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput onChange={(e)=>setName(e.target.value)} label='Your Name' id='form1' type='text' className='w-100'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput onChange={(e)=>setEmail(e.target.value)} label='Your Email' id='form2' type='email'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput onChange={(e)=>setPassword1(e.target.value)} label='Password' id='form3' type='password'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput onChange={(e)=>setPassword2(e.target.value)} label='Repeat your password' id='form4' type='password'/>
        </div>

        <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to get best offer!' />
        </div>

        <MDBBtn onClick={handleSubmit} className='mb-4' size='lg'>Register</MDBBtn>

      </MDBCol>

      <MDBCol md='10' lg='4' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://pbs.twimg.com/media/EfXl5f5UwAE8RaI.jpg' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
    </>
  )
}

export default RegisterPage