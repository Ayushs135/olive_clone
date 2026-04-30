import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="page-wrapper">
  <div className="app">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
</div>
    
  )
}