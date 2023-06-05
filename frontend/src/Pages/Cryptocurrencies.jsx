import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Cryptocurrencies = () => {

    const [cryptoData, setCryptoData] = useState([]);


    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=Usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en')
            .then(res => {
                setCryptoData(res.data);
            }).catch(err => console.log(err));
    }, [])
    return (
        <Layout>
            <h1 className='md:text-2xl text-xl font-semibold pb-20'>Cryptocurrency Prices by Market Cap</h1>

            <ul>
                <ul className='grid grid-cols-4 md:grid-cols-7  font-semibold text-center border-black border-2 text-sm md:text-lg bg-gray-200 '>
                    <li className='border-black border '>Rank</li>
                    <li className='border border-black'>Name</li>
                    {/* <li className='border border-black'>Symbol</li> */}
                    <li className='border border-black ' >Price</li>
                    <li className='border border-black hid ' >24 hour low</li>
                    <li className='border border-black hid ' >24 hour high</li>
                    <li className='border border-black ' >Total Volume</li>
                    <li className='border border-black hid' >Market cap</li>
                </ul>

                {cryptoData?.map((coin) => (
                    <ul className='grid  grid-cols-4 md:grid-cols-7  text-center text-xs md:text- font-medium items-center'>
                        <NavLink className='border py-2'>{coin.market_cap_rank}</NavLink>
                        <NavLink className='border flex flex-row gap-3 justify-start pl-4 items-center py-2   '>
                            <img className='h-4 w-4 ' src={coin.image} alt="logo" />
                            <p className='hid'>{(coin.name).slice(0,12)}</p>
                            
                            <p className='uppercase text-gray-400 text-right'>{coin.symbol}</p>
                            </NavLink>
                        {/* <NavLink className='border py-2'>{coin.symbol}</NavLink> */}
                        <NavLink className='border py-2'>$ {coin.current_price}</NavLink>
                        <li className='border hid py-2 ' >$ {coin.low_24h}</li>
                        <li className='border hid py-2 ' >$ {coin.high_24h}</li>
                        <NavLink className='border py-2'>$ {coin.total_volume}</NavLink>
                        <li className='border hid py-2' >$ {coin.market_cap}</li>


                    </ul>
                ))}
            </ul>
        </Layout>
    )
}

export default Cryptocurrencies;



