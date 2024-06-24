import React from "react";
import Logo from "../../Resources/SpaceChefs/Logo.png";
import MainClip from "../../Resources/SpaceChefs/MainClip.gif";
import CropGrowth from "../../Resources/SpaceChefs/CropGrowth.gif";
import TurretPlacement from "../../Resources/SpaceChefs/TurretPlacing.gif";
import DroneView from "../../Resources/SpaceChefs/DroneView.gif";
import Gameplay from "../../Resources/SpaceChefs/Gameplay.gif";
import EnemyPath from "../../Resources/SpaceChefs/EnemyPathing.gif";

function SpaceChefsShowcase() {
  return (
    <React.Fragment>
      <div className="text-center flex flex-col items-center pt-20 lg:mx-20">
        <img src={Logo} alt="Space chefs logo" className=" mb-8" />
        <div className=" flex lg:flex-row flex-col text-justify w-4/5">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/cjtII2YRSC4?si=wiieHhBGmaD2jP1f"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="basis-10/12"
          ></iframe>
          <p className=" ms-5 max-w-md basis-6/12 text-lg ">
            Space Chefs from Space is an action tower-defense with farming
            elements. The game is 3D and played from a third person view.
            <br />
            <br />
            In Space Chefs from Space, the player plays as G-Ma, an elderly
            retired chef turned farmer who must protect her family’s recipe book
            from nightly waves of alien chefs in their attempt to steal the
            recipes for their own restaurant. The player’s main line of defense
            is crop turrets created from plants the player has grown. Players
            must ensure that the turrets stay hydrated during a wave, as well as
            push back aliens; Tasks are accomplished using G-Ma’s power washer.
            If any aliens enter G-Ma’s home and bring the book back to a UFO
            it's game over for the player. G-Ma must defend her home for four
            nights until the Manager arrives on the fifth night, upon his defeat
            the player wins.
          </p>
        </div>
        <div className="flex max-sm:flex-col flex-wrap mt-8 justify-evenly *:mb-6 *:max-sm:w-3/4 *:w-5/12 items-center ">
          <img src={MainClip} alt="Main game clip GIF" />
          <img src={CropGrowth} alt="Gif depicting crops growing" />
          <img
            src={TurretPlacement}
            alt="Gif showing how turret placement work"
          />
          <img
            src={DroneView}
            alt="Drone camera showing bird's eye view of the play area with icons over POIs"
          />
          <img src={Gameplay} alt="Scene showing general gameplay" />
          <img src={EnemyPath} alt="Debug scene from game" />
        </div>
        <iframe
          className="my-4"
          height="167"
          width="60%"
          frameborder="0"
          src="https://itch.io/embed/1004939?dark=true"
          title="Space chefs on itch"
        >
          <a
            href="https://7gnomes.itch.io/space-chefs-from-space"
            className="Dark"
          >
            Space Chefs from Space by 7Gnomes, Xazzy
          </a>
        </iframe>
      </div>
    </React.Fragment>
  );
}

export default SpaceChefsShowcase;
