//components imports
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';

import {Link} from 'react-router-dom'

// mui imports
import { Badge, Box, Button, Typography } from '@mui/material';

//icon imports
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';

// context api
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';

// react-redux
import { useSelector } from 'react-redux';

//--------custom Mui styles--------//
const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  '& > *': {
    marginRight: '40px !important',
    fontSize: '16px',
    alignItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const Container = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  display: 'flex',
});

const LoginButton = styled(Button)({
  color: '#2874f0',
  background: '#FFFFFF',
  textTransform: 'none',
  padding: '5px, 40px',
  borderRadius: '2px',
  boxshadow: 'none',
  fontWeight: 600,
  height: '32px',
  '&:hover': {
    background: '#FFFFFF',
  },
});
//--------muistyles-----------//

export default function CustomButtons() {
  const {cartItems} = useSelector(state => state.cart)

  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext); // context states

  const OpenDialog = () => {
    setOpen(true);
  };

  return (
    /* if the user exits passing account username to profile & 
         setAccount to profile to change current state
      */
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant='contained' onClick={() => OpenDialog()}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 3 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container to='/cart'>
        <Badge badgeContent={cartItems?.length} color='secondary'>
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{marginLeft: 10}}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
}
// line 74: login dialog component from mui. passing open & setOpen state to it

// backup css style

// '& > *': {
//     marginRight: '40px',
//     fontSize: '16px',
//     alignItems: 'center',
//   },
