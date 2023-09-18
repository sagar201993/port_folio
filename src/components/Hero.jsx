import React from "react";
import resume from "../project/resume_munish_sagar.pdf";
import image from "../assets/homeImage.png";
const Hero = () => {
  return (
    <>
      <div className="grid    md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2   w-full items-center bg-slate-950 h-[600px] sm:overflow-auto gap-2">
        <div>
          <h1 className="text-center text-white text-[50px] font-extrabold animate-pulse font-mono">
            Munish sagar
          </h1>
          <h2 className="text-center  text-white text-[30px] font-bold animate-pulse font-mono">
            Frontend Developer
          </h2>
          <p className="text-center text-white text-[20px] mx-6 font-mono">
            Front-end developer with expertise in java script, Restful API,
            Express, Node, MongoDB, React.Proficient in building and optimizing
            user-focused websites and applications. Certified in both frontend
            and backend technologies.Seek to leverage practical experience and
            hands on technical expertise.
          </p>
          <a href={resume} target="_blank" rel="noreferrer">
            <button
              className="bg-green-500 text-white hover:bg-blue-400 font-bold py-2 text-[20px] px-4 mt-10 hover:scale-125
          rounded items-center  md:mx-20  lg:mx-60"
            >
              Download resume
            </button>
          </a>
        </div>

        <div>
          <img
            src={image}
            alt="img"
            className="mb-2 mt-2 object-cover  rounded-2xl  h-[550px] "
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
