import React from 'react'
import './moreT.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GetAppIcon from '@mui/icons-material/GetApp';

const MoreT = () => {
  return (
    <div className='moreT'>
      <div className="moret_in">
        <NotificationsIcon />
        <p>Notification Preferences</p>
      </div>
      <hr />
      <div className="moret_in">
        <MonetizationOnIcon />
        <p>Sell on flipkart</p>
      </div>
      <hr />
      <div className="moret_in">
        <LiveHelpIcon />
        <p>24*7 customer Care</p>
      </div>
      <hr />
      <div className="moret_in">
        <TrendingUpIcon />
        <p>Advertise</p>
      </div>
      <hr />
      <div className="moret_in">
        <GetAppIcon />
        <p>Download App</p>
      </div>
    </div>
  )
}

export default MoreT