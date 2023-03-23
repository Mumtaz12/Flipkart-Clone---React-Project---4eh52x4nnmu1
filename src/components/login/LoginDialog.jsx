import { useState } from 'react';

// service api imports (axios file)
import { authLogin, authSignup } from '../../service/api';

// context api imports
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';

// mui imports
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography, styled } from '@mui/material';

//-------- custom mui styles ----------//
const Component = styled(Box)`
  height: 80vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 20%;
  height: 80%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  &:hover {
    background: #fb641b;
  }
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  line-height: 0;
  font-weight: 600;
  margin-top: 10px;
  color: #ff6161;
`;

//----**---- custom mui styles ----**-----//

// getting open & setOpen state from customButtons
function LoginDialog({ open, setOpen }) {
  const [error, setError] = useState(false);
  const { setAccount } = useContext(DataContext); // context api state

  const handleClose = () => {
    setOpen(false);
    setError(false); //  reseting the error after closeing login dialog
  };

  // initial state when changing login & signup dialog
  const accountIntialState = {
    login: {
      view: 'login',
      heading: 'Login',
      subHeading: 'Get access to your Orders, Wishlist and Recommendations',
    },
    signUp: {
      view: 'signup',
      heading: "Looks like you're new here!",
      subHeading: 'Sign up with your mobile number to get started',
    },
  };

  const [account, toggleAccount] = useState(accountIntialState.login); // initial state of the dialog is login

  // -----state for signup form and functions-----//
  const [signUp, setSignUp] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  // changing to singup dialog when clicking signup
  const toggleSignup = () => {
    toggleAccount(accountIntialState.signUp);
  };

  const onInputChange = e => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async () => {
    let res = await authSignup(signUp);
    if (!res) return;
    handleClose();
    // setting firstname from user data to header component
    setAccount(signUp.firstname);
  };

  // --**---state for signup form and functions--**---//

  //----- state for login form and functions ------//
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const onValueChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    let res = await authLogin(login);
    if (res.status === 200) {
      handleClose();
      setAccount(res.data.firstname);
    } else {
      setError(true);
    }
  };

  //----**- state for login form and functions ---**---//

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: 'unset' } }}
    >
      <Component>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image>
            <Typography variant='h5'>{account.heading}</Typography>
            <Typography>{account.subHeading}</Typography>
          </Image>
          {account.view === 'login' ? (
            <Wrapper>
              <TextField
                variant='standard'
                label='Enter username'
                onChange={e => onValueChange(e)}
                name='username'
              />
              {error && <Error>Please Enter valid username or password</Error>}
              <TextField
                variant='standard'
                label='Enter Password'
                onChange={e => onValueChange(e)}
                name='password'
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={handleLogin}>Login</LoginButton>
              <Typography sx={{ textAlign: 'center' }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant='standard'
                label='Enter Firstname'
                onChange={e => onInputChange(e)}
                name='firstname'
              />
              <TextField
                variant='standard'
                label='Enter Lastname'
                onChange={e => onInputChange(e)}
                name='lastname'
              />
              <TextField
                variant='standard'
                label='Enter Username'
                onChange={e => onInputChange(e)}
                name='username'
              />
              <TextField
                variant='standard'
                label='Enter Email'
                onChange={e => onInputChange(e)}
                name='email'
              />
              <TextField
                variant='standard'
                label='Enter Password'
                onChange={e => onInputChange(e)}
                name='password'
              />
              <TextField
                variant='standard'
                label='Enter Phone'
                onChange={e => onInputChange(e)}
                name='phone'
              />
              <LoginButton onClick={handleSignUp}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog;
