import { Suspense } from "react";
import "./index";
import Navbar from "./Navbar";
import PersonalImg from "./Resources/PersonalImgMain.jpg";

const loading = () => <div className="">loading....</div>;

function App() {
  return (
    <Suspense fallback={loading}>
      <Navbar />
      <div className="App text-center bggradient flex flex-col items-center">
        <div className="avatar  size-64 mt-20">
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
            <g class="parallax1">
              <use
                href="#gentle-wave"
                x="50"
                y="3"
                fill="#596470"
                fillOpacity={0.4}
              />
            </g>
            <g class="parallax2">
              <use
                href="#gentle-wave"
                x="50"
                y="0"
                fill="#3c4652"
                fillOpacity={0.8}
              />
            </g>
            <g class="parallax3">
              <use href="#gentle-wave" x="50" y="9" fill="#1d232a" />
            </g>
          </svg>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
