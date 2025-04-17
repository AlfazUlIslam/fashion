import { Nav } from "./components"
import { Hero, Collection, BestFashion, BestSeller, Footer } from "./sections"
import './App.css'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <Collection />
      <BestFashion />
      <BestSeller />
      <Footer />
    </div>
  )
}

export default App
