import withResults from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import './App.css'

function App() {

  const movies = withResults.Search
  const hasMovies = movies?.length > 0

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input type='text' placeholder='Star Wars, Benjamin Button' />
          <button type='submit'>Search</button>
        </form>
      </header >

      <main>
        {
          hasMovies ?
            (
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
              </ul>
            )
            : (
              <p>No hay resultados</p>
            )
        }
      </main>
    </div >
  )
}

export default App
