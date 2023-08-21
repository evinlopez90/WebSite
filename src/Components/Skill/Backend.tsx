/* eslint-disable prefer-const */

import {BsCheckCircleFill} from "react-icons/bs"
import { useSelector } from "react-redux";
import { RootState } from "../../redux-toolki/stora";

interface Back {
  name: string,
  nivel: string,
  porcentage: string
}

export default function Backend() {

  let backArray:Back[]  = [
    {
      name: "Express js",
      nivel: "Intermedio",
      porcentage: 'w-[65%]'
    },
    {
      name: "Sequelize",
      nivel: "Medio",
      porcentage: 'w-[50%]'
    },
    {
      name: "Node Js",
      nivel: "Avanzado",
      porcentage: 'w-[75%]'
    },
    {
      name: "MySQL",
      nivel: "Medio",
      porcentage: 'w-[50%]'

    },
    {
      name: "Postgres",
      nivel: "Medio",
      porcentage: 'w-[50%]'
    },
    {
      name: "MongoDB",
      nivel: "Basico",
      porcentage: 'w-[25%]'
    }
  ]

  const darkMode = useSelector((state: RootState) => state.detalle.value);

  return (
    <div className={`   md:w-full h-96 ${darkMode === true ? 'text-white': 'text-black'} flex flex-col  `}>
   
    <div className={`w-full grid grid-cols-2  p-5 gap-2  md:grid-cols-5 `} >
      {
       backArray && backArray? backArray.map((t, i) => (
         <aside key={i} className={`w-40 h-32  border rounded-md ${darkMode === true ? 'text-white border-gray-800  ': ''} md:w-48 md:h-32 flex flex-col px-2  `}>
          <div>
             <p className={` text-[20px] md:text-[25px] ${t.nivel === "Avanzado" ? 'text-gray-800' : t.nivel === 'Medio' ? ' text-orange-700' : t.nivel === 'Intermedio' ? ' text-amber-400' : 'text-blue-800'  }  `}>●</p>
          </div>
         <div>
         <p className=" text-[13px] md:text-[15px]">{t.name}</p>
         <span className=" text-[11px] md:text-[12px] text-gray-500">{t.nivel}</span>
        <div className="w-full h-3 md:h-5 border flex items-center p-1 rounded-r-lg ">
        <div className={` ${t.porcentage} h-2 md:h-3 rounded-r-lg ${t.nivel === "Avanzado" ? 'bg-gray-800' : t.nivel === 'Medio' ? ' bg-orange-700' : t.nivel === 'Intermedio' ? ' bg-amber-400' : 'bg-blue-800'  }`}>
  <div
    className="bg-primary p-0.5 ju text-center text-[10px] font-medium leading-none  text-primary-100"
   >
    
  </div>
</div>
        </div>
         </div>
       </aside>
      
       )) : <p>No hay tegnologias</p>
      }
      
    </div>
 </div>
    )
}
