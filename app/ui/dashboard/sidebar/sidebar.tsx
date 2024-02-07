import React from 'react';
import styles from "./sidebar.module.css"

import Image from 'next/image';

import { LuLayoutDashboard } from "react-icons/lu";
import { TiMessage } from "react-icons/ti";
import { LiaBrainSolid } from "react-icons/lia";
import { GoPeople } from "react-icons/go";

import MenuLink from './menuLink/menuLink';

import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const menuItems = [
    {
        title: "",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <LuLayoutDashboard />
            },
            {
                title: "Chat",
                path: "/dashboard/chat",
                icon: <TiMessage />
            },
            {
                title: "Chatbot",
                path: "/dashboard/chatbot",
                icon: <LiaBrainSolid />
            },
            {
                title: "Lead",
                path: "/dashboard/lead",
                icon: <GoPeople />
            }
        ]
    },
    {
        title: "Otrers",
        list: [
            {
                title: "Notifications",
                path: "/notifications",
                icon: <IoIosNotificationsOutline />
            },
            {
                title: "Settings",
                path: "/settings",
                icon: <IoSettingsOutline />
            }
        ]
    }
]

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image className={styles.logoImage} src='/images/logo.png' alt="logo" width={50} height={50} />

                {/* PONER ESTA PARTE EN EL DASHBOAR,
                    EN LA PAGINA PRINCIPAL SEGUN EL
                    FIGMA"
                */}

                <div className={styles.welcomeTo}>
                    <span className={styles.userName}>
                        Welcome Diego
                    </span>
                </div>

            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>
                            {cat.title}
                        </span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>

            <button className={styles.logout}>
                <CiLogout />
                Logout
            </button>
        </div>
    )
}
export default Sidebar;
