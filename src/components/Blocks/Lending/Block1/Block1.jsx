import { Link } from 'react-router-dom';
import styles from './Block1.module.css';

export function Block1() {
    return <>
        <div className={styles.block}>
            <div className={styles.block__main_left}>
                <h1>Найди себя и новую профессию в Falcks</h1>
                <h3>Развивайтесь и достигайте новых высот с Falcks! Наши онлайн-курсы предлагают уникальные возможности для приобретения актуальных навыков и знаний в области программирования.
                    Независимо от вашего уровня опыта или профессиональных интересов,
                    у нас вы найдете курсы, специально разработанные для вас. Погрузитесь в мир знаний с Falcks и откройте новые перспективы для вашей карьеры и личного роста.
                    Продолжайте свое обучение прямо сейчас и станьте лучше каждый день!</h3>
            </div>
            <div className={styles.block__main_right}>
                <Link to="/login">Начните путь с нами</Link>
            </div>
        </div>
    </>
}