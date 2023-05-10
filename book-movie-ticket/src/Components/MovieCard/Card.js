import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ movie }) {
  return (
    <div className="CardContainer" key={movie.show.id}>
      <div className="Card">
        <div className="movie-poster">
          <img src={movie.show.image ? movie.show.image.medium : ""} alt="" />
        </div>
        <div className="details">
          <h2 className="movie-name">
            {movie ? movie.show.name : "Not Available"}
          </h2>
          <div className="release-date">
            {movie.show.premiered ? movie.show.premiered : "Not Available"}
          </div>
          <div className="view-btn">
            <Link to={`/movie-details/${movie.show.id}`}>View</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
