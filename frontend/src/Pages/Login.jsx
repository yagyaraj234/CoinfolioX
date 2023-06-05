import React from 'react'
import Layout from '../components/Layout/Layout'
import { NavLink } from 'react-router-dom'


const Login = () => {
  return (
    <Layout>
      <div className='mx-auto w-full md:w-1/4 md:py-20'>
        <input type="text" placeholder='Username or Email' className='rounded p-2 w-full border mb-4' />
        <input type="text" placeholder='Password' className='rounded p-2 w-full border' />
        <p className='text-sm mb-4'>Don't have Account Register <NavLink className='cursor-pointer text-blue-600' to='/signup'>here.</NavLink></p>
        <button className='rounded p-2 w-full border mb-4'>Login</button>


      </div>
    </Layout>
  )
}

export default Login