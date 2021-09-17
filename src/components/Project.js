import React from 'react'
import dbot from '../images/d_bot.PNG'
import addons from '../images/addons.PNG'

const Project = () => {
    return (
        <div>
            <div className="p-10 grid grid-flow-row grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">

                <div className="rounded overflow-hidden shadow-lg">
                    <img className="xl:5/6 lg:h-4/6 md:h-1/2 sm:h-1/2 h-1/2 w-screen" src={dbot} alt="dbot"></img>
                    <div className ="px-6 py-4">
                    <div className ="font-bold text-xl mb-2">MorWynn</div>
                    <p className ="text-gray-700 text-base break-all">
                    Morwynn is a discord bot that provides great resources for the Wynncraft guild "Nefuria".
                    </p>
                    </div>
                    <div className ="px-6 pt-4 pb-2">
                    <span className ="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Javascript</span>
                    <span className ="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Discord</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg">
                    <img className="xl:5/6 lg:h-4/6 md:h-1/2 sm:h-1/2 h-1/2 w-screen" src={addons} alt="addons"></img>
                    <div className ="px-6 py-4">
                    <div className ="font-bold text-xl mb-2">MOrowoAddons</div>
                    <p className ="text-gray-700 text-base break-words">
                    MOrowoAddons are moderated in Minecraft 1.8.9. Overall, it gives useful commands for addressing conflicts with the Hypixel server.
                    </p>
                    </div>
                    <div className ="px-6 pt-4 pb-2">
                    <span className ="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
                    <span className ="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Minecraft</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project
