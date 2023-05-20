import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

const Comment: React.FC = () => {
  return (
    <>
      <ListGroup horizontal className="comment">
        <ListGroup.Item className="comment__point">
          <h2 className="comment__title title">email@gmail.com</h2>
        </ListGroup.Item>
        <ListGroup.Item className="comment__point">
          <p className="comment__text">i wrote this comment!</p>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Comment;
