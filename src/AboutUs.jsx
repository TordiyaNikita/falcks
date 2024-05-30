import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import "./css/aboutUs.css"
export function AboutUs() {
  return (
    <>
      <div className="block__container margin">
      <Header>  </Header>
        <h2>О нас</h2>
        <p>Мы - команда профессионалов, предлагающая широкий выбор онлайн-курсов по различным темам. Наша миссия - делать образование доступным и удобным для всех.
           Мы стремимся предоставить вам лучшие обучающие материалы, помогающие вам достичь ваших целей и реализовать свой потенциал.</p>
        <h3>Наши преимущества</h3>
        <ul>
          <li>Большой выбор курсов по различным тематикам.</li>
          <li>Опытные преподаватели, эксперты в своих областях.</li>
          <li>Гибкий график обучения, который подстраивается под ваши потребности.</li>
          <li>Интерактивные уроки и практические задания для лучшего усвоения материала.</li>
          <li>Поддержка и помощь на каждом этапе вашего обучения.</li>
        </ul>
        <h3>Наша цель</h3>
        <p>Мы стремимся стать вашим надежным партнером в образовании и помочь вам достичь успеха в вашей карьере.
           Мы верим, что знания - это ключ к развитию, и поэтому делаем все возможное, чтобы предоставить вам лучшие образовательные ресурсы.</p>
        <h3>Наша команда</h3>
        <p>Наша команда состоит из опытных специалистов в области образования и технологий.
           Мы постоянно совершенствуем наши курсы и методики обучения, чтобы предоставить вам самый актуальный и эффективный контент.</p>
        <h3>Наши партнеры</h3>
        <p>Мы сотрудничаем с ведущими компаниями и организациями, чтобы обеспечить вас качественными образовательными ресурсами. 
          Наши партнеры помогают нам расширить ассортимент курсов и предоставить вам доступ к эксклюзивным материалам и возможностям.</p>
      </div>
      <Footer></Footer>
    </>
  );
}
