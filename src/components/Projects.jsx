import React from "react";
import data from "../project/index";

console.log(data);
const Projects = () => {
  return (
    <>
      <div className="bg-slate-950 " id="project">
        <h1 className="text-[50px] text-center text-white font-mono">
          My Latest Work & Projects
        </h1>
        <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-2 mx-10 ">
          {data.map((item, index) => (
            <div key={index}>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <a href="#">
                  <img
                    className="rounded-t-lg h-[200px] w-[500px]  object-cover "
                    src={item.image}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                      {item.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
                    {item.des}
                  </p>
                  <a
                    href={item.git}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
                   text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
                    focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-[20px]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code Github
                  </a>

                  <a
                    href={item.live}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-6 text-[20px]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
