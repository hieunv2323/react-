import React from 'react'
import './Cart.scss'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1500px;
    margin: auto;
    padding-left: 1rem;
    padding-right: 1rem;
`

export default function Cart({isshow}) {
   return (
    <div className = 'container'>
        Cart 
        <div className='button'>
            <button className='button-item' style ={{backgroundColor: 'yellow', display: isshow ? 'inline-block' : 'none'}}>
                hello
            </button>
        </div>
    </div>
   )
}