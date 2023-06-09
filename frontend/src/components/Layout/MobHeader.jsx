import React from 'react'
import {Link,NavLink } from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'


const MobHeader = () => {
  return (
    <>
  
    <div className='px-2 flex justify-between py-2 border-b-2'>
        <Link to='/' className='text-2xl font-semibold text-blue-700'> CoinFolioX</Link>
        <RxHamburgerMenu className='text-4xl font-light'/>   
    </div>
    <div className='px-2'>
        <ul className='flex flex-col  py-2'>
            <NavLink>Article</NavLink>
            <NavLink>Exchanges</NavLink>
            <NavLink>Trending</NavLink>
            <NavLink>Cryptocurrencies</NavLink>
        </ul>

    </div>
    </>
  )
}

export default MobHeader