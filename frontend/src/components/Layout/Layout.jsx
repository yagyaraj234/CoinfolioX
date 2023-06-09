import React from 'react'
import Header from './Header'
import LiveSection from './LiveSection'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className=' '>
            <div>
            <LiveSection />
            <Header />
            </div>
            <main className='md:px-10 px-2 py-10  '>
                {children}
            </main>
            <Footer />

        </div>
    )
}

export default Layout