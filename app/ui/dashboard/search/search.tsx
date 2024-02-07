import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'

interface searchProps {
    placeholder: string
}

const search = ({ placeholder }: searchProps) => {
    return (
        <div className={styles.container}>
            <MdSearch className={styles.icon} />
            <input type="text" placeholder={placeholder}  className={styles.input}/>
        </div>
    )
}

export default search
