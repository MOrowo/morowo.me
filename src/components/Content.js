import React from 'react'
import Me from '../images/Me.jpg'

const Content = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
            <img src={Me} alt="me" className="min-h-0 rounded-full mb-20"></img>
            <div className="flex flex-col justify-center items-center">
                <h2 className="break-all lg:text-3xl md:text-2xl sm:text-xl mb-2 leading-10 text-center">Hi! this is Morning. I am a sophomore student in Bangkok, Thailand. 
                <br></br>I am a fan of the Los Angeles Clipper of the NBA.</h2>
            </div>
        </div>
    )
}

export default Content
