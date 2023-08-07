import React, { useState, useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MoreT from '../MoreT/MoreT';
import LoginT from '../Login/LoginT';
import 'tippy.js/themes/light.css';
import { Modal, Badge } from 'antd';
import './header.css'
import LoginPage from '../LoginPage/LoginPage';
import { Link, useNavigate } from 'react-router-dom'
import { DetailContext } from '../../Router';


const Header = ({searchValue,handleHome}) => {
  const [openmodal, setOpenModal] = useState(false);
  const handleCapture = () => {
    setOpenModal(false);
  }
  const { detail } = useContext(DetailContext);
 const navigate = useNavigate();
  const handelLogin =()=> {
    localStorage.removeItem('userLoggedIn');
      navigate("/");
  }
  let storedValue = localStorage.getItem('userLoggedIn');
  return (
    <div className="header" >
      <Link className="header_logo" onClick={handleHome} to={'/'}>
        <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart logo" />
        <div className="header_first1">
          <span style={{ fontSize: "10px", color: "white", fontStyle: "italic" }} >Explore</span>
          <span style={{ color: "#f9e107", fontSize: "10px", fontStyle: "italic" }}>Plus</span>
          <span>
            <img
              width="10px"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" />
          </span>
        </div>
      </Link>
      <div className="header_second">
        <input type="text" placeholder='Search for products, brands and more'  onChange={searchValue}/>
        <SearchIcon />
      </div>
      <div className="header_third">
        <Tippy
          content={<LoginT></LoginT>}
          theme="light"
          interactive={true}
          offset={[5, 18]}
        >
          <div className='header_third1'>

            {localStorage.getItem('userLoggedIn')!=null? (<><span className='welcome'>Welcome {storedValue}</span><button onClick={handelLogin}>Logout</button></>)
           : ( <button onClick={() => setOpenModal(true)}>Login</button>)

            }
            <Modal footer={false}
              open={openmodal} maskClosable={true} width={600} onCancel={() => setOpenModal(false)} bodyStyle={{ height: "500px", width: "600px" }}>
              <LoginPage handleCapture={handleCapture} />
            </Modal>
          </div>
        </Tippy>
      </div>
      <div className="header_fourth">
        <Tippy content={<MoreT></MoreT>}
          interactive={true}
          theme="light"
          offset={[5, 18]}
        >

          <span>More</span>
        </Tippy>
        <ExpandMoreIcon />
      </div>
      <Link className="header_fifth" to={'/cart'}>
        <Badge count={detail.length}>
          <ShoppingCartIcon style={{ color: "white" }} />
        </Badge>
        <p>Cart</p>
      </Link>
    </div>
  )
}

export default Header

//
// const Header = ({ searchValue, handleHome }) => {
//     const [openmodal, setOpenModal] = useState(false);
//     const handleCapture = () => {
//         setOpenModal(false);
//     };
//     const { detail } = useContext(DetailContext);
//     const navigate = useNavigate();
//     const handelLogin = () => {
//         localStorage.removeItem('userLoggedIn');
//         navigate('/');
//     };
//     let storedValue = localStorage.getItem('userLoggedIn');
//
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//
//     const toggleMobileMenu = () => {
//         setMobileMenuOpen(!mobileMenuOpen);
//     };
//
//     return (
//         <div className="header">
//             <div className="header_top">
//                 <div className="header_menu_icon" onClick={toggleMobileMenu}>
//                     <span className="menu_icon"></span>
//                     <span className="menu_icon"></span>
//                     <span className="menu_icon"></span>
//                 </div>
//                 <Link className="header_logo" onClick={handleHome} to={'/'}>
//                     <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart logo" />
//                     <div className="header_first1">
//                         <span style={{ fontSize: "10px", color: "white", fontStyle: "italic" }} >Explore</span>
//                         <span style={{ color: "#f9e107", fontSize: "10px", fontStyle: "italic" }}>Plus</span>
//                         <span>
//             <img
//                 width="10px"
//                 src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" />
//           </span>
//                     </div>
//                 </Link>
//             </div>
//
//             {mobileMenuOpen && (
//                 <div className="mobile_menu">
//                     <div className="mobile_menu_item">
//                         <Tippy
//                             content={<LoginT></LoginT>}
//                             theme="light"
//                             interactive={true}
//                             offset={[5, 18]}
//                         >
//                             <div className="header_third1">
//                                 {localStorage.getItem('userLoggedIn') != null ? (
//                                     <>
//                                         <span className="welcome">Welcome {storedValue}</span>
//                                         <button onClick={handelLogin}>Logout</button>
//                                     </>
//                                 ) : (
//                                     <button onClick={() => setOpenModal(true)}>Login</button>
//                                 )}
//                                 <Modal
//                                     footer={false}
//                                     open={openmodal}
//                                     maskClosable={true}
//                                     width={600}
//                                     onCancel={() => setOpenModal(false)}
//                                     bodyStyle={{ height: '500px', width: '600px' }}
//                                 >
//                                     <LoginPage handleCapture={handleCapture} />
//                                 </Modal>
//                             </div>
//                         </Tippy>
//                     </div>
//                     <div className="mobile_menu_item">
//                         <Tippy
//                             content={<MoreT></MoreT>}
//                             interactive={true}
//                             theme="light"
//                             offset={[5, 18]}
//                         >
//                             <div className="header_fourth1">
//                                 <span>More</span>
//                                 <ExpandMoreIcon />
//                             </div>
//                         </Tippy>
//                     </div>
//                     <div className="mobile_menu_item">
//                         <Link className="header_fifth" to={'/cart'}>
//                             <Badge count={detail.length}>
//                                 <ShoppingCartIcon style={{ color: 'white' }} />
//                             </Badge>
//                             <p>Cart</p>
//                         </Link>
//                     </div>
//                 </div>
//             )}
//
//             <div className="header_second">
//                 <input
//                     type="text"
//                     placeholder="Search for products, brands and more"
//                     onChange={searchValue}
//                 />
//                 <SearchIcon />
//             </div>
//             <div className="header_third">
//                 <Tippy
//                     content={<LoginT></LoginT>}
//                     theme="light"
//                     interactive={true}
//                     offset={[5, 18]}
//                 >
//                     <div className="header_third1">
//                         {localStorage.getItem('userLoggedIn') != null ? (
//                             <>
//                                 <span className="welcome">Welcome {storedValue}</span>
//                                 <button onClick={handelLogin}>Logout</button>
//                             </>
//                         ) : (
//                             <button onClick={() => setOpenModal(true)}>Login</button>
//                         )}
//                         <Modal
//                             footer={false}
//                             open={openmodal}
//                             maskClosable={true}
//                             width={600}
//                             onCancel={() => setOpenModal(false)}
//                             bodyStyle={{ height: '500px', width: '600px' }}
//                         >
//                             <LoginPage handleCapture={handleCapture} />
//                         </Modal>
//                     </div>
//                 </Tippy>
//             </div>
//             <div className="header_fourth">
//                 <Tippy
//                     content={<MoreT></MoreT>}
//                     interactive={true}
//                     theme="light"
//                     offset={[5, 18]}
//                 >
//                     <span>More</span>
//                 </Tippy>
//                 <ExpandMoreIcon />
//             </div>
//             <Link className="header_fifth" to={'/cart'}>
//                 <Badge count={detail.length}>
//                     <ShoppingCartIcon style={{ color: 'white' }} />
//                 </Badge>
//                 <p>Cart</p>
//             </Link>
//         </div>
//     );
// };
//
// export default Header





