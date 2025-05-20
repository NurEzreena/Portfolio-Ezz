import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { createClient } from "../../../utils/supabase/server";

interface Iproject {
  title: string;
  description: string;
  url: string;
}
export default async function Project() {
  const supabase = await createClient();

  const { data: project } = await supabase.from("project").select();

  console.log(project);

  return (
    <main>
      <Header />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-3 text-black flex items-center justify-center gap-3">
            PROJECTS
            <FontAwesomeIcon icon={faGithub} className="text-black text-4xl" />
          </h2>

          <p className="text-gray-600 mb-10 text-base">
            Feel free to explore my projects below.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project?.map((project: Iproject, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md hover:bg-gray-200 transition duration-300 text-left block"
              >
                <h3 className="font-semibold text-lg mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700">{project.description}</p>
              </a>
            ))}
          </div>

          <p className="mt-12 text-sm text-gray-500">
            Here’s a glimpse of projects I’ve built each crafted with passion
            and creativity!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
