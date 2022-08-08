import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="flex flex-col items-center space-y-3 justify-center w-full p-6 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
            <h1 className="text-3xl font-bold drop-shadow-md">Title</h1>
            <p className="text-xl max-w-prose text-center">Use this tool to find out what destructive activities, if any, companies are involved in. You can use both the search box and the filtering options below.</p>
        </div>
    </div>
  )
}

export default Navbar