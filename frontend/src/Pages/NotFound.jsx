import React from 'react'
import { NavLink } from 'react-router-dom'



const NotFound = () => {
    return (
        <>
            <div className='md:w-1/3 mx-auto  md:py-20'>
                {/* <p className='md:text-[120px]'>404</p> */}
                <div className='flex  text-6xl md:text-[120px] '>
                    <p className='rotate-12 translate-x-1'>4</p>
                    <p className='rotate-6  translate-y-3 md:translate-y-6 md:text-[100px]'>0</p>
                    <p className=' translate-x-1 '>4</p>
                </div>
                <h1 className='mb-20 text-xl' >The page you are requesting isn't available. <br />
                    Please Check Urls.
                </h1>
                <NavLink to='/' className='mx-auto w-1/3 border-2 bg-black text-white py-4 px-2 shadow-md hover:bg-gray-900 md:text-xs text-xs'>Go Back to Home</NavLink>
            </div>

        </>
    )
}

export default NotFound