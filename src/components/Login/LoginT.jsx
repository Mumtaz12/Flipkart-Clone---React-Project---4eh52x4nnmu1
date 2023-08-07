import React from 'react'
import './loginT.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import StoreIcon from '@mui/icons-material/Store';

const LoginT = () => {
    return (
        <div className='loginT'>

            <div className="logincus">
                <h2>New customer?</h2>
                <p>SignUp</p>

            </div>

            <hr />
            <div className="logint_in">
                <AccountCircleIcon />
                <p>My Profile</p>
            </div>
            <hr />
            <div className="logint_in">
                <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" />
                <p>Flipkart Plus</p>
            </div>
            <hr />
            <div className="logint_in">
                <StoreIcon />
                <p>Orders</p>
            </div>
            <hr />
            <div className="logint_in">
                <FavoriteIcon />
                <p>Wishlisht</p>
            </div>
            <hr />
            <div className="logint_in">
                <ConfirmationNumberIcon />
                <p>Rewards</p>
            </div>
            <hr />
            <div className="logint_in">
                <CardGiftcardIcon />
                <p>Gift Cards</p>
            </div>


        </div>
    )
}

export default LoginT