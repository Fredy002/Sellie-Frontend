import Search from '@/app/ui/dashboard/search/search';
import styles from '../../ui/dashboard/lead/lead.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { MdAdd } from 'react-icons/md';



const LeadPage = () => {
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
                        <td>
                            Photo
                        </td>
                        <td>
                            Last Name
                        </td>
                        <td>
                            Phone
                        </td>
                        <td>
                            Email Address
                        </td>
                        <td>
                            Lead Status
                        </td>
                        <td>
                            Date Time Registration
                        </td>
                        <td></td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={
                                        // avatar
                                    }
                                 alt='user photo' width={40} height={40} className={styles.userImage}/>
                                
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default LeadPage;
