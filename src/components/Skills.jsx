import React from 'react';

export default function Skills() {
	return (
		<div className="container bg-heather mx-auto sm:px-10 py-5">
			<h2 id="skills" className="text-2xl font-bold">Skills</h2>
				<p>Lisa is a valuable member of any team. She has great curiosity and the resolve to find solutions. Lisa is a full stack developer and enjoys understanding what makes an application work and exploring how she can improve it.</p>
			<div className="mx-5 my-5">
				<div>
					<div className="px-3">
						<h3 id="languages" className="text-xl font-bold py-3">Languages</h3>
						<i className="fas fa-code fa-3x ml-4"></i>
					</div>
					<div className="mx-2 my-6">
						<li>PHP</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Python</li>
					</div>
				</div>

				<div>
					<div className="px-3">
						<h3 id="tools" className="text-xl font-bold py-3">Tools</h3>
						<i className="fab fa-wordpress fa-3x ml-4"></i>
					</div>
					<div className="mx-2 my-6">
						<li>WordPress</li>
						<li>Bootstrap</li>
						<li>Sass</li>
						<li>Git &#38; Github</li>
					</div>
				</div>

				<div>
					<div className="px-3">
						<h3 id="skills" className="text-xl font-bold py-3">Skills</h3>
						<i className="fas fa-clipboard-check fa-3x ml-4"></i>
					</div>
						<li>Remote Work</li>
						<li>Asynchronous Communication</li>
						<li>Sass</li>
						<li>Git &#38; Github</li>
					</div>
				</div>

				<div>
					<div className="px-3">
						<h3 id="experience" className="text-xl font-bold py-3">Experience</h3>
						<i className="fas fa-briefcase fa-3x ml-4"></i>
					</div>
					<div className="mx-2 my-6">
						<li>Sandhills Development <span>(2020-2021)</span></li>
						<li>Lambda School Student <span>(2018)</span></li>
						<li>King County Library System <span>(2005-2020)</span></li>
					</div>
				</div>
		</div>

	)
}