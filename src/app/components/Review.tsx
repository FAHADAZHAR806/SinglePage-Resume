import React from "react";
import Image from "next/image";

export default function Review() {
  const Review = [
    {
      feedback: "Fahad was a brilliant student",
      name: "Muhammad Ali",
      pic: "/PIC.jpeg",
    },
    {
      feedback: "Fahad is such a nice guys always eager to learn with him",
      name: "Saad Ahmed",
      pic: "/PIC.jpeg",
    },
    {
      feedback: "Fahad is such a nic man",
      name: "Sarmad Khalid",
      pic: "/PIC.jpeg",
    },
  ];
  return (
    <>
      <h1 className="text-center p-3 ">Review from Peoples</h1>

      <div className="flex items-center justify-center gap-4  flex-wrap pb-10">
        {Review.map((items, index) => (
          <div
            key={index}
            className="w-60 h-40 flex flex-col justify-center items-center border-2 border-black rounded-4xl bg-amber-500 p-4 text-center"
          >
            <p className="text-sm mb-2">{items.feedback}</p>
            <h1 className="text-lg font-semibold mb-3">{items.name}</h1>
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full text-black font-bold">
              <Image
                className="rounded-full"
                src={items.pic}
                width={40}
                height={20}
                alt="user"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
