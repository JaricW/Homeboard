import React from 'react'

const NewClimb = (props) => {
    return (
        <>
        <tr className="p-4">
        <td className="p-4 font-bold text-xl">{props.name}</td>
      </tr>
      <tr>
        <td className="p-4">{props.grade}</td>
        <td className="p-4">{props.stars}</td>
        <td className="p-4">
          <button
            onClick={props.function}
            className="bg-gray-500 px-6"
          >
            View
          </button>
        </td>
      </tr>
      </>
    )
}

export default NewClimb
