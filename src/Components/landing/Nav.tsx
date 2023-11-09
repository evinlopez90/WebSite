
import { Link } from "react-scroll";
import {AiOutlineHome, AiOutlineUser, AiOutlineCustomerService}  from "react-icons/ai"
import { CgMenuGridR } from "react-icons/cg";
import {  RootState } from '../../redux-toolki/stora';
 import {  useSelector } from 'react-redux';
 
 import { MdOutlineHomeRepairService, MdOutlineContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { useState } from "react";
import { SiKnowledgebase } from "react-icons/si";
export default function Nav() {

  

    const navigation = [
        {
            
            name: 'Home',
            
            
        },
        {
            
            name: 'Acerca de mí',
          
          
        },
        {
            
            name: 'Habilidades',
           
        },
        {
            
            name: 'Servicios',
           
        },
        {
            
            name: 'Proyectos',
           
        },
        {
            
            name: 'Experiencia',
            
        },
        {
            
            name: 'Contacto',
            
        },
        
    ]
    
    const darkMode = useSelector((state: RootState) => state.detalle.value);
     const [nav, setnav] = useState<boolean>(false)
    
  return (
   <>
    <aside className={`fixed transition-all duration-500   ${nav === true ? 'left-0' : '-left-28'} top-0  p-10 md:w-[110px]  min-h-screen flex flex-col gap-28 z-50   md:left-0`}>
        <a href="" className={`w-16 -m-2 rounded-[10px] flex ${darkMode === true ? "bg-gray-900 text-white"  : 'bg-gray-200'} justify-center items-center`}>
            <h1 className="text-[30px] m-0 font-extrabold">E<span className="text-red-500">.</span></h1>
        </a>
        <nav className=''>
        <ul className={`flex flex-col justify-center items-center mt-20 md:mt-0 rounded-[20px] gap-y-4 bg-gray-900 h-[340px] w-12 `}>
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx}>
                                        <Link to={item.name} spy={true} onClick={() => setnav(false)} smooth={true} duration={500}  className="relative w-8 h-8  p-2   flex items-center justify-center  text-gray-100 bg-gray-700 rounded-[15px]  hover:bg-transparent active:bg-gray-100  duration-150 group">
                                           {item.name === "Home" ? <AiOutlineHome/> : null}
                                           {item.name === "Acerca de mí" ? <AiOutlineUser/> : null}
                                           {item.name === "Habilidades" ? <GiSkills/> : null}
                                           {item.name === "Servicios" ? <AiOutlineCustomerService/> : null}
                                           {item.name === "Proyectos" ? <MdOutlineHomeRepairService/> : null}
                                           {item.name === "Contacto" ? <MdOutlineContactPhone/> : null}
                                           {item.name === "Experiencia" ? <SiKnowledgebase/> : null}
                                           
                                            <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
       
        </nav>
       
    </aside>
    <div className={`fixed top-10 text-[45px] transition-all duration-500 md:hidden ${darkMode === true ? "text-red-500": null}  ${nav === true ? 'hidden' : 'left-10' }`} onClick={() => setnav(true) } >
      <CgMenuGridR/>
    </div>
    
   </>
  )
}



