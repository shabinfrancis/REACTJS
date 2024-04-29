import { useState } from 'react'
import Counter from './Counter'
import './App.css'
import LikeButton from './LikeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>States in React</h1>
        <Counter />
        <LikeButton />
      </div>
    </>
  )
}

export default App
