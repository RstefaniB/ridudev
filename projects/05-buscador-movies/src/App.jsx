import { useMovies } from './hooks/useMovies'
import './App.css'
import MappedMovies from './components/Movies'

function App() {

  const { movies: mappedMovies } = useMovies()

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

        <MappedMovies movies={mappedMovies} />

      </main>
    </div >
  )
}

export default App
