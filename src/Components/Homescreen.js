import React, { useState } from "react";
import RedOctober from "../Images/RedOctober.jpg";
import Hamilton from "../Images/Hamilton.jpg";
import ShoodaWoodaCooda from "../Images/ShoodaWoodaCooda.jpg";
import TheLongArmoftheLaw from "../Images/TheLongArmoftheLaw.jpg";
import YellowSubmarine from "../Images/YellowSubmarine.jpg";

const Homescreen = () => {
  const [showImage, setShowImage] = useState([]);

  const yellowSubmarine = (
    <div className="fixed flex justify-center w-full h-screen bg-yellow-700">
      <img src={YellowSubmarine} className="max-h-screen" />
      <button
        className="absolute bottom-10 bg-gray-700 p-4 rounded-lg text-white"
        onClick={() => setShowImage([])}
      >
        Go Back
      </button>
    </div>
  );

  const hamilton = (
    <div className="fixed flex justify-center w-full h-screen bg-yellow-700">
      <img src={Hamilton} className="max-h-screen" />
      <button
        className="absolute bottom-10 bg-gray-700 p-4 rounded-lg text-white"
        onClick={() => setShowImage([])}
      >
        Go Back
      </button>
    </div>
  );

  const redOctober = (
    <div className="fixed flex justify-center w-full h-screen bg-yellow-700">
      <img src={RedOctober} className="max-h-screen" />
      <button
        className="absolute bottom-10 bg-gray-700 p-4 rounded-lg text-white"
        onClick={() => setShowImage([])}
      >
        Go Back
      </button>
    </div>
  );

  const shoodaWoodaCooda = (
    <div className="fixed flex justify-center w-full h-screen bg-yellow-700">
      <img src={ShoodaWoodaCooda} className="max-h-screen" />
      <button
        className="absolute bottom-10 bg-gray-700 p-4 rounded-lg text-white"
        onClick={() => setShowImage([])}
      >
        Go Back
      </button>
    </div>
  );

  const theLongArmoftheLaw = (
    <div className="fixed flex justify-center w-full h-screen bg-yellow-700">
      <img src={TheLongArmoftheLaw} className="max-h-screen" />
      <button
        className="absolute bottom-10 bg-gray-700 p-4 rounded-lg text-white"
        onClick={() => setShowImage([])}
      >
        Go Back
      </button>
    </div>
  );

  return (
    <main className=" w-full bg-gray-200">
      {showImage}
      <div className="w-full flex justify-center p-16 text-2xl font-bold z-0">
        <h1>The Lapwing Cave</h1>
      </div>
      <table className="w-full flex justify-center text-lg">
        <tbody className="w-10/12 bg-gray-50 flex flex-col items-center  p-4">
          <tr className="p-4">
            <td className="p-4 font-bold text-xl">Yellow Submarine</td>
          </tr>
          <tr>
            <td className="p-4">6a+</td>
            <td className="p-4">***</td>
            <td className="p-4">
              <button
                onClick={() => setShowImage(yellowSubmarine)}
                className="bg-gray-500 px-6"
              >
                View
              </button>
            </td>
          </tr>
          <tr className="p-4">
            <td className="p-4 font-bold text-xl">Hamilton</td>
          </tr>
          <tr>
            <td className="p-4">6b+</td>
            <td className="p-4">***</td>
            <td className="p-4">
              <button
                onClick={() => setShowImage(hamilton)}
                className="bg-gray-500 px-6"
              >
                View
              </button>
            </td>
          </tr>
          <tr className="p-4">
            <td className="p-4 font-bold text-xl">Red October</td>
          </tr>
          <tr>
            <td className="p-4">6b</td>
            <td className="p-4">**</td>
            <td className="p-4">
              <button
                onClick={() => setShowImage(redOctober)}
                className="bg-gray-500 px-6"
              >
                View
              </button>
            </td>
          </tr>
          <tr className="p-4">
            <td className="p-4 font-bold text-xl">Shooda Wooda Cooda</td>
          </tr>
          <tr>
            <td className="p-4">6c</td>
            <td className="p-4">**</td>
            <td className="p-4">
              <button
                onClick={() => setShowImage(shoodaWoodaCooda)}
                className="bg-gray-500 px-6"
              >
                View
              </button>
            </td>
          </tr>
          <tr className="p-4">
            <td className="p-4 font-bold text-xl">The Long Arm of the Law</td>
          </tr>
          <tr>
            <td className="p-4">6c+</td>
            <td className="p-4">***</td>
            <td className="p-4">
              <button
                onClick={() => setShowImage(theLongArmoftheLaw)}
                className="bg-gray-500 px-6"
              >
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Homescreen;
