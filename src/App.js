import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import MyWork from './Components/MyWork/MyWork'
import NavBar from './Components/NavBar/NavBar'
import Services from './Components/Services/Services'

function App () {
  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
