import React from "react";

const Films = ({ films }) => {
  const { title, episode_id, opening_crawl, director, producer } =
    films.respuesta;
  return (
    <div className="card">
      <div className="card-header">Films</div>
      <div className="body">
        <ul>
          <ol><strong>Title: </strong> {title}</ol>
          <ol><strong>Episodio: </strong>{episode_id}</ol>
          <ol><strong>Opening crawl: </strong>{opening_crawl}</ol>
          <ol><strong>Director: </strong>{director}</ol>
          <ol><strong>Producer: </strong>{producer}</ol>
        </ul>
      </div>
    </div>
  );
};

export default Films;
