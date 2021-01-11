import React from 'react'
import './Contact.css'

const Contact = () => {
	return (
		<section id="contact" className="contact-section">
			<div className="container">
				<h1 className="text-center mb-5">Get In Touch</h1>

				<div className="contact-info">
					<p>
						<span>Email</span> <a href="mailto:jayflores139@gmail.com">jayflores139@gmail.com</a>
					</p>
					<p>
						<span>Phone</span> +639122911792
					</p>
					<p>
						<span>Github</span> <a target="_blank" rel="noreferrer" href="https://github.com/jayflores139">/jayflores139</a>
					</p>
				</div>

			</div>
		</section>
	)
}

export default Contact