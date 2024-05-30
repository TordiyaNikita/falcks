import styles from './Block3.module.css';

export function Block3() {
    return <>
        <div className={styles.main}>
            <h2>Почему выбрать наш сайт</h2>
            <div className={styles.container}>
                <div className={styles.container__block}>
                    <div className={styles.block__top}>
                        <img src="/src/assets/rate_15088334.png" alt=""  width='100px'/>
                        <h4>Широкий выбор курсов</h4>
                    </div>
                    <div className="block__bottom">
                        <h3>На этом сайте представлены курсы по различным тематикам, позволяющие каждому найти что-то подходящее для себя, будь то профессиональное обучение или развитие личных навыков.</h3>
                    </div>
                </div>
                <div className={styles.container__block}>
                    <div className={styles.block__top}>
                        <img src="/src/assets/univeristy_8030614.png" alt="" width='100px' />
                        <h4>Качественное обучение</h4>
                    </div>
                    <div className="block__bottom">
                        <h3>Курсы представлены квалифицированными экспертами, что гарантирует высокое качество обучения и достоверность предоставляемой информации.</h3>
                    </div>
                </div>
                <div className={styles.container__block}>
                    <div className={styles.block__top}>
                        <img src="/src/assets/thumbs-up_3173877.png" alt=""  width='100px'/>
                        <h4>Удобство использования</h4>
                    </div>
                    <div className="block__bottom">
                        <h3>Интерфейс сайта понятен и интуитивно понятен, что делает процесс выбора курсов и их прохождения максимально комфортным для пользователей.</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
}