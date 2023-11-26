

import Nav from "./Components/landing/Nav"
import Home from "./Components/Home/Home"
import { Element } from 'react-scroll';
 import Skill from "./Components/Skill/Skill"
 import Card from "./Components/proyectos/Card"
import {proyectos, movil} from "./Components/proyectos/array"
import { useSelector } from 'react-redux';
import { RootState} from './redux-toolki/stora';
import { FaMobileAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { experienc } from "./Components/experiencia/data";


import About from './Components/About/About';

import Servicios from './Components/Servicios/Servicios';
import Contacto from './Contacto/contacto';
import {  useState } from "react";
import Experiecia from "./Components/experiencia/Experiecia";
function App() {

  
 
 
  const darkMode = useSelector((state: RootState) => state.detalle.value);
  const [service, setService] = useState(false)

  return (
  
    
     <div className={` transition-all duration-500 ease-linear md:pl-10  flex flex-col md:items-center w-full md:w-full   ${darkMode === true ? 'bg-[#060B10]' : 'bg-white'}`}>
     
     <Nav/>
      <Element name="Home" className=' h-screen flex flex-col justify-center items-center'>
      <Home/>
      </Element>
      <Element name='Acerca de mí' className={` h-screen md:mt-60  flex flex-col justify-center items-center    `} >
        <About/>
      </Element>
      <Element name="Habilidades" className='w-11/12 mt-80  md:mt-[100px] h-screen -ml-4 md:ml-10   flex flex-col justify-center items-center' >
       <Skill/>
      </Element>
      <Element name='Servicios' className='mt-96 h-screen w-5/6 -ml-7 md:ml-10   flex flex-col  justify-center items-center  md:mt-0'>
        <Servicios/>
      </Element>
      <Element name="Proyectos" className={`w-11/12   mt-60 h-screen  flex flex-col items-center   gap-5 md:mt-0`}>
      
      <div className=' md:w-11/12 ml-1 md:ml-44   '>
      <h1 className={`font-bold text-[55px]   ${darkMode === true ? 'text-white ': null}`}>Proyectos<span className=" m-0  text-red-500">.</span> </h1>
      
      </div>
      <div className="flex w-3/4 gap-5 text-[23px] ">
       <span className={`relative w-8 h-8  p-2 ${ service === false ? "bg-red-500" : 'bg-gray-900'}   flex items-center justify-center  text-gray-100  rounded-[15px]  hover:text-gray-800  hover:bg-transparent    `} onClick={() => setService(false)}>
       <CgWebsite/>
       </span>
       <span className={`relative w-8 h-8  p-2  ${ service === true ? "bg-red-500" : 'bg-gray-900'}  flex items-center justify-center  text-gray-100  rounded-[15px] hover:text-gray-800  hover:bg-transparent    `} onClick={() => setService(true)} > <FaMobileAlt/></span>

      </div>
     {
       service === false ? <div className=" w-4/5 h-full grid grid-cols-1 gap-20 md:gap-5 md:grid-cols-2">
       {
         proyectos.length ? proyectos.map((p, i )=> (
           <Card 
           nombre={p.nombre}
           imagen={p.imagen}
           subdescripcion={p.subdescripcion}
           enlace={p.enlace}
           id={i}
           tegnologias={p.tegnologias}
           deploy={p.deploy}
           />
         )) : <p>No hay proyectos</p>
       }
       </div> : <div className=" w-4/5 h-full grid grid-cols-1 gap-4 md:grid-cols-2">
       {
         movil.length ? movil.map((p, i )=> (
           <Card 
           nombre={p.nombre}
           imagen={p.imagen}
           subdescripcion={p.subdescripcion}
           enlace={p.enlace}
           id={i}
           tegnologias={p.tegnologias}
           deploy={p.deploy}
           />
         )) : <p>No hay proyectos</p>
       }
       </div>
     }
    </Element>
    
      <Element name="Experiencia"  className={` mt-[1000px] md:mt-[600px]   w-5/6    ${darkMode === true ? 'text-white': ''}   `}>
      <h1 className=' text-[55px] ml-10 md:ml-20 font-bold'>Experiencia<span className=" m-0  text-red-500">.</span></h1>
      { experienc.length ? experienc.map((proyecto: { name: string; empresa: string; titulo: string; año: string; tecnologias: string[]; descripcion: string; }) => (
        <Experiecia
          key={proyecto.name}
          name={proyecto.name}
          empresa={proyecto.empresa}
          titulo={proyecto.titulo}
          año={proyecto.año}
          tecnologias={proyecto.tecnologias}
          descripcion={proyecto.descripcion}
        />
      )) : <div className=" w-4/5 h-full grid grid-cols-1 gap-4 md:grid-cols-2">
       
      <h1 className=" text-[17px] font-semibold">No hay proyectos</h1>
  
  </div>}
      </Element>
      <Element name='Contacto' className=' w-11/12 mt-[300px] h-screen flex flex-col md:mt-[100px] '>
        <div className={`  ${darkMode === true ? 'text-white': 'text-black'} ml-[40px] md:ml-[136px] md:my-20 text-[25px] font-bold `}>
          <h1 className="text-[55px]">Contacto <span className=" m-0  text-red-500">.</span></h1>
          
        </div>
        <Contacto/>
      </Element>
      <Element name='' className={` h-14 mt-90 ${darkMode === true ? ' text-white': ' text-black'} flex justify-center items-center  md:mt-0`}>
        <h1 className=" font-medium  ">©EvinLopez. Todos los derechos reservados</h1>
      </Element>
    </div>
   
  )
}

export default App
