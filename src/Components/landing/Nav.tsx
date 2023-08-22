

import { Link } from "react-scroll";

import { BsMoonStars, BsSun } from "react-icons/bs";
import { setTheme } from "../../redux-toolki/Slice";
 import { AppDispatch, RootState } from '../../redux-toolki/stora';
 import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";


export default function Nav() {

    const darkMode = useSelector((state: RootState) => state.detalle.value);

    const navigation = [
        {
            
            name: 'Home',
            icon: 'https://cdn-icons-png.flaticon.com/128/5687/5687496.png'
            ,
        },
        {
            
            name: 'Acerca de mí',
            icon: 'https://cdn-icons-png.flaticon.com/128/10276/10276686.png'
            ,
        },
        {
            
            name: 'Habilidades',
            icon: 'https://cdn-icons-png.flaticon.com/128/8859/8859789.png'

            ,
        },
        {
            
            name: 'Servicios',
            icon: 'https://cdn-icons-png.flaticon.com/128/4814/4814961.png'
        },
        {
            
            name: 'Proyectos',
            icon: 'https://cdn-icons-png.flaticon.com/128/9805/9805668.png'
        },
        {
            
            name: 'Contacto',
            icon: 'https://cdn-icons-png.flaticon.com/128/8770/8770989.png'
        }
    ]
    const dispatch = useDispatch<AppDispatch>();
    const setMode  = (value: boolean) => {
        dispatch(setTheme(value))
     }

     const [nav, setnav] = useState<boolean>(false)
    
  return (
   <>
    <aside className={`fixed transition-all duration-500  ${nav === true ? 'left-0' : '-left-28'} top-0 border-r-[1px] p-10 w-[110px]  min-h-screen flex flex-col justify-between z-50 ${darkMode === true ? 'bg-[#060B10] border-gray-900' : ' bg-white border-gray-300'}  md:left-0`}>
        <a href="">
            <img src="https://cdn-icons-png.flaticon.com/128/9313/9313211.png" alt="logo" />
        </a>
        <nav className=''>
        <ul className="flex flex-col gap-y-4">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx}>
                                        <Link to={item.name} spy={true}  smooth={true} duration={500}  className="relative  flex items-center justify-center  text-gray-600 p-1 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 group">
                                           <img src={item.icon} alt={item.name} className="" />
                                            <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
       
        </nav>
        <div>
        { darkMode === false ?
                        <div onClick={() => setMode(true)} className="flex flex-col  items-center  cursor-pointer text-white rounded-full bg-gray-900 p-2 ring-1 ring-white/10  ">
                        <BsSun/>
                       </div> : null
                        }
                        {
                      darkMode === true ?
                       <div onClick={() => setMode(false)} className=" flex flex-col  items-center  cursor-pointer text-white rounded-full bg-gray-900 p-2 ring-1 ring-white/10  ">
                        <BsMoonStars/>
                        </div>  : null
                       }
        </div>
    </aside>
    <div className={`fixed top-10 transition-all duration-500 md:hidden  ${nav === true ? 'left-[120px]' : 'left-10' }`} onClick={() => setnav(!nav) } >
    <img src="https://cdn-icons-png.flaticon.com/128/9441/9441572.png"  alt="" className={`w-8 h-8  `} />
    </div>
   </>
  )
}



