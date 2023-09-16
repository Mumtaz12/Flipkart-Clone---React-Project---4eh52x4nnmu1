// WishlistContextProvider.js
import React, { createContext, useEffect, useState } from 'react';

export const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
    const wishlistUrl = 'https://flipkart-data.onrender.com/products';

    const [wishlistData, setWishlistData] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(false);
    const [wishlistpageData, setWishlistpageData] = useState([]);

    // Load wishlist page data from localStorage on component mount
    useEffect(() => {
        const prevData = JSON.parse(localStorage.getItem('wishlistpageData')) || [];
        setWishlistpageData(prevData);
    }, []);

    // Save wishlist page data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('wishlistpageData', JSON.stringify(wishlistpageData));
    }, [wishlistpageData]);

    // Fetch wishlist data and update state
    function getWishlistData() {
        setLoading(true);
        fetch(wishlistUrl)
            .then((res) => res.json())
            .then((res) => {
                console.log(res, 'wishlist data');
                setWishlistData(res);
            })
            .catch((err) => {
                console.error(err);
                // Handle errors here, e.g., set an error state
            })
            .finally(() => setLoading(false));
    }

    // Call the getWishlistData function on component mount
    useEffect(() => {
        getWishlistData();
    }, [wishlistUrl]);

    return (
        <WishlistContext.Provider
            value={{
                getWishlistData,
                wishlistData,
                loading,
                wishlistpageData,
                setWishlistpageData,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistContextProvider;
