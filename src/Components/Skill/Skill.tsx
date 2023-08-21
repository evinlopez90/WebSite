

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
   <Element name='Skill'  className={`w-full flex flex-col items-center  ${darkMode === true ? 'text-white': null }`}>
    <div className=' w-4/5 md:ml-20  '>
    <h2 className={`text-[25px] font-bold ${darkMode === true ? 'text-white': null }`}>Habilidades</h2>
    <span className={`text-[14px]  ${darkMode === true ? 'text-gray-500' : null}`}>Mi nivel tegnico</span>
    
      
     
   
    </div>
    <div className=' w-11/12 ml-8   md:w-4/5  md:ml-10   mt-20    '>
    <div className='mt-2 ml-5 flex gap-5 font-semibold cursor-pointer'>
        <h1 onClick={() => setRender(true)} className={`${render === true ? 'text-red-500': null }`} >Fontend</h1>
        <h1 onClick={() => setRender(false)} className={`${render === false ? 'text-red-500': null }`} >Backend</h1>
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