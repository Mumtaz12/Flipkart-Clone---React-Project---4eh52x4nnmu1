import { Box} from '@chakra-ui/react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/navbar';


function App() {
  // const location =useLocation();
  // const [checkOtpPage, setCheckOtpPage] = useState(false);
  // useEffect(()=>{
  //   if(location.pathname==='/otp'){
  //     setCheckOtpPage(true)
  //     console.log(location.pathname, " loaction ");
  //   }
  // },[])
  // console.log(location.pathname, " out from if loaction ");
  // const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
  // console.log(checkOtpPage, " checkOtpPage ");
  return (
    <Box>
      {/*{*/}
      {/*  checkOtpPage? "":<Navbar/>*/}
      {/*}*/}

      <Navbar/>
      <AllRoutes/>
      {/* <Home/>*/}
      {/* <Products/>*/}
      {/* <Viewpage/>*/}
      {/* <CartPage/>*/}
      {/*{*/}
      {/*  isLargerThan720? <Footer/> : ""*/}
      {/*}*/}
      {/* {*/}
      {/*  checkOtpPage?"": ""*/}
      {/*}*/}
      <Footer/>
    </Box>
  );
}

export default App;
