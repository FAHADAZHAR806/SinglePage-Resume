import React from "react";

export default function Education() {
  return (
    <>
      <div className="w-full md:w-1/3 border-black   text-center">
        <h2 className="font-bold text-lg my-2 ">Education</h2>
        <p className="p-3 py-1">
          Graduated as a Software Engineer from Comsats University Islamabad
          Abbottabad Campus
        </p>
        <p className="p-3 py-1 font-bold">Courses I took</p>
        <ul className="list-none p-6 py-1">
          <li>Object Oriented Prograaming</li>
          <li>Web Development</li>
          <li>Data Structure and Algorithms</li>
          <li>Mobile Application Development</li>
          <li>Operating Systems</li>
        </ul>
      </div>
    </>
  );
}
