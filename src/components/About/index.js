import React from 'react'
import './About.css'
import {stacks} from 'stacks'

const About = () => {
	return (
		<section id="about" className="about-section">
			
			<div className="container">
				<h1 className="text-center mb-5">About Me</h1>

				<div className="col-md-8 m-auto">
					<p className="text-center">
						Hello, I'm Joemy Jay Flores, a web developer focused on building a fast and secure web application. Outside of programming, I enjoy playing video games.
					</p>
					<p className="text-center mb-4">
					 Below is a list of my technical skills:
					</p>

					<div className="col-md-10 m-auto">
						<div className="logo-wrapper">
							{stacks && stacks.map((item, i) => (
								<div className="logo" key={i}>
									<img src={item.src} alt={item.name}/>
								</div>
							))}
						</div>
					</div>

				</div>

			</div>
		</section>
	)
}

export default About
