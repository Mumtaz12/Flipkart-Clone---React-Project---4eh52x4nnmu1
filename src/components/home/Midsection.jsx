// imports from constants folder
import { imageURL } from '../../constants/data';

// mui imports
import { Box, Grid } from '@mui/material';
import styled from '@emotion/styled';

//-----Mui styles -----------//
 const Wrapper = styled(Grid)`
 margin-top: 10px;
 justify-content: space-between;
 `;
//----xxx----mui styles ---xxx-----//

function Midsection() {
  return (
    <Wrapper item lg={12} md={12} sm={12} xs={12} container>
       {imageURL.map((image,i) => (
        <Grid item lg={4} md={4} sm={12} xs={12} key={i}>
        <img src={image} style={{width: '100%'}}/>
        </Grid>
       ))}
    </Wrapper>
  )
}

export default Midsection


