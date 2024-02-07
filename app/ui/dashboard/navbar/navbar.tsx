"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { MdSearch } from "react-icons/md";

import Image from "next/image";

// Definir la interfaz para el objeto de usuario
interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

// Función para obtener la lista de usuarios
async function fetchUsers(): Promise<User[]> {
    const res = await fetch('https://reqres.in/api/users');
    const data = await res.json();

    return data.data;
}

const Navbar = () => {
    const [randomUser, setRandomUser] = useState<User | null>(null); // Estado para almacenar el usuario aleatorio
    const pathname = usePathname();

    useEffect(() => {
        async function getRandomUser() {
            const users = await fetchUsers();
            if (Array.isArray(users) && users.length > 0) {
                const randomIndex = Math.floor(Math.random() * users.length); // Obtiene un índice aleatorio
                setRandomUser(users[randomIndex]); // Establece el usuario aleatorio
            }
        }

        getRandomUser();
    }, []); // Ejecuta la función una vez al cargar el componente

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {pathname.split("/").pop()}
            </div>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <MdSearch className={styles.icon} />
                    <input type="text" placeholder="Search..." className={styles.input} />
                </div>
                <div className={styles.user}>
                    {/* Muestra el avatar del usuario aleatorio si existe */}
                    {randomUser && <Image src={randomUser.avatar} alt="User Avatar" width={60} height={60} className="rounded-full" />}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
