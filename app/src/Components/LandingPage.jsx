import React from "react";
import PersonalImg from "../Resources/PersonalImgMain.jpg";

function LandingPage() {
  return (
    <React.Fragment>
      <div className="text-center bggradient flex flex-col items-center pt-8">
        <div className="avatar size-64 mt-20">
          <img
            src={PersonalImg}
            alt="PersonalImg"
            className="size-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          />
        </div>
        <h1 className="py-5 text-3xl font-semibold">JACOBO GALLEGO</h1>
        <p className="pb-20 lg:max-w-5xl max-w-8 text-lg min-w-80">
          I am a game and software developer skilled in C#, .NET, React, and SQL
          Server. with a strong history of successful project delivery,
          designing innovative gameplay mechanics, and optimizing performance
          for seamless user experiences.
        </p>
        <div className="w-full">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z"
              />
            </defs>
            <g className="parallax1 fill-base-300">
              <use href="#gentle-wave" x="50" y="3" fillOpacity={0.4} />
            </g>
            <g className="parallax2 fill-base-200">
              <use href="#gentle-wave" x="50" y="0" fillOpacity={0.8} />
            </g>
            <g className="parallax3 fill-base-100">
              <use href="#gentle-wave" x="50" y="9" />
            </g>
          </svg>
        </div>
      </div>
      <div className="my-10 w-full  items-center inline-flex">
        <h1 className="text-5xl">About me</h1>
        <hr className="w-1/5 mx-5 border-4 secondary rounded border-secondary relative float-left align-middle" />
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
