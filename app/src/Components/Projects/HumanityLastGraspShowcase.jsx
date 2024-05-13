import React from "react";
import GameStart from "../../Resources/HumanityLastGrasp/GameStart.gif";
import Climbing from "../../Resources/HumanityLastGrasp/Climbing.gif";
import GeneratorRoom from "../../Resources/HumanityLastGrasp/GeneratorRoom.gif";
import Fighting from "../../Resources/HumanityLastGrasp/Fighting.gif";

function HumanityLastGraspShowcase() {
  return (
    <React.Fragment>
      <div className="text-center flex flex-col items-center pt-20 lg:mx-20">
        <h1 className=" text-9xl">HUMANITY: Last grasp</h1>
        <p className=" mt-8 text-justify text-xl ">
          A side scroller shooter/platformer set in a derelict space ship in a
          2.5D visual style, featuring 2D hand animated sprites set within a 3D
          environment.
          <br />
          <br />
          In this game your objective is to restore control of the destroyed
          ship, to do this you can use your shield which has a variety of uses
          from blocking incoming projectiles from the enemy turrets, shooting it
          at inactive doors to pry them open or to shoot it at specific surfaces
          to create a climbable platform to reach higher places, additionally
          you can switch from shield to gun mode in order to destry the enemies
          found troughout the ship.
        </p>

        <div className="flex max-sm:flex-col flex-wrap mt-8 justify-evenly *:mb-6 *:max-sm:w-3/4 *:w-5/12 items-center ">
          <img src={GameStart} alt="Clip from the start of the game" />
          <img src={Climbing} alt="Clip from the climbing mechanic" />
          <img src={GeneratorRoom} alt="Gif showing the generator room" />
          <img src={Fighting} alt="Clip showing the game combat" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HumanityLastGraspShowcase;
