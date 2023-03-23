// Mui imports
import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'

// React-redux imports
import { useDispatch } from 'react-redux';
import { removeCart } from '../../redux/actions/cartAction';

// utils imports
import { addEllipse } from '../../utils/utils';
import GroupedButton from './ButtonGroup';

//-------MUi styles---------//
const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background: #fff
`;

const LeftContainer = styled(Box)`
margin: 20px;
display: flex;
flex-direction: column;
`
const SmallText = styled(Typography)`
color: #878787;
font-size: 14px;
margin-top: 10px;
`;

const RemoveButton = styled(Button)({
    color: '#000',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 600,
})
//-----xxx---Mui styles---xxx------//

function CartItem({item}) {
    // redux functions
    const dispatch = useDispatch();
    const RemoveCart = (id) => {
        dispatch(removeCart(id));
    }
  return (
    <Component>
      <LeftContainer>
        <img src={item.url} alt='' srcset='' style={{height: 110, width: 110}}/>
        <GroupedButton/>
      </LeftContainer>
      <Box>
        <Typography>{addEllipse(item.title)}</Typography>
        <SmallText>Seller: mdNet</SmallText>
        <Typography style={{ margin: '20px 0' }}>
          <Box component='span' style={{ fontSize: 28,fontWeight: 600 }}>
            ₹{item.price}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component='span' style={{ color: '#878787' }}>
            <strike>₹{item.price}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component='span' style={{ color: '#388E3c' }}>
            {item.price} off
          </Box>
        </Typography>
        <RemoveButton onClick={() => RemoveCart(item.id)}>Remove</RemoveButton>
      </Box>
    </Component>
  );
}

export default CartItem