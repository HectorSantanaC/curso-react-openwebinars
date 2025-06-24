import { useEffect } from "react";

function MovieList() {
  const movies = [
    "El señor de los anillos",
    "Star Wars",
    "Dune"
  ];

  const HTMLMovies = movies.map((movie, index) => {
    return <p key={movie}>{index + 1} - {movie}</p>
  })

  useEffect(() => {
    console.log("MovieList mounted");
  }, []) // [] Significa que solo se mostrará una vez en el momento en que se monte

  useEffect(() => {
    return () => {
      console.log("MovieList unmounted");
    }
  }, [])

  return (
    <section>
      <h2>Movies</h2>

      {HTMLMovies}
    </section>
  )
}

export default MovieList