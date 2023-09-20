import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Text,
    useToast,
    IconButton,
} from "@chakra-ui/react";
import { useContext, useState, useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import {InfoIcon, RepeatIcon} from "@chakra-ui/icons";

function OtpPage() {
    const [realOtp, setRealOtp] = useState(["", "", "", ""]);
    const [state, setState] = useState("");
    const [forwardCongo, setForwardCongo] = useState(false);
    const [otpTime, setOtpTime] = useState(15); // Initial OTP time in seconds
    const [otpTimer, setOtpTimer] = useState(null);

    const { cartData, SetCartData, getData, setOrderpageData, orderpageData } =
        useContext(CartContext);

    const toast = useToast();

    const generateRandomOtp = () => {
        return Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, "0"); // Generate a random 4-digit OTP
    };

    const startOtpTimer = () => {
        if (otpTimer) {
            clearInterval(otpTimer); // Clear the previous timer if it exists
        }

        const timer = setInterval(() => {
            if (otpTime > 0) {
                setOtpTime((prevTime) => prevTime - 1);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        setOtpTimer(timer);
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const newOtp = generateRandomOtp();
        setState(newOtp);
        setOtpTime(15); // Reset OTP time to 15 seconds
        startOtpTimer();

        toast({
            position: "top",
            render: () => (
                <Box color="white" p={3} bg="blue.500" mt="100px">
                    Your OTP is {newOtp}
                </Box>
            ),
        });

        console.log(cartData, "lets see cart data");
    }, []);

    const orderPageProducts = () => {
        // ... (rest of your code)
        setOrderpageData([...orderpageData, ...cartData]);

        for (let i = 0; i < cartData.length; i++) {
            fetch(`https://flipkart-data.onrender.com/products/${cartData[i].id}`, {
                method: "DELETE",
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    getData();
                    console.log(data, " test after delete data ");
                });
        }
    };

    const handleResendOtp = () => {
        const newOtp = generateRandomOtp();
        setState(newOtp);
        setOtpTime(15); // Reset OTP time to 15 seconds
        startOtpTimer();

        toast({
            position: "top",
            render: () => (
                <Box color="white" p={3} bg="blue.500" mt="100px">
                    Your new OTP is {newOtp}
                </Box>
            ),
        });
    };

    const handleGetOtp = (index, e) => {
        const digit = e.target.value.slice(-1);
        const updatedOtp = [...realOtp];
        updatedOtp[index] = digit;
        setRealOtp(updatedOtp);

        // Move focus to the next input
        if (digit !== "" && index < 3) {
            otpInputsRef.current[index + 1].focus();
        }
    };

    const otpInputsRef = useRef([]);

    const handleSubmitOtp = () => {
        const enteredOtp = realOtp.join(""); // Combine individual digits to form OTP
        if (enteredOtp === state) {
            setForwardCongo(true);
            orderPageProducts();
        } else {
            toast({
                position: "top",
                render: () => (
                    <Box
                        color="white"
                        rounded={"10"}
                        p={3}
                        bg="red"
                        display={"flex"}
                        alignItems="center"
                    >
                        <InfoIcon />
                        <Text ml="2" fontWeight={"bold"} color="white">
                            Enter Correct OTP
                        </Text>
                    </Box>
                ),
            });
        }
    };

    return (
        <Box
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            w={["100%", "100%"]}
            h={["100vh", "80vh"]}
            bg="#f1f3f6"
        >
            <Box
                h={["70vh", "40vh"]}
                w={["90%", "25%"]}
                bg="white"
                shadow={"sm"}
                borderRadius={"4"}
                p={4}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Heading size="md">ENTER OTP</Heading>
                <HStack mt="4">
                    {[0, 1, 2, 3].map((index) => (
                        <Input
                            key={index}
                            type="number"
                            min="0"
                            max="9"
                            placeholder="-"
                            size="lg"
                            onChange={(e) => handleGetOtp(index, e)}
                            value={realOtp[index]}
                            ref={(el) => (otpInputsRef.current[index] = el)}
                        />
                    ))}
                </HStack>
                <Text mt="2" mb="4" fontSize="sm">
                    OTP will expire in {otpTime} seconds
                </Text>
                <Button mt="4" onClick={handleSubmitOtp}>
                    <Link to={forwardCongo ? "/congo" : ""}>Submit</Link>
                </Button>
                <IconButton
                    mt="4"
                    aria-label="Resend OTP"
                    icon={<RepeatIcon />}
                    onClick={handleResendOtp}
                    variant="outline"
                >
                    Resend OTP
                </IconButton>
            </Box>
        </Box>
    );
}

export default OtpPage;




























// import {
//     Box,
//     Button,
//     Heading,
//     HStack,
//     Input,
//     Text,
//     useToast,
//     IconButton,
// } from "@chakra-ui/react";
// import { useContext, useState } from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../Context/CartContext";
// import {RepeatIcon} from "@chakra-ui/icons";
//
// function OtpPage() {
//     const [realOtp, setRealOtp] = useState(["", "", "", ""]);
//     const [state, setState] = useState("");
//     const [forwardCongo, setForwardCongo] = useState(false);
//     const [otpTime, setOtpTime] = useState(15); // Initial OTP time in seconds
//     const [otpTimer, setOtpTimer] = useState(null);
//
//     const { cartData, SetCartData, getData, setOrderpageData, orderpageData } =
//         useContext(CartContext);
//
//     const toast = useToast();
//
//     const generateRandomOtp = () => {
//         return Math.floor(Math.random() * 10000)
//             .toString()
//             .padStart(4, "0"); // Generate a random 4-digit OTP
//     };
//
//     const startOtpTimer = () => {
//         if (otpTimer) {
//             clearInterval(otpTimer); // Clear the previous timer if it exists
//         }
//
//         const timer = setInterval(() => {
//             if (otpTime > 0) {
//                 setOtpTime((prevTime) => prevTime - 1);
//             } else {
//                 clearInterval(timer);
//             }
//         }, 1000);
//
//         setOtpTimer(timer);
//     };
//
//     useEffect(() => {
//         window.scrollTo(0, 0);
//
//         const newOtp = generateRandomOtp();
//         setState(newOtp);
//         setOtpTime(15); // Reset OTP time to 15 seconds
//         startOtpTimer();
//
//         toast({
//             position: "top",
//             render: () => (
//                 <Box color="white" p={3} bg="blue.500" mt="100px">
//                     Your OTP is {newOtp}
//                 </Box>
//             ),
//         });
//
//         console.log(cartData, "lets see cart data");
//     }, []);
//
//     const orderPageProducts = () => {
//         // ... (rest of your code)
//         setOrderpageData([...orderpageData, ...cartData]);
//
//         for (let i = 0; i < cartData.length; i++) {
//             fetch(`https://flipkart-data.onrender.com/products/${cartData[i].id}`, {
//                 method: "DELETE",
//             })
//                 .then((response) => {
//                     return response.json();
//                 })
//                 .then((data) => {
//                     getData();
//                     console.log(data, " test after delete data ");
//                 });
//         }
//     };
//
//     const handleResendOtp = () => {
//         const newOtp = generateRandomOtp();
//         setState(newOtp);
//         setOtpTime(15); // Reset OTP time to 15 seconds
//         startOtpTimer();
//
//         toast({
//             position: "top",
//             render: () => (
//                 <Box color="white" p={3} bg="blue.500" mt="100px">
//                     Your new OTP is {newOtp}
//                 </Box>
//             ),
//         });
//     };
//
//     const handleGetOtp = (index, e) => {
//         // Update the OTP digit directly
//         const digit = e.target.value.slice(-1);
//         const updatedOtp = [...realOtp];
//         updatedOtp[index] = digit;
//         setRealOtp(updatedOtp);
//     };
//
//     const handleSubmitOtp = () => {
//         const enteredOtp = realOtp.join(""); // Combine individual digits to form OTP
//         if (enteredOtp === state) {
//             setForwardCongo(true);
//             orderPageProducts();
//         } else {
//             toast({
//                 position: "top",
//                 render: () => (
//                     <Box
//                         color="white"
//                         rounded={"10"}
//                         p={3}
//                         bg="red"
//                         display={"flex"}
//                         alignItems="center"
//                     >
//
//
//                         <InfoIcon />
//                         <Text ml="2" fontWeight={"bold"} color="white">
//                             Enter Correct OTP
//                         </Text>
//                     </Box>
//                 ),
//             });
//         }
//     };
//
//     return (
//         <Box
//             display="flex"
//             justifyContent={"center"}
//             alignItems="center"
//             w={["100%", "100%"]}
//             h={["100vh", "80vh"]}
//             bg="#f1f3f6"
//         >
//             <Box
//                 h={["70vh", "40vh"]}
//                 w={["90%", "25%"]}
//                 bg="white"
//                 shadow={"sm"}
//                 borderRadius={"4"}
//                 p={4}
//                 display="flex"
//                 flexDirection="column"
//                 justifyContent="center"
//                 alignItems="center"
//             >
//                 <Heading size="md">ENTER OTP</Heading>
//                 <HStack mt="4">
//                     {/* Use Input for OTP input */}
//                     {[0, 1, 2, 3].map((index) => (
//                         <Input
//                             key={index}
//                             type="number"
//                             min="0"
//                             max="9"
//                             placeholder="-"
//                             size="lg"
//                             onChange={(e) => handleGetOtp(index, e)}
//                             value={realOtp[index]}
//                         />
//                     ))}
//                 </HStack>
//                 <Text mt="2" mb="4" fontSize="sm">
//                     OTP will expire in {otpTime} seconds
//                 </Text>
//                 <Button mt="4" onClick={handleSubmitOtp}>
//                     <Link to={forwardCongo ? "/congo" : ""}>Submit</Link>
//                 </Button>
//                 <IconButton
//                     mt="4"
//                     aria-label="Resend OTP"
//                     icon={<RepeatIcon />}
//                     onClick={handleResendOtp}
//                     variant="outline"
//                 >
//                     Resend OTP
//                 </IconButton>
//             </Box>
//         </Box>
//     );
// }
//
// export default OtpPage;
