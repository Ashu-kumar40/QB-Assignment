import {React, useState, useEffect} from 'react'
import './movie-list.css'
import Card from '../MovieCard/Card';

export default function MovieList() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        //fetching movie data
        const getData = () => {
          fetch(`https://api.tvmaze.com/search/shows?q=all`)
          .then((res) => res.json())
          .then((data) => setMovieList(data));
        };
        getData();
      }, []);

  return (
    <div className='movie-list'>
        {movieList.map((movie) =>(
            <Card movie={movie} />
        ))}
    </div>
  )
}
