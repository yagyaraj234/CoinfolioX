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
            <main className='px-10 py-10 min-w-[400px] '>
                {children}
            </main>
            <Footer />

        </div>
    )
}

export default Layout