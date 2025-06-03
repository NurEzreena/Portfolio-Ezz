import Header from "@/components/header";
import Footer from "@/components/footer";
import { createClient } from "../../utils/supabase/server";

interface Iproficiency {
  skills: string;
  description: string;
  emoji: string;
}

interface Iproject {
  title: string;
  description: string;
  url: string;
  emoji: string;
}

export default async function Project() {
  const supabase = await createClient();

  // const { data: about } = await supabase.from("about").select();
  const { data: proficiency } = await supabase.from("proficiency").select();
  // const { data: education } = await supabase.from("education").select();
  const { data: project } = await supabase.from("project").select();

  return (
    <main className="bg-[#ffffff] text-black font-poppins">
      <Header />

      {/* Cover Section */}
      <section
        id="cover"
        className="w-full min-h-screen  bg-white flex items-center justify-center"
      >
        <div className="text-center mt-[-100px]">
          <p className="inline-block border border-[#5C4EBC] px-4 py-1 text-sm text-[#5C4EBC] font-semibold rounded-full mb-4 tracking-wide">
            HELLO THERE
          </p>
          <h1 className="text-3xl md:text-6xl font-bold mb-6 text-[#1a1a1a] font-libre-baskerville">
            I am a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B469FF] to-[#B469FF] font-libre-baskerville">
              unicorn
            </span>{" "}
            who can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ADBE9] to-[#5ADBE9] font-libre-baskerville">
              code
            </span>
          </h1>
          <span className="text-[180px] leading-none mt-2">&#129412;</span>
        </div>
      </section>

      {/* Proficiency Section */}
      <section id="proficiency" className="bg-[#130D2E] py-16 px-6 md:px-20">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Text Block */}
          <div className="md:w-1/2">
            <p className="inline-block border border-white text-white px-4 py-1 text-xs tracking-wide rounded-full mb-2">
              PROFICIENCY
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              <span className="text-[#00C0D6] font-libre-baskerville">
                Skills
              </span>
              <br />
              in the field
            </h2>
          </div>

          {/* Proficiency section */}
          <div className="md:w-2/3 flex flex-col gap-6">
            {proficiency?.map((proficiency: Iproficiency, index) => (
              <div
                key={index}
                className="bg-white text-[#130D2E] rounded-2xl p-6 shadow-md flex justify-between items-center hover:scale-[1.02] transition duration-300"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 font-libre-baskerville">
                    {proficiency.skills}
                  </h3>
                  <p className="text-sm md:text-base text-[#555]">
                    {proficiency.description}
                  </p>
                </div>

                <div className="text-3xl ml-4">{proficiency.emoji}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="inline-block border border-black text-xs px-4 py-1 rounded-full mb-4 font-semibold">
            Projects
          </p>
          <h2 className="text-4xl font-bold mb-4 font-libre-baskerville">
            Some of my previous <span className="text-purple-500">works</span>
          </h2>

          {/* Grid with nth-child styling */}
          <div className="[&>*:nth-child(odd)]:bg-[#B27ADF] [&>*:nth-child(even)]:bg-[#5EEAD4] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {project?.map((project: Iproject, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-6 text-left block h-full shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-3">{project.emoji}</div>
                <h3 className="font-semibold text-xl mb-2 text-[#1f1f1f] font-libre-baskerville">
                  {project.title}
                </h3>
                <p className="text-sm text-[#1f1f1f]/80 mb-4">
                  {project.description}
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm inline-flex items-center gap-2 hover:bg-gray-800 transition">
                  VIEW PROJECT <span>↗</span>
                </button>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
