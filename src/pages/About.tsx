import React from "react";
import { Accordion, Button, Card, ListGroup } from "react-bootstrap";
import { mainRoute } from "../utils/const";
import { LinkContainer } from "react-router-bootstrap";

import Me_photo from "../assets/img/about.jpg";
import "../css/About.css";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section className="about">
      <Card style={{ width: "18rem" }} className="person__card">
        <Card.Img variant="top" src={Me_photo} />
        <h1 className="person__card-name">Артём</h1>
        <Card.Body>
          <Card.Title>Обо мне:</Card.Title>
          Занимаюсь спортом, люблю программирование
          <Card.Text>
            Мой{" "}
            <Link className="about__git" to={"https://github.com/klukv"}>
              github
            </Link>
          </Card.Text>
          <LinkContainer to={mainRoute}>
            <Button variant="primary" className="person__card-button">
              На главную
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
      <Accordion defaultActiveKey="0" className="about__info">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Краткая информация</Accordion.Header>
          <Accordion.Body>
            В начале своего обучения пробовал себя в Backend-разработке (Java),
            но в итоге понял, что хочу заниматься созданием Frontend частей
            приложений. В данный момент продолжаю изучать новые библиотеки и
            технологии в мире фронтенда. В основном это библиотеки для работы с
            React.js. За последнее время реализовал большое количество
            приложений, самое масштабное из которых является&nbsp;
            <Link
              className="link__movies"
              to={"https://github.com/klukv/moviescat-react"}
            >
              онлайн-кинотеатр
            </Link>
            (Backend тоже реализовался мной, но там прописаны в основном базовые
            вещи, т.е. контроллеры, авторизация, регистрация, webConfig и т.д.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Увлечения</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>Программирование</ListGroup.Item>
              <ListGroup.Item>Спорт</ListGroup.Item>
              <ListGroup.Item>Еда</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Soft Skills</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                Не боюсь брать на себя ответственность за принятые решения
              </ListGroup.Item>
              <ListGroup.Item>
                Опыт работы в команде как при разработке проектов, так и в
                повседневных задачах
              </ListGroup.Item>
              <ListGroup.Item>Любовь к изучению чего-то нового</ListGroup.Item>
              <ListGroup.Item>Умение принять свои ошибки</ListGroup.Item>
              <ListGroup.Item>Мотивированность</ListGroup.Item>
              <ListGroup.Item>
                Умение слушать и слышать собеседника
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Hard Skills</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                Знание JavaScript (ES6), TypeScript, React.js
              </ListGroup.Item>
              <ListGroup.Item>
                Опыт работы с React.js, TypeScript, React Router, Redux,
                Redux-toolkit, Axios
              </ListGroup.Item>
              <ListGroup.Item>
                Знание HTML, CSS (SCSS, Grid, Flexbox, Adaptive/Responsive
                design)
              </ListGroup.Item>
              <ListGroup.Item>Опыт использования REST API, JSON</ListGroup.Item>
              <ListGroup.Item>
                Опыт работы с системой контроля версий Git
              </ListGroup.Item>
              <ListGroup.Item>npm</ListGroup.Item>
              <ListGroup.Item>
                Начальные знания Английского языка (подразумеваю знания,
                достаточные для чтения документации)
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default About;
