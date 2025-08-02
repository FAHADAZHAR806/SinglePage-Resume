import React from "react";

export default function Project() {
  return (
    <>
      <div className="w-full md:w-1/3 border-black border-r-2  text-center">
        <h2 className="font-bold text-lg my-2 ">Projects</h2>
        <ul className="space-y-2">
          <li className="border-b p-3 py-1">Scuotin</li>
          <li className="border-b px-3 py-1">Todo App</li>
          <li className="border-b p-3 py-1">Cogni</li>
          <li className="border-b p-3 py-1">Weather App</li>
          <li className="border-b p-3 py-1 ">Product Upcoming Page</li>
        </ul>
      </div>
    </>
  );
}
