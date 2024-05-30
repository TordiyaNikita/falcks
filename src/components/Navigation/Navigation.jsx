import { Link, useNavigate } from 'react-router-dom';

export function Navigation() {
    const isAuthenticated = !!localStorage.getItem('user');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <ul>
            <li>
                <Link to="/about-us">О нас</Link>
            </li>
            {isAuthenticated ? (
                <li>
                    <a onClick={handleLogout}>Выйти</a>
                </li>
            ) : (
                <li>
                    <Link to="/login">Войти</Link>
                </li>
            )}
        </ul>
    );
}
