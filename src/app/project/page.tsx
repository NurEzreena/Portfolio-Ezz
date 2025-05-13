

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { createClient } from "../../../utils/supabase/server";

export default async function Project() {

  const supabase = await createClient()

  const { data: project} = await supabase.from('project').select()

  console.log(project);

  
  const projects = [
    {
      title: "Smart Parking App (EzPark)",
      description: "A mobile app to make it easier for drivers to pay for parking fees.",
      url: "https://github.com/yourusername/ezpark"  
    },
    {
      title: "Expense Tracking App (Money Map)",
      description: "A mobile app for simplifying personal expense and income management and planning.",
      url: "https://github.com/yourusername/moneymap"
    },
    {
      title: "CRM App (Oceanica)",
      description: "A centralized communication hub, feedback and issue tracking tool and analytics dashboard.",
      url: "https://github.com/yourusername/oceanica"
    },
    {
      title: "Budgeting App (Spendwise)",
      description: "Tracking expenses and planning future budgets.",
      url: "https://github.com/yourusername/spendwise"
    },
    {
      title: "Ecommerce App (DaisyDrift Hijab)",
      description: "Shop beautiful hijabs and accessories easily online.",
      url: "https://github.com/yourusername/daisydrift"
    },
    {
      title: "Savings Goal App (MoneyLoom)",
      description: "Set, track and achieve your savings goals efficiently.",
      url: "https://github.com/yourusername/moneyloom"
    }
  ];

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
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md hover:bg-gray-200 transition duration-300 text-left block"
              >
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
              </a>
            ))}
          </div>

          <p className="mt-12 text-sm text-gray-500">
            Here’s a glimpse of projects I’ve built each crafted with passion and creativity!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
