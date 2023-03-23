//Mui imports
import { Typography, Box, styled, Table, TableRow, TableCell } from '@mui/material';
//MUi icon imports
import Sell from '@mui/icons-material/Sell';
import EventAvailable from '@mui/icons-material/EventAvailable';

//-------------------MUI custom css-----------------------//
const SmallText = styled(Box)`
    vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;
const StyledIcon = styled(Sell)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 18px;
`;
const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margint-top: 10px;
    border: none;
  }
`;
//--------xxx-----------MUI custom css----------xxx-------------//

function ProductDetails({ product }) {
  const date = new Date(new Date().getTime()+ (5 * 24 * 60 * 60 * 1000));
  return (
      <>
        <Typography>{product.image}</Typography>
        <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
          8 Ratings & 1 Reviews
          <Box component='span'>
            <img
                src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
                style={{ width: 77, marginLeft: 20 }}
            />
          </Box>
        </Typography>
        <SmallText>
          <Typography>
            <span style={{ fontSize: 28 }}>₹{product.price}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={{ color: '#878787' }}>
            <strike>₹{product.price}</strike>
          </span>
            &nbsp;&nbsp;&nbsp;
            <span style={{ color: '#388E3C' }}>{product.price} off</span>
          </Typography>
          <Typography>
            <StyledIcon />
            Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to
            ₹500*
          </Typography>
          <Typography>
            <StyledIcon />
            Buy this product and get upto ₹250 off on Flipkart Furniture
          </Typography>
          <Typography>
            <StyledIcon />
            5% Cashback on Flipkart Axis Bank Card
          </Typography>
          <Typography>
            <EventAvailable
                sx={{ marginRight: '10px', color: '#00CC00', fontSize: 18 }}
            />
            No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999
          </Typography>
        </SmallText>
        <Table>
          <TableRow>
            <TableCell sx={{ color: '#878787' }}>Delivery</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </TableRow>
          <ColumnText>
            <TableCell sx={{ color: '#878787' }}>Services</TableCell>
            <TableCell>No Returns Applicable</TableCell>

          </ColumnText>
          <ColumnText>
            <TableCell sx={{ color: '#878787' }}>Seller</TableCell>
            <TableCell sx={{color: 'blue'}}>METHOMecom</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}>
              <img
                  src='https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50'
                  alt='supercoin'
                  style={{ width: 390 }}
              />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell sx={{ color: '#878787' }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </Table>
      </>
  );
}

export default ProductDetails;