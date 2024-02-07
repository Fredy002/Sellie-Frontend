import styles from './card.module.css'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <div className={styles.card}>
                    <span className={styles.value}>14</span>
                    <span className={styles.label}>Total Users</span>
                </div>
            </div>
        </div>
    )
}

export default Card
