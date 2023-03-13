import { useMovies } from './hooks/useMovies'
import './App.css'
import MappedMovies from './components/Movies'
import { useEffect, useRef, useState } from 'react'

function App() {

  const { movies: mappedMovies } = useMovies()
  const inputRef = useRef()

  const handleClick = () => {
    const inputEl = inputRef.current
    const value = inputEl.value
    alert(value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input ref={inputRef} type='text' placeholder='Star Wars, Benjamin Button' />
          <button onClick={handleClick} type='submit'>Search</button>
        </form>
      </header >

      <main>

        <MappedMovies movies={mappedMovies} />

      </main>
    </div >
  )
}

export default App
