import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation.jsx'; 
import styles from './Header.module.css';

export function Header() {
    const isAuthenticated = !!localStorage.getItem('user');
    const linkTo = isAuthenticated ? '/kurs' : '/';

    return (
        <div className={styles.header__container}>
            <div className={styles.header__logo}>
                <h1><Link to={linkTo}>Falcks</Link></h1>
            </div>
            <div className={styles.container__right}>
                <Navigation />
            </div>
        </div>
    );
}
