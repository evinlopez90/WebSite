

import Nav from "./Components/landing/Nav"
import Home from "./Components/Home/Home"
import { Element } from 'react-scroll';
 import Skill from "./Components/Skill/Skill"
 import Card from "./Components/proyectos/Card"
import {proyectos} from "./Components/proyectos/array"
import { useSelector } from 'react-redux';
import { RootState} from './redux-toolki/stora';



import About from './Components/About/About';

import Servicios from './Components/Servicios/Servicios';
import Contacto from './Contacto/contacto';
function App() {

  
 
 
  const darkMode = useSelector((state: RootState) => state.detalle.value);

  return (
  
     <div className={` transition-all duration-500 ease-linear md:pl-10    ${darkMode === true ? 'bg-black' : 'bg-white'}`}>
     
    <Nav />
      <Element name="Home" className=' h-screen flex flex-col justify-center items-center'>
      <Home/>
      </Element>
      <Element name='Acerca de mí' className={` h-screen mt-60  flex flex-col justify-center items-center ${darkMode === true ? 'bg-black': null}    md:mt-0`} >
        <About/>
      </Element>
      <Element name="Habilidades" className='mt-96 h-screen   flex flex-col justify-center items-center md:mt-0' >
       <Skill/>
      </Element>
      <Element name='Servicios' className='mt-96 h-screen   flex flex-col justify-center items-center md:mt-0'>
        <Servicios/>
      </Element>
      <Element name="Proyectos" className="w-11/12  mt-60 h-screen flex flex-col items-center ml-8 md:ml-10  gap-20 md:mt-0">
      
        <div className='w-4/5 flex flex-col '>
        <h1 className={`font-bold text-[25px] w-full  ${darkMode === true ? 'text-white': null}`}>Proyectos</h1>
        <span className='text-gray-600 text-[14px]'>Desarrollados</span>
        </div>
       <div className=" w-4/5 grid grid-cols-1 gap-4 md:grid-cols-3">
       {
         proyectos.length ? proyectos.map((p, i )=> (
           <Card 
           nombre={p.nombre}
           imagen={p.imagen}
           subdescripcion={p.subdescripcion}
           enlace={p.enlace}
           id={i}
           color={p.color}
           deploy={p.deploy}
           />
         )) : <p>Noa hay proyectos</p>
       }
       </div>
      </Element>
      <Element name='Contacto' className=' mt-60 h-screen flex flex-col md:mt-0'>
        <div className={` w-4/5 ml-14 md:ml-40  ${darkMode === true ? 'text-white': 'text-black'}  md:my-20 text-[25px] font-bold `}>
          <h1>Contacto</h1>
          <p className='text-[14px] text-gray-500 font-normal'>Informacion de contacto</p>
        </div>
        <Contacto/>
      </Element>
      <Element name='' className={`w-11/12 h-14 mt-90 ${darkMode === true ? ' text-white': ' text-black'} flex justify-center items-center  md:mt-0`}>
        <h1 className=" font-medium  ">©Crypticalcoder. Todos los derechos reservados</h1>
      </Element>
    </div>
   
  )
}

export default App
