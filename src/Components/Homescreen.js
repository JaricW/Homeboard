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

  const findImage = (img) => {
    setView(<ClimbView setView={setView} newImage={img} />);
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
            grade={"6a+"}
            stars={"***"}
            function={() => findImage(YellowSubmarine)}
          />
          <NewClimb
            name={"Hamilton"}
            grade={"6b+"}
            stars={"***"}
            function={() => findImage(Hamilton)}
          />
          <NewClimb
            name={"Red October"}
            grade={"6b"}
            stars={"**"}
            function={() => findImage(RedOctober)}
          />
          <NewClimb
            name={"Shooda Wooda Cooda"}
            grade={"6c"}
            stars={"**"}
            function={() => findImage(ShoodaWoodaCooda)}
          />
          <NewClimb
            name={"The Long Arm of the Law"}
            grade={"6c+"}
            stars={"***"}
            function={() => findImage(TheLongArmoftheLaw)}
          />
          <NewClimb
            name={"The Big Squeeze"}
            grade={"6c"}
            stars={"**"}
            function={() => findImage(TheBigSqueeze)}
          />
          <NewClimb
            name={"Left Behind"}
            grade={"7a"}
            stars={"**"}
            function={() => findImage(LeftBehind)}
          />
          <NewClimb
            name={"Grim Reaper"}
            grade={"7b"}
            stars={"**"}
            function={() => findImage(GrimReaper)}
          />
          <NewClimb
            name={"Pocket Dial"}
            grade={"7a+"}
            stars={"**"}
            function={() => findImage(PocketDial)}
          />
          <NewClimb
            name={"Lock 'n' Load"}
            grade={"7b"}
            stars={"***"}
            function={() => findImage(LockNLoad)}
          />{" "}
        </div>
      </section>
    </main>
  );
};

export default Test;
