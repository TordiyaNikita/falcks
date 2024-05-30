import { Link } from 'react-router-dom';
import styles from './Block1.module.css';
export function Block1() {
    return <>
        <div className={styles.block}>
            <div className={styles.left}>
                <h2>Cегодня отличная день, чтобы научиться чему-то новому.</h2>
               <Link to="/kurs/js">Начачть с азов</Link>
            </div>
            <div className="right">
                <img src="/src/assets/chel.png" alt=""width='200px' />
            </div>
        </div>
    </>
}