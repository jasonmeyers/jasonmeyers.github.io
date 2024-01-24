import React from "react";
import movies from "../../../data/movies";

const page = () => {
  return (
    <div>
      {movies.map(({ id, title, overview } = movie) => (
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

export default page;
