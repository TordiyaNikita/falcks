import styles from './Block5.module.css';

export function Block5() {
    return <>
        <div className={styles.main}>
            <h2>Наши партнеры</h2>
            <div className={styles.partner}>
                <div className={styles.partner__item}>
                    <img src="/src/assets/rosneft.png" alt="Партнер 1" />
                </div>
                <div className={styles.partner__item}>
                    <img src="/src/assets/yandex.png" alt="Партнер 2" />
                </div>
                <div className={styles.partner__item}>
                    <img src="/src/assets/sber.png" alt="Партнер 3" />
                </div>
                <div className={styles.partner__item}>
                    <img src="/src/assets/gazprom.png" alt="Партнер 4" />
                </div>
            </div>
        </div>
    </>
}