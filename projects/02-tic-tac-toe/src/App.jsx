import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'


const Square = ({ children, index }) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
}

function App() {

  const [board, setBoard] = useState(['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'])


  return (
    <main className='board'>
      <h1> Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index} index={index}>
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
