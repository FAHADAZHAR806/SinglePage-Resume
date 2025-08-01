import React from "react";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";

export default function PWE() {
  return (
    <>
      <div className="flex flex-row items-center justify-center md:flex-cols-3  flex-wrap">
        <Project />
        <hr className=" hidden md:block h-70 border border-black" />
        <Experience />
        <hr className=" hidden md:block h-70 border border-black" />

        <Education />
      </div>
      <hr className="w-full h-[2px] bg-black" />
    </>
  );
}
