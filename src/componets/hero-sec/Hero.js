import React, { useContext } from 'react'
import { userContext } from '../../context'
import Header from '../Header/Header'
import TopHeader from '../TopHeader/TopHeader'
import './hero.css'
function Hero() {
 const {data} = useContext(userContext);
 {data && console.log('dadadada' , data)} 
    return (
        <div className='hero-sec'>
            <Header />
            <TopHeader />
        </div>
    )
}

export default Hero