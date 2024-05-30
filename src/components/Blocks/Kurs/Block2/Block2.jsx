import { Link } from 'react-router-dom';
import styles from './Block2.module.css';

export function Block2() {
    return <>
        <div className={styles.main}>
            <div className={styles.task}>
                
                <div className={styles.task__zadanie}>
                    <p>Введение в Javascript</p>
                    <img src="/src/assets/javascript_js_logo_icon.png" alt="javascript_logo"width="100px"/>
                    <Link to="/kurs/js"><button>Начать курс</button></Link>
                </div>

                <div className={styles.task__zadanie}>
                    <p>Введение в CSS</p>
                    <img src="/src/assets/7909897ceea2691e5a4942766c678ff3.png" alt="react_logo" />
                    <Link to="/kurs/css"><button disabled>Начать курс</button></Link>
                </div>

                <div className={styles.task__zadanie}>
                    <p>Введение в HTML5</p>
                    <img src="/src/assets/html5.png" alt="programirovanie_logo" />
                    <Link to="/kurs/html"><button disabled>Начать курс</button></Link>
                </div>
                
            </div>
        </div>
    </>
}