

import { useSelector } from 'react-redux';
import Backend from './Backend'
import Frondend from './Frondend'
import {  Element } from 'react-scroll';
import { RootState } from '../../redux-toolki/stora';
import { useState } from 'react';
function Skill() {
  const darkMode = useSelector((state: RootState) => state.detalle.value);
   const [render, setRender ] = useState(true)

  return (
   <Element name='Skill'  className={` md:w-full flex flex-col items-center  ${darkMode === true ? 'text-white': null }`}>
    <div className=' md:w-full ml-10 md:ml-20   '>
    <h2 className={`text-[55px] font-bold ${darkMode === true ? 'text-white': null }`}>Habilidades<span className=" m-0  text-red-500">.</span> </h2>    
      
     
   
    </div>
    <div className=' w-11/12 ml-8   md:w-full  md:ml-10   mt-20    '>
    <div className='w-44 flex   gap-5 mt-2 ml-5   font-semibold cursor-pointer'>
       <aside className=' p-2 bg-gray-900 flex justify-center  items-center text-white w-28 h-8 rounded'>
       <span
         onClick={() => setRender(true)} className={` text-[12px]  ${render === true ? 'text-red-500': null }`} >Frontend</span>
       
       </aside>
       <aside className=' p-2 bg-gray-900 flex justify-center  items-center text-white w-28 h-8 rounded'>
       <span onClick={() => setRender(false)} className={` text-[12px] ${render === false ? 'text-red-500': null }`} >Backend</span>
       </aside>
      </div>
     {
      render === true? <Frondend /> : null
     }
      { 
      render === false? <Backend /> : null
      }
    </div>
   </Element>
  )
}

export default Skill