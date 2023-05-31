import React from 'react'

const NewsCard = () => {
    return (
        <div
            className='grid md:grid-cols-3 grid-cols-1 gap-20  py-10 '>
            <div className=" border p-4 flex flex-col  rounded-md shadow-md bg-gray-400">
                <p className='text-left text-sm pb-4'>Hello World <span></span></p>
                <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, quia? Modi, voluptatem dolore totam itaque commodi unde reiciendis, harum eveniet dicta iure sapiente? Aperiam suscipit necessitatibus maxime ...... </p>
            </div>
            

        </div>
    )
}

export default NewsCard