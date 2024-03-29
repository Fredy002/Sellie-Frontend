import Card from "../ui/dashboard/card/card"
import styles from '../ui/dashboard/dashboard.module.css'

const DashboardPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default DashboardPage

