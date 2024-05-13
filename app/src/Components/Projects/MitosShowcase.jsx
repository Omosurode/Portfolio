import React from "react";

function MitosShowcase() {
  return (
    <React.Fragment>
      <div className="text-center flex flex-col items-center pt-20 lg:mx-20">
        <h1 className=" text-9xl">MITOS</h1>
        <iframe
          width="72%"
          height="700"
          src="https://www.youtube.com/embed/Lc6WPfppzsw?si=zVD74tt0uo0HASLd"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="mt-8"
        ></iframe>
        <p className=" mt-8 text-justify text-xl mb-4">
          Mitos is an exploration game inspired by the different myths and
          legends of the different regions of Colombia, in this game you walk
          aroud the world meeting diverse character and assisting them along the
          way.
        </p>

        {/* <div className="flex max-sm:flex-col flex-wrap mt-8 justify-evenly *:mb-6 *:max-sm:w-3/4 *:w-5/12 items-center ">
          <img src={GameStart} alt="Clip from the start of the game" />
          <img src={Climbing} alt="Clip from the climbing mechanic" />
          <img src={GeneratorRoom} alt="Gif showing the generator room" />
          <img src={Fighting} alt="Clip showing the game combat" />
        </div> */}
      </div>
    </React.Fragment>
  );
}

export default MitosShowcase;
