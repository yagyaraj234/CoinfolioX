import React from 'react'
import NewsCard from '../components/NewsCard'
import CoinList from '../components/CoinList'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <NewsCard />
      <CoinList amount={50}/>
      <button className=' flex justify-center mx-auto  px-2 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 w-2/4 my-5 md:py-2 md:w-1/4'><NavLink to='/cryptocurrencies'>More Coins</NavLink></button>
    </>
  )
}

export default Home;