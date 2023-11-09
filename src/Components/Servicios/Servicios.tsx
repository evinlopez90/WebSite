
import { useSelector } from 'react-redux';
import { RootState} from '../../redux-toolki/stora';
function Servicios() {

    const darkMode = useSelector((state: RootState) => state.detalle.value);
  return (
    <div className=" w-full  flex flex-col gap-16">
      <div className={`w-full  text-black`}>
       <h1 className={`text-[55px] ml-14 font-bold ${darkMode === true ? 'text-white': null}`}>Servicios<span className=" m-0  text-red-500">.</span> </h1>
       
      </div>
      <div className={` w-full  ml-16  flex flex-col  md:flex md:flex-row    m-10 gap-10`}>
       <aside className={` w-[340px] md:w-96 md:h-72  hover:opacity-80 rounded-md  p-8 bg-gray-900  ${darkMode === true ? '': ''}`}>
       <img src="https://cdn-icons-png.flaticon.com/128/11514/11514025.png" alt="" className="w-12  h-12" />
        <h1 className={`text-[20px] pt-2 text-white font-semibold ${darkMode === true ? '': null}`}>Desarrollo web</h1>
        <p className="text-[13px] text-gray-500 mt-1">Soy un desarrollador web full stack con  experiencia en la creación de sitios web de alto rendimiento y hermosos diseños. Me apasiona la tecnología y estoy listo para llevar tu visión en línea. Aquí tienes un vistazo de las tegnologias que mas uso:</p>
        <div className='text-[13px] flex mt-2 gap-2'>
          <span className='bg-gray-800  rounded-[9px] text-white p-[6px] '>React</span>
          <span className='bg-gray-800  rounded-[9px] text-white p-[6px] '>Vue</span>
          <span className='bg-gray-800  rounded-[9px] text-white p-[6px] '>Mongodb</span>
          <span className='bg-gray-800  rounded-[9px] text-white p-[6px] '>PostgresSQL</span>
        </div>
       </aside>
       
       <aside  className={`w-[340px] md:w-96 md:h-72 hover:opacity-80 rounded-md bg-gray-900  p-8  ${darkMode === true ? '': ''}`}>
       <img src="https://cdn-icons-png.flaticon.com/128/9321/9321186.png" alt="" className="w-12 h-12" />
        <h1 className={`text-[20px] pt-2 text-white font-semibold ${darkMode === true ? '': null}`}>Desarrollo Movil</h1>
        <p className="text-[13px] text-gray-500 mt-1">Me apasiona el mundo del desarrollo móvil. Aunque no tengo experiencia laboral, he invertido tiempo y esfuerzo en aprender las habilidades necesarias para crear aplicaciones móviles de alta calidad.</p>
        <div className='text-[13px] flex mt-5 gap-2'>
          <span className='bg-gray-800  rounded-[9px] text-white p-[6px] '>React-native</span>
          <span className='bg-gray-800  rounded-[9px] text-white p-[6px] '>NativeScript</span>
        </div>
       </aside>
      </div>
    </div>
  )
}

export default Servicios