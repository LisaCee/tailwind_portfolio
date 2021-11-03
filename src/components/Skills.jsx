import React from 'react';

export default function Skills() {
	return (
		<div className="container bg-heather mx-auto px-10 py-5">
			<h2 id="skills" className="text-2xl font-bold">Skills</h2>
				<p>Lisa is a valuable member of any team. She has great curiosity and the resolve to find solutions. Lisa is a full stack developer and enjoys understanding what makes an application work and exploring how she can improve it.</p>
			<div className="grid grid-cols-1 sm:grid-cols-2">
				<div className="flex justify-around lg:justify-around">
					<div className="mt-8">
						<i className="fas fa-code fa-2x ml-2"></i>
						<h3 id="languages" className="text-xl font-bold ml-2 py-3">Code</h3>
					</div>
					<div className="sm:mx-2 my-6">
						<li>PHP</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Python</li>
					</div>
				</div>

				<div className="flex justify-around lg:justify-around">
					<div className="mt-7 lg:mx-8">
						<i className="fab fa-wordpress fa-3x ml-4"></i>
						<h3 id="tools" className="text-xl font-bold py-3 ml-4">Tools</h3>
					</div>
					<div className="mx-2 my-6">
						<li>WordPress</li>
						<li>Bootstrap</li>
						<li>Sass</li>
						<li>Git &#38; Github</li>
					</div>
				</div>

				<div className="flex justify-around lg:justify-around">
					<div className="mt-7">
						<i className="fas fa-clipboard-check fa-3x ml-6"></i>
						<h3 id="skills" className="text-xl font-bold py-3 ml-4">Skills</h3>
					</div>
					<div className="mx-2 my-6">
						<li>Remote</li>
						<li>Asynchronous</li>
						<li>Sass</li>
						<li>Git &#38; Github</li>
					</div>
				</div>

				<div className="flex justify-around lg:justify-around">
					<div className="mt-7">
						<i className="fas fa-briefcase fa-3x ml-6"></i>
						<h3 id="experience" className="text-xl font-bold py-3 ml-5">Work</h3>
					</div>
					<div className="mx-2 my-6">
						<li>Sandhills Dev <br/><span>(2020-2021)</span></li>
						<li>KCLS <br/><span>(2005-2020)</span></li>
					</div>
				</div>
			</div>
		</div>
	)
}