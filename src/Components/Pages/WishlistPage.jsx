
import React, { useContext } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Text,
    Image,
    VStack,
    Spacer,
} from "@chakra-ui/react";
import { WishlistContext } from "../Context/WishlistContext";
import {NavLink} from "react-router-dom";

function WishlistPage() {
    const {
        wishlistData,
        removeFromWishlist,
        increaseQuantity,
        decreaseQuantity,
    } = useContext(WishlistContext);

    // Function to render a single wishlist item
    const renderWishlistItem = (item) => {
        return (
            <Box
                key={item.id}
                display="flex"
                flexDirection="column"
                w="100%"
                m=""
                p="2"
                borderTop={"1px solid #F0F0F5"}
            >
                <Box w="100%" display="flex" alignItems="center" justifyContent="center">
                    <Image src={item.image} maxW="120px" maxH="110px" />
                </Box>
                <Box textAlign="center">
                    <ButtonGroup>
                        <Button onClick={() => decreaseQuantity(item.id, item.quantity)}>-</Button>
                        <Button>{item.quantity}</Button>
                        <Button onClick={() => increaseQuantity(item.id, item.quantity)}>+</Button>
                    </ButtonGroup>
                </Box>
                <Box ml="2" mt="2">
                    <Text fontSize="16px" fontWeight="semibold" display="flex" justifyContent="start" variant="list">
                        {item.description}
                    </Text>
                    <Text fontSize="16px" fontWeight="400" display="flex" mt="1" color="grey" justifyContent="start">
                        Category: {item.category_name}
                    </Text>
                    <Box display="flex" alignItems="center" mt="1">
                        <Text color="grey" fontSize="17px" fontWeight="400" display="flex" justifyContent="start">
                            Ratings: {item.hidden_stars} ★
                        </Text>
                    </Box>
                    <Box display="flex" alignItems="center" mt="3">
                        <Text color="grey" fontSize="17px" fontWeight="400" display="flex" justifyContent="start">
                            ₹{item.quantity * item.old_price}
                        </Text>
                        <Text fontSize="19px" fontWeight="semibold" display="flex" justifyContent="start" ml="2">
                            ₹{item.quantity * item.new_price}
                        </Text>
                    </Box>
                    <Button
                        display="flex"
                        size="md"
                        mt="4"
                        colorScheme="blue"
                        bg="lightgray"
                        color
                        onClick={() => removeFromWishlist(item.id)}
                    >
                        REMOVE
                    </Button>
                </Box>
            </Box>
        );
    };

    return (
        <Box w="100%" bg="#f1f3f6" minH="100vh" pt="20px">
            <VStack w="90%" bg="f1f3f6" margin="auto" display="flex" alignItems="start">
                {wishlistData.length === 0 ? (
                    <Box w="100%" bg="#f1f3f6" h="150vh" pt="100px">
                        <Box w="78%" h="60.3vh" margin="auto" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                            <Box w="100%" bg="white" h="9vh" margin="auto" display="flex" alignItems="center" justifyContent="center">
                                <Text color="blue" fontSize="20" fontWeight="400">
                                    Flipkart
                                </Text>
                            </Box>
                            <Box w="100%" bg="white" mt="2" h="50vh" margin="auto" display="flex" alignItems="start" justifyContent="center">
                                <Image src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" w="20%" mt="5" />
                            </Box>
                            <Box w="200px" m="auto" textAlign="center">
                                <Text mt="-36" fontWeight="400" fontSize="18px">
                                    Your Wishlist is empty!
                                </Text>
                                <Text fontWeight="400" fontSize="13px">
                                    Add items to it now.
                                </Text>
                                <NavLink to="/">
                                    <Button color="white" bg="#2874f0" borderRadius="0" mt="4" pl="16" pr="16">
                                        Add now
                                    </Button>
                                </NavLink>
                            </Box>
                        </Box>
                    </Box>

                ) : (
                    wishlistData.map((item) => renderWishlistItem(item))
                )}
            </VStack>
        </Box>
    );
}

export default WishlistPage;
