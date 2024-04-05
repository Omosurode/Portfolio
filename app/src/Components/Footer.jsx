import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="text-lg footer footer-center p-10 bg-base-200 text-base-content rounded">
      {/* <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> */}
      <nav>
        <div className="grid grid-flow-col gap-10">
          <a
            href="https://www.linkedin.com/in/jacobo-gallego/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/jacobo-gallego/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="mailto:jacobo.gallego2@hotmail.com"
            rel="noopener noreferrer"
          >
            <IoMdMail size={40} />
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-xl">Jacobo Gallego</p>
      </aside>
    </footer>
  );
}

export default Footer;
