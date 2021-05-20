import React, { useState } from "react";

import ClimbView from "./ClimbView";
import NewClimb from "./NewClimb";

import RedOctober from "../Images/RedOctober.jpg";
import Hamilton from "../Images/Hamilton.jpg";
import ShoodaWoodaCooda from "../Images/ShoodaWoodaCooda.jpg";
import TheLongArmoftheLaw from "../Images/TheLongArmoftheLaw.jpg";
import YellowSubmarine from "../Images/YellowSubmarine.jpg";
import GrimReaper from "../Images/GrimReaper.jpg";
import TheBigSqueeze from "../Images/TheBigSqueeze.jpg";
import LeftBehind from "../Images/LeftBehind.jpg";
import LockNLoad from "../Images/LockNLoad.jpg";
import PocketDial from "../Images/PocketDial.jpg";


const Test = () => {
  const [view, setView] = useState([]);

  const findImage = (img, name, grade) => {
    setView(<ClimbView setView={setView} newImage={img} name={name} grade={grade} />);
  };

  return (
    <main className=" w-full bg-gray-900">
      {view}
      <div className="w-full flex justify-center p-8  z-0">
        <h1 className="text-yellow-500 text-4xl  mt-6 font-bold text-center font-PermanentMarker tracking-widest">The Lapwing Cave</h1>
      </div>
      <section className="w-full flex justify-center text-lg">
        <div className="w-10/12 md:w-8/12 bg-gray-600 rounded-lg p-4 flex flex-col items-center mb-6">
          <NewClimb
            name={"Yellow Submarine"}
            grade={"6A+"}
            stars={"***"}
            function={() => findImage(YellowSubmarine, "Yellow Submarine", "6A+")}
          />
          <NewClimb
            name={"Hamilton"}
            grade={"6B+"}
            stars={"***"}
            function={() => findImage(Hamilton, "Hamilton", "6B+")}
          />
          <NewClimb
            name={"Red October"}
            grade={"6B"}
            stars={"**"}
            function={() => findImage(RedOctober, "Red October", "6B")}
          />
          <NewClimb
            name={"Shooda Wooda Cooda"}
            grade={"6C"}
            stars={"**"}
            function={() => findImage(ShoodaWoodaCooda, "Shooda Wooda Cooda", "6C")}
          />
          <NewClimb
            name={"The Long Arm of the Law"}
            grade={"6C+"}
            stars={"***"}
            function={() => findImage(TheLongArmoftheLaw, "The Long Arm of the Law", "6C+")}
          />
          <NewClimb
            name={"The Big Squeeze"}
            grade={"6C"}
            stars={"**"}
            function={() => findImage(TheBigSqueeze, "The Big Squeeze", "6C")}
          />
          <NewClimb
            name={"Left Behind"}
            grade={"7A"}
            stars={"**"}
            function={() => findImage(LeftBehind, "Left Behind", "7A")}
          />
          <NewClimb
            name={"Grim Reaper"}
            grade={"7B"}
            stars={"**"}
            function={() => findImage(GrimReaper, "Grim Reaper", "7B")}
          />
          <NewClimb
            name={"Pocket Dial"}
            grade={"7A+"}
            stars={"**"}
            function={() => findImage(PocketDial, "Pocket Dial", "7A+")}
          />
          <NewClimb
            name={"Lock 'n' Load"}
            grade={"7B"}
            stars={"***"}
            function={() => findImage(LockNLoad, "Lock 'n' Load", "7B")}
          />{" "}
        </div>
      </section>
    </main>
  );
};

export default Test;
