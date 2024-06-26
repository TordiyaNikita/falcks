import styles from './Block2.module.css';

export function Block2() {
    return <>
        <div className={styles.main}>
            <div className={styles.left}>
                <h2>Расширьте свои знания с онлайн-курсами</h2>
                <p>У вас есть уникальная возможность обучаться онлайн, изучая самые актуальные темы и технологии. Наши курсы позволят вам гибко планировать свое время и выбирать те предметы,
                    которые наиболее важны для вашего профессионального и личностного роста. Независимо от вашего уровня и опыта, у нас вы найдете подходящие курсы для начинающих и продвинутых учеников
                    . Используйте возможности онлайн-образования, чтобы достичь новых высот!</p>
            </div>
            <div className={styles.right}>
                <h3>Почему выбрать нас?</h3>
                <ul>
                    <li>Широкий выбор курсов по различным тематикам</li>
                    <li>Качественное обучение от опытных преподавателей</li>
                    <li>Удобство и гибкость обучения из любой точки мира</li>
                    <li>Постоянное обновление и добавление новых курсов</li>
                    <li>Поддержка и помощь во время обучения</li>
                </ul>
            </div>
        </div>
    </>
}