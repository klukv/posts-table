import React from "react";

import { Comment, Post } from "../components";

import "../css/Main.css";

const Main: React.FC = () => {
  const [activeComments, setActiveComments] = React.useState<boolean>(false);

  const handleActiveComments = (value: boolean) => {
    setActiveComments(value);
  };

  return (
    <main className="main">
      <section className="posts">
        <h2 className="main__title">Все посты:</h2>
        {[1, 2, 3, 4, 5].map((post) => (
          <Post
            key={post}
            handleActiveComments={handleActiveComments}
            activeComments={activeComments}
          />
        ))}
      </section>
      <section className={activeComments ? "comments active" : "comments"}>
        <h2 className="comments__title">Комментарии:</h2>
        {[1, 2, 3, 4, 5].map((comment, index) => (
          <Comment key={comment} />
        ))}
      </section>
    </main>
  );
};

export default Main;
