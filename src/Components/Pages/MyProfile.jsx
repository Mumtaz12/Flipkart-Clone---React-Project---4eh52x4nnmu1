import React, { useEffect, useState } from 'react';

function MyProfile() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('Userdetails')));
    const [userData, setUserData] = useState(null);

    const handleResetPassword = () => {
        // Implement password reset logic here
        // You can show a modal or send a reset link to the user's email
        alert('Password reset functionality to be implemented.');
    };

    const handleLogout = () => {
        // Clear user data from local storage on logout
        localStorage.removeItem('user');
        window.location.reload(); // Reload the page or redirect to the login page
    };

    useEffect(() => {
        // Fetch user data from the API
        fetch('https://flipkart-data.onrender.com/Userdetails')
            .then((response) => response.json())
            .then((data) => {
                // Assuming you have an array of user data, you can find the user by their email
                console.log(data)
                const foundUser = data.find((user) => user.email === user.email);
                console.log(foundUser,"usrer datatatatat")
                setUserData(foundUser);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, [user]);

    return (
        <div>
            {userData ? (
                <>
                    <h1>My Profile</h1>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    <p>Mobile Number: {userData.mobile}</p>
                    <button onClick={handleResetPassword}>Reset Password</button>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
}

export default MyProfile;
