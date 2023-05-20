import React from "react";

import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import avatar from "../assets/img/avatar-svgrepo-com-black.svg";

import "../css/Person.css";
import { mainRoute } from "../utils/const";
import { Comment, Post } from "../components";

const Person: React.FC = () => {
  const [activeComments, setActiveComments] = React.useState<boolean>(false);

  const handleActiveComments = (value: boolean) => {
    setActiveComments(value);
  };
  return (
    <section className="person">
      <div className="person__info">
        <Card style={{ width: "18rem" }} className="person__card">
          <Card.Img variant="top" src={avatar} />
          <h1 className="person__card-name">user</h1>
          <Card.Body>
            <Card.Title>Обо мне:</Card.Title>
            <Card.Text>Я классный человек!</Card.Text>
            <LinkContainer to={mainRoute}>
              <Button variant="primary" className="person__card-button">
                На главную
              </Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </div>
      <div className="person__posts info-posts">
        <div className="person__posts-block">
          <h2 className="person__posts-title">Посты:</h2>
          {[1, 2, 3, 4, 5].map((post) => (
            <Post
              key={post}
              handleActiveComments={handleActiveComments}
              activeComments={activeComments}
            />
          ))}
        </div>
        <div
          className={
            activeComments ? "person__comments active" : "person__comments"
          }
        >
          <h2 className="person__comments-title">Комментарии:</h2>
          {[1, 2, 3, 4, 5].map((comment) => (
            <Comment key={comment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Person;
