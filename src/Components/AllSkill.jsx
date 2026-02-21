import React from "react";
import WebIcon from "@mui/icons-material/Web";
import CameraIcon from "@mui/icons-material/Camera";
import CreateIcon from "@mui/icons-material/Create";
import {
  SiSpringboot,
  SiReact,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiThymeleaf,
} from "react-icons/si";


import { FaDatabase } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { MdApi } from "react-icons/md";

import { SiOpenjdk } from "react-icons/si";

function AllSkill() {
  return (
    <div className="flex flex-col gap-1 w-full md:w-3/4 items-center justify-center py-12">
      <p className="text-gray-400 uppercase text-sm">What I Offer</p>
      <p className="text-3xl font-bold mb-8">My Services</p>

      <div className="flex flex-col md:flex-row justify-center gap-6 px-6 w-full max-w-6xl">
        <div className="p-6  rounded-xl border h-[220px] border-gray-700 w-full md:w-1/3 hover:shadow-lg hover:shadow-gray-200 transition duration-300 hover:scale-110">
          <WebIcon className="text-white-500" fontSize="large" />
          <p className="text-lg font-bold mb-2 mt-3 text-teal-400">
            Web Development
          </p>
          <p className="text-gray-200 text-sm line-clamp-3">
            Full-stack web development expertise in Java, Spring Boot,
            Thymeleaf, and React, building secure and scalable applications with
            clean architecture and efficient API integration.
          </p>
        </div>

        <div className="p-6 gap-2 rounded-xl h-[220px] border border-gray-700 w-full md:w-1/3 hover:shadow-lg hover:shadow-gray-200 hover:scale-110 transition duration-300">
          <CreateIcon className="text-white-500" fontSize="large" />
          <p className="text-lg font-bold mb-2 mt-3 text-teal-400">
            UI/UX Design
          </p>
          <p className="text-gray-200 text-sm line-clamp-3">
            Creating modern, responsive, and user-friendly interfaces focused on
            seamless user experience and clean visual design.
          </p>
        </div>

        <div className="p-6 gap-2 rounded-xl border h-[220px] border-gray-700 w-full md:w-1/3 hover:shadow-lg hover:shadow-gray-200 hover:scale-110 transition duration-300">
          <CameraIcon className="text-white-500" fontSize="large" />
          <p className="text-lg font-bold mb-2 mt-3 text-teal-400">
            Photography
          </p>
          <p className="text-gray-200 text-sm line-clamp-3">
            Professional portrait photography delivering expressive,
            high-quality images with strong attention to lighting and
            composition.
          </p>
        </div>
      </div>

      <p className="text-3xl font-bold mb-8 mt-9">My Skills</p>

      <div className="w-full flex justify-center">
        <div className="w-full animate-scroll max-w-6xl overflow-x-auto scrollbar-hide">
          <ul className="flex gap-8 w-max px-4 py-4 items-center">
            <li className="skill-box bg-orange-600">
              <SiOpenjdk className="text-2xl text-white" />
            
            </li>

            <li className="skill-box bg-green-600">
              <SiSpringboot className="text-2xl text-white" />
            </li>

            <li className="skill-box bg-green-800">
              <SiThymeleaf className="text-2xl text-white" />
            </li>

            <li className="skill-box bg-cyan-500">
              <SiReact className="text-2xl text-black" />
            </li>

            <li className="skill-box bg-gray-600">
              <MdApi className="text-2xl text-white" />
            </li>

            <li className="skill-box bg-purple-600">
              <BsShieldLockFill className="text-2xl text-white" />
            </li>

            <li className="skill-box bg-blue-600">
              <SiMysql className="text-2xl text-white" />
            </li>

            <li className="skill-box bg-indigo-600">
              <SiPostgresql className="text-2xl text-white" />
            </li>

            <li className="skill-box bg-red-600">
              <SiGit className="text-2xl text-white" />
            </li>

            <li className="skill-box bg-black">
              <SiGithub className="text-2xl text-white" />
            </li>

            <li className="skill-box bg-orange-500">
              <SiHtml5 className="text-2xl text-white" />
            </li>

            <li className="skill-box bg-blue-500">
              <SiCss3 className="text-2xl text-white" />
            </li>

            <li className="skill-box bg-sky-400">
              <SiTailwindcss className="text-2xl text-white" />
            </li>

            <li className="skill-box bg-yellow-400">
              <SiJavascript className="text-2xl text-black" />
            </li>

            <li className="skill-box bg-yellow-500">
              <FaDatabase className="text-2xl text-black" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AllSkill;
