import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverTrigger,
  PopoverContent,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import { HiUserCircle } from "react-icons/hi";
import "./navbar.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { InputRightElement } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react'
import vikas from './Icon/icon1.svg';
import url1 from "./Icon/coin1.webp";
import coin2 from "./Icon/coin2.webp";
import icon3 from "./Icon/icon3.webp";
import icon4 from "./Icon/icon4.webp";
import icon5 from "./Icon/icon5.webp";
import icon6 from "./Icon/icon6.webp";
import icon7 from "./Icon/icon7.webp";
import icon8 from "./Icon/icon8.webp";
import icon9 from "./Icon/icon9.webp";
import icon10 from "./Icon/icon10.webp";
import icon11 from "./Icon/icon11.webp";
import icon12 from "./Icon/icon12.webp";
import icon13 from "./Icon/icon13.webp";
import icon14 from "./Icon/icon14.webp";
import icon15 from "./Icon/icon15.png";

import { Flex, Box, Center, Image, Spacer, InputGroup, Input, InputLeftElement, Icon } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons"
import { BsFillFilePlusFill, BsFillCreditCard2BackFill, BsBellFill, BsQuestionSquareFill, BsMic } from "react-icons/bs";
import {FaMoon,FaShoppingCart, FaSun, FaUser} from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { RiInboxUnarchiveFill, RiCoupon3Fill } from "react-icons/ri"
import { AiFillHeart } from "react-icons/ai"
import { BiTrendingUp } from "react-icons/bi"
import { HiDownload } from "react-icons/hi"
import { useDisclosure } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import { Link, Navigate, NavLink } from "react-router-dom";
import Register from "../Login/Register";
import { Signup } from "../Login/SignUp";
import { Authcontext } from "../Context/Authcontext";
import { IoMdPower } from "react-icons/io";
import { CartContext } from "../Context/CartContext";
import  {WishlistContext} from "../Context/WishlistContext";
import {faHeart} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const {cartData} = useContext(CartContext);
  const {wishlistData}=useContext(WishlistContext);
  console.log(cartData, " cartData ");
  console.log(wishlistData, " wishlist data");

  const {correct, setCorrect} = useContext(Authcontext)
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
  const ref = useRef(null)

  const [hiddenDiv, setHiddenDiv] = useState(false)

  const [isLargerThan670] = useMediaQuery('(min-width: 730px)')
  const url = `https://flipkart-data.onrender.com/all`
  // const url = `https://flipkart.dvishal485.workers.dev/search/`

  const [data, setData] = useState([])
  const [searchVal, setSearchVal] = useState("");
  useEffect(()=>{
    fetchData(searchVal)
  },[searchVal])
  
  const fetchData=(searchVal)=>{
    fetch(`${url}?_limit=5&q=${searchVal}`)
    .then((res)=>res.json())
    .then((res)=>{
      // setData(res)
      setData(res)
      console.log(res, " search input data after fetched ");
    })
  }

  // const handleinput = (e)=>{
  //   const val = e.target.value
  //   console.log(val, " input box ");
  //   setSearchVal(val)
  // }

  const debounce = (fn, timeout)=>{
    let timerid;
    return ()=>{
      clearTimeout(timerid)
      timerid = setTimeout(() => {
        fn()
      }, timeout);
    }
  }
  const handleinput = debounce(()=>{
    const val = ref.current.value
    console.log(" event val check in debounce ", val);
    setHiddenDiv(true)
    setSearchVal(val)
  }, 500)

  window.addEventListener("click",(e)=>{
    console.log(e.target.id, " check window ");
    if(e.target.id!=="inputBox"){
      setHiddenDiv(false)
    }
  })

  const handleSetQuaryUrl = (query_url)=>{
    // console.log("handleSetQuaryUrl", query_url);
    // console.log("check after slice ",query_url.slice(48));
    console.log(query_url);
  }

  const handleLogout = ()=>{
    setCorrect(false)
    console.log(" handleLogout ", correct);
  }
  // console.log(" handleLogout ", correct);

  // const { toggleColorMode } = useColorMode();

  if (isLargerThan670) {
    return (
      <Box mt='-1px' ml='-1px'>
        <Box mb='3.4rem' border={'1px solid blue'}>
        <Flex bg="#2874f0" h="56px" align="center"  position='fixed' w='100%' zIndex={'100'}>
          <Spacer />
          <Box>
            <NavLink to='/'>
            <Box mr="10px" cursor={'pointer'} >
              <Image
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt="flipkart"
                h="20px"
                marginBottom="-5px"
              />
              <Flex alignItems='center' >
                <Text className="explore" color="white">
                  Explore
                </Text>
                <Text className="explore1" color="yellow.400">
                  Plus
                </Text>
                <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="plus" w='10px' h='10px' />
              </Flex>
            </Box>
            </NavLink>
          </Box>

          {/* =======search======== */}

          <Box w="34%" pos={'relative'}>
            <InputGroup>
              <Input
                placeholder="Search for products,brands and more"
                bg="white"
                w="100%"
                borderRadius="2px"
                h="36px"
                fontSize="14px"
                ref={ref}
                // value={}
                onInput={handleinput}
                id='inputBox'
              />
              {/* <Box w={'100%'} pos='relative' zIndex='10'>
                <ReactSearchAutocomplete
                    styling={{
                      borderRadius: "2px",
                      height:"38px",
                      overflowY:'scroll'
                      // border: '1px solid red'
                    }}
                    showIcon ={false}
                    showClear = {false}
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onChange ={handleinput}
                    onFocus={handleOnFocus}
                    placeholder="Search for products,brands and more"
                    formatResult={formatResult}
                    fuseOptions={{
                      keys: ["id", "description"]
                    }}
                    maxResults = "5"
                    // resultStringKeyName={"sy"+Date.now()+Math.random()}
                  />
              </Box> */}
              <InputRightElement
              pos='absolute' zIndex='10'
                children={
                  <IoSearchSharp
                    color="#2874f0"
                    cursor="pointer"
                    fontSize="23px"
                    fontWeight="bold"
                  />
                }
              />
            </InputGroup>
            <Box
              display={hiddenDiv?"":"none"}
              pos={'absolute'} zIndex={'10'}
              maxH='320px' overflowY={'auto'}
              borderRadius='0 0 2px 2px'
              borderTop={'1px solid #e0e0e0'}
              w='100%'
              bg='#fff'
              boxShadow={'2px 3px 5px -1px rgb(0 0 0 / 50%)'}
            >
              {
                data.map((item, index)=>(
                  <Box key={index}>
                    <NavLink to={`/products/view/${item.item_id}`}>
                      <Flex gap={2} p='10px 25px' m='10px 0'
                      align={'center'}
                      cursor='pointer'
                      _hover={{bg:"#F5F8FF"}}
                      onClick={()=>handleSetQuaryUrl(item.query_url)}
                      >
                        <Box maxH='32px' w='32px'>
                          <Image maxH='30px' maxW='32px' src=
                          {item.image}
                          // {item.thumbnail}
                          />
                        </Box>
                        <Box color={'#212121'}
                        >
                          {item.description}
                          {/* {item.name} */}
                        </Box>
                      </Flex>
                    </NavLink>
                  </Box>
                ))
              }
            </Box>
          </Box>
          {/* ======================================search end======================================= */}
          <Popover trigger="hover" >
            <PopoverTrigger>
              <Box >
                <Register/>
              </Box>
            </PopoverTrigger>
            <PopoverContent
              zIndex={4}
              bg="white"
              color="white"
              w="250px"
              borderRadius="2px"
              mt="5px"
            >
              <PopoverArrow bg="white" />

              <PopoverBody color="black" className='shade' >
                {
                  correct?"":
                  <Flex h="56px" justifyContent="space-between">
                  <Center fontWeight="600" fontSize='14px'>New Customer?</Center>
                  <Center>
                    <Link color="#2874f0" fontSize='14px' to={'/login'}>
                    {/* Sign Up */}
                    <Signup/>
                    </ Link>
                  </Center>
                </Flex>
                }
                <hr margin="0px" /> {/* My Profile Link */}
                <Link to="/my-profile">
                  <Flex cursor={'pointer'} h="49px" fontSize='14px' className="pop1">
                    <Center ml='10px'><HiUserCircle color="#2874f0" size="18px" /></Center>
                    <Center ml='16px'>My Profile</Center>
                  </Flex>
                </Link>
                <hr />

                {/* Flipkart Plus Zone Link */}
                <Link to="/flipkart-plus-zone">
                  <Flex cursor={'pointer'} className="pop1" h='49px' fontSize='14px'>
                    <Center ml='10px'><Image src={vikas} alt="vikas" /></Center>
                    <Center ml='16px'>Flipkart Plus Zone</Center>
                  </Flex>
                </Link>
                <hr />
                {/* orderpage */}
                <NavLink to='/orderpage'>
                    <Flex  cursor={'pointer'}  h="49px" fontSize='14px' className="pop1"  > 
                      <Center ml='10px'>
                          <RiInboxUnarchiveFill color="#2874f0" size="18px" />
                      </Center> 
                        <Center ml='16px'>
                          Orders
                        </Center>
                    </Flex>
                </NavLink>
                  <hr />
                  {/* Wishlist Link */}
                  <Link to="/wishlist">
                    <Flex cursor={'pointer'}  h="49px" fontSize='14px' className="pop1">
                      <Center ml='10px'><AiFillHeart color="#2874f0" size="18px" /></Center>
                      <Center ml='16px'>Wishlist</Center>
                    </Flex>
                  </Link>
                  <hr />

                  {/* Rewards Link */}
                  <Link to="/rewards">
                    <Flex cursor={'pointer'}  h="49px" fontSize='14px' className="pop1">
                      <Center ml='10px'><RiCoupon3Fill color="#2874f0" size="18px" /></Center>
                      <Center ml='16px'>Rewards</Center>
                    </Flex>
                  </Link>
                  <hr />

                  {/* Gift Cards Link */}
                  <Link to="/gift-cards">
                    <Flex cursor={'pointer'}  h="49px" fontSize='14px' className="pop1">
                      <Center ml='10px'><BsFillCreditCard2BackFill color="#2874f0" size="18px" /></Center>
                      <Center ml='16px'>Gift cards</Center>
                    </Flex>
                  </Link>
                  <hr />
                 {
                  correct?
                  <Flex onClick={handleLogout} 
                  cursor={'pointer'} h="49px" fontSize='14px' className="pop1"> 
                <Center ml='10px'>
                  <IoMdPower color="#2874f0" size="18px" />
                </Center> 
                  <Center ml='16px'>
                  Log Out
                  </Center>
              </Flex>:""
                }
              </PopoverBody>
            </PopoverContent>
          </Popover>

          {/* {=============login end====================} */}
          <NavLink to='./wishlist' >
            <Flex align={'center'} justify='' cursor={'pointer'}>
              {/*<Icon as={faHeart} w={5} h={5} color="white" ml="2%" mr="-5px" />*/}
              {
                wishlistData.length>0?<Flex
                    ml='-8px' mt='-25px' zIndex={5} bg={'#ff6161'} fontSize='12px' p='6px'
                    border={'1px solid #fff'}
                    borderRadius={'40%'} w='18px' h='18px'
                    align={'center'} justify='center' color='#fff'
                >{wishlistData.length}</Flex>:""
              }
              <Box
                  fontSize="17px"
                  ml="10px"
                  textAlign="center"
                  color="white"
                  fontWeight="600"
              >
                Wishlist
              </Box>
            </Flex>
          </NavLink>

          {/* ==================================more============= */}
          <Popover trigger="hover" >
            <PopoverTrigger>
              <Box
                fontSize="16px"
                textAlign="center"
                w="7%"
                color="white"
                fontWeight="600"
                cursor={'pointer'}
              >
                <NavLink to='./products'>More</NavLink>
                <ChevronDownIcon
                  _hover={{ transform: "rotate(180deg)" }}
                />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              zIndex={4}
              bg="white"
              color="white"
              w="250px"
              borderRadius="2px"
              mt="5px"
              h='auto'
            >
              <PopoverArrow bg="white" />

              <PopoverBody color="black" className='shade'>
                  {/* Notification Preferences Link */}
                  <Link to="/notification-preferences">
                    <Flex h="49px" fontSize='14px' className="pop1">
                      <Center ml='10px'><BsBellFill color="#2874f0" size="18px" /></Center>
                      <Center ml='16px'>Notification Preferences</Center>
                    </Flex>
                  </Link>
                  <hr />

                  {/* 24x7 Customer Care Link */}
                  <Link to="/customer-care">
                    <Flex h="49px" fontSize='14px' className="pop1">
                      <Center ml='10px'><BsQuestionSquareFill color="#2874f0" size="18px" /></Center>
                      <Center ml='16px'>24x7 Customer Care</Center>
                    </Flex>
                  </Link>
                  <hr />

                  {/* Advertise Link */}
                  <Link to="/advertise">
                    <Flex h="49px" fontSize='14px' className="pop1">
                      <Center ml='10px'><BiTrendingUp color="#2874f0" size="18px" /></Center>
                      <Center ml='16px'>Advertise</Center>
                    </Flex>
                  </Link>
                  <hr />

                  {/* Download App Link */}
                  <Link to="/download-app">
                    <Flex h="49px" fontSize='14px' className="pop1">
                      <Center ml='10px'><HiDownload color="#2874f0" size="18px" /></Center>
                      <Center ml='16px'>Download app</Center>
                    </Flex>
                  </Link>
                </PopoverBody>
            </PopoverContent>
          </Popover>

          {/* ===============================more end============= */}

          <NavLink to='./cart' >
            <Flex align={'center'} justify='' cursor={'pointer'}>
              <Icon as={FaShoppingCart} w={5} h={5} color="white" ml="2%" mr="-5px" />
                {
                  cartData.length>0?<Flex 
                    ml='-8px' mt='-25px' zIndex={5} bg={'#ff6161'} fontSize='12px' p='6px' 
                    border={'1px solid #fff'}
                    borderRadius={'40%'} w='18px' h='18px' 
                    align={'center'} justify='center' color='#fff'
                    >{cartData.length}</Flex>:""
                }
              <Box
                fontSize="17px"
                ml="10px"
                textAlign="center"
                color="white"
                fontWeight="600"
              >
                Cart
              </Box>
            </Flex>
          </NavLink>


          <Spacer />

          <Button onClick={toggleColorMode} leftIcon={colorMode === "dark" ? <FaSun /> : <FaMoon />}>
            {colorMode === "dark" ? "" : ""}
          </Button>
        </Flex>
      </Box>
      </Box>
    );
  }


  
  else {
    return (
    <Box mt='-1px' ml='-1px'>
      <Box mb='6.4rem' border={'1px solid blue'}>
      <Box position='fixed' w='100%' zIndex={'100'}>
      <Flex bg="#2874f0" h='52px' >
        <Center ml='10px' ref={btnRef} color='white' onClick={onOpen}>
          <HamburgerIcon color='white' fontSize='20px' />
        </Center>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            className="drawercontent">
            <DrawerHeader bg='#2874f0' color='white' h='40px' className="head">
              {correct ? (
                  <Center>
                    {/* Show the user's name when logged in */}
                    <FaUser pr='10px' fontSize='15px' /> &nbsp; {"Hello Customer"} {/* Replace userName with the actual user's name */}
                  </Center>
              ) : (
                  <Center>
                    {/* Show "Login & Signup" when not logged in */}
                    <Link to={'./login'} style={{ color: 'white', textDecoration: 'none' }}>
                      Login & Signup
                    </Link>
                  </Center>
              )}
              <Center>
                <Image src={icon15} w='20px' h='20px' />
              </Center>
            </DrawerHeader>

            <DrawerBody ml='-5px' onClick={onClose}>
              <NavLink to='/super-coin-zone'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={coin2} alt="c" w='15px' />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    SuperCoin Zone
                  </Center>
                </Flex>
              </NavLink>
              <NavLink to='./flipkart-plus-zone'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={icon3} w="15px" />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    Flipkart Plus Zone
                  </Center>
                </Flex>
              </NavLink>
              <hr />
              <NavLink to='./products/:category_name'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={url1} w='15px' />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    All Categories
                  </Center>
                </Flex>
              </NavLink>
              <NavLink to='/trending-stores'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={icon4} w='15px' />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    Trending Stores
                  </Center>
                </Flex>
              </NavLink>

              <NavLink to='/more-on-flipkart'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={icon5} w='15px' />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    More on Flipkart
                  </Center>
                </Flex>
              </NavLink>
              <hr />

              <NavLink to='/choose-language'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={icon6} w='15px' />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    Choose Language
                  </Center>
                </Flex>
              </NavLink>
              <hr />

              <NavLink to='./products/:category_name'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={icon7} w='15px' />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    Offer Zone
                  </Center>
                </Flex>
              </NavLink>

              <NavLink to='/sell-on-flipkart'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={icon8} w='15px' />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    Sell on Flipkart
                  </Center>
                </Flex>
              </NavLink>

              <NavLink to='/orderpage'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={icon9} w='15px' />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    My Orders
                  </Center>
                </Flex>
              </NavLink>

              <NavLink to='/coupons'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={icon10} w='15px' />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    Coupons
                  </Center>
                </Flex>
              </NavLink>

              <NavLink to='/cart'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={icon11} w='15px' />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    My Cart
                  </Center>
                </Flex>
              </NavLink>

              <NavLink to='/wishlist'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={icon12} w='15px' />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    My Wishlist
                  </Center>
                </Flex>
              </NavLink>

              <NavLink to='/my-profile'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={icon13} w='15px' />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    My Account
                  </Center>
                </Flex>
              </NavLink>

              <NavLink to='/my-notifications'>
                <Flex h="38px" fontSize='14px'>
                  <Center>
                    <Image src={icon14} w='15px' />
                  </Center>
                  <Center className="drawer" ml='16px'>
                    My Notifications
                  </Center>
                </Flex>
              </NavLink>
              <hr />

              <NavLink to='/notification-preferences'>
                <Flex h="38px" fontSize='14px'>
                  <Center className="drawer">
                    Notification Preferences
                  </Center>
                </Flex>
              </NavLink>

              <Flex
                  cursor='pointer'
                  h="38px"
                  fontSize='14px'
                  onClick={() => {
                    // Handle Help Center click
                  }}
              >
                <Center className="drawer">
                  Help Center
                </Center>
              </Flex>

              <Flex
                  cursor='pointer'
                  h="38px"
                  fontSize='14px'
                  onClick={() => {
                    // Handle Legal click
                  }}
              >
                <Center className="drawer">
                  Legal
                </Center>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Center ml='10px' mt='5px'>
          <Box  >
            <Image
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="flipkart"
              h="16px"
              marginBottom="-3px"
            />
            <Flex alignItems='center' >

              <Link className="explore3" color="white" to={'/'} >
                Explore
              </Link>
              <Link className="explore4" color="yellow.400" to={'/'}>
                Plus
              </Link>
              <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="plus" w='10px' h='10px' />
            </Flex>
          </Box>
        </Center>
        <Spacer />
        <Center w='45px'><BsFillFilePlusFill color='white' /></Center>
        <Center w='45px'>
        {/*<FaShoppingCart color='white' />*/}
        {/*{*/}
        {/*  cartData.length>0?<Flex*/}
        {/*      ml='-5px' mt='-20px' zIndex={5} bg={'#d32f2f'} fontSize='9px' p='6px'*/}
        {/*      border={'2px solid #fff'} fontWeight='600'*/}
        {/*      borderRadius={'50%'} w='15px' h='15px'*/}
        {/*      align={'center'} justify='center' color='#fff'*/}
        {/*  >{cartData.length}</Flex>:""*/}
        {/*}*/}

        <NavLink to='./cart' >
          <Flex align={'center'} justify='' cursor={'pointer'}>
            <Icon as={FaShoppingCart} w={5} h={5} color="white" ml="2%" mr="-5px" />
            {
              cartData.length>0?<Flex
                  ml='-8px' mt='-25px' zIndex={5} bg={'#ff6161'} fontSize='12px' p='6px'
                  border={'1px solid #fff'}
                  borderRadius={'40%'} w='18px' h='18px'
                  align={'center'} justify='center' color='#fff'
              >{cartData.length}</Flex>:""
            }
            {/*<Box*/}
            {/*    fontSize="17px"*/}
            {/*    ml="10px"*/}
            {/*    textAlign="center"*/}
            {/*    color="white"*/}
            {/*    fontWeight="600"*/}
            {/*>*/}
            {/*  Cart*/}
            {/*</Box>*/}
          </Flex>
        </NavLink>
        </Center>
        
        <Center color='white' mr='10px'>
        {/*<Register/>*/}
          <Popover trigger="hover" >
            <PopoverTrigger>
              <Box >
                <Register/>
              </Box>
            </PopoverTrigger>
            <PopoverContent
                zIndex={4}
                bg="white"
                color="white"
                w="250px"
                borderRadius="2px"
                mt="5px"
            >
              <PopoverArrow bg="white" />

              <PopoverBody color="black" className='shade' >
                {
                  correct?"":
                      <Flex h="56px" justifyContent="space-between">
                        <Center fontWeight="600" fontSize='14px'>New Customer?</Center>
                        <Center>
                          <Link color="#2874f0" fontSize='14px' to={'/login'}>
                            {/* Sign Up */}
                            <Signup/>
                          </ Link>
                        </Center>
                      </Flex>
                }
                <hr margin="0px" />
                <NavLink to="/my-profile">
                  <Flex cursor={'pointer'} h="49px" fontSize='14px' className="pop1">
                    <Center ml='10px'><HiUserCircle color="#2874f0" size="18px" /></Center>
                    <Center ml='16px'>My Profile</Center>
                  </Flex>
                </NavLink>
                <hr />

                {/* Flipkart Plus Zone Link */}
                <NavLink to="/flipkart-plus-zone">
                  <Flex cursor={'pointer'} className="pop1" h='49px' fontSize='14px'>
                    <Center ml='10px'><Image src={vikas} alt="vikas" /></Center>
                    <Center ml='16px'>Flipkart Plus Zone</Center>
                  </Flex>
                </NavLink>
                <hr />
                {/* orderpage */}
                <NavLink to='/orderpage'>
                  <Flex  cursor={'pointer'}  h="49px" fontSize='14px' className="pop1"  >
                    <Center ml='10px'>
                      <RiInboxUnarchiveFill color="#2874f0" size="18px" />
                    </Center>
                    <Center ml='16px'>
                      Orders
                    </Center>
                  </Flex>
                </NavLink>
                <hr />
                <NavLink to="/wishlist">
                  <Flex cursor={'pointer'} h="49px" fontSize='14px' className="pop1">
                    <Center ml='10px'><AiFillHeart color="#2874f0" size="18px" /></Center>
                    <Center ml='16px'> Wishlist</Center>
                  </Flex>
                </NavLink>
                <hr />

                {/* Rewards Link */}
                <NavLink to="/rewards">
                  <Flex cursor={'pointer'} h="49px" fontSize='14px' className="pop1">
                    <Center ml='10px'><RiCoupon3Fill color="#2874f0" size="18px" /></Center>
                    <Center ml='16px'>Rewards</Center>
                  </Flex>
                </NavLink>
                <hr />

                {/* Gift Cards Link */}
                <NavLink to="/gift-cards">
                  <Flex cursor={'pointer'} h="49px" fontSize='14px' className="pop1">
                    <Center ml='10px'><BsFillCreditCard2BackFill color="#2874f0" size="18px" /></Center>
                    <Center ml='16px'>Gift cards</Center>
                  </Flex>
                </NavLink>
                <hr />
                {
                  correct?
                      <Flex onClick={handleLogout}
                            cursor={'pointer'} h="49px" fontSize='14px' className="pop1">
                        <Center ml='10px'>
                          <IoMdPower color="#2874f0" size="18px" />
                        </Center>
                        <Center ml='16px'>
                          Log Out
                        </Center>
                      </Flex>:""
                }
              </PopoverBody>
            </PopoverContent>
          </Popover>

          {/* {=============login end====================} */}
        </Center>
      </Flex>
      <Flex bg="#2874f0" h='52px'>
        <Center w='100%' ml='1%' mr='1%' pos={'relative'}> 
        <InputGroup pos={'relative'}>
            <Input
                placeholder="Search for products,brands and more"
                bg="white"
                w="100%"
                borderRadius="2px"
                h="36px"
                fontSize="14px"
                ref={ref}
                // value={}
                onInput={handleinput}
                id='inputBox'
              />
              <Box mt='10px' ml='-25px' zIndex={'100'}>
                <BsMic />
              </Box>
          {/* <InputLeftElement 
            pos={'absolute'} zIndex='10'
            children={
              <IoSearchSharp
                color="#2874f0"
                cursor="pointer"
                fontSize="23px"
                fontWeight="bold"
              />
            }
          /> */}
            <Box
            mt='36px'
              display={hiddenDiv?"":"none"}
              pos={'absolute'} zIndex={'10'}
              maxH='320px' overflowY={'auto'}
              borderRadius='0 0 2px 2px'
              borderTop={'1px solid #e0e0e0'}
              w='100%'
              bg='#fff'
              boxShadow={'2px 3px 5px -1px rgb(0 0 0 / 50%)'}
            >
              {
                data.map((item, index)=>(
                  <Box key={index}>
                    <NavLink to={`/products/view/${item.item_id}`}>
                      <Flex gap={2} p='10px 25px' m='10px 0'
                      align={'center'}
                      cursor='pointer'
                      _hover={{bg:"#F5F8FF"}}
                      onClick={()=>handleSetQuaryUrl(item.query_url)}
                      >
                        <Box maxH='32px' w='32px'>
                          <Image maxH='30px' maxW='32px' src=
                          {item.image}
                          // {item.thumbnail}
                          />
                        </Box>
                        <Box color={'#212121'}
                        >
                          {item.description}
                          {/* {item.name} */}
                        </Box>
                      </Flex>
                    </NavLink>
                  </Box>
                ))
              }
            </Box>
        </InputGroup>
          
        </Center>
      </Flex>
    </Box>
    </Box>
    </Box>
    )

  }





};
export default Navbar;