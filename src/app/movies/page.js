import React from "react";
import moviesdata from "../../../data/moviesdata";

const movies = () => {
  return (
    <div>
      {moviesdata.map(({ id, title, overview } = movie) => (
        <section key={id}>
          <h1>
            {id}.{title}
          </h1>
          <blockquote>{overview}</blockquote>
        </section>
      ))}
    </div>
  );
};

export default movies;
