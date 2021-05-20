import React from 'react'

const ClimbView = (props) => {
    return (
        <div className="fixed flex justify-center w-full h-screen bg-gray-700">
      <img src={props.newImage} className="max-h-screen" />
      <div className="absolute bottom-6 bg-gray-900 rounded-lg flex flex-col items-center p-2 border-2 border-yellow-600 w-64">
      <h2 className=" text-2xl font-Bubblegum text-yellow-600 p-1">{props.name}</h2>
      <h2 className=" text-lg font-Merriweather text-yellow-600 p-1">{props.grade}</h2>
      <button
        className=" font-Merriweather border-yellow-600 border-2 rounded-lg p-4 px-6 w-32 hover:bg-yellow-600 hover:text-white bg-gray-900 text-yellow-600"
      
        onClick={() => props.setView([])}
      >
        Go Back
      </button>
      </div>
    </div>
    )
}

export default ClimbView
