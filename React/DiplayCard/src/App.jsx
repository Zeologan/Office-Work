import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen text-white'>
      <Card/>
    </div>
  )
}

export default App
