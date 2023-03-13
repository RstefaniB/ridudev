import { useMovies } from './hooks/useMovies'
import './App.css'
import MappedMovies from './components/Movies'
import { useEffect, useRef, useState } from 'react'

function App() {

  const { movies: mappedMovies } = useMovies()
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))
    console.log(fields)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='title' type='text' placeholder='Star Wars, Benjamin Button' />
          <input name='releaseYear' type='text' placeholder='2001' />
          <input name='country' type='text' placeholder='Canada' />

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
