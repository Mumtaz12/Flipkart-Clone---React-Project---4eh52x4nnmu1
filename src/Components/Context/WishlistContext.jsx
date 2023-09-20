import React, { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
    // Initialize wishlist data by retrieving it from localStorage
    const [wishlistData, setWishlistData] = useState(
        JSON.parse(localStorage.getItem("wishlistData")) || []
    );

    // Function to update and save wishlist data to localStorage
    const updateWishlistData = (newData) => {
        setWishlistData(newData);
        localStorage.setItem("wishlistData", JSON.stringify(newData));
    };
    const addToWishlist = (itemToAdd) => {
        // Check if the item is already in the wishlist
        const existingItem = wishlistData.find((item) => item.id === itemToAdd.id);

        if (!existingItem) {
            // If it's not in the wishlist, add it with a quantity of 1
            setWishlistData([...wishlistData, { ...itemToAdd, quantity: 1 }]);
        }
    };

    // Remove an item from the wishlist
    const removeFromWishlist = (itemId) => {
        console.log("Removing item with ID:", itemId);

        const updatedWishlist = wishlistData.filter((item) => item.id !== itemId);
        console.log("Updated Wishlist:", updatedWishlist);

        setWishlistData(updatedWishlist);
        localStorage.setItem("wishlistData", JSON.stringify(updatedWishlist));
    };

    // Increase item quantity in the wishlist
    const increaseQuantity = (itemId, currentQuantity) => {
        const updatedWishlist = wishlistData.map((item) =>
            item.id === itemId ? { ...item, quantity: currentQuantity + 1 } : item
        );
        setWishlistData(updatedWishlist);
    };

    // Decrease item quantity in the wishlist
    const decreaseQuantity = (itemId, currentQuantity) => {
        if (currentQuantity > 1) {
            const updatedWishlist = wishlistData.map((item) =>
                item.id === itemId ? { ...item, quantity: currentQuantity - 1 } : item
            );
            setWishlistData(updatedWishlist);
        }
    };

    // Implement other wishlist functions (addToWishlist, removeFromWishlist, etc.) as before

    useEffect(() => {
        // Simulate loading wishlist data from an API or storage
        const fetchData = async () => {
            try {
                // Replace this with your actual API call or data fetching logic
                const response = await fetch(`https://flipkart-data.onrender.com/products`);
                const data = await response.json();
                updateWishlistData(data); // Update and save the fetched data to wishlistData and localStorage
            } catch (error) {
                console.error("Error fetching wishlist data:", error);
            }
        };

        fetchData();
    }, []);

    const value = {
        wishlistData,
        addToWishlist,
        removeFromWishlist,
        increaseQuantity,
        decreaseQuantity,
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
};
