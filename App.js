import './App.css'
import UserClassComponent from './User.class'
import User from './User'
import { useState } from 'react'

function App() {
  const [isShow, setisShow ] = useState(true)
  return (
    <div className='App'>
      {isShow && <User />}
      <button onClick={() => setisShow((prevState) => !prevState)}>
        Change isShow
      </button>
    </div>
  )
}

export default App