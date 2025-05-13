"use client"
import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import { createClient } from "../../utils/supabase/server";

export default  function HomePage() {
  
  // const supabase = await createClient();
  // const { data: internship } = await supabase.from("internship").select();
  
  // console.log(internship);

  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextVisible(true); // Change text color after 2 seconds
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);



  return (
    <main className="relative min-h-screen bg-white text-black font-sans overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-center">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/animation.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Content */}
        <div className="relative z-10 px-6">
          <button className="mb-6 px-6 py-2 bg-white text-black rounded-full shadow hover:shadow-lg transition duration-300">
            Hello! 👋
          </button>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg">
            I'm Ezreena
          </h1>

          <p
              className={`max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed mb-8 transition-all duration-700 ease-in-out ${
                textVisible ? "text-white opacity-100" : "text-black opacity-0"
              }`}
                >
                  An enthusiastic internship student, eager to learn and grow in web
                  and mobile application development. Familiar with JavaScript,
                  React.js, Node.js, and React Native, and excited to apply and expand
                  these skills through real-world experience.
                </p>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
