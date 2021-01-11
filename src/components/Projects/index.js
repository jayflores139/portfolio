import React from 'react'
import './Project.css'
import {data} from 'staticData'


const Projects = () => {
	return (
		<section id="project" className="project-section">
			<div className="container">
				<h1 className="text-center mb-5">Projects</h1>

				<div className="row main-row">

					{data && data.map((item, key) => (
						<div className="col-md-6" key={key}>
							<div className="port-main-wrapper">
								<div className="row">
									<div className="col-md-5">
										<div className="image-wrapper">
											<img src={item.image} alt={item.imageAlt}/>
										</div>
									</div>
									<div className="col-md-7">
										<div className="info-wrapper">
											<h5 className="title">{item.title}</h5>
											<div className="stack-used">
												{item.stacks && item.stacks.map(stack => (
													<span key={stack} className="lang-one">{stack}</span>
												))}
											</div>

											<p className="description">{item.description}</p>

											<div className="code">
												<a target="_blank" rel="noreferrer" href={item.githubLink}>Github</a>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					))}

				</div>

			</div>	
		</section>
	)
}

export default Projects