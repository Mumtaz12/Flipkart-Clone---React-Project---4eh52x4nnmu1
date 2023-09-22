import React, { useContext, useState } from 'react';
import { Signup } from './SignUp';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
  Image,
  FormControl,
  Input,
  FormLabel,useMediaQuery
} from '@chakra-ui/react';
import { Authcontext } from '../Context/Authcontext';
import { ChevronDownIcon } from '@chakra-ui/icons';

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const initialvalues = { email: '', password: '' };
  const [inputValues, setInputValues] = useState(initialvalues);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isAuth, setIsAuth] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const { correct, setCorrect } = useContext(Authcontext);

  let loginsetName = JSON.parse(localStorage.getItem('loginsetName')) || 'Login';
  const [name, setName] = useState(loginsetName);
  const [otpCountdown, setOtpCountdown] = useState(15); // Initial countdown value
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  localStorage.setItem('loginsetName', JSON.stringify(name));

  let otp;
  let raj = 0;
  const generateOtp = () => {
    otp = '';

    for (let i = 0; i < 6; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    localStorage.setItem('otp', JSON.stringify(otp));
    return Number(otp);
  };

  let checkOtp = (e) => {
    setIsAuth(e.target.value);
  };

  const handleChange = (inp) => {
    const { name, value } = inp.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const startOtpCountdown = () => {
    setIsResendDisabled(true);
    let timer = otpCountdown;
    const interval = setInterval(() => {
      if (timer === 0) {
        clearInterval(interval);
        setIsResendDisabled(false);
      } else {
        setOtpCountdown(timer--);
      }
    }, 1000);
  };

  const handleLogin = (inputValues) => {
    fetch(`https://flipkart-data.onrender.com/Userdetails`)
        .then((res) => res.json())
        .then((res) => {
          let test2 = res.filter((el) => {
            return el.email === inputValues.email && el.password === inputValues.password;
          });
          if (test2.length === 1) {
            setCorrect(true);
            setIsLoggedIn(true); // User is logged in
            notify();
            setName(test2[0].email.slice(0, 5));
          } else {
            setIncorrect(true);
            check();
          }
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const handleLogout = () => {
    setCorrect(false);
    setIsLoggedIn(false); // User is logged out
  };

  const notify = () => {
    setIncorrect(false);
    toast('Login Successfully', {
      position: 'top-center',
    });
    setIsAuth('');
    onClose();
  };

  const check = () => {
    toast('Incorrect Details', {
      position: 'top-center',
    });
    setIncorrect(false);
  };

  const validate = (values) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z]+$/;
    const phoneRegex = /^\d{10}$/;

    if (values.firstName === '') {
      errors.firstName = 'First name is required';
    } else if (!nameRegex.test(values.firstName)) {
      errors.firstName = 'First name must contain only letters';
    }

    if (values.lastName === '') {
      errors.lastName = 'Last name is required';
    } else if (!nameRegex.test(values.lastName)) {
      errors.lastName = 'Last name must contain only letters';
    }

    if (values.email === '') {
      errors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!emailRegex.test(values.email)) {
        errors.email = 'Enter a valid email';
      }
    }

    if (values.phoneNumber === '') {
      errors.phoneNumber = 'Phone number is required';
    } else if (!phoneRegex.test(values.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
    }

    if (values.password === '') {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  const getOtp = () => {
    toast(otp, {
      position: 'top-center',
    });
  };

  const OTPVALUES = () => {
    toast('WRONG OTP', {
      position: 'top-center',
    });
    setIsAuth('');
  };

  const Otp = () => {
    setIsCheck(true);
    generateOtp();
    startOtpCountdown();
    getOtp();
  };

  const Pass = () => {
    setIsCheck(false);
  };

  let popotp = JSON.parse(localStorage.getItem('otp'));

  const sukantaotp = () => {
    if (isAuth === popotp) {
      notify();
    } else {
      OTPVALUES();
    }
  };

  const SubmitOtp = (e) => {
    e.preventDefault();
    sukantaotp();
  };

  const handleSubmit = (e) => {
    handleLogin(inputValues);
    e.preventDefault();
    setError(validate(inputValues));
    setIsSubmit(true);
    setInputValues(initialvalues);
  };
  const [isMobileView] = useMediaQuery('(max-width: 720px)');

  return (
      <>
        {isLoggedIn ? ( // Conditionally render logout if user is logged in
            <Text
                p='4px 30px'
                bg='#2874f0'
                color={'#fff'}
                border='0'
                textAlign="center"
                fontSize={'15px'}
                fontWeight="700"
                ml="19px"
                cursor="pointer"
                onClick={handleLogout}
            >
              {name} <ChevronDownIcon />
            </Text>
        ) : (
            <Text
                p='4px 30px'
                bg='#fff'
                color={'black'}
                border='0'
                textAlign="center"
                fontSize={'15px'}
                fontWeight="700"
                ml="19px"
                cursor="pointer"
                onClick={onOpen}
            >
              Login
            </Text>
        )}

        <Modal
            loginRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size="2xl"
            padding="0px"
        >
          <ModalOverlay />

          <ModalContent>
            <ModalBody padding="-1.5">
              <ToastContainer />
              <ModalCloseButton
                  size="lg"
                  color="white"
                  marginRight="-3.5rem"
                  marginTop="-4"
              />
              <div style={{ display: 'flex' }}>
                <Box height="35rem" bg="#2874f0" width="16rem" padding="35px">
                  <Text fontWeight="500" color="white" fontSize="3xl">
                    Login
                  </Text>
                  <Text
                      fontWeight="500"
                      marginTop="15px"
                      color="#Dbdbdb"
                      fontSize="1xl"
                  >
                    Get access to your <br /> Orders, Wishlist and Recommendations
                  </Text>
                  <Image
                      marginTop={isMobileView ? '18rem' : '17rem'}
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                      aend="image"
                  />
                </Box>
                <Box height={{base:"40rem",mh:"35rem"}} padding="35" width={{ base: "100%", md: "24rem" }} color="#878787">
                  <FormControl>
                    {!isCheck ? (
                        <>
                          {' '}
                          <FormLabel>Email address</FormLabel>
                          <Input
                              width={{ base: "9rem", md: "19.5rem" }}
                              color="black"
                              marginTop="-3"
                              name="email"
                              variant="flushed"
                              placeholder="Enter Email"
                              minLength={6}
                              maxLength={32}
                              value={inputValues.email}
                              onChange={handleChange}
                              required
                          />
                          <Text color="red" fontSize="xs">
                            {error.email}
                          </Text>
                        </>
                    ) : (
                        ''
                    )}

                    {isCheck ? (
                        <>
                          {' '}
                          <FormLabel marginTop="5">Enter your OTP</FormLabel>
                          <Input
                              width={{ base: "9rem", md: "19.5rem" }}
                              color="black"
                              marginTop="-3"
                              name="password"
                              type="number"
                              variant="flushed"
                              placeholder="Enter OTP"
                              value={isAuth}
                              onChange={checkOtp}
                              required
                          />
                        </>
                    ) : (
                        <>
                          {' '}
                          <FormLabel marginTop="5">Password</FormLabel>
                          <Input
                              width={{ base: "9rem", md: "19.5rem" }}
                              color="black"
                              marginTop="-3"
                              name="password"
                              type="password"
                              variant="flushed"
                              placeholder="Enter Password"
                              value={inputValues.password}
                              onChange={handleChange}
                              required
                          />
                          <Text color="red" fontSize="xs">
                            {error.password}
                          </Text>
                        </>
                    )}

                    <Text marginTop="5" fontSize="xs"  width={{ base: "9rem", md: "19.5rem" }} >
                      By continuing, you agree to Flipkart's{' '}
                      <Link color="#2f74f0" href="">
                        Terms of Use{' '}
                      </Link>
                      and{' '}
                      <Link color="#2f74f0" href="">
                        Privacy Policy.
                      </Link>
                    </Text>

                    {!isCheck ? (
                        <Button
                            onClick={handleSubmit}
                            borderRadius="0.8"
                            marginTop="4"
                            padding="6"
                            color="white"
                            bg="#fb641b"
                            _hover={{ bg: "#fb641b" }}
                            width={{ base: "9rem", md: "19.5rem" }}
                        >
                          Login
                        </Button>
                    ) : (
                        <Button
                            onClick={SubmitOtp}
                            borderRadius="0.5"
                            marginTop="4"
                            padding="6"
                            color="white"
                            _hover={{ bg: "#fb641b" }}
                            bg="#fb641b"
                            width={{ base: "9rem", md: "19.5rem" }}
                            required
                        >
                          Submit OTP
                        </Button>
                    )}

                    <Button
                        onClick={Otp}
                        boxShadow="md"
                        p="6"
                        rounded="md"
                        borderRadius="0.5"
                        padding="6"
                        color="#2f74f0"
                        bg="white"
                        width={{ base: "9rem", md: "19.5rem" }}
                        disabled={isResendDisabled} // Disable the button when countdown is active
                    >
                      Resend OTP ({otpCountdown}s)
                    </Button>
                    <Text marginTop="2" marginBottom="2" textAlign="center">
                      OR
                    </Text>
                    {!isCheck ? (
                        <>
                          {' '}
                          <Button
                              onClick={Otp}
                              boxShadow="md"
                              p="6"
                              rounded="md"
                              borderRadius="0.5"
                              padding="6"
                              color="#2f74f0"
                              bg="white"
                              width={{ base: "9rem", md: "19.5rem" }}
                          >
                            Request OTP
                          </Button>
                        </>
                    ) : (
                        <>
                          {' '}
                          <Button
                              onClick={Pass}
                              boxShadow="md"
                              p="6"
                              rounded="md"
                              borderRadius="0.5"
                              padding="6"
                              color="#2f74f0"
                              bg="white"
                              // width="19.7rem"
                              width={{ base: "9rem", md: "19.5rem" }}
                          >
                            Request Password
                          </Button>
                        </>
                    )}
                    <Link>
                      <Text
                          marginTop="2"
                          bg="white"
                          textAlign="center"
                          color="#2f74f0"
                          width={{ base: "9rem", md: "19.5rem" }}
                      >
                        New to Flipkart? {<Signup onClose={onClose} />}{' '}
                      </Text>{' '}
                    </Link>
                  </FormControl>
                </Box>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
  );
}




//
// import React, { useState, useEffect, useContext } from 'react';
// import { Link, Navigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//     useDisclosure,
//     Box,
//     Text,
//     Image,
//     FormControl,
//     Input,
//     FormLabel,
//     useMediaQuery,
// } from '@chakra-ui/react';
// import { Authcontext } from '../Context/Authcontext';
// import { ChevronDownIcon } from '@chakra-ui/icons';
// import {Signup} from "./SignUp";
//
// export function Login() {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const { correct, setCorrect } = useContext(Authcontext);
//
//     const [inputValues, setInputValues] = useState({ email: '', password: '' });
//     const [error, setError] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);
//     const [isCheck, setIsCheck] = useState(false);
//     const [incorrect, setIncorrect] = useState(false);
//     const [isAuth, setIsAuth] = useState()
//     const [name, setName] = useState(() => {
//         const loginsetName = JSON.parse(localStorage.getItem('loginsetName'));
//         return loginsetName || 'Login';
//     });
//     const [isResendDisabled, setIsResendDisabled] = useState(false);
//     const [otpCountdown, setOtpCountdown] = useState(15);
//
//     useEffect(() => {
//         localStorage.setItem('loginsetName', JSON.stringify(name));
//     }, [name]);
//
//     const generateOtp = () => {
//         let otp = '';
//         for (let i = 0; i < 6; i++) {
//             otp += Math.floor(Math.random() * 10);
//         }
//         localStorage.setItem('otp', otp);
//         return Number(otp);
//     };
//
//     const checkOtp = (e) => {
//         setIsAuth(e.target.value);
//     };
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setInputValues({ ...inputValues, [name]: value });
//     };
//
//     const startOtpCountdown = () => {
//         setIsResendDisabled(true);
//         let timer = otpCountdown;
//         const interval = setInterval(() => {
//             if (timer === 0) {
//                 clearInterval(interval);
//                 setIsResendDisabled(false);
//             } else {
//                 setOtpCountdown((prev) => prev - 1);
//             }
//         }, 1000);
//     };
//
//     const handlelogin = () => {
//         // Fetch user data securely from your backend API with proper authentication and validation.
//         // Example:
//         fetch(`https://flipkart-data.onrender.com/Userdetails`, {
//           method: 'POST',
//           body: JSON.stringify(inputValues),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         })
//           .then((response) => {
//             if (response.ok) {
//               return response.json();
//             } else {
//               throw new Error('Login failed');
//             }
//           })
//           .then((data) => {
//             // Handle successful login, update state, and show toast message.
//             setCorrect(true);
//             setName(data.name); // Assuming your API response contains a 'name' field.
//             notify('Login Successful');
//           })
//           .catch((error) => {
//             // Handle login error and show toast message.
//             setCorrect(false);
//             setError({ login: 'Incorrect email or password' });
//             notify('Incorrect email or password');
//           });
//     };
//
//     const notify = (message) => {
//         toast(message, {
//             position: 'top-center',
//         });
//         setIsAuth('');
//         onClose();
//     };
//
//     const handleOtpVerification = () => {
//         const enteredOtp = parseInt(isAuth);
//         const storedOtp = parseInt(localStorage.getItem('otp'));
//         if (enteredOtp === storedOtp) {
//             notify('OTP Verified. Login Successful');
//             setCorrect(true);
//         } else {
//             notify('Incorrect OTP. Please try again.');
//             setIncorrect(true);
//         }
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError(validate(inputValues));
//         setIsSubmit(true);
//         handlelogin();
//     };
//
//     const validate = (values) => {
//         const errors = {};
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//
//         if (!values.email) {
//             errors.email = 'Email is required';
//         } else if (!emailRegex.test(values.email)) {
//             errors.email = 'Invalid email address';
//         }
//
//         if (!values.password) {
//             errors.password = 'Password is required';
//         } else if (values.password.length < 6) {
//             errors.password = 'Password must be at least 6 characters long';
//         }
//
//         return errors;
//     };
//
//     const handleOtpRequest = () => {
//         generateOtp();
//         startOtpCountdown();
//         notify('OTP has been sent to your email');
//         setIsCheck(true);
//     };
//
//     const handlePasswordRequest = () => {
//         // Implement password request logic here.
//         // Example:
//         fetch('https://your-api-url.com/forgot-password', {
//           method: 'POST',
//           body: JSON.stringify({ email: inputValues.email }),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         })
//           .then((response) => {
//             if (response.ok) {
//               return response.json();
//             } else {
//               throw new Error('Password request failed');
//             }
//           })
//           .then(() => {
//             notify('Password reset instructions sent to your email');
//           })
//           .catch(() => {
//             notify('Failed to send password reset instructions');
//           });
//     };
//
//     const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
//     const [isMobileView] = useMediaQuery('(max-width: 720px)');
//
//     return (
//         <>
//             {correct ? (
//                 <Text
//                     p='4px 30px'
//                     bg='#2874f0'
//                     color={'#fff'}
//                     border='0'
//                     textAlign='center'
//                     fontSize={'15px'}
//                     fontWeight='700'
//                     ml='19px'
//                     cursor='pointer'
//                 >
//                     {name} <ChevronDownIcon />
//                 </Text>
//             ) : !isLargerThan720 ? (
//                 <Text
//                     p='4px'
//                     bg='#2874f0'
//                     color={'#fff'}
//                     border='0'
//                     textAlign='center'
//                     fontSize={'15px'}
//                     fontWeight='700'
//                     cursor='pointer'
//                 >
//                     Login
//                 </Text>
//             ) : (
//                 <Text
//                     p='4px 30px'
//                     _hover={{ bg: '' }}
//                     textAlign='center'
//                     fontSize={'15px'}
//                     onClick={onOpen}
//                     bg='white'
//                     fontWeight='700'
//                     color='#2874f0'
//                     ml='19px'
//                     borderRadius='2px'
//                     cursor='pointer'
//                 >
//                     Login
//                 </Text>
//             )}
//             <Modal
//                 // initialRef={initialRef}
//                 // finalFocusRef={finalRef}
//                 isOpen={isOpen}
//                 onClose={onClose}
//                 size='2xl'
//                 padding='0px'
//             >
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalBody padding='-1.5'>
//                         <ToastContainer />
//                         <ModalCloseButton
//                             size='lg'
//                             color='white'
//                             marginRight='-3.5rem'
//                             marginTop='-4'
//                         />
//                         <div style={{ display: 'flex' }}>
//                             <Box height='32rem' bg='#2874f0' width='16rem' padding='35px'>
//                                 <Text fontWeight='500' color='white' fontSize='3xl'>
//                                     Login
//                                 </Text>
//                                 <Text fontWeight='500' marginTop='15px' color='#Dbdbdb' fontSize='1xl'>
//                                     Get access to your <br /> Orders, Wishlist and Recommendations
//                                 </Text>
//                                 <Image
//                                     // marginTop={isMobileView ? '4rem' : '2rem'}
//                                     // src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png'
//                                     // alt='image'
//                                 />
//                             </Box>
//                             <Box height='32rem' padding='35' width='24rem' color='#878787'>
//                                 <FormControl>
//                                     {!isCheck ? (
//                                         <>
//                                             <FormLabel>Email address</FormLabel>
//                                             <Input
//                                                 color='black'
//                                                 marginTop='-3'
//                                                 name='email'
//                                                 variant='flushed'
//                                                 placeholder='Enter Email'
//                                                 value={inputValues.email}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                             <Text color='red' fontSize='xs'>
//                                                 {error.email}
//                                             </Text>
//                                         </>
//                                     ) : (
//                                         ''
//                                     )}
//                                     {isCheck ? (
//                                         <>
//                                             <FormLabel marginTop='5'>Enter your OTP</FormLabel>
//                                             <Input
//                                                 color='black'
//                                                 marginTop='-3'
//                                                 name='password'
//                                                 type='number'
//                                                 variant='flushed'
//                                                 placeholder='Enter OTP'
//                                                 value={isAuth}
//                                                 onChange={checkOtp}
//                                                 required
//                                             />
//                                         </>
//                                     ) : (
//                                         <>
//                                             <FormLabel marginTop='5'>Password</FormLabel>
//                                             <Input
//                                                 color='black'
//                                                 marginTop='-3'
//                                                 name='password'
//                                                 type='password'
//                                                 variant='flushed'
//                                                 placeholder='Enter Password'
//                                                 value={inputValues.password}
//                                                 onChange={handleChange}
//                                                 required
//                                             />
//                                             <Text color='red' fontSize='xs'>
//                                                 {error.password}
//                                             </Text>
//                                         </>
//                                     )}
//                                     <Text marginTop='5' fontSize='xs'>
//                                         By continuing, you agree to Flipkart's{' '}
//                                         <Link color='#2f74f0' href=''>
//                                             Terms of Use{' '}
//                                         </Link>
//                                         and{' '}
//                                         <Link color='#2f74f0' href=''>
//                                             Privacy Policy.
//                                         </Link>
//                                     </Text>
//                                     {!isCheck ? (
//                                         <Button
//                                             onClick={handleSubmit}
//                                             borderRadius='0.5'
//                                             marginTop='4'
//                                             padding='6'
//                                             color='white'
//                                             bg='#fb641b'
//                                             width='19.7rem'
//                                         >
//                                             Login
//                                         </Button>
//                                     ) : (
//                                         <Button
//                                             onClick={handleOtpVerification}
//                                             borderRadius='0.5'
//                                             marginTop='4'
//                                             padding='6'
//                                             color='white'
//                                             bg='#fb641b'
//                                             width='19.7rem'
//                                             required
//                                         >
//                                             Submit OTP
//                                         </Button>
//                                     )}
//                                     <Button
//                                         onClick={handleOtpRequest}
//                                         boxShadow='md'
//                                         p='6'
//                                         rounded='md'
//                                         borderRadius='0.5'
//                                         padding='6'
//                                         color='#2f74f0'
//                                         bg='white'
//                                         width='19.7rem'
//                                         disabled={isResendDisabled}
//                                     >
//                                         Resend OTP ({otpCountdown}s)
//                                     </Button>
//                                     <Text marginTop='2' marginBottom='2' textAlign='center'>
//                                         OR
//                                     </Text>
//                                     {!isCheck ? (
//                                         <>
//                                             <Button
//                                                 onClick={handleOtpRequest}
//                                                 boxShadow='md'
//                                                 p='6'
//                                                 rounded='md'
//                                                 borderRadius='0.5'
//                                                 padding='6'
//                                                 color='#2f74f0'
//                                                 bg='white'
//                                                 width='19.7rem'
//                                             >
//                                                 Request OTP
//                                             </Button>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Button
//                                                 onClick={handlePasswordRequest}
//                                                 boxShadow='md'
//                                                 p='6'
//                                                 rounded='md'
//                                                 borderRadius='0.5'
//                                                 padding='6'
//                                                 color='#2f74f0'
//                                                 bg='white'
//                                                 width='19.7rem'
//                                             >
//                                                 Request Password
//                                             </Button>
//                                         </>
//                                     )}
//                                     <Link>
//                                         <Text
//                                             marginTop='2'
//                                             bg='white'
//                                             textAlign='center'
//                                             color='#2f74f0'
//                                         >
//                                             New to Flipkart?{' '}
//                                             <Signup onClose={onClose} />{' '}
//                                         </Text>{' '}
//                                     </Link>
//                                 </FormControl>
//                             </Box>
//                         </div>
//                     </ModalBody>
//                 </ModalContent>
//             </Modal>
//         </>
//     );
// }
