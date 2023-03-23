import { Grid, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';

// redux components
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productAction';
import ActionItem from './ActionItem';
import ProductDetails from './ProductDetails';

//------custom mui styles-------------//
const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;

const Container = styled(Grid)`
  background: #ffff;
  display: flex;
`;

const RightContainer = styled(Grid)`
  margin-top: 50px;
`;

//---xxx---custom mui styles-----xxx------//

function DetailsView() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector(state => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product, loading]);
console.log([dispatch, id, product, loading]);
  return (
    <Component>

      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer lg={8} md={8} sm={8} xs={12}>
            <ProductDetails product={product}/>
          </RightContainer>

        </Container>

      )}
    </Component>

  );
}

export default DetailsView;
