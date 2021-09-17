import React from 'react'
import Content from '../components/Content'

const About = () => {
    return (
        <>
        <div className="h-screen flex flex-col justify-center items-center bg-green-300">
            <h1 className="text-center text-9xl uppercase font-black"> ABOUT ME</h1>
            <div className="mt-12 span text-center font-black text-2xl">Scroll down :)</div>
        </div>
        <div>
            <Content></Content>
        </div>
        </>
    )
}

export default About
