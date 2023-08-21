
import { useSelector } from 'react-redux';
import { RootState} from '../../redux-toolki/stora';
function Servicios() {

    const darkMode = useSelector((state: RootState) => state.detalle.value);
  return (
    <div className=" w-11/12 flex flex-col gap-16">
      <dd className={`w-4/5 ml-14 md:ml-28 text-black flex flex-col `}>
       <h1 className={`text-[25px]  font-bold ${darkMode === true ? 'text-white': null}`}>Servicios</h1>
       <p className="text-[14px] text-gray-700">Servicios que presto</p>
      </dd>
      <dd className={` w-4/5 md:ml-28 flex flex-col  md:flex md:flex-row   m-10 gap-7`}>
       <aside className={`w-64 h-56 hover:opacity-80 rounded-md  p-8 bg-red-500  ${darkMode === true ? '': ''}`}>
       <img src="https://cdn-icons-png.flaticon.com/128/10223/10223243.png" alt="" className="w-12 h-12" />
        <h1 className={`text-[17px] pt-2 font-semibold ${darkMode === true ? '': null}`}>FontEnd Developer</h1>
        <p className="text-[12px] text-gray-800 mt-1">Con experiencia en la creación de interfaces de usuario atractivas y funcionales. Con un enfoque meticuloso en el diseño responsive y la usabilidad.</p>
       </aside>
       <aside  className={`w-64 h-56  hover:opacity-80 rounded-md p-8 bg-yellow-400  ${darkMode === true ? '': ''}`}>
       <img src="https://cdn-icons-png.flaticon.com/128/9495/9495731.png" alt="" className="w-12 h-12" />
        <h1 className={`text-[17px] pt-2 font-semibold ${darkMode === true ? '': null}`}>BackEnd Developer</h1>
        <p className="text-[12px] text-gray-700 mt-1">Dedicado a construir la infraestructura detrás de las aplicaciones web. Mi enfoque se centra en la seguridad, escalabilidad y rendimiento.</p>
       </aside>
       <aside  className={`w-64 h-56 hover:opacity-80 rounded-md bg-orange-400  p-8  ${darkMode === true ? '': ''}`}>
       <img src="https://cdn-icons-png.flaticon.com/128/9321/9321186.png" alt="" className="w-12 h-12" />
        <h1 className={`text-[17px] pt-2 font-semibold ${darkMode === true ? '': null}`}>Desarrollo Movil</h1>
        <p className="text-[12px] text-gray-700 mt-1"> tengo el privilegio de dar vida a ideas y conceptos a través de aplicaciones interactivas y funcionales en dispositivos móviles.</p>
       </aside>
      </dd>
    </div>
  )
}

export default Servicios