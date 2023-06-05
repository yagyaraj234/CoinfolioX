import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'


const profileMenu = [
    { key: 1, name: 'Edit Profile',link:'edit_profile' },
    { key: 2, name: 'Portfolio',link:'user_portfolio' },
    // { key: 3, name: 'Newsletter',link:'newsletter' },
    { key: 4, name: 'Logout',link:'/' }
]

const Profile = () => {
    return (
        <Layout>
            <div className="flex flex-row justify-center items-center  py-6 rounded-md shadow-md ">
                <div className='w-2/6 md:w-1/6 text-left px-2 '>
                    <ul className='bg-blue-800 text-white'>
                        {
                            profileMenu?.map((menu) => (
                                <li key={menu.key} className=' hover:bg-blue-600 px-3'>
                                    <Link to={menu.link}>{menu.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='w-4/6 md:w-5/6 px-4 bg-gray-500'>Hello worlds</div>

            </div>
        </Layout>
    )
}

export default Profile