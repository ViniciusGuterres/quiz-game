import styles from '../styles/Statistics.module.css';

interface StatisticsProsp {
    value: any
    text: string
    colorBg?: string
    colorFont?: string
}

export default function Statistics(props: StatisticsProsp) {
    return (
        <div className={styles.statistics}>
            <div
                className={styles.value}
                style={{ 
                    backgroundColor: props.colorBg ?? '#FDD607',
                    color: props.colorFont ?? '#333'
                 }}
            >
                {props.value}
            </div>

            <div className={styles.label}>
                {props.text}
            </div>
        </div>
    )
}