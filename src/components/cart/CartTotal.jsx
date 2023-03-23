import { Box, styled, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';

//--------MUi styles------------//
const Header = styled(Box)({
  padding: '15px 24px',
  background: '#fff',
  borderBottom: '1px solid #f0f0f0',
});

const Heading = styled(Typography)({
  color: '#878787',
});

const Container = styled(Box)({
  padding: '15px 24px',
  background: '#fff',
  '& > p': {
    marginBottom: '20px',
    fontSize: 14,
  },
  '& > h6': {
    marginBottom: '20px',
  },
});

const Price = styled(Box)({
  float: 'right',
});

const Discount = styled(Typography)({
  color: 'green',
  fontWeight: 400,
});

//----xxx----MUi styles-----xxx-------//

function CartTotal({ cartItems }) {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
        TotalAmount();
  },[cartItems])

  const TotalAmount = () => {
    let price = 0, discount = 0;
    cartItems.map(item => {
        price += item.price
        discount += (item.price - item.cost)
    })
    setPrice(price);
    setDiscount(discount);
  };

  return (
    <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
        <Typography>
          Price ({cartItems.length}) Items
          <Price component='span'>₹{price}</Price>
        </Typography>
        <Typography>
          Discount
          <Price component='span'>₹{discount}</Price>
        </Typography>
        <Typography>
          Delivery Charges
          <Price component='span'>₹40</Price>
        </Typography>
        <Typography variant='h6'>
          Total Amount
          <Price component='span'>₹{price - discount + 40}</Price>
        </Typography>
        <Discount>You will save ₹{discount - 40} in this order</Discount>
      </Container>
    </Box>
  );
}

export default CartTotal;
