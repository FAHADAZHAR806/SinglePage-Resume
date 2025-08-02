import React from "react";

export default function Experience() {
  return (
    <>
      <div className="w-full md:w-1/3 border-black border-r-2  text-center">
        <div className=" flex flex-col items-center border-b-2 border-black pb-6">
          <h2 className="font-bold text-lg my-2 ">Work Experience</h2>
          <h3 className="px-3 text-2xl">
            Front-End Developer <br />
            <span className="text-[20px]">Wise Tech Pakistan</span> <br />
            <span className="text-[16px]">From Feb-2025 to Present</span>
          </h3>
        </div>
        <div className=" flex flex-col items-center ">
          <h3 className="px-3 text-2xl">
            Front-End Internee <br />
            <span className="text-[20px]">Eziline Software House</span> <br />
            <span className="text-[16px]">From Oct-2024 to Jan-2025</span>
          </h3>
        </div>
      </div>
    </>
  );
}
