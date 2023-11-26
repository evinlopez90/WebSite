
interface Props {
  nombre: string;
    imagen: string;
    subdescripcion: string;
    id: number;
    enlace: string,
    tegnologias: Array<string>
    deploy: string
  
}

import { FiExternalLink } from 'react-icons/fi';
import {  RootState } from '../../redux-toolki/stora';
import {  useSelector } from 'react-redux';
import { AiFillGithub } from "react-icons/ai";
const Card: React.FunctionComponent<Props> =  ({nombre, imagen, subdescripcion, enlace, tegnologias,  deploy }) => {
  

 

 const darkMode = useSelector((state: RootState) => state.detalle.value);

 return (
   
  <div className={` w-[310px] ${darkMode === true ? "text-white" : "text-black" }  md:w-[456px]  bg-transparent   hover:opacity-90  rounded-sm `}>
   <aside className=' -ml-1 m-8 w-full flex justify-center rounded-[10px]    bg-gray-900  p-4 md:p-8'>
   <a className='w-full flex justify-center   relative md:top-8'>
    <img src={imagen} alt="" className='h-44 ' />
   </a>
   </aside>
   <aside className='text-white h-44 w-full flex flex-col gap-3 '>
   <div className='flex justify-between'>
   <h2 className={`${darkMode === true ? "text-white" : "text-black" } font-bold`}>{nombre}</h2>
   <div className=' w-[200px] text-gray-800'><hr className={`h-px my-3  border-0 ${darkMode === true ? "bg-gray-700" : "bg-gray-300" }`}/></div>
   <div className='flex gap-2 '>
   <a href={enlace} target="_blank" rel="noopener noreferrer" className='bg-gray-900 p-1 rounded-full'>
   <AiFillGithub/>
   </a>
    {
      deploy.length ? <a href={deploy} target="_blank" rel="noopener noreferrer" className='bg-gray-900 p-1 rounded-full'>
         <FiExternalLink/>
      </a> : null
    }
   </div>
   </div>
   <div className='flex flex-col gap-4'>
     <aside className='grid grid-cols-3 gap-2 md:grid-cols-4 '>
      {
        tegnologias && tegnologias.map(t => (
          <span className='flex justify-center items-center text-[13px] text-[#D6D7DD] p-1 rounded-[12px] bg-gray-900 ' key={t}>
            {t}
          </span>
        ))
      }
     </aside>
     <p className='text-gray-500 text-[14px]'>{subdescripcion}</p>
   </div>
   </aside>
</div>

  )
}

export default Card
