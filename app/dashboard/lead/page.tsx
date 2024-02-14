"use client";
import { useEffect, useState } from 'react';
import Search from '@/app/ui/dashboard/search/search';
import styles from '../../ui/dashboard/lead/lead.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MdAdd } from 'react-icons/md';

import Pagination from '@/app/ui/dashboard/pagination/pagination';

// Definir la interfaz para el objeto de usuario
interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const LeadPage = () => {
    const [users, setUsers] = useState<User[]>([]);

    // Función para obtener la lista de usuarios
    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch('https://reqres.in/api/users');
                const data = await res.json();
                setUsers(data.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder='Search for a lead...' />
                <Link href='/dashboard/lead/add'>
                    <button className={styles.addButton}>
                        Add Lead
                        <MdAdd size={20} />
                    </button>
                </Link>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email Address</th>
                        <th>Lead Status</th>
                        <th>Date Time Registration</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <div className={styles.user}>
                                    <Image src={user.avatar} alt={user.first_name} width={40} height={40} className={styles.userImage} />
                                </div>
                            </td>
                            <td>{user.last_name}</td>
                            <td>987654321</td>
                            <td>{user.email}</td>
                            <td>In Progress</td>
                            <td>2022-01-01</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href=''>
                                        <button className={`${styles.button} ${styles.view}`}>View</button>
                                    </Link>
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination />
        </div>
    );
}

export default LeadPage;
