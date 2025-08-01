import React from "react";

export default function Review() {
  return (
    <>
      <h1>Review from my Teacher</h1>
      <div className="flex items-center justify-center  flex-wrap">
        <div className="w-60 h-40 flex flex-col justify-center items-center border-2 border-black rounded-full bg-amber-500 p-4 text-center">
          <p className="text-sm mb-2">Lorem ipsum dolor sit amet consectetur</p>
          <h1 className="text-lg font-semibold mb-3">Jon Doe</h1>
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full text-black font-bold">
            1
          </div>
        </div>
        <div className="w-60 h-40 flex flex-col justify-center items-center border-2 border-black rounded-full bg-amber-500 p-4 text-center">
          <p className="text-sm mb-2">Lorem ipsum dolor sit amet consectetur</p>
          <h1 className="text-lg font-semibold mb-3">Jon Doe</h1>
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full text-black font-bold">
            1
          </div>
        </div>
        <div className="w-60 h-40 flex flex-col justify-center items-center border-2 border-black rounded-full bg-amber-500 p-4 text-center">
          <p className="text-sm mb-2">Lorem ipsum dolor sit amet consectetur</p>
          <h1 className="text-lg font-semibold mb-3">Jon Doe</h1>
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full text-black font-bold">
            1
          </div>
        </div>
      </div>
    </>
  );
}
