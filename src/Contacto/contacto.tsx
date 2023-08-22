import { useSelector } from "react-redux";
import { RootState } from "../redux-toolki/stora";
import emailjs from '@emailjs/browser';
// import { useState } from "react";
// interface Mensaje {
//   nombre: string;
//   email: string;
//   mensage: string;
// }
export default function Contacto() {
  const darkMode = useSelector((state: RootState) => state.detalle.value);

  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "evinlopez9@gmail.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+57 3167565953",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "Buenaventura, Valle del cauca, Colombia.",
    },
  ];

  // const [contact, setContact] =  useState<Mensaje>({
  //   nombre: '',
  //   email: '',
  //   mensage: ''
  // })

  const sendEmail = (E: React.FormEvent<HTMLFormElement>) => {
   E.preventDefault();
   emailjs.sendForm('service_ypa8u7v', 'template_ydf00mb', E.target as HTMLFormElement, '53jTJLFUy_KqBZvJE')
   .then(response => console.log(response));
    
  }

  // const hanledOnchange = (E: React.ChangeEvent<HTMLInputElement>) => {
  // const {name, value} = E.target
  // setContact({
  //   ...contact,
  //   [name]: value
  // })
  // }

  return (
    <main className="w-11/12 mt-20 md:mt-0">
      <div className="w-11/12 mx-auto px-4 text-gray-600 md:px-8">
        <div className="w-full ml-8 md:ml-0 flex flex-col gap-12 justify-between lg:flex md:flex-row">
          <div className="w-full md:w-1/2 md:ml-20 ">
            <p
              className={` text-[23px] md:text-[25px] font-semibold ${
                darkMode === true ? "text-gray-700" : "text-gray-700"
              }`}
            >
              Ponte en contacto con migo
            </p>

            <div>
              <ul className="mt-6 flex flex-wrap text-[16px] gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-red-600 ">{item.icon}</div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" w-full  md:w-1/2 flex-1 md:mr-8 sm:max-w-lg lg:max-w-md">
            <form onSubmit={(e) => sendEmail(e)} className="">
              <div>
                <label className="font-medium">Nombre</label>
                <input
                 
                  type="text"
                  name="nombre"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium">Mensaje</label>
                <textarea
                  required
                  name="mensage"
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
