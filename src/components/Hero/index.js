import React from 'react'
import './Hero.css'
import LeftLayout from './LeftLayout'
import RightLayout from './RightLayout'

const HeroSection = () => {
	return (
		<div className="hero-section">
      <div className="row">

        <LeftLayout>
          <div className="intro">
            <div className="me-info-top">
              <span className="hello-im">Hello, I'm</span>
              <h1 className="my-name">Joemy Jay</h1>
              <h3 className="job-name">a web developer</h3>
            </div>
          </div>
        </LeftLayout>

        <RightLayout/>
      </div>
    </div>
	)
}

export default HeroSection