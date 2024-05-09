import React from "react";
import "../CSS/landingpage.css";
import PersonalImg from "../Resources/PersonalImgMain.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaUnity,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJquery,
  SiCsharp,
  SiDotnet,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import SkillContainer from "./SkillContainer";

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
      <div className="lg:mx-20">
        <div>
          <div className="my-10 w-full items-center inline-flex">
            <h1 className="text-5xl ms-2">ABOUT ME</h1>
            <hr className="w-1/5 mx-5 mt-1 border-4 secondary rounded border-secondary relative float-left align-middle" />
          </div>
          <div className="flex flex-col items-center lg:items-start text-justify lg:flex-initial ">
            <p className="lg:max-w-none max-w-md text-xl min-w-80 pb-6 max-sm:mx-4">
              I'm a tech and education enthusiast with a diverse background.
              After college, I dived into developing educational apps for STEM
              projects. This led me to a role at a programming school, teaching
              coding and refining their app. These experiences fuel my passion
              for technology-driven learning and constant growth.
            </p>
            <p className="lg:max-w-none max-w-md text-xl min-w-80 pb-6 max-sm:mx-4">
              I excel in problem-solving and adaptability. From coding
              challenges to teaching strategies, I thrive on finding creative
              solutions. This adaptability has been pivotal in my career,
              guiding me through dynamic environments and rapid changes in
              technology.
            </p>
          </div>
        </div>
        <div>
          <div className="my-10 w-full items-center inline-flex">
            <h1 className="text-5xl ms-2">Skills</h1>
            <hr className="w-1/5 mx-5 border-4 secondary rounded border-secondary relative float-left align-middle" />
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            <SkillContainer dataTip="HTML" faIcon={<FaHtml5 />} />
            <SkillContainer dataTip="CSS" faIcon={<FaCss3Alt />} />
            <SkillContainer dataTip="Bootstrap" faIcon={<FaBootstrap />} />
            <SkillContainer dataTip="Tailwind" faIcon={<SiTailwindcss />} />
            <SkillContainer dataTip="JQuery" faIcon={<SiJquery />} />
            <SkillContainer
              dataTip="Javascript"
              faIcon={<IoLogoJavascript />}
            />
            <SkillContainer dataTip="React" faIcon={<FaReact />} />
            <SkillContainer dataTip="C#" faIcon={<SiCsharp />} />
            <SkillContainer dataTip=".NET" faIcon={<SiDotnet />} />
            <SkillContainer dataTip="Unity" faIcon={<FaUnity />} />
            <SkillContainer
              dataTip="SQL Server"
              faIcon={<SiMicrosoftsqlserver />}
            />
            <SkillContainer dataTip="Github" faIcon={<FaGithub />} />
          </div>
        </div>
        <div>
          <div className="my-10 w-full items-center inline-flex">
            <h1 className="text-5xl ms-2">Experience</h1>
            <hr className="w-1/5 mx-5 border-4 secondary rounded border-secondary relative float-left align-middle" />
          </div>
        </div>
        <div className="mb-6">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-md:mx-4 max-md:text-justify">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2023</time>
                <div className="text-lg font-black">
                  Fullstack Developer and fullstack instructor - sabio
                </div>
                Responsibilities aimed at both development and teaching.
                Responsible for developing and maintaining both the front-end
                and back-end of web applications, ensuring their functionality
                and user experience meet high standards. This includes writing
                clean and efficient code using various programming languages and
                frameworks like React, SQL Server, and .NET. <br />
                Collaboration with cross-functional team working together to
                identify and implement new features and functionalities. <br />
                Additionally, as an instructor share knowledge and experience
                with others, guiding them in understanding concepts, writing
                efficient code, and solving problems effectively.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2021 - 2022</time>
                <div className="text-lg font-black">
                  Unity developer - Toro Labs
                </div>
                Creating applications within Unity based on provided design
                documents. Involving early identification of potential conflicts
                during the application's design phase, as well as providing
                feedback to improve user experience and workflow. <br />
                Performing testing to identify functional issues before passing
                builds to QA. Furthermore, engaging in an iterative feedback
                loop ensures timely adjustments to meet quality standards and
                user expectations.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2019</time>
                <div className="text-lg font-black">
                  Programming Tutor - Niagara College
                </div>
                assessing the tutee's level of comprehension and identifying
                areas of difficulty. Using a variety of teaching methods and
                tools, the tutor explains programming concepts in diverse ways
                to facilitate understanding. This personalized approach empowers
                students to overcome challenges and achieve proficiency in
                programming.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
