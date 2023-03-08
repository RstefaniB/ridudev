import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, index }) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
}

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)


  return (
    <main className='board'>
      <h1> Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index} index={index}
              >
                {board[index]}
              </Square>
            )
          })
        }

      </section>
    </main>

  )
}

export default App
