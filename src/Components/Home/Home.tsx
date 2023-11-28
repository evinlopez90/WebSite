 /* eslint-disable @typescript-eslint/no-unused-vars */

import { BsArrowDownShort, BsMouse } from "react-icons/bs";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { Link, Element } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import imaHome from "../../Imagenes/about.jpg";
import { setTheme } from "../../redux-toolki/Slice";
import { AppDispatch, RootState } from "../../redux-toolki/stora";
import { useDispatch, useSelector } from "react-redux";


function Home() {
  // const mode = localStorage.getItem("DarkMode")
  // const DarkMode = mode ? JSON.parse(mode) : false
  // console.log(DarkMode);
  const darkMode = useSelector((state: RootState) => state.detalle.value);
  const dispatch = useDispatch<AppDispatch>();
  const setMode = (value: boolean) => {
    dispatch(setTheme(value));
  };

  return (
    <>
      <div className="fixed md:right-7 ml-60 md:ml-0 top-10 md:top-6">
        {darkMode === false ? (
          <div
            onClick={() => setMode(true)}
            className="flex flex-col  items-center  cursor-pointer text-white rounded-full bg-gray-900 p-2 ring-1 ring-white/10  "
          >
            <BsSun />
          </div>
        ) : null}
        {darkMode === true ? (
          <div
            onClick={() => setMode(false)}
            className=" flex flex-col  items-center  cursor-pointer text-white rounded-full bg-gray-900 p-2 ring-1 ring-white/10  "
          >
            <BsMoonStars />
          </div>
        ) : null}
      </div>

      <Element
        name="1"
        className={`flex w-full flex-col justify-center items-center   p-5 h-screen `}
      >
        <div className=" flex w-full   justify-center items-center grid-cols-2 gap-10  md:gap-0   ">
          <aside className="w-full  md:ml-52 flex flex-col items-center text-left">
            <h1
              className={`w-full  text-[60px]    md:text-[70px] font-extrabold    ${
                darkMode === true ? " text-white" : null
              }`}
            >
              Hey, Soy Evin<span className=" m-0  text-red-500">.</span>
            </h1>

            <span
              className={` flex w-full text-[22px]   md:text-[26px]   font-medium text-red-500 }`}
            >
              Desarrollador full stack 

            </span>

            <div className=" flex justify-center">
              <p className=" text-[15px] md:text-[13px] mt-5   text-gray-600 ">
                Bienvenido a mi portafolio web. Explora las diferentes sesiones
                y conoce todo sobre mi en el increible mundo del desarrollo de
                software.
              </p>
            </div>
            <div className="w-full  text-[18px]  flex   gap-5 py-5  ">
              <a
                href="www.linkedin.com/in/evin-lopez"
                className="rounded-md text-white p-1 bg-gray-900 "
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/evinlopez90"
                className="rounded-md text-white p-1 bg-gray-900 "
              >
                <FaGithub />
              </a>
            </div>
          </aside>
          <aside className="hidden md:flex  justify-center  w-full   ">
            <img className=" w-[40%] rounded-full" src={imaHome} alt="Home" />
          </aside>
        </div>
        <div className="flex w-full justify-center items-center mt-20">
          <button
            className={`flex  w-2/3 justify-center items-center ${
              darkMode === true ? "text-white" : null
            }  `}
          >
            <Link
              to="Acerca de mí"
              className="flex w-2/3 justify-center items-center text-red-500 "
              spy={true}
              smooth={true}
              duration={500}
            >
              <BsMouse />{" "}
              <span
                className={`text-base mx-1 text-[20px] ${
                  darkMode === true ? "text-white" : "text-black"
                }`}
              >
                Scroll down
              </span>{" "}
              <BsArrowDownShort />
            </Link>
          </button>
        </div>
      </Element>
    </>
  );
}

export default Home;
