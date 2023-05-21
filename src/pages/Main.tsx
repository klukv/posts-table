import React from "react";

import { Comment, Post } from "../components";

import "../css/Main.css";
import {  useAppDispatch, useAppSelector } from "../redux/hooks";
import { TPost } from "../redux/actions/postAction";
import { TComment, setAsyncComments } from "../redux/actions/commentAction";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const [activeComments, setActiveComments] = React.useState<boolean>(false);

  const posts:TPost[] = useAppSelector((state) => state.postReducer.posts);
  const comments:TComment[] = useAppSelector((state) => state.commentReducer.comments);

  const handleActiveComments = (value: boolean, userId: number) => {
    dispatch(setAsyncComments(userId));
    setActiveComments(value);
  };

  return (
    <main className="main">
      <section className="posts">
        <h2 className="main__title">Все посты:</h2>
        {posts && posts.map((post) => (
          <Post
            key={post.id}
            handleActiveComments={handleActiveComments}
            activeComments={activeComments}
            {...post}
          />
        ))}
      </section>
      <section className={activeComments ? "comments active" : "comments"}>
        <h2 className="comments__title">Комментарии:</h2>
        {comments && comments.map((comment) => (
          <Comment key={comment.id} {...comment}/>
        ))}
      </section>
    </main>
  );
};

export default Main;
