import React from "react";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, image, reverse = false, link }) => {
  return (
    <div
      className={`flex justify-between items-center w-full my-12
        ${reverse ? "lg:flex-row-reverse flex-col" : "lg:flex-row flex-col"}`}
    >
      {/* Image */}
      <div className="flex justify-center items-center w-full lg:w-3/5">
        <img
          src={image}
          alt={title}
          className={`w-[700px] h-[398px] rounded-xl shadow-2xl transition-all duration-700 
    ${
      reverse
        ? "[transform:perspective(800px)_rotateY(-25deg)_scale(0.8)_rotateX(10deg)] hover:[transform:perspective(800px)_rotateY(15deg)_translateY(50px)_rotateX(10deg)_scale(1)]"
        : "[transform:perspective(800px)_rotateY(25deg)_scale(0.8)_rotateX(10deg)] hover:[transform:perspective(800px)_rotateY(-15deg)_translateY(-50px)_rotateX(10deg)_scale(1)]"
    }
    hover:shadow-xl`}
        />
      </div>

      <div className="flex flex-col justify-center items-center text-white p-4 w-full lg:w-2/5">
        <h4 className="font-black font-cyborg mb-2 px-4 py-2 flex items-center text-lg">
          {title}
          <a href={link} target="_blank" rel="noreferrer" className="z-50">
            <FiExternalLink className="ml-3 cursor-pointer transition duration-300 transform hover:text-blue-400 hover:scale-125 hover:-translate-y-1 hover:translate-x-1" />
          </a>
        </h4>
        <p
          className="mb-14 text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
