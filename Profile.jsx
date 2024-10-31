import React, { userContext } from 'react';
import { UserContext } from './UserContext'; 

export default function Profile () {
    const {firstName, address, age} = userContext(UserContext)

    return(
    <ul>
        <li>First Name: {firstName}</li>
        <li>Age: {age}</li>
        <li>Nation: {address.nation}</li>
        <li>Street: {address.city.street}</li>
    </ul>
    )
}