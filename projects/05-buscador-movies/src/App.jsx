import { useMovies } from './hooks/useMovies'
import './App.css'
import MappedMovies from './components/Movies'
import { useEffect, useRef, useState } from 'react'

function App() {

  const { movies: mappedMovies } = useMovies()
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputEl = inputRef.current
    const value = inputEl.value
    console.log(value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} type='text' placeholder='Star Wars, Benjamin Button' />
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
