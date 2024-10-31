
import React, { createContext, useEffect, useState } from 'react';
import UserProfile from './UserProfile';


const initialAddress = () => {
    console.log('initialAddress')
    return {
        nation: 'VietNam',
        city: {
            street:'Duong Tran Lam'
        }
    }
}

const getAddress = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve({
                nation: 'USA',
                city: {
                    street:'California'
                }
            })
        }, 3000)
    })
}

const UserContext = createContext()

export default function User (){
    const [firstName, setFirstName] = useState('Alex')
    const [age, setAge] = useState(24)  
    const [,forceRerender] = useState(0)
    const [address, setAddress] = useState({
        nation : 'Viet Nam',
        city: {
            street: 'Duong Tran Lam'
        }
    });

    const IncreaseAge = ()=> {
        setAge((prevAge) => prevAge + 1 )
    }

    const profile = 100

    const Rerender = () => forceRerender(prev => prev + 1);
    //const rerender = () => forceRerender(prevState => prevState + 1); 
    //taị sao lại sai ạ 
    const changeStreet = () => {
        setAddress(prevAddress => ({
            ...prevAddress, city: {
                ...prevAddress.city,
                street: 'Duong Tran Lam'
            }
        }));
    }
  
    console.log('re-render')


    //Thường dùng để gọi API
    useEffect(() => {
        console.log('useEffect giong componentDidUpdate')
        getAddress().then((res) => {
            // const newAddress = {...address}// dùng để thay đổi chỉ city =)))
            // newAddress.city = res.city
            // setAddress(newAddress)
            setAddress(prevAddress => {
                const newAddress = {...prevAddress}
                newAddress.city = res.city
                return newAddress
            })
        })

        return () => {
            console.log('Huy goi API')
        }
    },[])

    return (
        <div>
             <h1>User Function component</h1>
             <UserContext.Provider 
             value= {{
                firstName, address, 
                age, IncreaseAge
             }}
            >
             <UserProfile />
             </UserContext.Provider>
            <button onClick={Rerender}>rerender</button>
            <button onClick={changeStreet}>change city</button>
        </div>
    )
}