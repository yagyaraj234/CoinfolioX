import React from 'react'
import { newData } from '../data'

const NewsCard = () => {
    return (
        <div
            className='grid md:grid-cols-3 grid-cols-1 gap-20'>
            {newData.map((data) => (
                <div className=" border p-4 flex flex-col  rounded-md shadow-md " key={data.key}>

                    <p className='text-left text-sm pb-2 mb-2 border-b'>{data.username} <span></span></p>
                    <p className='text-justify'>{data.news}</p>
                </div>
            ))}
        </div>
    )
}

export default NewsCard