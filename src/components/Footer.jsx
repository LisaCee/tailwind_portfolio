import React from "react";

export default function Footer() {
	return (
		<div className="flex mx-auto bg-violet-900 justify-between py-5 sm:px-10 lg:px-28">
			<div>
				<p className="text-white">Made with React, TailwindCSS and &#128156;</p>
				<p className="text-white">Lisa Canini 2021&#169;</p>
			</div>
			<div>
				<a href="https://www.github.com/lisacee" alt="github profile"><i className="fab fa-github fa-2x text-white hover:text-pink-700"><span className="sr-only">Github</span></i></a>
				<a href="https://www.linkedin.com/in/lisacee" alt="linkedin profile"><i className="fab fa-linkedin fa-2x text-white pl-5 hover:text-pink-700"><span className="sr-only">LinkedIn</span></i></a>
				<a href="https://www.twitter.com/lisacee14" alt="twitter profile"><i className="fab fa-twitter-square fa-2x text-white pl-5 hover:text-pink-700"><span className="sr-only">Twitter</span></i></a>
				<a href="mailto:lisaceedev@gmail.com"><i className="fas fa-paper-plane fa-2x text-white pl-5 hover:text-pink-700"><span className="sr-only">Email me</span></i></a>
			</div>
		</div>
	);
}