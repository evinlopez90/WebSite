/* eslint-disable prefer-const */


import { useSelector } from "react-redux";
import { RootState } from "../../redux-toolki/stora";

interface Frond {
  name: string,
  logo: string
 }
export default function Frondend() {


  let FrondArray:Frond[]  = [
    {
      name: "Nodejs",
      logo: 'https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_node_icon_130301.png'
    },
    {
      name: "Reactjs",
      logo: 'https://cdn.icon-icons.com/icons2/2415/PNG/96/react_original_logo_icon_146374.png'
    },
    {
      name: "Nextjs",
      logo: 'https://cdn.icon-icons.com/icons2/3392/PNG/96/nextjs_icon_213852.png'
    },
    {
      name: "Redux",
      logo: 'https://cdn.icon-icons.com/icons2/2415/PNG/96/redux_original_logo_icon_146365.png'
    },
    {
      name: "JavaScript",
      logo: 'https://cdn.icon-icons.com/icons2/2108/PNG/96/javascript_icon_130900.png'

    },
    {
      name: "TypeScript",
      logo: 'https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_typescript_official_icon_130107.png'
    },
    {
      name: "HTML",
      logo: 'https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_html_icon_130541.png'
    },
    {
      name: "Css",
      logo: 'https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_css_icon_130661.png'
    },
    {
      name: "VueJs",
      logo: 'https://cdn.icon-icons.com/icons2/2415/PNG/96/vuejs_original_logo_icon_146304.png'
    },
    {
      name: "Tailwind",
      logo: 'https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_tailwind_icon_130128.png'
    },
    {
      name: "Sequelize",
      logo: "https://cdn.icon-icons.com/icons2/2415/PNG/96/sequelize_original_logo_icon_146348.png",
    },
    {
      name: "GitHup",
      logo: "https://cdn.icon-icons.com/icons2/2406/PNG/96/github_git_icon_145985.png",
    },
    {
      name: "Git",
      logo: "https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_git_icon_130581.png",
    },

    {
      name: "PostgresSQL",
      logo: "https://cdn-icons-png.flaticon.com/128/5968/5968342.png",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.icon-icons.com/icons2/2415/PNG/96/mongodb_original_logo_icon_146424.png",
    },
  ]

  const darkMode = useSelector((state: RootState) => state.detalle.value);


  return (
    <div className={`md:w-11/12 mt-16  ${darkMode === true ? 'text-white': 'text-black'} flex gap-4 flex-wrap  `}>
    {
      FrondArray && FrondArray.length ? FrondArray.map(a => (
        <span className="w-32 h-28  shadow-lg hover:shadow-2xl flex justify-center items-center  rounded-md 
        bg-gradient-to-r from-gray-900 from-10% via-gray-900 via-30% to-gray-900 to-90%
        ">
        <img src={a.logo} alt="" className="w-10" />
      </span> 
      )): <p>No hay habilidades</p>
    }
 </div>
  )
}
