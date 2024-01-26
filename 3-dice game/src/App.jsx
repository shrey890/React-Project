import StartGame from './components/startGame'
import { useState } from "react"
import GamePlay from "./components/GamePlay"
function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const toggleGamePlay = () => {
    setGameStarted((prev)=>!prev)
  }
  return (
    <div>
      {gameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
    </div>
  )
}

export default App