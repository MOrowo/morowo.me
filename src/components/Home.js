import React from 'react'
import { Link } from 'react-router-dom'
import background from "../images/homebg.jpg";
// import test from "../images/test.jpg"

const Home = () => {
    return (
        <div className="w-full h-full">
            <div style={{ backgroundImage: `url(${background})`, opacity: 0.25 }} className="absolute w-full h-full bg-cover bg-center bg-opacity-50"></div>
            <div className="relative h-screen flex flex-col justify-center items-center">
                <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-2xl font-black mb-6 text-center">ATHIPAT BOONCHAMNAN</h1>
                <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-1xl font-black mb-20 text-center">Techs, Politics, and Sports</h2>
                <Link className="py-6 px-10 bg-green-300 rounded-full text-3xl hover:bg-green-500 transition duration-300 
        case-in-out flex items-center" to="/about">Go to About Me</Link>
            </div>
        </div>
    )
}

export default Home
