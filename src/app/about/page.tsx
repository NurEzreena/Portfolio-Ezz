import Header from "@/components/header";
import Footer from "@/components/footer";
import { createClient } from "../../../utils/supabase/server";
import FlipCard from "@/components/flip-card";
import React from "react";

interface Iabout {
  resume: string;
  title: string;
  name: string;
  desc1: string;
  desc2: string;
  desc3: string;
}

interface Ieducation {
  image: string;
  name: string;
  course: string;
  description: string;
  year: string;
}

export default async function AboutMe() {
  const supabase = await createClient();

  const { data: about } = await supabase.from("about").select();
  const { data: education } = await supabase.from("education").select();

  return (
    <main className="w-full bg-white min-h-screen text-black font-poppins">
      <Header />

      {/* About Section */}
      <section id="about" className="w-full bg-white flex flex-col py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-10">
          {about?.map((about: Iabout, index) => (
            <React.Fragment key={index}>
              <div className="md:w-1/2 text-center md:text-left">
                <p className="inline-block border border-[#1C093C] text-xs px-4 py-1 rounded-full mb-4 font-semibold">
                  {about.title}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-libre-baskerville font-medium leading-snug text-[#1C093C] mb-4">
                  I'm {about.name}
                  <span className="text-[#8B5CF6]"> Ezz</span>.
                </h1>
              </div>

              <div className="md:w-1/2 flex items-center justify-center">
                <img
                  src="/images/Profile.png"
                  alt="Ezreena with Minion"
                  className="w-[80%] max-w-xs sm:max-w-md md:max-w-lg object-contain"
                />
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Info Row */}
        {about?.map((about: Iabout, index) => (
          <div
            key={`info-${index}`}
            className="bg-[#1A1245] w-full py-12 px-4 sm:px-6"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white text-sm">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">📍</span>
                <span>{about.desc1}</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🎓</span>
                <span>{about.desc2}</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">💼</span>
                <span>{about.desc3}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="w-full min-h-screen bg-white flex items-center py-16"
      >
        <div className="max-w-6xl mx-auto text-center w-full px-4 sm:px-6">
          <p className="inline-block border border-black text-xs px-4 py-1 rounded-full mb-6 font-semibold">
            EDUCATION JOURNEY
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-libre-baskerville font-semibold mb-12">
            Get to know my <span className="text-[#52C1C0]">major</span> and{" "}
            <span className="text-[#C586ED]">niche</span>
          </h2>

          <div
            className="
          grid grid-cols-1 md:grid-cols-2 gap-8
          [&>div:nth-child(odd)_.flipcard-front]:bg-[#B27ADF]
          [&>div:nth-child(odd)_.flipcard-back]:border-[#B27ADF]
          [&>div:nth-child(even)_.flipcard-front]:bg-[#5EEAD4]
          [&>div:nth-child(even)_.flipcard-back]:border-[#5EEAD4]
        "
          >
            {education?.map((edu: Ieducation, index) => (
              <FlipCard
                key={index}
                image={edu.image}
                name={edu.name}
                course={edu.course}
                description={edu.description}
                year={edu.year}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
