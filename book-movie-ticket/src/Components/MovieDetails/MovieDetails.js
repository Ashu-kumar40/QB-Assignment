import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movie-details.css";

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    //fetching movie data
    const getData = () => {
      fetch(`https://api.tvmaze.com/search/shows?q=all`)
        .then((res) => res.json())
        .then((data) =>
          setMovie(
            data.filter((CurrentMovie) => CurrentMovie.show.id == params.id)
          )
        );
    };
    getData();
  }, []);

  return (
    <div className="movie-details-container">
      {console.log(movie)}
      <h1 className="heading">Movie Details</h1>
      <div className="movie-details">
        <div className="poster">
          <img src={movie[0]?.show.image.original} alt="Poster" />
        </div>
        <div className="movie-info">
          <h1 className="movie-name">{movie[0]?.show.name}</h1>
          <div className="movie-summary">
            {movie[0]?.show.summary.replace(/(<([^>]+)>)/gi, "")}
          </div>
          <div className="movie-genre detail-item" >
            <span className="details-heading">Genre :</span> {movie[0]?.show.genres.map((genre) => (
            <span className="detail-Title">{genre+" "}</span>
            ))}
          </div>
          <div className="releade-date detail-item">
            <span className="details-heading">Release Date :</span><span className="detail-Title">{movie[0]?.show.premiered}</span> 
          </div>
          <div className="rating detail-item">
            <span className="details-heading">Rating :</span><span className="detail-Title">{movie[0]?.show.rating.average}</span> 
          </div>
          <button className="book-btn">Book Ticket</button>
        </div>
      </div>
    </div>
  );
}
