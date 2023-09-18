import React from "react";

import {
  firebase,
  mongodb,
  react,
  tailwind,
  nodejs,
  javascript,
  material,
  css,
  git,
} from "../assets/index";
const Skills = () => {
  return (
    <div className=" bg-slate-950  text-center  w-full h-[300px]">
      <h1 className="text-white text-center text-[50px] font-semibold">
        SKILLS
      </h1>

      <div className="flex justify-around  flex-wrap mt-4">
        <img src={firebase} className="h-20 hover:scale-125" />
        <img src={react} className="h-20 hover:scale-125" />
        <img src={tailwind} className="h-20 hover:scale-125" />
        <img src={mongodb} className="h-16 rounded-full mt-2 hover:scale-125" />
        <img src={nodejs} className="h-20 hover:scale-125" />
        <img src={javascript} className="h-20 hover:scale-125" />

        <img src={material} className="h-20 hover:scale-125" />

        <img src={css} className="h-20 hover:scale-125" />
        <img src={git} className="h-20 rounded-full hover:scale-125 " />
      </div>
    </div>
  );
};

export default Skills;
