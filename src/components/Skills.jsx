import React from "react";

export default function Skills() {
	return (
		<div className="container bg-heather mx-auto px-10 py-10">
			<h2 id="skills" className="text-2xl font-bold">Skills</h2>
				<p>Lisa is a valuable member of any team. She has great curiosity and the resolve to find solutions. Lisa is a full stack developer and enjoys understanding what makes an application work and exploring how she can improve it.</p>
			<div className="grid grid-cols-1 pt-5 gap-y-5 sm:grid-cols-2">
				<div className="grid grid-cols-2 grid-rows-1 lg:justify-items-center">
					<div className="pt-5 ml-5">
						<i className="fas fa-code fa-2x"></i>
						<h3 id="languages" className="text-xl font-bold">Code</h3>
					</div>
					<div className="sm:mb-5 lg:justify-self-start">
						<li>PHP</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Python</li>
					</div>
				</div>

				<div className="grid grid-cols-2 grid-rows-1 lg:justify-items-center">
					<div className="pt-5 ml-5">
						<i className="fab fa-wordpress fa-3x"></i>
						<h3 id="tools" className="text-xl font-bold">Tools</h3>
					</div>
					<div className="lg:justify-self-start">
						<li>WordPress</li>
						<li>Bootstrap</li>
						<li>Sass</li>
						<li>Git &#38; Github</li>
					</div>
				</div>

				<div className="grid grid-cols-2 grid-rows-1 lg:justify-items-center">
					<div className="pt-5 ml-5">
						<i className="fas fa-clipboard-check fa-3x"></i>
						<h3 id="skills" className="text-xl font-bold">Skills</h3>
					</div>
					<div className="lg:justify-self-start">
						<li>Remote</li>
						<li>Asynchronous</li>
						<li>Sass</li>
						<li>Git &#38; Github</li>
					</div>
				</div>

				<div className="grid grid-cols-2 grid-rows-1 lg:justify-items-center">
					<div className="pt-5 ml-5">
						<i className="fas fa-briefcase fa-3x"></i>
						<h3 id="experience" className="text-xl font-bold">Work</h3>
					</div>
					<div className="lg:justify-self-start">
						<li>Sandhills Dev <br/><span className="text-sm">(2020-2021)</span></li>
						<li>KCLS <br/><span className="text-sm">(2005-2020)</span></li>
					</div>
				</div>
			</div>
		</div>
	)
}