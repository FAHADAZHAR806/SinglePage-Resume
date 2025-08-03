import React from "react";
import Image from "next/image";

export default function Review() {
  const Review = [
    {
      feedback:
        "Fahad was amazing to work with! He delivered a clean, responsive website exactly as I envisioned. His attention to detail and ability to turn my ideas into reality was impressive. Will definitely hire him again!",
      name: " — Emma T., Small Business Owner",
      pic: "/nordic_ceo.png",
    },
    {
      feedback:
        "Incredible developer. He not only completed the frontend tasks ahead of time but also suggested great improvements that made the user experience smoother. Communicative, efficient, and highly skilled",
      name: "— Carlos M., Startup Co-founder",
      pic: "/nordic_ceo.png",
    },
    {
      feedback:
        "One of the best freelancers. The site worked flawlessly, and the code was very well organized. What stood out was his dedication and willingness to go the extra mile to ensure everything worked perfectly",
      name: "— Lena K., Project Manager",
      pic: "/nordic_ceo.png",
    },
  ];
  return (
    <>
      <h1 className="text-center p-6 font-bold ">Feedback from Clients</h1>

      <div className="flex items-center justify-center gap-4  flex-wrap pb-10">
        {Review.map((items, index) => (
          <div
            key={index}
            className="w-60 h-80 flex flex-col justify-center items-center border-2 border-black rounded-4xl bg-amber-500 p-4 text-center"
          >
            <p className="text-sm mb-2">{items.feedback}</p>
            <h1 className="text-lg font-semibold mb-3">{items.name}</h1>
            <div className="flex items-center justify-center w-10 h-10  bg-yellow-500 rounded-full text-black font-bold">
              <Image
                className="rounded-full "
                src={items.pic}
                alt="client.png"
                width={40}
                height={30}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
