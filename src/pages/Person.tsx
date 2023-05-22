import React from "react";

import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import avatar from "../assets/img/avatar-svgrepo-com-black.svg";

import "../css/Person.css";
import { mainRoute } from "../utils/const";
import { Comment, Post } from "../components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TPost } from "../redux/actions/postAction";
import {
  TComment,
  setAsyncComments,
  setLoadedComment,
} from "../redux/actions/commentAction";
import { useParams } from "react-router";
import { TUser, fetchUser, setLoadedUser } from "../redux/actions/userAction";
import {
  fetchPostsUser,
  setLoadedPostsUser,
} from "../redux/actions/postUserAction";
import CardLoader from "../components/Loaders/CardLoader";
import PostLoader from "../components/Loaders/PostLoader";
import CommentLoader from "../components/Loaders/CommentLoader";

const Person: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [activeComments, setActiveComments] = React.useState<boolean>(false);

  const comments: TComment[] = useAppSelector(
    (state) => state.commentReducer.comments
  );
  const userInfo: TUser = useAppSelector((state) => state.userReducer.user);
  const postsUser: TPost[] = useAppSelector(
    (state) => state.postsUserReducer.postsUser
  );
  const isLoadedPosts: boolean = useAppSelector(
    (state) => state.postsUserReducer.isLoaded
  );
  const isLoadedComments: boolean = useAppSelector(
    (state) => state.commentReducer.isLoaded
  );
  const isLoaded: boolean = useAppSelector(
    (state) => state.userReducer.isLoaded
  );

  const handleActiveComments = (value: boolean, userId: number) => {
    dispatch(setLoadedComment(false));
    setTimeout(() => {
      dispatch(setAsyncComments(userId));
    }, 500);
    setActiveComments(value);
  };

  React.useEffect(() => {
    dispatch(setLoadedUser(false));
    dispatch(setLoadedPostsUser(false));
    setTimeout(() => {
      dispatch(fetchUser(Number(id)));
      dispatch(fetchPostsUser(Number(id)));
    }, 500);
  }, [dispatch, id]);

  return (
    <section className="person">
      <div className="person__info">
        {isLoaded ? (
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
        ) : (
          <CardLoader />
        )}
      </div>
      <div className="person__posts info-posts">
        <div className="person__posts-block">
          <h2 className="person__posts-title">Посты:</h2>
          {isLoadedPosts
            ? postsUser.map((post) => (
                <Post
                  key={post.id}
                  handleActiveComments={handleActiveComments}
                  activeComments={activeComments}
                  {...post}
                />
              ))
            : [...new Array(10)].map((_, index) => <PostLoader key={index} />)}
        </div>
        <div
          className={
            activeComments ? "person__comments active" : "person__comments"
          }
        >
          <div className="person__comments__inner">
            <h2 className="person__comments-title">Комментарии:</h2>
            {isLoadedComments
              ? comments.map((comment) => (
                  <Comment key={comment.id} {...comment} />
                ))
              : [...new Array(5)].map((_, index) => (
                  <CommentLoader key={index} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Person;
