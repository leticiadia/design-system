import { useState } from 'react'
import './styles/global.css';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className='bg-cyan-500 text-2xl'>Hello World!</h1>
  )
}

