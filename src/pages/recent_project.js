import React from 'react'
import Project from '../components/Project'

const RecentProject = () => {
    return (
        <>
        <div className="h-screen flex flex-col justify-center items-center bg-pink-300">
            <h1 className="text-center text-9xl uppercase font-black"> RECENT PROJECTS</h1>
            <div className="mt-12 span text-center font-black text-2xl">Scroll down :)</div>
        </div>
        <div>
            <Project></Project>
        </div>
        </>
    )
}

export default RecentProject
