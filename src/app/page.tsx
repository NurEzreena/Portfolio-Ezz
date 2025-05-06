import { Button } from "@/components/ui/button";
// @ts-ignore
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
  import React from "react";
import Header from "@/components/header";


export default function HomePage(): React.ReactElement  {
 
  return (
    <main className="min-h-screen flex flex-col items-center relative bg-[#ffffff]">
    
    {/*header*/}
    <Header />

      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <Button variant="outline" className="rounded-full mb-4 px-6 animate-pulse">
          Hello !
        </Button>

        <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          I'm Ezreena
          <br />
          Internship Student
        </h1>
      </section>

      {/* Portfolio section with semi-circle */}
      <div className="w-full relative">
        <div className="bg-[#ff5842] h-[300px] rounded-t-full max-w-2xl mx-auto flex items-center justify-center  ">
          <Button
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/10 rounded-full px-6 py-2 flex items-center gap-2 mt-8"
          >
            Download My Resume  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4 " />
          </Button>
        </div>
      </div>
    </main>
  );
}
