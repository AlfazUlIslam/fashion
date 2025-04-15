import { Nav } from "./components"
import { Hero, Collection, BestFashion, BestSeller } from "./sections"
import './App.css'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <Collection />
      <BestFashion />
      <BestSeller />
    </div>
  )
}

export default App
