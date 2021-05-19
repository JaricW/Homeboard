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

const Test = () => {
  const [view, setView] = useState([]);

  const findImage = (img) => {
    setView(<ClimbView setView={setView} newImage={img} />);
  };

  return (
    <main className=" w-full bg-gray-200">
      {view}
      <div className="w-full flex justify-center p-16 text-2xl font-bold z-0">
        <h1>The Lapwing Cave</h1>
      </div>
      <table className="w-full flex justify-center text-lg">
        <tbody className="w-10/12 bg-gray-50 flex flex-col items-center  p-4">
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
          />{" "}
        </tbody>
      </table>
    </main>
  );
};

export default Test;
