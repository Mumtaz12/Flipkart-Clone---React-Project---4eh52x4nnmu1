// mui imports
import { Box, styled } from '@mui/material';

//component imports
import Slide from './Slide';

//--------MUi custom styles----------------//
const Component = styled(Box)`
display: flex;
`;

const LeftComponent = styled(Box)(({theme}) => ({
 width: '83%',
 [theme.breakpoints.down('md')]:{
    width: '100%'
 }
}))

const RightComponent = styled(Box)(({theme}) => ({
  background: '#FFFFFF',
  padding: 5,
  marginTop: 10,
  width: '10%',
  textAlign: 'center',
  [theme.breakpoints.down('md')]:{
    display: 'none'
  }
}))

//----xxx----MUi custom styles------xxx----------//


function Midslide({ products, title, timer }) {
  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>
      <RightComponent>
        <img
          src='https://rukminim1.flixcart.com/fk-p-flap/464/708/image/8ca628d8c3eb69ae.jpg?q=70'
          style={{ width: 217 }}
        />
      </RightComponent>
    </Component>
  );
}

export default Midslide;
