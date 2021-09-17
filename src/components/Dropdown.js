import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isShow, toggle}) => {
    return (
        <div className={isShow ? "grid grid-rows-3 text-center items-center bg-gray-600" : "hidden"}
        onClick={toggle}>
            <Link className="text-white text-xl p-4" to='/'>Home</Link>
            <Link className="text-white text-xl p-4" to='/about'>About</Link>
            <Link className="text-white text-xl p-4" to='/recent-projects'>Projects</Link>
        </div>
    )
}

export default Dropdown
