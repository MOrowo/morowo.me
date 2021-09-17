import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-between items-center h-28 bg-white text-black relative shadow-sm font-mono" role="navigation">
            <Link to='/' className='pl-8'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="text-xl p-4" to="/">Home</Link>
                <Link className="text-xl p-4" to="/about">About</Link>
                <Link className="text-xl p-4" to="/recent-projects">Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar
