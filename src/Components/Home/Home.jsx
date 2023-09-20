import React from 'react'
import Appliances from './homeComponents/Appliances'
import Bestselling from './homeComponents/Bestselling'
import Electronics from './homeComponents/Electronics'
import Fashion from './homeComponents/Fashion'
import Groceries from './homeComponents/Groceries'
import Mobile from './homeComponents/Mobile'
import TopOffers from './homeComponents/TopOffers'
import CategoryBar from './homeComponents/CategoryBar'
import BeforeFooter from './homeComponents/BeforeFooter'
import { Box } from '@chakra-ui/react'
import CategoryBarForMobile from './homeComponents/CategoryBarForMobile'
import {ToastContainer} from "react-toastify";

const Home = () => {
    
    return (
        <Box>
            <CategoryBar />
            {/*<FinalBanner />*/}
            <CategoryBarForMobile />
            {/*<OfferBanner />*/}
            {/*<BannerOffer />*/}
            <Fashion />
            <Bestselling />
            <Appliances />
            {/*<BannerOffer2 />*/}
            <TopOffers />
            <Electronics />
            <Groceries />
            <Mobile />
            <BeforeFooter />
            <ToastContainer />
        </Box>
    )
}

export default Home