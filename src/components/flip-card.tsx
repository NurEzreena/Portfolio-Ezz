"use client";
import { useState } from "react";
import Image from "next/image";

interface FlipCard {
  image: string;
  name: string;
  course: string;
  description: string;
}

const FlipCard = ({ image, name, course, description }: FlipCard) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-72 w-80 cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`transition-transform duration-700 preserve-3d w-full h-full ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-[#D1D175] text-white rounded-xl flex flex-col items-center justify-center p-6">
          <h3 className="text-xl font-semibold text-center">{name}</h3>
          <Image src={image} alt={name} width={80} height={80} />
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl p-6 transform rotate-y-180 text-sm text-gray-700 shadow-md">
          <h3 className="text-base font-bold mb-2">{course}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
          position: relative;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default FlipCard;
