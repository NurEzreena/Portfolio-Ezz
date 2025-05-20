import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { createClient } from "../../utils/supabase/client";
import FlipCard from "@/components/flip-card";

interface Iabout {
  description: string;
  title: string;
}

interface Iinternship {
  title: string;
  description: string;
  resume: string;
}

interface Iproficiency {
  skills: string;
  value: number;
  image: string;
}

interface Ieducation {
  image: string;
  name: string;
  course: string;
  description: string;
}

export default async function AboutMe() {
  const supabase = await createClient();

  const { data: about } = await supabase.from("about").select();
  const { data: internship } = await supabase.from("internship").select();
  const { data: proficiency } = await supabase.from("proficiency").select();
  const { data: education } = await supabase.from("education").select();

  console.log(about);
  console.log(internship);
  console.log(proficiency);
  console.log(education);

  return (
    <main className="font-sans">
      <Header />

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b">
        <div className="bg-[#FF814B] text-white px-8 py-10 flex flex-col justify-center p-6">
          {internship?.map((internship: Iinternship, index) => (
            <div key={index}>
              <div className="space-y-4 text-center md:text-left max-w-md">
                <h1 className="text-5xl font-extrabold leading-tight">
                  {internship.title}
                  <br />
                </h1>
                <p className="text-sm">{internship.description}</p>
                <div className="flex justify-end">
                  <button className="px-6 py-2 bg-white text-orange-500 rounded-full font-semibold hover:bg-orange-100 transition">
                    <a href={internship.resume} target="_blank" rel="resume">
                      Ezreena’s Resume
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F7F6EB] flex justify-center items-center p-6">
          <img
            src="/images/Profile.png"
            alt="Ezreena with Minion"
            className="w-auto max-h-[full] object-contain"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-[#F7F6EB] py-14 px-4 flex justify-center">
        <div className="bg-[#D1D175] p-6 rounded-md text-center max-w-2xl relative">
          {about?.map((about: Iabout, index) => (
            <div key={index}>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#D1D175] px-6 py-2 rounded-md shadow text-xl font-extrabold -rotate-3">
                {about?.title}
              </div>
              <p className="mt-10 text-[#4B4B4B] text-base">
                {about?.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Proficiency Section */}
      <section className="bg-[#A5B7E5] py-16 px-6 relative">
        {/* Section Label */}
        <div className="absolute -top-5 left-0 bg-[#FF814B] text-white text-xl font-bold px-6 py-2 rounded-t-md shadow-md">
          PROFICIENCY
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 p-6 ">
          {proficiency?.map((proficiency: Iproficiency, index) => (
            <div
              key={index}
              className="  rounded-xl shadow-lg p-6 flex flex-col items-center w-64 mx-auto hover:scale-105  "
            >
              <div className="w-32 h-32 relative mb-4">
                <Image
                  src={proficiency?.image}
                  alt={proficiency?.skills}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">
                {proficiency.skills}
              </h3>
              <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#ffffff]"
                  style={{ width: `${proficiency?.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Educational Journey Section */}
      <section className="bg-[#FFF4C5] py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#A1A244]">
          MY EDUCATIONAL JOURNEY
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 justify-items-center">
          {education?.map((education: Ieducation, index) => (
            <FlipCard
              key={index}
              image={education.image}
              name={education.name}
              course={education.course}
              description={education.description}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
