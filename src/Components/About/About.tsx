
import { useSelector } from "react-redux";
import { RootState } from "../../redux-toolki/stora";
import educacion from "../../Imagenes/educacion.png"
import maleta from "../../Imagenes/maleta.png"
import { MdUploadFile } from "react-icons/md";
import { BsLink } from "react-icons/bs";
import { Link } from "react-scroll";
import cv from '../../assets/cv.pdf'
import certificado from '../../assets/Certificado.pdf'
function About() {
const darkMode = useSelector((state: RootState) => state.detalle.value);
  return (
   <div className="flex flex-col items-center   gap-20">
    <header className= {`w-11/12 ml-8 md:w-4/5 md:ml-20   text-[25px]  ${darkMode !== true ? 'text-neutral-900' : 'text-white'}`}>
      <h1 className="font-bold">Acerca de mí</h1>
      <p className={` text-[14px]  ${darkMode === true ? 'text-gray-500' : 'text-gray-600'}`}>Mini biografia</p>
    </header>
    <div className=" flex flex-col md:ml-3   md:grid  md:grid-cols-2 ">
    <aside className="md:mx-40">
    <div  className="text-[11px] leading-5 text-gray-400    ">
      <p className={`flex items-center text-center  ml-8 md:ml-0 leading-8 md:text-left `}>
        <img src="https://cdn-icons-png.flaticon.com/128/2377/2377871.png" alt="" className="w-3 h-3 mr-2" />
           Buenaventura valle del cauca. Colombia</p>

      <p className={` ml-8 md:-10  md:text-left  font-normal m-5 md:m-0 md:mt-3 text-[13px] text-gray-500  leading-5 ${darkMode === true ? 'text-gray-300 ': 'text-gray-200'}`}>
      Desde que descubrí el desarrollo web, me enamoré de la posibilidad de crear soluciones innovadoras para problemas del mundo real.
Mi pasión por el desarrollo web comenzó hace mas de un año, y cada día disfruto más explorando nuevas tecnologías y tendencias
      </p>
    </div>
    <div className={`my-10 flex ml-8 md:ml-0 transition-all md:justify-start`}>
    <a
    href={cv}
    download
    className={` w-56  flex items-center justify-center  rounded-sm hover:mt-1 transition-all   gap-2 px-3 py-1.5 text-sm ${darkMode !==  true ? 'bg-red-500' : 'bg-red-700'}`}
>
    <p className="w-4 text-[15px]">
      <MdUploadFile/>
    </p>
    Descargar cv
</a>
    </div>
</aside>
<aside className={`flex flex-col m-10 md:m-0  md:grid md:grid-cols-2 gap-5 md:mr-40`}>
  <div className={`text-white rounded-md bg-gray-900 p-8 transition-all hover:opacity-90`}>
   <div className="">
   <div className="w-14 h-14 flex items-center rounded-md bg-white/5 p-2 ring-1 ring-white/10">
   <img src={educacion} alt="flaticon" className=" my-5" />
   </div>
   
   <h1 className={`text-[17px] font-semibold mt-2`}>Educacion</h1>
   <p className={`text-[12px] w-48 my-2  text-gray-500`}>Mi formación académica incluye un BootCamp de +72 horas, donde adquirí conocimientos sólidos en programación, diseño de bases de datos y desarrollo de aplicaciones web</p>
   <a href={certificado}
    download className="text-[12px] text-red-500 flex items-center transition-all hover:ml-2">
    Certificaciones
    <span className="m-2 mt-3 text-blue-500"><BsLink/></span>
   </a>
   </div>
  </div>

  <div className={`text-white rounded-md bg-red-500 p-8 transition-all hover:opacity-90`}>
   <div className="">
   <div className="w-14 h-14 flex items-center rounded-md bg-white/5 p-2 ring-1 ring-white/10">
   <img src={maleta} alt="flaticon" className=" my-5" />
   </div>
   <h1 className={`text-[17px] text-black font-semibold mt-2`}>Experiencia</h1>
   <p className={`text-[12px] w-48 my-2 text-gray-900`}>He participado en diversos proyectos universitarios que me han permitido desarrollar habilidades en trabajo en equipo, resolución de problemas y comunicación efectiva</p>
   <Link  to='Proyectos' spy={true}  smooth={true} duration={500} 
     className="text-[12px] cursor-pointer text-white flex items-center transition-all hover:ml-2">
    Ver proyectos
    <span className="m-2 mt-3 text-blue-500"><BsLink/></span>
   </Link>
   </div>
  </div>

</aside>
    </div>
   </div>
  )
}

export default About
// Mi formación académica incluye un BootCamp de +72 horas, donde adquirí conocimientos sólidos en programación, diseño de bases de datos y desarrollo de aplicaciones web. Además, he participado en diversos proyectos universitarios que me han permitido desarrollar habilidades en trabajo en equipo, resolución de problemas y comunicación efectiva.