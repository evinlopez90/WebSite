/* eslint-disable @typescript-eslint/no-unused-vars */


import {BsArrowDownShort, BsMouse} from "react-icons/bs"

import { Link, Element } from "react-scroll";

import { RootState } from "../../redux-toolki/stora";
import { useSelector } from "react-redux";





function Home() {

  // const mode = localStorage.getItem("DarkMode")
  // const DarkMode = mode ? JSON.parse(mode) : false
  // console.log(DarkMode);
  const darkMode = useSelector((state: RootState) => state.detalle.value);

  
  return (
    <>
       
       <Element name='1' className={`flex flex-col justify-center items-center   p-5 h-screen `} >
           <div className=" flex  flex-col-reverse justify-center items-center grid-cols-2 gap-20 md:gap-0   ">
           <aside className='  w-full   '>
           <h1
              
           className={ `text-[25px] font-bold text-center   ${darkMode === true ? ' text-white' : null }`}>
              Evin Lopez 
            </h1>
            <aside className={`flex justify-center  items-center text-blue-400 `}>    
            <h3
          
            className=  { `  text-[13px]   font-bold text-red-500 }`}>
             Developer Full Stack
            </h3>
            </aside>
           <div className=' flex justify-center'>
           <p
            
           className=' w-1/2 text-[12px] mt-5 text-center  text-gray-600 '>
              Bienvenido a mi portafolio web. Explora las diferentes sesiones y conoce todo sobre mi en el mundo del desarrollo de software. 
              </p>
           </div>
            <div className="text-[18px] flex justify-center  gap-5 py-5  ">
            <a href="" className="rounded-md ">
               <img src="https://cdn-icons-png.flaticon.com/128/2111/2111368.png" alt="" className="w-5 h-5" />
              </a>
              <a href="" className="rounded-md ">
               <img src="https://cdn-icons-png.flaticon.com/128/10090/10090288.png" alt="" className="w-5 h-5" />
              </a>
              
            </div>
           </aside>
           <aside className=" flex justify-center  w-full   ">
           <img
             src='https://cdn-icons-png.flaticon.com/128/145/145843.png'
             alt='evin'
            className=' w-28 h-28  justify-self-center rounded-3xl'

             />
           </aside>
           </div>
            <div className='flex w-full justify-center items-center mt-20'>
              <button  className={`flex w-2/3 justify-center items-center ${darkMode === true ? 'text-white' : null}  `} >
               <Link to='Acerca de mí'  className='flex w-2/3 justify-center items-center text-red-500 ' spy={true}  smooth={true} duration={500} >
               <BsMouse/>   <span className={`text-base mx-1 ${darkMode === true ? 'text-white': 'text-black'}`}>Scroll down</span> <BsArrowDownShort  />
               </Link>
              </button>
            </div>
          </Element>
       
          
          
    </>
  )
}

export default Home
