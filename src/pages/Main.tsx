import React from "react";

import { Image, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import avatar from "../assets/img/avatar-svgrepo-com-black.svg";
import "../css/Main.css";
import { personRoute } from "../utils/const";

const Main: React.FC = () => {
  const [activeComments, setActiveComments] = React.useState<boolean>(false);

  const handleActiveComments = (value: boolean) => {
    setActiveComments(value);
  };

  return (
    <main className="main">
      <section className="posts">
        <h2 className="main__title">Все посты:</h2>
        {[1, 2, 3, 4, 5].map((post, index) => (
          <ListGroup key={index}>
            <ListGroup horizontal className="post">
              <ListGroup.Item className="post__point post__author">
                <div className="post__image">
                  <LinkContainer to={personRoute}>
                    <Image src={avatar} className="avatar__image"/>
                  </LinkContainer>
                  <div className="post__name">user{post}</div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="post__header post__point">
                <h2 className="post__title title">Title_post</h2>
              </ListGroup.Item>
              <ListGroup.Item className="post__point post__text">
                texdsfgsdfgdfgdfhgdfhdfgjkdfnbjdfgnmbdfsdfdsfdsffsdfsdfnbdfojnbdfjnobt_post
              </ListGroup.Item>
              <ListGroup.Item className="post__point post__comments-btn">
                <Button
                  variant="primary"
                  className="post__button"
                  onClick={() => handleActiveComments(!activeComments)}
                >
                  Comments
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup>
        ))}
      </section>
      <section className={activeComments ? "comments active" : "comments"}>
        <h2 className="comments__title">Комментарии:</h2>
        {[1, 2, 3, 4, 5].map((comment, index) => (
          <ListGroup horizontal key={index} className="comment">
            <ListGroup.Item className="comment__point">
              <h2 className="comment__title title">email@gmail.com</h2>
            </ListGroup.Item>
            <ListGroup.Item className="comment__point">
              <p className="comment__text">i wrote this comment!</p>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </section>
    </main>
  );
};

export default Main;
