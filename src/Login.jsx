import { useState } from "react";
import { Link, Form, useNavigate } from "react-router-dom";
import { Header } from "./components/Header/Header";

export function Login() {
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleRegist = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/logpass?login=${formData.login}&password=${formData.password}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки данных',);
      }

      const data = await response.json();

      localStorage.setItem('user', JSON.stringify(data.user));
      navigate("/kurs");
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return <>
    <div className="block__container margin">
      <Header />
      <div className="l">
        <div className="login" onSubmit={handleRegist}>
          <Form method="get" className="allForm">
            <label htmlFor="login">Логин</label>
            <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleChange}
            />
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Войти</button>
          </Form>
          <Link to='/registation' className="buttonlogin"> <button>Зарегестрироваться</button></Link>
        </div>
      </div>
    </div>
  </>
}