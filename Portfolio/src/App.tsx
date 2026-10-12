import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Projects />
       
      </main>

      <Footer />
    </>
  )
}

export default App