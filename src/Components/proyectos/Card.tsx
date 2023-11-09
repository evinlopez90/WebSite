
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
   
<div className={`  md:w-[456px]  bg-transparent   hover:opacity-90  rounded-sm `}>
   <aside className=' -ml-1 m-8 w-full flex justify-center rounded-[10px]    bg-gray-900  p-4 md:p-8'>
   <a className='w-full flex justify-center   relative md:top-8'>
    <img src={imagen} alt="" className='h-44 ' />
   </a>
   </aside>
   <aside className={` flex flex-col items-center ${darkMode === true ? 'text-white' : 'text-black'} `}>
   <div>
   <div>
   <aside className='flex  ml-6  md:ml-9 w-full items-center justify-between -mt-6'>
   <h1 className='font-bold text-[23px]'>{nombre}</h1>
   <div className=" w-2/5 md:w-11/12 mt-5 my-2  md:m-2 "><hr className={`h-px  border-0 ${darkMode === true ? "bg-gray-700" : "bg-gray-300" }`} /></div>

   <div className='flex justify-center gap-2   '>
   
        <a href={enlace} target="_blank" rel="noopener noreferrer" className="  flex justify-center cursor-pointer items-center gap-2 rounded-[15px] h-6 text-[24px] bg-transparent m-1  ">
        <AiFillGithub/>
        </a>
        {
    deploy.length ? <a href={deploy} target="_blank" rel="noopener noreferrer" className=" flex justify-center items-center gap-2 rounded-[15px] h-6 text-[24px] bg-transparent m-1 ">
    <FiExternalLink />
   </a> : null
   }
   </div>
        
   </aside>
  
   </div>
    <div className='ml-8 mt-2'>
    <div className='flex gap-1'>
      {
        tegnologias && tegnologias.map(t => (
          <span className='bg-gray-900  text-[13px] text-[#D6D7DD] p-2 rounded-[12px]' key={t}>
           {t}
          </span>
        ))
      }
    </div>
    <a className='m-5  '>
        <p className='text-gray-700  text-[13px] '>
            {subdescripcion}
        </p>
    </a>
    </div>
   </div>
    
   
       
   </aside>
</div>

  )
}

export default Card
