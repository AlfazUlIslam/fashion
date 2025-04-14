import { Nav } from "./components"
import { Hero, Collection, BestFashion } from "./sections"
import './App.css'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <Collection />
      <BestFashion />
    </div>
  )
}

export default App
