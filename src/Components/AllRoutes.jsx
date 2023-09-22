
import React from 'react'
import {Navigate, Route, Outlet,Routes} from 'react-router-dom'
import CartPage from './Cart/CartPage'
import CongratsPage from './Cart/CongratsPage'
import DeliveryPage from './Cart/DeliveryPage'
import OtpPages from './Cart/OtpPage'
import PaymentPage from './Cart/PayemntPage'
import Summary from './Cart/Summary'
import PrivateRoutes from './Context/PrivateRoutes'
import Home from './Home/Home'
import OrderPage from './OrderPage/OrderPage'
import Products from './Products.jsx/Products'
import Viewpage from './ProductsView.jsx/Viewpage'
import WishlistPage from "./Pages/WishlistPage";
import Rewards from "./Pages/Rewards";
import GiftCards from "./Pages/GiftCards";
import MyProfile from "./Pages/MyProfile";
import FlipkartPlusZone from "./Pages/FlipkartPlusZone";
import CustomerCare from "./Pages/CustomerCare";
import NotificationPreferences from "./Pages/NotificationPreferences";
import Advertise from "./Pages/Advertise";
import DownloadApp from "./Pages/DownloadApp";
import TrendingStores from "./Pages/TrendingStores";
import MoreOnFlipkart from "./Pages/MoreOnFlipkart";
import SellOnFlipkart from "./Pages/SellOnFlipkart";
import Coupons from "./Pages/Coupons";
import HelpCenter from "./Pages/HelpCenter";
import ChooseLanguage from "./Pages/ChooseLanguage";
import MyNotification from "./Pages/MyNotification";
import Register from "./Login/Register";
import {Login} from "./Login/Login";

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/*<Route path='/login' element={<Login/>}/>*/}
                <Route path='/products/:category_name' element={<Products/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/products/view/:item_id' element={<Viewpage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/wishlist' element={<WishlistPage/>}/>
                <Route path="/rewards" element={<Rewards/>}/>
                <Route path="/gift-cards" element={<GiftCards/>} />
                <Route path="/my-profile" element={<MyProfile/>} />
                <Route path="/" element={<Register/>} />
                <Route path="/flipkart-plus-zone" element={<FlipkartPlusZone/>} />
                <Route path="/notification-preferences" element={<NotificationPreferences/>} />
                <Route path="/customer-care" element={<CustomerCare/>} />
                <Route path="/advertise" element={<Advertise/>} />
                <Route path="/download-app" element={<DownloadApp/>} />
                <Route path="/trending-stores" element={<TrendingStores/>} />
                <Route path="/more-on-flipkart" element={<MoreOnFlipkart/>} />
                <Route path="/sell-on-flipkart" element={<SellOnFlipkart/>} />
                <Route path="/coupons" element={<Coupons/>} />
                <Route path="/help-center" component={<HelpCenter/>} />
                <Route path="/choose-languages" element={<ChooseLanguage/>} />
                <Route path='/my-notifications' element={<MyNotification/>}/>

                <Route  path="/delivery" element={
                    <PrivateRoutes>
                    <DeliveryPage/>
                    </PrivateRoutes>
                    }  />
                <Route  path="/summary" element={<Summary/>}  />
                <Route  path="/payment" element={
                    <PrivateRoutes> 
                        <PaymentPage/> 
                    </PrivateRoutes>
                    }/>
                <Route  path="/otp" element={
                    <OtpPages/>
                    }/>
                <Route  path="/congo" element={
                    <CongratsPage/>
                    }/>
                <Route path='/orderpage' element={
                    <PrivateRoutes>
                        <OrderPage/>
                    </PrivateRoutes>
                }/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default AllRoutes