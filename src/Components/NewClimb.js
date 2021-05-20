import React from "react";

const NewClimb = (props) => {
  return (
    <section className="md:w-10/12 flex flex-col md:flex-row items-center justify-between border-4 rounded-lg border-yellow-600 m-2 p-4 bg-gray-400">
      <div className="p-4 w-60">
        <h2 className="text-3xl text-center md:text-left font-Bubblegum">{props.name}</h2>
      </div>
      <div className="p-4 flex gap-10">
        <p className="text-xl font-Merriweather">{props.grade}</p>
        <p className="text-xl font-Merriweather">{props.stars}</p>
      </div>
      <button
        onClick={props.function}
        className="font-Merriweather border-yellow-600 border-2 rounded-lg p-4 px-6 w-32 bg-yellow-600 text-white hover:bg-gray-900 hover:text-yellow-600"
      >
        View
      </button>
    </section>
  );
};

export default NewClimb;
