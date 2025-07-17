import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    /*UilSignOutAll,*/
    UilMoneyWithdrawal,
    UilUsdSquare

} from "@iconscout/react-unicons";

import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'
import img1 from '../imgs/img1.png'
export const SidebarData = [
    {
        icon: UilEstate,
        heading: 'Inicio'
    },
    {
        icon: UilClipboardAlt,
        heading: 'Ordenes',
        
    },
    {
        icon: UilUsersAlt,
        heading: 'Clientes',
    },
    {
        icon: UilPackage,
        heading: 'Productos',
    },
    {
        icon: UilChart,
        heading: 'Analytics',
    }
];

export const CardsData = [
    {
        title : 'Ventas',
        color: {
            backGround : 'linear-gradient(180deg, #bdff67ff 0%, #f1f384ff 100%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        barValue: 70,
        value : "25,970",
        png: UilMoneyWithdrawal,
        Series: [
            {
                name: "Ventas",
                data: [31, 40, 28, 51, 24, 109, 100],
            }
        ],
    },
    {
        title : 'Gastos',
        color: {
            backGround : 'linear-gradient(180deg, #67cfffff 0%, #84c7f3ff 100%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        barValue: 70,
        value : "25,970",
        png: UilUsdSquare,
        Series: [
            {
                name: "Gastos",
                data: [31, 40, 28, 51, 24, 109, 100],
            }
        ],
    },
    // TERCER OBJETO
    {
        title : 'Ingresos',
        color: {
            backGround : 'linear-gradient(180deg, #ff919d 0%, #fc929d 100%)',
            boxShadow: '0px 10px 20px 0px #fdc0c7',
        },
        barValue: 80,
        value : "14,270",
        png: UilMoneyWithdrawal,
        Series: [
            {
                name: "Ingresos",
                data: [10, 100, 50, 70, 80, 30, 40],
            }
        ],
    }
]

export const UpdatesData = [
    {
        img: img1,
        name: "Leopoldo Munera",
        noti : "Aprueba este proyecto",
        comentario: "¡Amo Santiago a la parrilla",
    },
    {
        img: img2,
        name: "Ismael peña",
        noti : "Adora este proyecto",
        comentario : "Gracias Santiago a la parrila <3",
    },
    {
        img: img3,
        name: "¿Y el profe?",
        noti : "...",
        comentario: "Con mucho cariño al profe",
    },


]