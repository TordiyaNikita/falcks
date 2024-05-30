import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./components/Header/Header";

export function Reg() {
    const [currentDiv, setCurrentDiv] = useState(1);

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        tel: '',
        date: '',
        email: '',
        login: '',
        password: '',
        repassword: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleRegist = async (e) => {
        e.preventDefault();

        console.log(formData);
        console.log(formData.repassword);

        if (formData.repassword === formData.password) {
            try {
                const response = await fetch('/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                    throw new Error('Ошибка отправки данных');
                }

                navigate("/login");
            } catch (error) {
                console.error('Произошла ошибка:', error);
            }
        }
        else {
            console.log('Не прошло');
        }
    };
    return (
        <>
            <div className="block__container margin">
                <Header></Header>
                <div className="l">
                    <div className="login">
                        <form onSubmit={handleRegist} method="post">
                            <div className="reg-1 lp" style={{ display: currentDiv === 1 ? 'flex' : 'none' }}>
                                <label htmlFor="name">Имя:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Имя"
                                    pattern="[A-Za-zА-Яа-яЁё]+"
                                />
                                <label htmlFor="surname">Фамилия:</label>
                                <input
                                    type="text"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    placeholder="Фамилия"
                                    pattern="[A-Za-zА-Яа-яЁё]+"
                                />

                                <button type="button" onClick={() => setCurrentDiv(2)}>Продолжить</button>
                            </div>
                            <div className="reg-2 lp" style={{ display: currentDiv === 2 ? 'flex' : 'none' }}>
                                <label htmlFor="tel">Номер телефон:</label>
                                <input
                                    type="text"
                                    name="tel"
                                    value={formData.tel}
                                    onChange={handleChange}
                                    placeholder="Номер телефона"
                                    pattern="(\+7|8)[0-9]{10}"
                                />
                                <label htmlFor="date">Дата рождения:</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    placeholder="Дата рождения"
                                />

                                <button type="button" onClick={() => setCurrentDiv(3)}>Продолжить</button>
                            </div>
                            <div className="reg-3 lp" style={{ display: currentDiv === 3 ? 'flex' : 'none' }}>
                                <label htmlFor="email">Электронная почта:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                />
                                <label htmlFor="login">Логин:</label>
                                <input
                                    type="text"
                                    name="login"
                                    value={formData.login}
                                    onChange={handleChange}
                                    placeholder="Login"
                                    pattern="[A-Za-z0-9-]+"
                                />
                                <label htmlFor="login">Пароль:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Пароль"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                />
                                <label htmlFor="login">Повторите пароль:</label>
                                <input
                                    type="password"
                                    name="repassword"
                                    value={formData.repassword}
                                    onChange={handleChange}
                                    placeholder="Повторите пароль"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                />

                                <button type="submit">Регистрация</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

