import React from 'react';

function MyProfile() {
    const user = JSON.parse(localStorage.getItem('user')); // Replace with your data source

    return (
        <div>
            <h1>My Profile</h1>
            {/*<p>Name: {user.name}</p>*/}
            <p>Email: {user.email}</p>
            {/* Display other user details here */}
        </div>
    );
}

export default MyProfile;
