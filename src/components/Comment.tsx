import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

interface IComment {
  email: string;
  body: string;
}

const Comment: React.FC<IComment> = ({ email, body }) => {
  return (
    <>
      <ListGroup horizontal className="comment">
        <ListGroup.Item className="comment__point comment__header">
          <h2 className="comment__title title">{email}</h2>
        </ListGroup.Item>
        <ListGroup.Item className="comment__point comment__text">
          <p>{body}</p>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Comment;
