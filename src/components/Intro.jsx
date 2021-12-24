import React from 'react';
import Logo from '../images/avatar350.jpg';

export default function Intro() {
	return (
		<div className="bg-gradient home p-5 md:pt-40">
			<div className="md:flex md:justify-around md:items-center">
				<div>
					<h1
					className="text-5xl text-white font-bold headline md:text-8xl"
					>Hi, I'm Lisa Cee.</h1>

					<p className="text-white text-2xl">And I like to make things better.</p>
				</div>
				<div className="md:pt-150">
					<img className="rounded-full" src={Logo} alt="" />
				</div>
			</div>
		</div>
	)
}

// import React from "react";
// import Logo from '../images/avatar350.jpg';

// export default function Intro() {

// 	return (
// 		<div className="bg-gradient home">
// 			<h1 className="-mx-1 tracking-wide text-6xl text-white font-bold pb-5 headline">Hi, I'm Lisa Cee.</h1>
// 			<img className="rounded-3xl my-center p-2" src={Logo} alt="" />
// 		</div>
// 		);
// }