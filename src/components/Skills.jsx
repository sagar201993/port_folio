import React from "react";
import Slider from "react-slick";
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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className=" bg-slate-950  text-center  w-full h-[300px]" id="skills">
      <h1 className="text-white text-center text-[50px] font-semibold">
        SKILLS
      </h1>
      <Slider {...settings} className="mt-7">
        <div>
          <img src={firebase} className="h-20 hover:scale-125 rounded-full" />
        </div>
        <div>
          <img src={mongodb} className="h-20 hover:scale-125 rounded-full" />
        </div>
        <div>
          <img src={tailwind} className="h-20 hover:scale-125 rounded-full" />
        </div>
        <div>
          <img src={react} className="h-20 hover:scale-125 rounded-full" />
        </div>
        <div>
          <img src={nodejs} className="h-20 hover:scale-125 rounded-full" />
        </div>
        <div>
          <img src={javascript} className="h-20 hover:scale-125 rounded-full" />
        </div>

        <div>
          <img src={material} className="h-20 hover:scale-125 rounded-full" />
        </div>

        <div>
          <img src={css} className="h-20 hover:scale-125 rounded-full" />
        </div>
        <div>
          <img src={git} className="h-20 hover:scale-125 rounded-full" />
        </div>
      </Slider>
    </div>
  );
};

export default Skills;
