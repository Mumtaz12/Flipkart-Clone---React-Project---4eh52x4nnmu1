import React, {useContext, useState} from 'react';
import { Box, Button, Image, SkeletonText, Text, useDisclosure } from '@chakra-ui/react';
import { WishlistContext } from '../Context/WishlistContext';
import { CartContext } from '../Context/CartContext'; // Import CartContext

function WishlistPage() {
    const {  getWishlistData,wishlistUrl,wishlistData,
        loading,
        wishlistpageData,
        setWishlistpageData} = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext); // Get addToCart function from CartContext
    console.log("Wishlist data:", wishlistData);

    // function getAddress() {
    //     fetch(`https://flipkart-data.onrender.com/address`)
    //         .then((res) => res.json())
    //         .then((res) => setAddress(res));
    // }
    //
    // console.log(address);

    if (loading) {
        return (
            <Box display="flex" w="100%" h="100vh" justifyContent="center" alignItems="center">
                <Box padding="6" boxShadow="lg" w="80%" bg="white">
                    <SkeletonText noOfLines={15} w="100%" spacing="4" />
                </Box>
            </Box>
        );
    }

    if (!wishlistData || wishlistData.length === 0) {
        return (
            <Box w="100%" bg="#f1f3f6" h="150vh" pt="100px">
                {/* Your empty wishlist UI */}
            </Box>
        );
    }

    return (
        <Box w="100%" bg="#f1f3f6" minH="100vh" pt="20px">
            {wishlistData.map((item) => (
                <div key={item.id}>
                    <Image src={item.image} alt={item.name} w="100px" h="100px" />
                    <Text>{item.name}</Text>
                    {/*<Button onClick={() => removeFromWishlist(item.id)}>Remove from Wishlist</Button>*/}
                    <Button onClick={() => addToCart(item)}>Add to Cart</Button> {/* Add to Cart functionality */}
                </div>
            ))}
        </Box>
    );
}

export default WishlistPage;
