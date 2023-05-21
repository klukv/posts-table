import React from "react";

import { Comment, Post } from "../components";

import "../css/Main.css";
import {  useAppSelector } from "../redux/hooks";
import { TPost } from "../redux/actions/postAction";

const Main: React.FC = () => {

  const [activeComments, setActiveComments] = React.useState<boolean>(false);

  
  const posts:TPost[] = useAppSelector((state) => state.postReducer.posts);

  const handleActiveComments = (value: boolean) => {
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
        {[1, 2, 3, 4, 5].map((comment) => (
          <Comment key={comment} />
        ))}
      </section>
    </main>
  );
};

export default Main;
