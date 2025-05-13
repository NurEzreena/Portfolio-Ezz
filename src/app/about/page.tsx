import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { createClient } from "../../../utils/supabase/server";

type Skill = {
  label: string;
  value: number;  
};


const skills: Skill[] = [
  { label: "Front-end/design", value: 50 },
  { label: "Backend", value: 25 },
  { label: "Mobile development", value: 85 },
];

export default async function AboutMe() {

  const supabase = await createClient()

  const { data: about } = await supabase.from('about ').select()

  console.log(about);

   const { data: proficiency } = await supabase.from('proficiency ').select()

  console.log(proficiency);

   const { data: education } = await supabase.from('education ').select()

  console.log(education);

  return (
    <main className="flex flex-col bg-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="w-full px-4 py-12 md:py-20 text-black font-sans">
        {/* ABOUT ME SECTION */}
        <section className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">ABOUT ME</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="relative w-40 h-40 md:w-64 md:h-64">
              <Image
                src="/images/profile.png"
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-gray-700 text-base md:text-lg max-w-xl text-justify mt-4 md:mt-0">
              I’m Nur Ezreena Shuhada Emran but you can call me Ezz. Born on April 27, 2002, and proudly
              from Ipoh, Perak, I’m a final-year student at Universiti Malaysia Terengganu (UMT) majoring
              in mobile development and currently stepping into the real tech world as an Intern at TIME dotCom.
            </p>
          </div>
        </section>

        {/* PROFICIENCY SECTION */}
        <section className="max-w-5xl mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-10">PROFICIENCY</h2>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
            <div className="flex-1 w-full">
              {skills.map((skill) => (
                <div key={skill.label} className="mb-6">
                  <p className="font-semibold mb-2">{skill.label}</p>
                  <div className="w-full bg-purple-100 h-2 rounded-full">
                    <div
                      className="bg-purple-700 h-2 rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <Image
                src="/images/laptop-illustration.gif"
                alt="Laptop Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* EDUCATIONAL JOURNEY SECTION */}
        <section className="max-w-5xl mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-10">MY EDUCATIONAL JOURNEY</h2>

          {/* KMPK */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
              <Image
                src="/images/kmpk.png"
                alt="KMPk Logo"
                width={120}
                height={120}
                className="object-contain"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold">KOLEJ MATRIKULASI PERAK</h3>
                <p className="text-sm text-gray-700">
                  Foundation in Physical Science (2020–2022)
                </p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700 text-sm pl-5">
              <li>Completed a two–year program focusing on Physics, Chemistry, and Mathematics.</li>
              <li>Developed strong analytical and scientific thinking skills.</li>
              <li>Built a solid foundation in problem-solving and logical reasoning.</li>
            </ul>
          </div>

          {/* UMT */}
          <div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
              <Image
                src="/images/umt.png"
                alt="UMT Logo"
                width={120}
                height={120}
                className="object-contain"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold">UNIVERSITI MALAYSIA TERENGGANU</h3>
                <p className="text-sm text-gray-700">
                  Bachelor of Computer Science (Mobile Computing) With Honors (2022 – Present)
                </p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700 text-sm pl-5">
              <li>Currently pursuing a 3½-year degree specializing in Mobile Computing.</li>
              <li>Gaining in-depth knowledge in mobile app development, web tech, and software engineering.</li>
              <li>Engaged in hands-on projects enhancing practical skills in innovative mobile solutions.</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
