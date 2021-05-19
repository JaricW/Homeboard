import React from 'react'

const ClimbView = (props) => {
    return (
        <div className="fixed flex justify-center w-full h-screen bg-yellow-700">
      <img src={props.newImage} className="max-h-screen" />
      <button
        className="absolute bottom-10 bg-gray-700 p-4 rounded-lg text-white"
        onClick={() => props.setView([])}
      >
        Go Back
      </button>
    </div>
    )
}

export default ClimbView
