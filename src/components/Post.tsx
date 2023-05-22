import React from "react";

import { Image, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { personRoute } from "../utils/const";
import { useNavigate } from "react-router";

import avatar from "../assets/img/avatar-svgrepo-com-black.svg";
import "../css/Main.css";

interface IPost {
  handleActiveComments: (value: boolean, id: number) => void;
  id: number;
  title: string;
  body: string;
  activeComments: boolean;
}

const Post: React.FC<IPost> = ({
  handleActiveComments,
  activeComments,
  id,
  title,
  body,
}) => {

  const navigate = useNavigate();

  const navigateToPerson = (userId: number) => {
    navigate(personRoute + '/' + userId);
  }

  return (
    <>
      <ListGroup>
        <ListGroup horizontal className="post">
          <ListGroup.Item className="post__point post__author">
            <div className="post__image" onClick={() => navigateToPerson(id)}>
                <Image src={avatar} className="avatar__image" />
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="post__header post__point">
            <h2 className="post__title title">{title}</h2>
          </ListGroup.Item>
          <ListGroup.Item className="post__point post__text">
            {body}
          </ListGroup.Item>
          <ListGroup.Item className="post__point post__comments-btn">
            <Button
              variant="primary"
              className="post__button"
              onClick={() => handleActiveComments(!activeComments, id)}
            >
              Комментарии
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </ListGroup>
    </>
  );
};

export default Post;
