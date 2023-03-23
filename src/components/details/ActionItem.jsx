//react-router-imports
import {useNavigate} from 'react-router-dom';

// react-redux imports
import {useDispatch} from 'react-redux';
import {addCart} from '../../redux/actions/cartAction'
// Mui imports
import { Box, Button, styled } from '@mui/material'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useState } from 'react';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

//--------MUI custom styles--------------//
const LeftContainer = styled(Box)(({theme}) => ({
padding: '40px 0 0 80px',
[theme.breakpoints.down('lg')]:{
  padding: '20px 40px'
}
}))
 
const Image = styled('img')({
    width: '90%',
    padding: '15px'
})

const StyledButton = styled(Button)(({theme}) => ({
 width: '48%',
 height: '50px',
 borderRadius: '2px',
 [theme.breakpoints.down('lg')]:{
  width: '46%'
 },
 [theme.breakpoints.down('md')]:{
  width: '48%'
 }
}))

//----xxxxxx----MUI custom styles-------xxxxxxx-------//

function ActionItem({product}) {
  const [quantity,setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = product;

  const addItemToCart = () => {
    dispatch(addCart(id,quantity))
     navigate('/cart')

    }

    const buyNow = async () => {
      let response = await payUsingPaytm({
        amount: 500,
        email: 'mohammadmumtaz@gmail.com',
      });
      var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response,
      };
      post(information);
    };

  return (
    <LeftContainer>
      <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0' }}>
        <Image src={product.image} />
      </Box>
      <StyledButton
        variant='contained'
        style={{ marginRight: 10, background: '#ff9f00', fontSize: '12px' }}
        onClick={addItemToCart}
      >
        <Cart /> Add to Cart
      </StyledButton>
      <StyledButton variant='contained' style={{ background: '#fb541b' }} onClick={() => buyNow()}>
        <Flash /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
}

export default ActionItem