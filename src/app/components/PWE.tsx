import React from "react";
import Project from "./Project";
import Education from "./Education";
import Experience from "./Experience";
export default function PWE() {
  return (
    <>
      <div className="flex  justify-center border-b-2 flex-wrap  ">
        <Project />
        <Experience />
        <Education />
      </div>
    </>
  );
}
