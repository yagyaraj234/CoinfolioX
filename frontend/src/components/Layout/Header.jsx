import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <nav className="  justify-between items-center px-10 py-1 cursor-pointer md:flex md:flex-row  ">
                <p className="text-blue-800 font-bold text-2xl">
                    <Link to='/'>CoinFolioX</Link>
                </p>
                <ul className=" md:flex md:flex-row gap-6 ">
                    <li >
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cryptocurrencies'>Cryptocurrencies</NavLink>
                    </li>
                    <li>
                        <NavLink to='/articles' >Articles</NavLink>

                    </li>
                    <li>
                        <NavLink to='/trending' >Trending</NavLink>
                    </li>
                </ul>
                <div className="flex gap-4">

                    <button className="border px-4 py-1 rounded-md hover:bg-blue-700 hover:text-white"><Link to="/login">Login</Link></button>
                    <button className="px-4 py-1 rounded-md border hover:bg-gray">
                        <Link to='/signup'>Signup</Link>
                    </button>
                </div>
            </nav>

        </>
    )
}

export default Header