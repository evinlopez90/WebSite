

import { useSelector } from 'react-redux';

import Frondend from './Frondend'
import { RootState } from '../../redux-toolki/stora';

function Skill() {
  const darkMode = useSelector((state: RootState) => state.detalle.value);
   

  return (
   <div  className={`w-full ml-36    ${darkMode === true ? 'text-white': null }`}>
    <aside className='flex w-full '>
    <h1 className={`font-bold text-[50px] md:text-[55px]  ${darkMode === true ? 'text-white ': null}`}>Habilidades<span className=" m-0  text-red-500">.</span> </h1>
    </aside>
    <aside>
      <Frondend/>

    </aside>
   </div>
  )
}

export default Skill
