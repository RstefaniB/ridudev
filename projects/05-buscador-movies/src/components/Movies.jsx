
function ListOfMovies({ movies }) {

  return (
    <ul>
      {
        movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.Title} />
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