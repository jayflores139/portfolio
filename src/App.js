import React from 'react'
import HeroSection from './components/Hero'
import AboutSection from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import reactIcon from 'images/react.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <AboutSection/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

const Footer = () => {
	return (
		<footer className="pt-2 pb-2">
    	<div className="container">
    		<span className="copyright" style={{fontSize: '15px'}}>
    			Copyright &copy; {new Date().getFullYear()}
    		</span>
    		<span className="createdBy" style={{fontSize: '15px'}}>
    			Built and design with 
    			<img src={reactIcon} alt="React Icon" />
    			by <strong className="ml-1"> Joemy Jay Flores</strong>
    		</span>
    	</div>
    </footer>
	)
}

export default App
