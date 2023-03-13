import withResults from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import './App.css'
import Movies from './components/Movies'


function App() {

  const movies = withResults.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

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

        <Movies movies={mappedMovies} />

      </main>
    </div >
  )
}

export default App
