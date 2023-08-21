
interface Props {
  nombre: string;
    imagen: string;
    subdescripcion: string;
    id: number;
    enlace: string,
    color: string,
    deploy: string
  
}

import { RxExternalLink } from 'react-icons/rx';
import {  RootState } from '../../redux-toolki/stora';
import {  useSelector } from 'react-redux';
const Card: React.FunctionComponent<Props> =  ({nombre, imagen, subdescripcion, enlace, color, deploy }) => {
  

 

 const darkMode = useSelector((state: RootState) => state.detalle.value);

 return (
   
<div className={`max-w-sm rounded-xl ${color} ${darkMode === true ? ' shadow-lg shadow-gray-900' : '  shadow-lg shadow-blue-300' }   hover:opacity-90  rounded-sm shadow`}>
   <aside className='m-8'>
   <a>
    <img src={imagen} alt="" />
   </a>
   </aside>
   <aside className={`text-white flex flex-col items-center `}>
    <h1 className=' font-semibold'>{nombre}</h1>
    <a className='m-5 '>
        <p className='text-neutral-400 text-center text-[13px] '>
            {subdescripcion}
        </p>
    </a>
    
   <div className='flex '>
   {
    deploy.length ? <a href={deploy} target="_blank" rel="noopener noreferrer" className=" flex justify-center items-center gap-2 rounded-[15px] h-6 text-[10px] bg-transparent m-5 ">
    Deploy
    <span className={`text-[11px] rounded-md bg-white/5 p-1 ring-1 ring-white/10 ${darkMode === true ? '' : 'text-blue-500'}`}>
     <RxExternalLink className="h-3 w-3 text-white" aria-hidden="true" />
    </span>
   </a> : null
   }
        <a href={enlace} target="_blank" rel="noopener noreferrer" className=" flex justify-center cursor-pointer items-center gap-2 rounded-[15px] h-6 text-[10px] bg-transparent m-5 ">
         Github
         <span className={`text-[11px] rounded-md bg-white/5 p-1 ring-1 ring-white/10 ${darkMode === true ? '' : 'text-blue-500'}`}>
          <RxExternalLink className="h-3 w-3 text-white" aria-hidden="true" />
         </span>
        </a>
        
   </div>
       
   </aside>
</div>

  )
}

export default Card
