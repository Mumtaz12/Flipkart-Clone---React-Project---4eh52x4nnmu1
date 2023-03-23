// Mui imports
import styled from '@emotion/styled';
import { Button, Typography, Box, Divider } from '@mui/material';

// react carouser imports
import Carousel from 'react-multi-carousel';

// react-countdown imports
import Countdown from 'react-countdown';
import { Fragment } from 'react';

// react-router-dom imports
import { Link } from 'react-router-dom';

// responsive breakPoint data for carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

//---------custom mui styles-------------//
const Component = styled(Box)`
  margin-top: 10px;
  background: #ffff;
`;

const Deal = styled(Typography)`
  padding: 10px 15px;
  display: flex;
`;

const Timer = styled(Box)`
  align-items: center;
  margin-right: 10px;
  color: #7f7f7f;
  padding-left: 10px;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;
  line-height: 23px;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;

const Image = styled('img')`
  width: auto;
  height: 150px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

//----end-----custom mui styles------end-------//

export default function Slide({ products, title, timer }) {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Timer variant='span'>
        {hours}:{minutes}:{seconds} Left
      </Timer>
    );
  };

  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Fragment>
            <Box>
              <img
                src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg'
                style={{ width: 24 }}
              />
            </Box>
            <Countdown date={Date.now() + 3.6e7} renderer={renderer} />{' '}
          </Fragment>
        )}
        <ViewAllButton variant='contained'>View</ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        keyBoardControl={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        containerClass='carousel-container'
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        {products.map((product, i) => (
          <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
            <Box sx={{ padding: '10px 15px', textAlign: 'center' }} key={i}>
              <Image src={product.image} />
              <Text style={{ fontWeight: 600, color: '#212121' }}>
                {product.title}
              </Text>
              <Text style={{ color: 'green' }}>{product.discount}</Text>
              <Text style={{ color: '#212121', opacity: '.6' }}>
                {product.count}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
}
