import styles from './Footer.module.css';

export function Footer() {
    return <>
        <div className={styles.footer}>
            <div className={styles.footer__block_1}>
                <p>Присоединяйтесь к нам!</p>
                <span>Подпишитесь на нашу рассылку, чтобы получать последние новости и обновления о курсах.</span>
                <ul>
                    <li>Контактная информация:</li>
                    <li>Email: info@example.com</li>
                    <li>Телефон: +1234567890</li>
                </ul>
            </div>
            <div className={styles.footer__block_2}>
                <div className="container__block">
                    <p>О нас</p>
                    <span>Узнайте больше о Falcks и нашем подходе к онлайн-обучению.</span>
                    <ul>
                        <li><a href="/about">О компании</a></li>
                        <li><a href="/courses">Наши курсы</a></li>
                        <li><a href="/team">Наша команда</a></li>
                    </ul>
                </div>
                <div className="container__block">
                    <p>Помощь и поддержка</p>
                    <span>Нужна помощь? Обращайтесь к нашей службе поддержки.</span>
                    <ul>
                        <li><a href="/faq">Часто задаваемые вопросы</a></li>
                        <li><a href="/contact">Свяжитесь с нами</a></li>
                    </ul>
                </div>
                
            </div>
            <div className={styles.footer__block_3}>
                <p>Телефон: +1234567890</p>
            </div>
            <div className={styles.footer__block_4}>
                <p>Наш адрес: ул. Примерная, 123, Город</p>
            </div>
        </div>
    </>
}