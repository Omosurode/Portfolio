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
      <div className=" left-9">
        <div className="my-10 w-full items-center inline-flex">
          <h1 className="text-5xl ms-2">ABOUT ME</h1>
          <hr className="w-1/5 mx-5 mt-1 border-4 secondary rounded border-secondary relative float-left align-middle" />
        </div>
        <div className="flex flex-col items-center lg:items-start text-justify lg:flex-initial ">
          <p className="lg:max-w-7xl max-w-8 text-lg min-w-80 pb-6">
            As an enthusiastic professional in the realm of technology and
            education, I've had the privilege of crafting a diverse career path
            that reflects my passion for innovation and learning. Following my
            graduation from college, I ventured into the development of
            educational applications tailored for STEM projects, where I
            witnessed firsthand the transformative power of technology in
            enhancing learning experiences. This initial foray laid the
            foundation for my subsequent role at a prominent programming school
            headquartered in California, where I not only imparted programming
            knowledge but also contributed to the refinement of their
            educational app. These experiences have equipped me with a deep
            understanding of the intersection between technology and education,
            inspiring me to continuously seek new avenues for growth and impact.
          </p>
          <p className="lg:max-w-7xl max-w-8 text-lg min-w-80 pb-6">
            My professional journey has been defined by my unwavering commitment
            to problem-solving and adaptability. I pride myself on my ability to
            navigate through complex challenges with versatility and
            resourcefulness, whether it involves unraveling intricate coding
            puzzles or devising innovative teaching methodologies. This innate
            strength has not only propelled my career forward but has also
            enabled me to thrive in dynamic and ever-evolving environments. I
            firmly believe that in today's fast-paced tech landscape, the
            ability to adapt and creatively tackle obstacles is paramount to
            success.
          </p>
          <p className="lg:max-w-7xl max-w-8 text-lg min-w-80 pb-6">
            Beyond my professional endeavors, I am a firm advocate for the
            pursuit of a balanced and fulfilling life. In my leisure time, I
            relish the opportunity to immerse myself in diverse experiences that
            enrich both my personal and intellectual well-being. Whether I'm out
            enjoying memorable moments with friends, exploring new locales, or
            indulging in cultural activities such as art exhibitions and
            literary pursuits, I am constantly seeking opportunities to broaden
            my horizons and deepen my understanding of the world around me. This
            dual approach to life ensures that I not only excel in my
            professional pursuits but also cultivate a rich and meaningful
            existence outside the confines of work.
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
          <SkillContainer dataTip="Javascript" faIcon={<IoLogoJavascript />} />
          <SkillContainer dataTip="React" faIcon={<FaReact />} />
          <SkillContainer dataTip="C#" faIcon={<SiCsharp />} />
          <SkillContainer dataTip=".NET" faIcon={<SiDotnet />} />
          <SkillContainer
            dataTip="SQL Server"
            faIcon={<SiMicrosoftsqlserver />}
          />
          <SkillContainer dataTip="Github" faIcon={<FaGithub />} />
          <SkillContainer dataTip="Unity" faIcon={<FaUnity />} />
        </div>
      </div>
      {/* <div>
        <div className="my-10 w-full items-center inline-flex">
          <h1 className="text-5xl ms-2">Experience</h1>
          <hr className="w-1/5 mx-5 border-4 secondary rounded border-secondary relative float-left align-middle" />
        </div>
      </div> */}
    </React.Fragment>
  );
}

export default LandingPage;
