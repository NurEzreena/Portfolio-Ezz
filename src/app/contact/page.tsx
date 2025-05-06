  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faAngleDown} from "@fortawesome/free-solid-svg-icons";
  import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
  import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
  import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
  import React from "react";
import Header from "@/components/header";
 export default function Contact(): React.ReactElement{

      return(
        <main className="min-h-screen flex flex-col items-center relative bg-[#ffffff]">
  
      {/* header */}
      <Header/>

        {/* Title project */}
        <div className="w-full relative ">
          <div className="bg-[#2e2b6f] h-[300px]  rounded-b-full overflow-hidden   ">
                  <div className="h-full flex flex-col items-center justify-center text-white pc-4 text-center  font-figtree z-10 relative">
                      <h1 className="box-decoration-clone bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 text-center font-bold text-5xl mb-10">
                          CONTACT ME </h1> 
                      <h2 className="text-2xl md:text-4xl  text-center " >
                      Questions? Comments? Say Hello!</h2>
                         <FontAwesomeIcon icon={faAngleDown} className="h-20 w-6 animate-bounce " />
                         
                      </div>
                      </div>
            </div>

        {/* Contact box */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-10">

                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 relative text-amber-500 ">
                    <span className="opacity-20 text-8xl absolute -left-10 -top-10 select-none">
                      “</span>
                    Let’s connect ! Feel free to send a message. 
                  </h2>
                  

                  {/* Contact Button */}
                  <button className="bg-gradient-to-r from-amber-500 to-fuchsia-500 text-white px-4 py-2 rounded shadow-md  ">
                    SHARE YOUR FEEDBACK 
                  </button>
                </div>

                {/* Open or closed state for email,phone,location */}

              <div className="space-y-4">
                
               <details className="cont-openstate">
               <summary className="flex items-center gap-2 text-base leading-6 font-semibold text-gray-900 cursor-pointer select-none">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} className="h-5 w-5 text-indigo-600" />
                  EMAIL
                </summary>
                <div className ="mt-3 text-sm leading-6 text-gray-600">
                  <p>ezreena.shuhada@time.com.my</p>
                </div>
                
              </details>
              <details className="cont-openstate">
              <summary className="flex items-center gap-2 text-base leading-6 font-semibold text-gray-900 cursor-pointer select-none">
                <FontAwesomeIcon icon={faPhoneVolume} className="h-5 w-5 text-indigo-600" />
                  PHONE NUMBER 
                </summary>
                <div className ="mt-3 text-sm leading-6 text-gray-600">
                  <p>+6014-2424095</p>
                </div>
                
              </details>

              <details className="cont-openstate">
                <summary className="flex items-center gap-2 text-base leading-6 font-semibold text-gray-900 cursor-pointer select-none">
                  <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-indigo-600" />
                  LOCATION 
                  </summary>
                <div className ="mt-3 text-sm leading-6 text-gray-600">
                  <p>TIME dotCom Berhad - Glenmarie Industrial Park</p>
                </div>
                
              </details>
              
              </div>
              
        </div>

        {/* Footer */}
      <footer className="px-4   py-6 text-center text-lg text-black">
          © 2025 Nur Ezreena
      </footer>

 </main>
      ) }