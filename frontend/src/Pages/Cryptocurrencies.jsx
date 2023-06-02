import React from 'react'
import Layout from '../components/Layout/Layout'
import { NavLink } from 'react-router-dom'

import { cryptoData } from '../data'
const Cryptocurrencies = () => {
    return (
        <Layout>
            <h1 className='text-5xl pb-20'>Top 100 Coins</h1>

            <ul>
                <ul className='grid grid-cols-4 font-semibold text-center border'>
                <li className='border text-lg'>Name</li>
                <li className='border text-lg'>Symbol</li>
                <li className='border text-lg' >Price</li>
                <li className='border text-lg' >Volume</li>
                </ul>
                
                {cryptoData.map((coin)=>(
                    <ul className='grid grid-cols-4  text-center'>
                        <NavLink className='border'>{coin.name}</NavLink>
                        <NavLink className='border'>{coin.Sname}</NavLink>
                        <NavLink className='border'>{coin.Price}</NavLink>
                        <NavLink className='border'>{coin.volume}</NavLink>
                    </ul>
                )) }
            </ul>
        </Layout>
    )
}

export default Cryptocurrencies;