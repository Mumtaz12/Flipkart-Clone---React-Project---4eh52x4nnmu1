import { Box, Button, Flex, HStack, Image, Input, Spacer, Text, Textarea } from "@chakra-ui/react";
import { CheckIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { MdSecurity } from "react-icons/md";
import { Navigate } from "react-router-dom";
import "./Cart.css";

function DeliveryPage() {
    const { cartData } = useContext(CartContext);

    let sellingPrice = 0;
    let discount = 0;
    let totalAmount = 0;

    cartData.forEach((data) => {
        sellingPrice += data.old_price * data.quantity;
        discount += data.discount;
        totalAmount += data.new_price * data.quantity;
    });
    discount = Math.floor(((discount / cartData.length) * sellingPrice) / 100);

    const [allFilled, setAllFilled] = useState(true);
    const [forward, setForward] = useState(false);

    const { globalAddress, setGlobalAddress } = useContext(CartContext);
    const [CountryCode, setCountryCode] = useState("+91");
    const [address, setAddress] = useState({
        Name: "",
        Number: "",
        Pincode: "",
        Email: "",
        Address: "",
        City: "",
        State: "",
    });
    const { Name, Number, Pincode, Email, Address, City, State } = address;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddress({ ...address, [name]: value });
        setGlobalAddress({ ...globalAddress, [name]: value });
    };

    const handleCheckAddress = () => {
        setAllFilled(true);

        // Validation checks
        if (!Name) {
            alert("Name is required.");
            setAllFilled(false);
            return;
        }

        if (!Number.match(/^\d{10}$/)) {
            alert("Mobile number must be 10 digits");
            setAllFilled(false);
            return;
        }

        const fullPhoneNumber = CountryCode + Number;

        if (!Pincode.match(/^\d{6}$/)) {
            alert("Pincode must be 6 digits.");
            setAllFilled(false);
            return;
        }

        if (!Email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            alert("Invalid email format.");
            setAllFilled(false);
            return;
        }

        if (!Address) {
            alert("Address is required.");
            setAllFilled(false);
            return;
        }

        if (!City) {
            alert("City is required.");
            setAllFilled(false);
            return;
        }

        if (!State) {
            alert("State is required.");
            setAllFilled(false);
            return;
        }

        console.log("Address is valid");

        fetch(`https://flipkart-data.onrender.com/address`, {
            method: "POST",
            body: JSON.stringify({ ...address, Number: fullPhoneNumber }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setForward(true);
            })
            .catch((error) => {
                console.error("Error:", error);
                setAllFilled(false);
            });
    };

    if (forward) {
        return <Navigate to="/summary" />;
    }

    return (
        <Box w="100%" pt={20} bg="#f1f3f6">
            <Flex
                w="100%"
                justifyContent="space-between"
                alignItems="start"
                flexDirection={["column", "row"]}
                margin="auto"
                flexWrap="wrap"
            >
                {/* LEFT BOX */}
                <Box w={["100%", "69%"]} bg="#f1f3f6">
                    {/* Left top 1 */}
                    <Box w="100%" h="10vh" bg="white" display="flex" justifyContent="space-between" alignItems="center" shadow="md">
                        <Box ml="6" display="flex" alignItems="center">
                            <Box bg="#f1f3f6" pl="2" pr="2" color="blue" mr="4" borderRadius="2">
                                1
                            </Box>
                            <Text fontWeight="500" color="grey">
                                LOGIN
                            </Text>
                            <CheckIcon ml="3" color="blue.600" />
                        </Box>
                        <Box>
                            <Button mr="6" colorScheme="blue" variant="outline" borderRadius="0" border="1px solid blue">
                                CHANGE
                            </Button>
                        </Box>
                    </Box>

                    {/* Top Box 2 */}
                    <Box w="100%" bg="#2874f0" mt="4" display="flex">
                        <Box ml="6" display="flex" alignItems="center">
                            <Box bg="white" pl="2" pr="2" color="blue" mr="4" borderRadius="2">
                                2
                            </Box>
                            <Text fontWeight="500" color="white">
                                DELIVERY ADDRESS
                            </Text>
                        </Box>
                    </Box>

                    {/* Top Box 3 FORM */}
                    <Box w="100%" h="70vh" bg="#f5faff" display="block" shadow="md" pl="10" pt="5">
                        <Box display="flex">
                            <InfoOutlineIcon mr="4" color="blue" />
                            <Text color="blue" fontWeight="500" mt="-1">
                                ADD A NEW ADDRESS
                            </Text>
                        </Box>
                        <Box display="flex" justifyContent="space-evenly" mt="8" w="80%">
                            <Flex flexDirection={["column", "row"]} w="100%">
                                <Input
                                    value={Name}
                                    onChange={handleInputChange}
                                    name="Name"
                                    placeholder="Name"
                                    minLength={3}
                                    maxLength={32}
                                    focusBorderColor={!/^[A-Za-z\s]+$/.test(Name)  ? 'lime' : 'red.300'}
                                    // className={!/^[A-Za-z\s]+$/.test(Name) ? "red.300" : "lime"}
                                    w={["100%", "45%"]}
                                    border="2px solid "
                                    bg="white"
                                    p="6"
                                />
                                <Input
                                    type='text'
                                    value={CountryCode}
                                    onChange={(e) => setCountryCode(e.target.value)}
                                    name="CountryCode"
                                    maxLength={3}
                                    focusBorderColor={CountryCode.length ===3 ? 'lime' : 'red.300'}
                                    placeholder="Country Code"
                                    w={["30%", "20%"]}
                                    className="valid-input" // You can apply a style class here
                                    p="6"
                                />
                                <Input
                                    value={Number}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="Number"
                                    placeholder="Mobile Number"
                                    w={["100%", "45%"]}
                                    maxLength={10}
                                    className={!Number.match(/^\d{1,10}$/) ? "invalid-input" : "valid-input"}
                                    border="2px solid "
                                    bg="white"
                                    p="6"
                                />
                            </Flex>
                        </Box>
                        <Box display="flex" justifyContent="space-evenly" mt="4" w="80%">
                            <Input
                                value={Email}
                                onChange={handleInputChange}
                                name="Email"
                                type="email"
                                minLength={6}
                                maxLength={32}
                                placeholder="Email"
                                w={["100%", "45%"]}
                                className={!Email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ? "invalid-input" : "valid-input"}
                                border="2px solid "
                                bg="white"
                                p="6"
                            />
                            <Input
                                value={Pincode}
                                onChange={handleInputChange}
                                name="Pincode"
                                type="number"
                                placeholder="Pincode"
                                maxLength={6}

                                w={["100%", "45%"]}
                                className={!Pincode.match(/^\d$/)  ? "invalid-input" : "valid-input"}
                                border="2px solid "
                                bg="white"
                                p="6"
                            />
                        </Box>
                        <Box display="flex" justifyContent="space-evenly" mt="4" w="80%">
                            <Textarea
                                value={Address}
                                onChange={handleInputChange}
                                type="text"
                                name="Address"
                                minLength={3}
                                maxLength={32}
                                placeholder="Address"
                                w="93.5%"
                                border="2px solid "
                                bg="white"
                                pl="6"
                                resize="none"
                                h="20"
                            />
                        </Box>
                        <Box display="flex" justifyContent="space-evenly" mt="4" w="80%">
                            <Input
                                value={City}
                                onChange={handleInputChange}
                                name="City"
                                placeholder="City/District/Town"
                                w={["100%", "45%"]}
                                border="2px solid "
                                bg="white"
                                p="6"
                                minLength={3}
                                maxLength={32}
                            />
                            <Input
                                value={State}
                                onChange={handleInputChange}
                                name="State"
                                placeholder="State"
                                w={["100%", "45%"]}
                                border="2px solid "
                                bg="white"
                                p="6"
                                minLength={3}
                                maxLength={32}
                            />
                        </Box>
                        <Box display="grid" ml="5" mt={allFilled ? "4" : "1"} w="80%">
                            <Text display={allFilled ? "none" : "flex"} mb="2" color="red" fontSize="16px" pl="1">
                                Please fill all the details
                            </Text>
                            <Button
                                color="white"
                                onClick={handleCheckAddress}
                                bg="#fb641b"
                                w={["60%", "25%"]}
                                borderRadius="0"
                                mr={["0", "5px"]}

                                pr="5"
                                pt="5"
                                pb="7"
                            >
                                DELIVER HERE
                            </Button>
                        </Box>
                    </Box>

                    <Box w="70%" h="8vh" bg="white" mt="5" display="flex" justifyContent="space-between" alignItems="left" shadow="md">
                        <Box ml="6" display="flex" alignItems="center">
                            <Box bg="#f1f3f6" pl="2" pr="2" color="blue" mr="4" borderRadius="2">
                                3
                            </Box>
                            <Text fontWeight="500" color="grey">
                                ORDER SUMMARY
                            </Text>
                        </Box>
                    </Box>

                    <Box w="80%" h="8vh" bg="white" mt="5" mb="20" display="flex" justifyContent="space-between" alignItems="center" shadow="md">
                        <Box ml="6" display="flex" alignItems="center">
                            <Box bg="#f1f3f6" pl="2" pr="2" color="blue" mr="4" borderRadius="2">
                                4
                            </Box>
                            <Text fontWeight="500" color="grey">
                                PAYMENT OPTIONS
                            </Text>
                        </Box>
                    </Box>
                </Box>

                {/* Right BOX */}
                <Box w={["100%", "29.5%"]} mt={["7", "0"]} bg="white" position="relative" top="0" shadow="sm">
                    <Box display="flex" justifyContent="flex-start" alignItems="center" bg="white" w="100%" h="12">
                        <Text ml="5" fontWeight="500" color="grey">
                            PRICE DETAILS
                        </Text>
                    </Box>
                    <hr style={{ color: "black" }} />
                    <Box display="flex" justifyContent="flex-start" alignItems="center" bg="white">
                        <Text ml="5" mt="5" fontWeight="400" fontSize="18px" color="black">
                            Price ({cartData.length} items)
                        </Text>
                        <Spacer />
                        <Text mr="5" mt="5" fontWeight="400" fontSize="18px" color="black">
                            ₹{totalAmount}
                        </Text>
                    </Box>
                    <Box display="flex" justifyContent="flex-start" mt="4" alignItems="center" bg="white" borderBottom="1px dashed grey">
                        <Text ml="5" mt="4" mb="5" fontWeight="400" fontSize="18px" color="black">
                            Delivery Charges
                        </Text>
                        <Spacer />
                        <Text mr="5" mt="4" mb="5" fontWeight="400" fontSize="18px" color="green">
                            FREE
                        </Text>
                    </Box>
                    <Box display="flex" justifyContent="flex-start" alignItems="center" bg="white" borderBottom="1px dashed grey">
                        <Text ml="5" mt="4" mb="5" fontWeight="500" fontSize="19px" color="black">
                            Total Amount
                        </Text>
                        <Spacer />
                        <Text mr="5" mt="4" mb="5" fontWeight="500" fontSize="19px" color="black">
                            ₹ {totalAmount}
                        </Text>
                    </Box>
                    <Box display="flex" justifyContent="flex-start" mt="5" alignItems="center" shadow="sm" bg="white">
                        <Image w="45%" src="https://assets.mspimages.in/wp-content/uploads/2021/01/Flipkart-SuperCoin.png" />
                        <Box display="grid">
                            <Text mt="3" ml="-4" fontWeight="700" fontSize="15px">
                                For every 100 spent,{" "}
                            </Text>
                            <br />
                            <Text mt="-7" fontWeight="700" fontSize="15px">
                                you earn 2 SuperCoins{" "}
                            </Text>
                            <br />
                            <Text mt="-7" mb="2" ml="-6" fontSize="13px" color="grey">
                                Max 50 coins per order
                            </Text>
                        </Box>
                    </Box>
                    <Box mt="5" p="5" display="grid" justifyContent="flex-start" alignItems="center">
                        <MdSecurity fill="grey" />
                        <Text mt="-5" ml="5" w="100%" textTransform="full-width" fontWeight="500">
                            Safe and Secure Payments. Easy returns.
                            <br />
                            100% Authentic products.
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}

export default DeliveryPage;
