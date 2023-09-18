import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <h1 className="text-center text-white text-[30px] font-mono">
        Social Links
      </h1>
      <div className="flex justify-center gap-12">
        <a
          href="https://www.linkedin.com/in/munish-sagar-a9408820b/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="text-[50px] text-white rounded-full" />
        </a>
        <a
          href="https://github.com/sagar201993?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="text-[50px] text-white" />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineMail className="text-[50px] text-white" />
        </a>
      </div>
    </>
  );
};

export default Footer;
