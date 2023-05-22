import React from "react";

import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import avatar from "../assets/img/avatar-svgrepo-com-black.svg";

import "../css/Person.css";
import { mainRoute } from "../utils/const";
import { Comment, Post } from "../components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TPost } from "../redux/actions/postAction";
import { TComment, setAsyncComments } from "../redux/actions/commentAction";
import { useParams } from "react-router";
import { TUser, fetchUser } from "../redux/actions/userAction";
import { fetchPostsUser } from "../redux/actions/postUserAction";

const Person: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [activeComments, setActiveComments] = React.useState<boolean>(false);

  const comments:TComment[] = useAppSelector((state) => state.commentReducer.comments);
  const userInfo:TUser = useAppSelector(state => state.userReducer.user);
  const postsUser:TPost[] = useAppSelector(state => state.postsUserReducer.postsUser);

  const handleActiveComments = (value: boolean, userId: number) => {
    dispatch(setAsyncComments(userId));
    setActiveComments(value);
  };

  React.useEffect(() => {
    dispatch(fetchUser(Number(id)));
    dispatch(fetchPostsUser(Number(id)));
  },[dispatch, id]);
  
  return (
    <section className="person">
      <div className="person__info">
        <Card style={{ width: "18rem" }} className="person__card">
          <Card.Img variant="top" src={avatar} />
          <h1 className="person__card-name">{userInfo.username}</h1>
          <Card.Body>
            <Card.Title>Обо мне:</Card.Title>
            <Card.Text>{userInfo.website}</Card.Text>
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
          {postsUser && postsUser.map((post) => (
            <Post
              key={post.id}
              handleActiveComments={handleActiveComments}
              activeComments={activeComments}
              {...post}
            />
          ))}
        </div>
        <div
          className={
            activeComments ? "person__comments active" : "person__comments"
          }
        >
          <h2 className="person__comments-title">Комментарии:</h2>
          {comments && comments.map((comment) => (
            <Comment key={comment.id} {...comment}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Person;
