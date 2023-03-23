// Mui imports
import styled from '@emotion/styled';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

//react-redux imports
import { useSelector } from 'react-redux';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

//components imports
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';

//---------MUI styles-----------//
const Container = styled(Grid)(({theme}) => ({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]:{
        padding: '15px 0'
    }
}))

const Header = styled(Box)({
    padding: '15px 25px',
    background: '#fff'
})

const ButtonWrapper = styled(Box)({
    padding: '16px 22px',
    background: '#fff',
    boxShadow: '0 -2px 10px 0 rgb(0 0 0/10%)',
    borderTop: '1px solid #f0f0f0'
})

const StyledButton = styled(Button)({
    display: 'flex',
    marginLeft: 'auto',
    color: "#fff",
    background: '#fb641b',
    width: '250px',
    height: '51px',
    borderRadius: '2px',
    '&:hover' : {
      background: '#fb641b'
    }
})

const LeftContainer = styled(Grid)(({theme}) => ({
    paddingRight: '15px',
    [theme.breakpoints.down('md')]:{
        marginBottom: 15
    }
}))
//----xxx-----MUI styles----xxx-------//

function Cart() {
      const buyNow = async () => {
        let response = await payUsingPaytm({
          amount: 500,
          email: 'codeforinterview01@gmail.com',
        });
        var information = {
          action: 'https://securegw-stage.paytm.in/order/process',
          params: response,
        };
        post(information);
      };
  const { cartItems } = useSelector(state => state.cart);
  return (
    <>
      {cartItems.length ? (
        <Container container>
          <LeftContainer Item lg={9} md={9} sm={12} xs={12}>
            <Header>
                <Typography>My Cart({cartItems.length})</Typography>
            </Header>
            {
                cartItems.map(cartItem => (
                    <CartItem item={cartItem}/>
                ))
            }
            <ButtonWrapper>
                <StyledButton onClick={() => buyNow()}>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftContainer>
          <Grid Item lg={3} md={3} sm={12} xs={12}>
                <CartTotal cartItems={cartItems}/>
          </Grid>
        </Container>
      ) : 
        <EmptyCart/>
      }
    </>
  );
}

export default Cart;
