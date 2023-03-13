
function ListOfMovies({ movies }) {

  return (
    <ul>
      {
        movies.map((movie) => (
          <li key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))
      }
    </ul >
  )
}

function NoMoviesResutls() {

  return (
    <p>No hay resultados</p>
  )
}

export default function Movies({ movies }) {

  const hasMovies = movies?.length > 0

  return (

    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResutls />

  )
}