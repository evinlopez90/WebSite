import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux-toolki/stora';

interface Props {
    name: string;
    empresa: string;
    titulo: string;
    año: string;
    tecnologias: string[];
    descripcion: string;
  }

const Experiecia: React.FunctionComponent<Props> =  ({name, año, titulo, empresa, descripcion, tecnologias }) => {
  const darkMode = useSelector((state: RootState) => state.detalle.value);
  return (
    <div className=' w-full md:w-10/12 ml-10 md:ml-20 flex flex-col mt-5'>         
        <div className=' flex flex-col gap-2'>
            <aside className='flex justify-between'>
        <h1 className='text-[25px] font-bold'> {name}</h1>
        <p className='font-semibold'>{año}</p>
            </aside>
          <aside className='flex justify-between'>
          <h1 className='text-red-500 text-[17px] font-semibold'>{titulo}</h1>
          <p className='font-semibold'>{empresa}</p>
          </aside >
          <aside className='flex flex-col gap-3'>
          <p className='text-[15px] text-gray-600'>{descripcion}</p>
          <div className='flex gap-3  w-11/12 overflow-auto'>
            { tecnologias.length && tecnologias.map(t => (
                <span className='bg-gray-900  text-[13px] text-[#D6D7DD] p-2 rounded-[12px]' key={t}>{t}</span>
            ))}
          </div>
          </aside>
         
        </div>
        <div className='mt-5  text-gray-800'><hr className={`h-px my-8  border-0 ${darkMode === true ? "bg-gray-700" : "bg-gray-300" }`}/></div>
    </div>
  )
}

export default Experiecia