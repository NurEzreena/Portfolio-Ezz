
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
 import React from "react";
import Header
 from "@/components/header";
export default function project(): React.ReactElement {
     
    return(
      <main className="min-h-screen flex flex-col items-center relative bg-[#ffffff]">

       {/*header*/}
       <Header />



        <div className="w-full  relative ">
          <div className="bg-[#2e2b6f] h-[300px] w-full rounded-b-full overflow-hidden ">

          <div className="absolute text-5xl inset-0 flex flex-col items-center justify-center text-white font-figtree">
          <h1 className="box-decoration-clone bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 text-center font-bold text-5xl mb-4">
              MY BLOG</h1> 
             <h2 className="text-2xl md:text-4xl  text-center ">
             Feel free to explore my projects below</h2>
              <FontAwesomeIcon icon={faAngleDown} className="h-12 w-6  inset-x-0 bottom-0 h-20  animate-bounce " />
              </div>
               
            </div>
        </div> 

         {/* Description project  */}
      <blockquote className="text-center text-2xl font-semibold text-gray-900 italic p-4">
         Here’s a glimpse of projects I’ve built 
          
          each crafted with passion and creativity!
      </blockquote>
       
       {/* picture of project */}
      <div className="flex w-full justify-between">
        <img className="w-[500px] object-contain  " src="images/website.png"/>
          
        <img className="w-[500px] object-contain  " src="images/mobile.png"/>
       </div>

        {/* project box */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          
          <div className="cont-grid ">
            <div className="emoji-grid">🚗</div>
            <h3 className="project-title">Smart Parking App (EzPark)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              A mobile app  to make it easier for drivers to pay for parking fees.
            </p>
          </div>

          
          <div className="cont-grid  ">
            <div className="emoji-grid">💰</div>
            <h3 className="project-title">Expense Tracking App (MoneyMap)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            A  mobile app for simplifying personal expense and
            income management and planning.
            </p>
          </div>

           
          <div className="cont-grid  ">
            <div className="emoji-grid">📞</div>
            <h3 className="project-title">CRM App (Oceanica)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            A centralized communication hub, feedback and 
            issue tracking tool  and analytics dashboard.
            </p>
          </div>

           
          <div className="cont-grid ">
            <div className="emoji-grid">📊</div>
            <h3 className="project-title">Budgeting App (Spendwise)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
             Tracking expenses and planning future budgets
            </p>
          </div>

           
          <div className="cont-grid  ">
            <div className="emoji-grid">🛍️</div>
            <h3 className="project-title">Online Shopping App (DaisyDrift Hijab)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Shop beautiful hijabs and accessories easily online.
            </p>
          </div>

           
          <div className="cont-grid  ">
            <div className="emoji-grid">🏦</div>
            <h3 className="project-title">Savings Goal App (MoneyLoom)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Set, track, and achieve your savings goals efficiently.
            </p>
          </div>

        </div>
      </div>

      {/* text link for github */}
      <h2 className="text-3xl font-bold text-gray-800 italic p-4">
      You can view my project on GitHub here:&nbsp;
        <a href="https://github.com/NurEzreena"  className="text-pink-500 hover:underline hover:text-pink-600 transition">
          Click here!
        </a>
      </h2>


     


        {/* Footer */}
      <footer className="px-4  py-6 text-center text-lg text-black">
          © 2025 Nur Ezreena
      </footer>    
            
       </main>
    );
    }