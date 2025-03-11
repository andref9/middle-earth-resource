import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

function Movies() {
  const [movieData, setMovieData] = useState([]);
  // const movieIds = ['tt0120737', 'tt0167261', 'tt0167260'];
  const movieUrl = 'https://imdb.iamidiotareyoutoo.com/search?q=the-lord-of-the-rings';
  //
  const getMovieData = async () => {
    try {
      const res = await fetch(movieUrl);
      const data = await res.json();
      setMovieData(data.description);
    } catch(e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <>
    <Navbar />
    <section>
      {movieData.map((movie) => {
        return (
          <MovieCard key={movie['#IMDB_ID']} title={movie['#TITLE']} year={movie['#YEAR']} imdbUrl={movie['#IMDB_URL']} />
        )
      })}
    </section>
    </>
  )
}

export default Movies;