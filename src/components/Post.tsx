import React from "react";

import { Image, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { personRoute } from "../utils/const";

import avatar from "../assets/img/avatar-svgrepo-com-black.svg";

import "../css/Main.css";

interface IPost {
  handleActiveComments: (value: boolean) => void;
  activeComments: boolean;
}

const Post: React.FC<IPost> = ({ handleActiveComments, activeComments }) => {
  return (
    <>
      <ListGroup>
        <ListGroup horizontal className="post">
          <ListGroup.Item className="post__point post__author">
            <div className="post__image">
              <LinkContainer to={personRoute}>
                <Image src={avatar} className="avatar__image" />
              </LinkContainer>
              <div className="post__name">user</div>
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
    </>
  );
};

export default Post;
