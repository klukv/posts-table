import React from "react";

import { Comment, Post } from "../components";

import "../css/Main.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TPost, setAsyncPosts } from "../redux/actions/postAction";
import { TComment, setAsyncComments, setLoadedComment } from "../redux/actions/commentAction";
import PostLoader from "../components/Loaders/PostLoader";
import CommentLoader from "../components/Loaders/CommentLoader";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const [activeComments, setActiveComments] = React.useState<boolean>(false);

  const posts: TPost[] = useAppSelector((state) => state.postReducer.posts);
  const comments: TComment[] = useAppSelector((state) => state.commentReducer.comments);
  const isLoaded: boolean = useAppSelector((state) => state.commentReducer.isLoaded);

  const handleActiveComments = (value: boolean, userId: number) => {
    dispatch(setLoadedComment(false));
    setTimeout(() => {
      dispatch(setAsyncComments(userId));
    }, 500);
    setActiveComments(value);
  };

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(setAsyncPosts());
    }, 500);
  },[dispatch])

  return (
    <main className="main">
      <section className="posts">
        <h2 className="main__title">Все посты:</h2>
        {posts.length !== 0
          ? posts.map((post) => (
              <Post
                key={post.id}
                handleActiveComments={handleActiveComments}
                activeComments={activeComments}
                {...post}
              />
            ))
          : [...new Array(10)].map((_, index) => <PostLoader key={index} />)}
      </section>
      <section className={activeComments ? "comments active" : "comments"}>
        <div className="comments__inner">
          <h2 className="comments__title">Комментарии:</h2>
          {isLoaded
            ? comments.map((comment) => (
                <Comment key={comment.id} {...comment} />
              ))
            : [...new Array(5)].map((_, index) => (
                <CommentLoader key={index} />
              ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
