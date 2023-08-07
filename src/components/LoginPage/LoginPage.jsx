import React, { useState } from 'react'
import './loginPage.css'
import loginImage from './loginImage.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
function LoginPage({ handleCapture }) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [loginuser, setLoginUser] = useState(false)

  const [messegeusername, setMessegeUsername] = useState("");
  const [messegepassword, setPassword] = useState("");

  const handleClick = (e) => {
    if(localStorage.getItem(name)!=null){

      let storedValue = localStorage.getItem(name).split(',')[0];
      let userName = localStorage.getItem(name).split(',')[1];
      let userEmail = localStorage.getItem(name).split(',')[2];
    
    
        if (storedValue===pass && userEmail===name) {
          setLoginUser(true);
          localStorage.setItem("userLoggedIn", userName);
              handleCapture();
    
        } else {
          alert('Please enter Correct detail! ')
        }
    } else{
      alert('You have to register first');
    }
  }
  return (
    <div className='loginPage'>
      <div className="leftLoginPage">
        <h2>Login</h2>
        <p>Get access to your Orders,<br /> Wishlist and Recommendations</p>
        <img src={loginImage} alt="" />
      </div>
      <div className="rightLoginPage">
        <Form
          // onFinish={handleCapture}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                // message: "Please input your  Username!"
              },
            ]}
          >
            <Input  onChange={(e) => setName(e.target.value)}
              prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
               {/* <p style={{colo:"red"}}>{messegeusername}</p> */}
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                // message: "Please input your valid Password!",
              },
            ]}
          >
            <Input
              value onChange={(e) => setPass(e.target.value)}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
            {/* <p style={{colo:"red"}}>{messegepassword}</p> */}
          </Form.Item>

          <Form.Item>
            <Button onClick={handleClick} type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>

            OR,  
            <Link to='/register'>
            <a >Register Now!</a>
            </Link>
          </Form.Item>
        </Form>

      </div>
    </div>
  )
}

export default LoginPage;