import React from 'react'
import Layout from '../components/Layout/Layout'
import { NavLink } from 'react-router-dom'


const Signup = () => {
  return (
    <Layout>
      <div className='mx-auto w-full md:w-1/4  md:pb-6 md:pt-5'>
        <input type="text" placeholder='Username' className=' rounded p-2 w-full border mb-4' />
        <input type="text" placeholder='Email' className='rounded p-2 w-full border mb-4' />

        <input type="text" placeholder='Password' className='rounded p-2 w-full border mb-4' />
        <input type="text" placeholder='Confirm Password' className='rounded p-2 w-full border' />
        <p className=' text-sm mb-4'>Already have Account Login  <NavLink className='cursor-pointer text-blue-600' to='/login'>here.</NavLink></p>
        <button className='rounded p-2 w-full border mb-4'>Signup</button>


      </div>
    </Layout>
  )
}

export default Signup