import './App.css'
import Hero from './components/Hero'
import Navigation from "./components/Navigation"

const App = () => {
  let x = { upVotes: 10, downVotes: 10}
  const countVotes = (data) => {
    return data.upVotes * data.downVotes
  }
  return (
    <div>
      <Navigation />
      <Hero />
      <p>{ countVotes(x)}</p>
    </div>
  )
}

export default App