
import pokeIma from "../../Imagenes/pokemon.png"
 import instachrf from '../../Imagenes/Instachef.png'
 import remind from '../../Imagenes/remind.png'
 import recetas from "../../Imagenes/recetas.png"

export const proyectos = [

    {
        nombre: "Recetas",
        imagen: recetas,
        video: null,
        subdescripcion: "Se trata de una página web diseñada para buscar recetas de manera eficiente. Ofrece la posibilidad de filtrar las recetas por tipo de comida, permitiendo la búsqueda por letra inicial, así como por ingredientes específicos. La interfaz de la página es notable por su limpieza y su intuitivo diseño, lo que facilita la navegación y la búsqueda de recetas.",
        enlace: 'https://github.com/evinlopez90/recetas.git',
        tegnologias: ["Vuejs",  "Tailwind", "Vuex"],
        color: 'bg-orange-900',
        deploy: 'https://recetas-rdgn.vercel.app/'
    
    },
    {
        nombre: "Instachef",
        imagen: instachrf,
        video: null,
        decriccion: "",
        subdescripcion: "InstaChef es un restaurante de comidas online, está pensado para que puedas tener la mejor experiencia comprando comida rápida en línea, con una interfaz intuitiva desde la autenticación hasta la pasarela de pagos.",
        colaboradores: [],
        enlace: 'https://github.com/FrancoInca/InstaChef-Front.git',
        tegnologias: ["React ", "Stripe",  "Sequelize", "express", "ReduxToolkit"],
        color: 'bg-yellow-900',
        deploy: 'https://insta-chef.vercel.app/'
    
    },
    {
        nombre: "AppPokemon",
        imagen: pokeIma,
        video: null,
        decriccion: "Esta pagina permite visualizar  los datos de cada pokemon, se puede crear, filtrar, ordenar, y mirar los detalles de cada uno, poniendo en practica recursos basicos de diseño (UX : UI).",
        subdescripcion: "Esta pagina permite visualizar  los datos de cada pokemon, se puede crear, filtrar, ordenar, y mirar los detalles de cada uno, poniendo en practica recursos basicos de diseño (UX : UI).",
        colaboradores: [],
         tegnologias: ["React",  "Redux", "Node",  "Express",  "Sequelize" ],
        enlace: "https://github.com/evinlopez90/PI-Pokemon-main",
        color: 'bg-gray-900',
        deploy: ''

    },
    // {
    //     nombre: "GameApp",
    //     imagen: gameApp,
    //     video: null,
    //     decriccion: "Esta pagina permite visualizar la dotos de cada videojuego, se puede crear, filtrar, ordenar, y mirar los detalles de cada uno, poniendo en practica recursos basicos de diseño (UX : UI).",
    //     subdescripcion: "Esta pagina permite visualizar  los datos de cada pokemon, se puede crear, filtrar, ordenar, y mirar los detalles de cada uno, poniendo en practica recursos basicos de diseño (UX : UI).",
    //     colaboradores: [],
    //     tegnologias: ["https://cdn.worldvectorlogo.com/logos/react-2.svg", 
    //     "https://cdn.worldvectorlogo.com/logos/redux.svg", "https://cdn.worldvectorlogo.com/logos/nodejs.svg", "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    //    "https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg"  ],
    //     enlace: "https://github.com/evinlopez90/PI-Videogames",
    //     color: 'bg-gray-900',
    //     deploy: ''
    
    // },
    
    
]

export const movil = [
    {
        nombre: "Reminder",
        imagen: remind,
        video: null,
        decriccion: "En mi proyecto, desarrollé una aplicación que facilita la gestión de tareas. Los usuarios pueden crear, compartir, marcar como completadas y eliminar sus tareas.",
        subdescripcion: "En mi proyecto, desarrollé una aplicación que facilita la gestión de tareas. Los usuarios pueden crear, compartir, marcar como completadas y eliminar sus tareas.",
        colaboradores: [],
         tegnologias: ["ReactNative",  "ReduxToolkit", "Nodejs",  "Express",  "Sequelize" ],
        enlace: "https://github.com/evinlopez90/appTask",
        color: 'bg-gray-900',
        deploy: 'https://youtu.be/sv-lUT31P-w'

    },
   
]