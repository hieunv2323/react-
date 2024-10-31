import React, { useContext } from 'react';
import { UserContext } from './UserContext'; 
import Profile from './Profile';

export default function UserProfile() {
    const { IncreaseAge } = useContext(UserContext);

    return (
        <div>
            <Profile />
            <button onClick={IncreaseAge}>Increase Age</button>
        </div>
    );
}