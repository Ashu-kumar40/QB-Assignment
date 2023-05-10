import { React, useEffect, useState } from "react";
import MovieList from "../Movielist/MovieList";
import "./HomePage.css";
import Slider from "react-slick";

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //fetching movie data
    const getData = () => {
      fetch(`https://api.tvmaze.com/search/shows?q=all`)
        .then((res) => res.json())
        .then((data) => setData(data));
    };
    getData();
  }, []);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
  };

  return (
    <>
      <Slider {...settings}>
        {data?.map((movie) => (
          <img
            src={movie.show.image ? movie.show.image.original : " "}
            alt=""
          />
        ))}
      </Slider>
      <h1 className="heading">Movies</h1>
      {console.log(data)}
      <MovieList />
    </>
  );
}
