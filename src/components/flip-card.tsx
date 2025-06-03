"use client";
import { useState } from "react";
import Image from "next/image";

interface FlipCardProps {
  image: string;
  name: string;
  course: string;
  description: string;
  year: string;
}

const FlipCard = ({
  image,
  name,
  course,
  description,
  year,
}: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full max-w-[90vw] sm:max-w-md lg:max-w-lg aspect-[4/3] sm:aspect-[648/349]"
      onClick={() => setFlipped(!flipped)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped(!flipped);
        }
      }}
      role="button"
      aria-pressed={flipped}
    >
      <div
        className={`transition-transform duration-700 preserve-3d w-full h-full ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}

        <div className="flipcard-front absolute w-full h-full backface-hidden rounded-3xl text-left px-6 sm:px-10 py-6 sm:py-10 text-black shadow-xl flex flex-col justify-between overflow-hidden">
          {/* Top Section */}
          <div className="flex flex-col gap-2">
            <Image
              src={image}
              alt={name}
              width={60}
              height={45}
              className="mb-2 object-contain"
            />

            <h3 className="text-base sm:text-xl font-libre-baskerville font-semibold leading-snug break-words">
              {name}
            </h3>
            <p className="uppercase text-xs sm:text-sm font-poppins leading-tight text-black/80">
              {course}
            </p>
          </div>

          {/* Bottom Arrow */}
          <div className="flex justify-end mt-4">
            <img
              src="/images/arrow.svg"
              alt="arrow outward"
              className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-105 transition"
            />
          </div>
        </div>

        {/* Back */}
        <div className="flipcard-back absolute w-full h-full backface-hidden rounded-3xl p-6 sm:p-8 shadow-lg transform rotate-y-180 flex flex-col justify-start items-start border-4 sm:border-8 bg-white text-black text-left text-justify">
          <div className="flex flex-col gap-4 w-full">
            <span className="inline-block text-[12px] w-[155px] h-[34px] px-6 py-2 rounded-full border-[1.5px] border-black font-normal leading-tight bg-white text-black text-center">
              {year}
            </span>

            <ul className="list-disc pl-4 space-y-2 text-sm text-gray-800 break-words w-full font-poppins">
              {description.split("\n").map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
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
