import React from "react";
import Logo from "../../Resources/TongeTied/Logo.png";
import Gameplay from "../../Resources/TongeTied/Gameplay.gif";
import PowerUps from "../../Resources/TongeTied/PowerUps.gif";

function HumanityLastGraspShowcase() {
  return (
    <React.Fragment>
      <div className="text-center flex flex-col items-center pt-20 lg:mx-20">
        <img src={Logo} alt="Space chefs logo" className=" mb-10" />
        <p className=" text-justify text-xl ">
          Tongue Tied was created in less than 72 hours for Mini Jam 79 which
          had the theme of: Frogs and the limitation was: Must be a single
          level. With this theme and limitation in mind, my team decided to
          create a very simple point and click game that would rev up the
          difficulty overtime. The addition of power ups was to ensure that the
          gameplay wouldn't get too repetitive.
        </p>

        <div className="flex max-sm:flex-col flex-wrap mt-8 justify-evenly *:mb-6 *:max-sm:w-3/4 *:w-5/12 items-center ">
          <img src={Gameplay} alt="Clip from the start of the game" />
          <img
            src={PowerUps}
            alt="Clip of the different powerups in the game"
          />
        </div>
        <iframe
          className="my-4"
          height="167"
          width="60%"
          frameborder="0"
          src="https://itch.io/embed/1025778"
          title="Tonge tied on itch"
        >
          <a href="https://xazzy.itch.io/tongue-tied">Tongue Tied by Xazzy</a>
        </iframe>
      </div>
    </React.Fragment>
  );
}

export default HumanityLastGraspShowcase;
